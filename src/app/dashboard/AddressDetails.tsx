"use client"
import { useUser } from "@clerk/nextjs"
import { PrismaClient } from "@prisma/client";
import { useEffect,useState } from "react";

const AddressDetails=async()=>{
    const [userAddress,setUserAddress] = useState<any>({});
    const prisma = new PrismaClient();
    const fetchUser = async ()=>{
        const clerkUser:any = await useUser();
        const user:any = await prisma.user.findUnique({ where: { userId : clerkUser?.id} });
        setUserAddress(user.address);
    }
    useEffect(()=>{
        fetchUser();
    },[])
    return(
      <div className="flex justify-center align-center">
        <div className="flex justify-center align-center">
           <h2>Address:</h2>
           <h3>{userAddress.number}</h3>
           <h3>{userAddress.street}</h3>
           <h3>{userAddress.state}</h3>
           <h3>{userAddress.country}</h3>
           <h3>{userAddress.postalCode}</h3>
        </div>
      </div>
    )
}

export default AddressDetails