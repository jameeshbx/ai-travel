import { Sidebar } from "@/components/sidebar";
import Destinations from "./loading";



export default function page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar/>
     <Destinations/>
    </div>
  )
}