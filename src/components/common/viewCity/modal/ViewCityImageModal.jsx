/* eslint-disable react/prop-types */
import React from "react";
import {
  Dialog,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import { Eye, X } from "lucide-react";

export default function ViewCityImageModal({ cityImage }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>

      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300">
        <Eye className="h-4 w-4" />
      </IconButton>

      <Dialog open={open} handler={handleOpen}>
        <div className=" flex justify-between items-center pl-5 pr-5 pt-4">
          <p className=" app-font text-black">City Image</p>

          <button type="button" onClick={()=> handleOpen()}>
          <X className=" "/>
          </button>
        </div>
        <DialogBody>
         <img className=" border rounded-md" src={cityImage?.url} alt="" />
        </DialogBody>
        
      </Dialog>
    </>
  );
}