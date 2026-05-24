import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

// Example pricing constants
const LOCAL_AMOUNT_GHS = 500;
const DIASPORA_AMOUNT_USD = 100;

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { membershipApplication: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Determine the membership type to decide the payment gateway
    const memberType = user.memberType || user.membershipApplication?.membershipCategory;
    
    if (!memberType) {
      return NextResponse.json({ error: "Membership type not found for user" }, { status: 400 });
    }

    const isLocal = memberType === "Local Member";
    
    let amount = 0;
    let currency = "";
    let provider = "";
    let checkoutUrl = "";
    let reference = `HSH-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    if (isLocal) {
      // ---------------------------------------------------------
      // LOCAL MEMBER: Use Paystack (GHS)
      // ---------------------------------------------------------
      amount = LOCAL_AMOUNT_GHS;
      currency = "GHS";
      provider = "PAYSTACK";

      // 1. Construct the payload for Paystack
      const paystackPayload = {
        email: user.email,
        amount: amount * 100, // Paystack amount is in pesewas
        reference: reference,
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard`,
        metadata: {
          userId: user.id,
        }
      };

      // 2. Call Paystack API
      // Note: You must add PAYSTACK_SECRET_KEY to your .env file
      if (process.env.PAYSTACK_SECRET_KEY) {
        const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paystackPayload),
        });

        const paystackData = await paystackRes.json();
        if (paystackData.status) {
          checkoutUrl = paystackData.data.authorization_url;
        } else {
          throw new Error(`Paystack Error: ${paystackData.message}`);
        }
      } else {
        // Mock checkout URL if keys aren't configured yet
        checkoutUrl = `https://checkout.paystack.com/mock-local-payment?ref=${reference}`;
      }

    } else {
      // ---------------------------------------------------------
      // DIASPORA MEMBER: Use PayPal (USD)
      // ---------------------------------------------------------
      amount = DIASPORA_AMOUNT_USD;
      currency = "USD";
      provider = "PAYPAL";

      // Note: Proper PayPal integration requires creating an order using the PayPal REST API or standard checkout buttons.
      // For this example, we generate a mock approval URL or standard hosted button URL.
      // You should replace this with actual PayPal order creation logic.
      
      // Example of generating a manual PayPal payment link (paypal.me) or redirecting to a custom handler
      checkoutUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=your_paypal_email@example.com&item_name=Home+Sweet+Home+Diaspora+Dues&amount=${amount}&currency_code=${currency}&custom=${user.id}_${reference}&return=${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard`;
    }

    // 3. Save the pending payment to the database
    await prisma.payment.create({
      data: {
        userId: user.id,
        amount,
        currency,
        provider,
        reference,
        status: "PENDING",
      }
    });

    // 4. Return the checkout URL to the frontend
    return NextResponse.json({ success: true, checkoutUrl });

  } catch (error: any) {
    console.error("Payment Initialization Error:", error);
    return NextResponse.json(
      { error: "Failed to initialize payment", details: error.message },
      { status: 500 }
    );
  }
}
