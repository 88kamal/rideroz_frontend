/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import TopNavbar from "../../common/TopNavbar";
import ShopOwnerSidebar from "./ShopOwnerSidebar";
import ShopOwnerRightNavbar from "./ShopOwnerRightNavbar";
import ShopOwnerBottomNavigation from "./ShopOwnerBottomNavigation";



const ShopOwnerLayout = () => {
    return (
        <div className=" min-h-screen">
            <div className=" lg:hidden sm:hidden md:hidden xl:hidden sticky top-0  z-50">
                <TopNavbar image={"https://cdn-icons-png.flaticon.com/128/8899/8899687.png"} name={"Shop Owner"} />
            </div>
            <div className="min-h-screen flex ">

                {/* Sidebar hidden on mobile  */}
                <div className=" w-[16em] flex-none ... hidden sm:block lg:block xl:block md:block ">
                    <ShopOwnerSidebar />
                </div>

                {/* main content  */}
                <main className="flex-1 min-w-0 mb-[3em] lg:mb-0 ">
                    <div className=" sticky top-0 z-50 hidden lg:block md:block sm:block">
                        <ShopOwnerRightNavbar />
                    </div>

                    <div className=" px-3 py-3" >
                        <Outlet />
                    </div>
                </main>

                <div className=" lg:hidden sm:hidden md:hidden xl:hidden">
                    <ShopOwnerBottomNavigation />
                </div>
            </div>
        </div>
    );
}

export default ShopOwnerLayout;
