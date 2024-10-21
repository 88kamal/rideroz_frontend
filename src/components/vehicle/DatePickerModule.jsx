// import React, { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";

// const DatePickerModule = ({ isOpen, onClose, selectedDate, onDateChange }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      // <div className="bg-white p-5 rounded-lg shadow-lg">
      //   <DayPicker
      //     mode="single"
      //     selected={selectedDate}
      //     onSelect={onDateChange}
      //   />
      //   <div className="mt-4 flex justify-end">
      //     <button
      //       className="bg-red-500 text-white px-4 py-2 rounded"
      //       onClick={onClose}
      //     >
      //       Close
      //     </button>
      //   </div>
      // </div>
//     </div>
//   );
// };

// export default DatePickerModule;


/* eslint-disable react/prop-types */
import { useState } from "react";
import "react-day-picker/style.css";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Trash2 } from "lucide-react";
import { DayPicker } from "react-day-picker";

export default function DatePickerModule() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>


      <Button
        onClick={handleOpen}
        className="bg-green-500 text-white w-full mt-3 py-2 rounded shadow-none hover:bg-green-600 transition duration-300"
      >
        Check Availbility
      </Button>

      <Dialog open={open} size={"md"} className="shadow-none hover:shadow-none rounded-md bg-white">
        <DialogHeader>Are you sure?</DialogHeader>
        <DialogBody>
        <div className="bg-white p-5 rounded-lg shadow-lg w-54">
        <DayPicker
          mode="single"
          // selected={selectedDate}
          // onSelect={onDateChange}
        />
      
      </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
          // onClick={handleDelete}
          // disabled={verificationText !== requiredText} // Disable the button if text doesn't match
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
