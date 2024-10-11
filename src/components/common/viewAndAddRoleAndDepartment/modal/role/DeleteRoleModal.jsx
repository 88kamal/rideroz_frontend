/* eslint-disable react/prop-types */
import  { useState } from "react";
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
import { useDeleteRoleMutation } from "../../../../../redux/slices/roleApiSlice";

export default function DeleteRoleModal({ id }) {
  const [open, setOpen] = useState(false);
  const [verificationText, setVerificationText] = useState(""); // State to track user input
  const requiredText = "DELETE"; // The text user needs to enter to confirm deletion

  const handleOpen = () => setOpen(!open);

   const [deleteRole] = useDeleteRoleMutation();


  const handleDelete = async () => {
    try {
      await deleteRole(id).unwrap();
      setVerificationText("")
      handleOpen(); // Close the modal after deletion
    } catch (error) {
      console.log("Error deleting role:", error);
    }
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <Trash2 className="h-4 w-4" />
      </IconButton>

      <Dialog open={open} className="shadow-none hover:shadow-none rounded-md bg-white">
        <DialogHeader>Are you sure?</DialogHeader>
        <DialogBody>
          <p className="app-font text-black">
            Do you really want to delete this role? This process cannot be undone.
          </p>
          <p className="mt-2 mb-5 text-black">Please type <span className=" font-bold text-red-500">{requiredText}</span> to confirm.</p>
          <Input
            type="text"
            label="Enter DELETE to confirm"
            value={verificationText}
            onChange={(e) => setVerificationText(e.target.value)}
            className=""
            color="green"
          />
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
            onClick={handleDelete}
            disabled={verificationText !== requiredText} // Disable the button if text doesn't match
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
