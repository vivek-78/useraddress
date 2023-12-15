import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(request: NextRequest, response: NextResponse) {
  const body:any = request.body;
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({ where: { userId : body.userId} });
    return NextResponse.json(user,{status:200})
  } catch (err) {
    return NextResponse.json(err,{status:401})
  }
}