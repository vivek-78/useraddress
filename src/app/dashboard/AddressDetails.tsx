import { useUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";

const AddressDetails = async (props: any) => {
  const { user } = props;
  const userAddress = user.address;
  return (
    <div className="flex align-center justify-center mt-10">
    <div className="block w-full max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        Associate Address
      </div>
      <ul className="w-full">
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 dark:border-opacity-50">
          House Number: {userAddress.number}
        </li>
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 dark:border-opacity-50">
          Street Name: {userAddress.street}
        </li>
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 dark:border-opacity-50">
          state : {userAddress.state}
        </li>
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 dark:border-opacity-50">          postal code: {userAddress.postalCode}
        </li>
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 dark:border-opacity-50">
          country: {userAddress.country}
        </li>
      </ul>
    </div>
    </div>
  );
};

export default AddressDetails;
