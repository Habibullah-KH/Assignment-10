import { Outlet } from "react-router-dom";
import DashboardLayout from "../component/Dashboard/DashboardLayout";

export default function Dashboard (){
    return(
        <>
        <div className="bg-white">
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
        </div>
        </>
    );
}