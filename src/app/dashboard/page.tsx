import { UserButton } from "@clerk/nextjs";
import AddressForm from "./AddressForm";
export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
      <AddressForm />
    </div>
  )
}