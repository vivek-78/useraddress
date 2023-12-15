import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest) {
  console.log("/register")
  const body = await request.json();
  const prisma = new PrismaClient();
  console.log(body);
  try {
    const newUser = await prisma.user.create({
      data: {
        userId:body.clerkUserId
      },
    });
    await prisma.address.create({
      data:{
        userId: newUser.userId,
        number:body.number,
        street:body.street,
        city:body.city,
        postalCode:body.postalCode,
        country:body.country
      }
    });
    return NextResponse.json({ status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err,{ status: 401 });
  }
};
