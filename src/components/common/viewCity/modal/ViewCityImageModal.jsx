/* eslint-disable react/prop-types */
import React from "react";
import {
  Dialog,
  IconButton,
} from "@material-tailwind/react";
import { Eye, X } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

      <Dialog open={open} handler={handleOpen} size={"xs"} className="shadow-none hover:shadow-none rounded-md bg-white">
        <div className="px-4 pt-4">
          <h1 className="text-xl text-black font-bold">Edit City</h1>
          <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer" onClick={handleOpen}>
            <X size={20} className="text-green-300 hover:text-green-400" />
          </div>
        </div>
        <div className=" px-5 py-5">
          {/* <img className=" border rounded-md h-auto w-auto" src={cityImage?.url} alt="" /> */}
          <LazyLoadImage
            alt={"img"}
            src={cityImage?.url}
            className=" border rounded-md h-auto w-auto border-green-300"
            effect="opacity"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
          />
        </div>

      </Dialog>
    </>
  );
}