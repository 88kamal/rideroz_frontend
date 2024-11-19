import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    PowerIcon,
    HomeIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { TicketCheck } from "lucide-react";
import { useLogoutMutation } from "../../../redux/slices/authApiSlice";
import apiSlice from "../../../redux/slices/apiSlice";
import { useDispatch } from "react-redux";

export default function UserSidebar() {

    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout(); // Call the logout mutation to remove token
        navigate('/');  // Redirect to the home page after logout
        dispatch(apiSlice.util.resetApiState());
    };


    return (
        <div className=" h-screen fixed w-full max-w-[16rem] p-4 
        rounded-none border-r border-r-green-300 bg-green-50">

            <div className="">
                <div className="mb-2 p-4 ">
                    <Link to={'/'}>
                    <div
                        className=" py-6"
                    >
                        <div className="flex justify-center mb-2">
                            <img className="w-24" src="https://cdn-icons-png.flaticon.com/128/5432/5432747.png" alt="img" />
                        </div>
                        <h1 className="text-center text-xl text-black font-bold app-font">User Dashboard</h1>
                    </div>
                    </Link>
                </div>
            </div>

            <List>
                <Link to={'user-home-page'}>
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <HomeIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Home
                    </ListItem>

                </Link>

                <Link to={'user-vehicle-book'}>
                    <ListItem
                        className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <TicketCheck className="h-5 w-5" />
                        </ListItemPrefix>
                        All Vehicle Book
                    </ListItem>
                </Link>

                <Link to={'user-profile'}>
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