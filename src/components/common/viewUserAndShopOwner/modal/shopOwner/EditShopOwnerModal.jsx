
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
} from "@material-tailwind/react";
import { Edit, X } from "lucide-react";

export default function EditShopOwnerModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);


    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <Edit className="h-4 w-4" />
            </IconButton>

            <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-md bg-white">
                <div className="px-4 py-4">
                    <h1 className="text-xl text-black font-bold">Edit Shop Owner</h1>
                    <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
                        <X size={20} className="text-green-800 hover:text-green-900" />
                    </div>
                </div>
                <DialogBody>
                    <p className="app-font text-black">
                        Do you really want to delete this department? This process cannot be undone.
                    </p>



                </DialogBody>

            </Dialog>
        </>
    );
}
