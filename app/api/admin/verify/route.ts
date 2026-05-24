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

    // Update the target user's verified status
    await prisma.user.update({
      where: { id: targetUserId },
      data: { isVerified: true },
    });

    // Also update their membership application if it exists
    await prisma.membershipApplication.updateMany({
      where: { userId: targetUserId },
      data: { status: "Verified" }
    });

    return NextResponse.json({ success: true, message: "User successfully verified" }, { status: 200 });
  } catch (error: any) {
    console.error("Admin Verification Error:", error);
    return NextResponse.json(
      { error: "Failed to verify user", details: error.message },
      { status: 500 }
    );
  }
}
