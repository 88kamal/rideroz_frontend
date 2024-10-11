
/* eslint-disable react/prop-types */
import  { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import { Edit } from "lucide-react";

export default function EditEmployeeModal() {
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
        <DialogHeader>Edit</DialogHeader>
        <DialogBody>
          <p className="app-font text-black">
            Do you really want to delete this department? This process cannot be undone.
          </p>

        
         
        </DialogBody>
       
      </Dialog>
    </>
  );
}
