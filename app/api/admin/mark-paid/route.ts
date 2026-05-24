import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth();

    // Check if user is logged in
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify the caller is an ADMIN
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!currentUser || currentUser.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden: Admins only" }, { status: 403 });
    }

    const { targetUserId, description } = await req.json();

    if (!targetUserId) {
      return NextResponse.json({ error: "Missing target user ID" }, { status: 400 });
    }

    // Calculate expiration date (+1 year from today)
    const validUntil = new Date();
    validUntil.setFullYear(validUntil.getFullYear() + 1);

    // Update the target user's dues
    await prisma.user.update({
      where: { id: targetUserId },
      data: { duesValidUntil: validUntil },
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
          provider: "MANUALLY",
          reference: description ? `MANUAL_${description.substring(0,20)}_${Date.now()}` : `MANUAL_${Date.now()}`
        } 
      });
    } else {
      // Create a manual payment record so it shows up in their table
      await prisma.payment.create({
        data: {
          userId: targetUserId,
          amount: 0,
          currency: "GHS",
          provider: "MANUALLY",
          reference: description ? `MANUAL_${description.substring(0,20)}_${Date.now()}` : `MANUAL_${Date.now()}`,
          status: "PAID"
        }
      });
    }

    return NextResponse.json({ success: true, message: "User dues marked as paid" }, { status: 200 });
  } catch (error: any) {
    console.error("Admin Mark Paid Error:", error);
    return NextResponse.json(
      { error: "Failed to mark user as paid", details: error.message },
      { status: 500 }
    );
  }
}
