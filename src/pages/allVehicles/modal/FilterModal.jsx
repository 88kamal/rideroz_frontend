/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import {
    Dialog,
    DialogBody,
    IconButton,
} from "@material-tailwind/react";
import { X } from "lucide-react";
import SelectCityOrLocationModal from "./SelectCityOrLocationModal";
import VehicleTypeDropdown from "../VehicleTypeDropdown";
import myContext from "../../../context/myContext";


export default function FilterModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const { currentLocationName, } = useContext(myContext);

    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                </svg>
            </IconButton>

            <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-md bg-white text-black">
                <div className=" px-5 py-3 border-b bg-white drop-shadow border-gray-300">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                        </svg>

                        <h1 className="font-bold">Filter</h1>
                    </div>

                    <div
                        className="absolute top-2 right-2 py-1.5 px-1.5 bg-green-50 rounded-full cursor-pointer"
                        onClick={() => {
                            handleOpen();
                        }}>
                        <X size={20} className="text-green-300 hover:text-green-400" />
                    </div>
                </div>
                <DialogBody className="">
                    <SelectCityOrLocationModal />

                    <div className="">
                        <VehicleTypeDropdown />
                    </div>

                    <div className="border border-gray-300 px-2 py-2 rounded-md  w-full app-font mt-2 ">
                        <h1 className="text-black app-font">Current Location : <span className="text-blue-600">{currentLocationName || "N/A"}</span></h1>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}
