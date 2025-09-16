import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import DashBoardNav from "@/components/DashBoardNav"

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DashBoardNav/>
        <Outlet /> 
      </div>
    </div>
  )
}

export default DashboardLayout
