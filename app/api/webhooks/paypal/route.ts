import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const bodyText = await req.text();
    
    // Note: In production, verify the PayPal webhook signature using their SDK
    // or by calling the PayPal webhook verification endpoint.
    
    const event = JSON.parse(bodyText);

    // If using PayPal IPN (older) or Webhooks (modern REST API)
    // The event type for completed captures is typically 'PAYMENT.CAPTURE.COMPLETED'
    if (event.event_type === "PAYMENT.CAPTURE.COMPLETED") {
      // In our initialize route, we passed the reference as a custom ID
      const customId = event.resource.custom_id || event.resource.custom; 
      
      if (customId) {
        // Extract reference (we stored it as userId_reference)
        const parts = customId.split("_");
        const reference = parts[1]; // Get the reference part

        if (reference) {
          const payment = await prisma.payment.findUnique({
            where: { reference },
          });

          if (payment && payment.status === "PENDING") {
            // Mark payment as SUCCESS
            await prisma.payment.update({
              where: { id: payment.id },
              data: { status: "SUCCESS" },
            });

            // Calculate expiration date (+1 year from today)
            const validUntil = new Date();
            validUntil.setFullYear(validUntil.getFullYear() + 1);

            // Update user's dues
            await prisma.user.update({
              where: { id: payment.userId },
              data: { duesValidUntil: validUntil },
            });

            console.log(`Successfully verified PayPal payment for user: ${payment.userId}`);
          }
        }
      }
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("PayPal Webhook Error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
