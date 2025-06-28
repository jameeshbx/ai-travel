import { Sidebar } from "@/components/sidebar";
import TripPlanner from "../components/trip";


export default function page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar/>
     <TripPlanner/>
    </div>
  )
}
