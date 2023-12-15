import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest) {
  console.log("/register")
  const body = await request.json();
  const prisma = new PrismaClient();
  try {
    const newUser = await prisma.user.create({
      data: {
        userId:"user_2ZWZiTtNMTxZHoh6uNYLx8SOfnM"
        //userId: body.clerkUserID,
      },
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err,{ status: 401 });
  }
};
