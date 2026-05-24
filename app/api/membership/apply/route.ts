import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const data = await req.json();

    // Validate minimal required fields (you can add more robust validation e.g. with Zod if needed)
    if (!data.fullName || !data.email || !data.membershipCategory || !data.membershipType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create or update the application
    const application = await prisma.membershipApplication.upsert({
      where: {
        userId: user.id,
      },
      update: {
        fullName: data.fullName,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        country: data.country,
        homeTown: data.homeTown,
        residentialAddress: data.residentialAddress,
        city: data.city,
        region: data.region,
        phoneNumber: data.phoneNumber,
        email: data.email,
        occupation: data.occupation,
        organisation: data.organisation || "",
        
        membershipCategory: data.membershipCategory,
        membershipType: data.membershipType,
        reasonForJoining: data.reasonForJoining,
        interests: data.interests || [],
        
        emergencyFullName: data.emergencyFullName,
        emergencyRelationship: data.emergencyRelationship,
        emergencyPhone: data.emergencyPhone,
        
        signature: data.signature,
        signatureDate: data.signatureDate,
        
        status: "Pending Verification",
      },
      create: {
        userId: user.id,
        
        fullName: data.fullName,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        country: data.country,
        homeTown: data.homeTown,
        residentialAddress: data.residentialAddress,
        city: data.city,
        region: data.region,
        phoneNumber: data.phoneNumber,
        email: data.email,
        occupation: data.occupation,
        organisation: data.organisation || "",
        
        membershipCategory: data.membershipCategory,
        membershipType: data.membershipType,
        reasonForJoining: data.reasonForJoining,
        interests: data.interests || [],
        
        emergencyFullName: data.emergencyFullName,
        emergencyRelationship: data.emergencyRelationship,
        emergencyPhone: data.emergencyPhone,
        
        signature: data.signature,
        signatureDate: data.signatureDate,
        
        status: "Pending Verification",
      }
    });

    return NextResponse.json({ success: true, application }, { status: 200 });
  } catch (error: any) {
    console.error("Membership Application Error:", error);
    return NextResponse.json(
      { error: "Failed to submit application", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const session = await auth();

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        membershipApplication: true,
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ application: user.membershipApplication }, { status: 200 });
  } catch (error: any) {
    console.error("Fetch Membership Application Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch application", details: error.message },
      { status: 500 }
    );
  }
}
