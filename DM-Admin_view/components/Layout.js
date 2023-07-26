import Nav from "@/components/Nav";
import { UserButton } from "@clerk/nextjs";

export default function Layout({children}) {
  return (
    <div className="bg-indigo-950 w-screen h-screen flex">
      <Nav />
       <div className="bg-gray-200 flex-grow mt-1 mr-2 rounded-lg p-4">
        {children}
       </div>
    </div>
  )
}
