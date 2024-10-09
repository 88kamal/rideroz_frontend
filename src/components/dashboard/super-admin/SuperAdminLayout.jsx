/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import TopNavbar from "../../common/TopNavbar";
import SuperAdminSidebar from "./SuperAdminSidebar";
import SuperAdminRightNavbar from "./SuperAdminRightNavbar";
import SuperAdminBottomNavigation from "./SuperAdminBottomNavigation";

const SuperAdminLayout = () => {
    return (
        <div className=" min-h-screen">
            <div className=" lg:hidden sm:hidden md:hidden xl:hidden sticky top-0 z-50">
                <TopNavbar image={"https://cdn-icons-png.flaticon.com/128/1587/1587600.png"} name={"Super Admin"} />
            </div>
            <div className="min-h-screen flex ">

                {/* Sidebar hidden on mobile  */}
                <div className=" w-[16em] flex-none ... hidden sm:block lg:block xl:block md:block">
                    <SuperAdminSidebar />
                </div>

                {/* main content  */}
                <main className="flex-1 min-w-0 mb-[3em] lg:mb-0 ">
                    <div className=" sticky top-0 z-10">
                        <SuperAdminRightNavbar />
                    </div>

                    <div className=" px-3 py-3" >
                        <Outlet />
                    </div>
                </main>

                <div className=" lg:hidden sm:hidden md:hidden xl:hidden">
                    <SuperAdminBottomNavigation />
                </div>
            </div>
        </div>
    );
}

export default SuperAdminLayout;