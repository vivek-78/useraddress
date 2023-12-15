import { UserButton } from "@clerk/nextjs";
import {  currentUser } from "@clerk/nextjs";
import AddressDetails from "./AddressDetails";
import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation'
import { truncate } from "fs/promises";
export default async function Home() {
  // const[user,setUser] = useState();
  const profile = await currentUser();
  const prisma = new PrismaClient();
  const userAdress = await prisma.user.findUnique({where:{userId:profile?.id},select:{address:true}});
  if(!userAdress){
    redirect("/register");
  }
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
        <AddressDetails user={userAdress}/>
    </div>
  );
}
