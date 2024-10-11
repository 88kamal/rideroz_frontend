/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import TopNavbar from "../../common/TopNavbar";
import UserSidebar from "./UserSidebar";
import UserRightNavbar from "./UserRightNavbar";
import UserBottomNavigation from "./UserBottomNavigation";


const UserLayout = () => {
    return (
        <div className=" min-h-screen">
            <div className=" lg:hidden sm:hidden md:hidden xl:hidden sticky top-0  z-50">
                <TopNavbar image={"https://cdn-icons-png.flaticon.com/128/6835/6835890.png"} name={"User"} />
            </div>
            <div className="min-h-screen flex ">

                {/* Sidebar hidden on mobile  */}
                <div className=" w-[16em] flex-none ... hidden sm:block lg:block xl:block md:block ">
                    <UserSidebar />
                </div>

                {/* main content  */}
                <main className="flex-1 min-w-0 mb-[3em] lg:mb-0 ">
                    <div className=" sticky top-0 z-50 hidden lg:block md:block sm:block">
                        <UserRightNavbar />
                    </div>

                    <div className=" px-3 py-3" >
                        <Outlet />
                    </div>
                </main>

                <div className=" lg:hidden sm:hidden md:hidden xl:hidden">
                    <UserBottomNavigation />
                </div>
            </div>
        </div>
    );
}

export default UserLayout;
