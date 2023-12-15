"use client";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import AddressDetails from "./AddressDetails";
import { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";
import AddressForm from "./AddressForm";
export default function Home() {
  const prisma = new PrismaClient();
  const [user, setUser] = useState<any>("");
  const getUser = async () => {
    const clerkUser:any= await useUser();
    const userDetails:any = await prisma.user.findUnique({ where: { userId : clerkUser?.id} });
    setUser(userDetails)
};
  useEffect(() => { getUser() }, []);
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
      {user.address != null ? <AddressForm /> : <AddressDetails />}
    </div>
  );
}
