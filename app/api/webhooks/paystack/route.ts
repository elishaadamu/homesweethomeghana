import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    // Paystack sends the payload as JSON, and a signature in the header
    const bodyText = await req.text();
    const signature = req.headers.get("x-paystack-signature");

    // 1. Verify the webhook signature
    // You MUST set PAYSTACK_SECRET_KEY in your .env to properly secure this
    const secret = process.env.PAYSTACK_SECRET_KEY || "";
    if (secret) {
      const hash = crypto.createHmac("sha512", secret).update(bodyText).digest("hex");
      if (hash !== signature) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
      }
    }

    const event = JSON.parse(bodyText);

    // 2. Handle successful payment
    if (event.event === "charge.success") {
      const reference = event.data.reference;
      
      // Find the pending payment
      const payment = await prisma.payment.findUnique({
        where: { reference },
      });

      if (payment && payment.status === "PENDING") {
        // Mark payment as SUCCESS
        await prisma.payment.update({
          where: { id: payment.id },
          data: { status: "SUCCESS" },
        });

        // Calculate expiration date (e.g., end of current year, or +1 year from today)
        const validUntil = new Date();
        validUntil.setFullYear(validUntil.getFullYear() + 1);

        // Update the user's dues valid date and mark them as verified
        await prisma.user.update({
          where: { id: payment.userId },
          data: { 
            duesValidUntil: validUntil,
            isVerified: true
          },
        });
        
        // Update the application status to Verified
        await prisma.membershipApplication.updateMany({
          where: { userId: payment.userId },
          data: { status: "Verified" }
        });

        console.log(`Successfully verified and updated payment for user: ${payment.userId}`);
      }
    }

    // Always return 200 OK to Paystack so they don't retry
    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Paystack Webhook Error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
