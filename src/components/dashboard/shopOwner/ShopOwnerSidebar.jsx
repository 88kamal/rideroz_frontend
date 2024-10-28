import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    PowerIcon,
    HomeIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../../redux/slices/authApiSlice";
import { CarFront, CirclePlus, UserCircleIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import apiSlice from "../../../redux/slices/apiSlice";

export default function ShopOwnerSidebar() {

    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();

    const navigate = useNavigate();


    // Reset the RTK query cache
    dispatch(apiSlice.util.resetApiState());

    const handleLogout = async () => {
        await logout(); // Call the logout mutation to remove token
        navigate('/');  // Redirect to the home page after logout
    };


    return (
        <div className=" h-screen fixed w-full max-w-[16rem] p-4 
        rounded-none border-r border-r-green-300 bg-green-50">

            <div className="">
                <div className="mb-2 p-4 ">
                    <div
                        className=" py-6"
                    >
                        <div className="flex justify-center mb-2">
                            <img className="w-24" src="https://cdn-icons-png.flaticon.com/128/17027/17027059.png" alt="img" />
                        </div>
                        <h1 className="text-center text-xl text-black font-bold app-font">Shop Owner Dashboard</h1>
                    </div>
                </div>
            </div>

            <List>
                <Link to={'shop-owner-home-page'}>
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <HomeIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Home
                    </ListItem>

                </Link>

                <Link to={'shop-owner-all-vehicle'}>
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <CarFront className="h-5 w-5" />
                        </ListItemPrefix>
                        All Vehicle
                    </ListItem>
                </Link>

               
                <Link to={'shop-owner-add-vehicle'}>
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <CirclePlus className="h-5 w-5" />
                        </ListItemPrefix>
                        Add Vehicle
                    </ListItem>
                </Link>


                <Link to={'shop-owner-profile'}>
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </Link>
                







                <ListItem onClick={handleLogout} className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>

                <Card className=" mb-5">
                </Card>
            </List>
        </div>
    );
}