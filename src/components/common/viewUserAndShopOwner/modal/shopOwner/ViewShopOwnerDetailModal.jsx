/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import { Eye, X } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// eslint-disable-next-line no-unused-vars
export default function ViewShopOwnerDetailModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <Eye className="h-4 w-4" />
      </IconButton>

      <Dialog open={open} size="lg" className="shadow-none hover:shadow-none rounded-none bg-green-100">
        <div className="px-4 py-4">
          <h1 className="text-xl text-black font-bold">Employee Detail</h1>
          <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
            <X size={20} className="text-green-800 hover:text-green-900" />
          </div>
        </div>
        <DialogBody>
          Hello
        </DialogBody>
      </Dialog>
    </>
  );
}
