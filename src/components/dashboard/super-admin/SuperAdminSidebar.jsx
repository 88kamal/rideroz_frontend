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
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ClipboardPlus, MapPinned } from "lucide-react";

export default function SuperAdminSidebar() {

    const logout = () => {
    }


    return (
        <div className=" h-screen fixed w-full max-w-[16rem] p-4 
        rounded-none shadow-md">

            <div className="">
                <div className="mb-2 p-4 ">
                    <div
                        className=" py-6"
                    >
                        <div className="flex justify-center mb-2">
                            <img className="w-24" src="https://cdn-icons-png.flaticon.com/128/8899/8899687.png" alt="img" />
                        </div>
                        <h1 className="text-center text-xl text-black font-bold app-font">Super Admin Dashboard</h1>
                    </div>
                </div>
            </div>

            <List>
                <Link to={'super-admin-home-page'}>
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <HomeIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Home
                    </ListItem>

                </Link>

                <Link >
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <UserGroupIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        All Employee
                    </ListItem>
                </Link>
                <Link >
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <UserGroupIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        View Visitors
                    </ListItem>
                </Link>

                <Link>
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <ClipboardPlus className="h-5 w-5" />
                        </ListItemPrefix>
                        Report
                    </ListItem>
                </Link>

                <Link>
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <MapPinned className="h-5 w-5" />
                        </ListItemPrefix>
                        Track Employee
                    </ListItem>
                </Link>

                <Link >
                    <ListItem className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </Link>

                <ListItem onClick={logout} className="hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300">
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