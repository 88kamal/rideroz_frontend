/* eslint-disable react/prop-types */
import  { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { Trash2 } from "lucide-react";
import { useDeleteEmployeeMutation } from "../../../../redux/slices/employeeApiSlice";

export default function DeleteEmployeeModal({ id }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [deleteEmployee] = useDeleteEmployeeMutation();

  const handleDelete = async () => {
    try {
      await deleteEmployee(id).unwrap(); // unwrap to handle resolved or rejected promise
      handleOpen()
    } catch (error) {
      console.error('Error deleting employee:', error);
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
            <pre>{JSON.stringify(id)}</pre>
          <p className="app-font text-black">
            Do you really want to delete this department? This process cannot be undone.
          </p>
         
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
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
