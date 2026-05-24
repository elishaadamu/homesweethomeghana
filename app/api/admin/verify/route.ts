import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth();

    // Verify session
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify admin role
    const requestingUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!requestingUser || requestingUser.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden: Admins only" }, { status: 403 });
    }

    const { targetUserId } = await req.json();

    if (!targetUserId) {
      return NextResponse.json({ error: "Missing target user ID" }, { status: 400 });
    }

    // Calculate expiration date (+1 year from today)
    const validUntil = new Date();
    validUntil.setFullYear(validUntil.getFullYear() + 1);

    // Update the target user's verified status and dues
    await prisma.user.update({
      where: { id: targetUserId },
      data: { 
        isVerified: true,
        duesValidUntil: validUntil
      },
    });

    // Also update their membership application if it exists
    await prisma.membershipApplication.updateMany({
      where: { userId: targetUserId },
      data: { status: "Verified" }
    });

    // Find any pending payments
    const pendingPayments = await prisma.payment.findMany({
      where: { userId: targetUserId, status: "PENDING" }
    });

    if (pendingPayments.length > 0) {
      // Clean up any pending payments and mark them as manual
      await prisma.payment.updateMany({
        where: { 
          userId: targetUserId,
          status: "PENDING"
        },
        data: { 
          status: "PAID",
          provider: "MANUALLY" 
        } 
      });
    } else {
      // Create a manual payment record so it shows up in their table
      await prisma.payment.create({
        data: {
          userId: targetUserId,
          amount: 0,
          currency: "USD",
          provider: "MANUALLY",
          reference: "MANUAL_" + Date.now(),
          status: "PAID"
        }
      });
    }

    return NextResponse.json({ success: true, message: "User successfully verified" }, { status: 200 });
  } catch (error: any) {
    console.error("Admin Verification Error:", error);
    return NextResponse.json(
      { error: "Failed to verify user", details: error.message },
      { status: 500 }
    );
  }
}
