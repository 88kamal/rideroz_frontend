/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
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
import { useDeleteVehicleMutation } from "../../../../redux/slices/vehicleApiSlice";
import toast from "react-hot-toast";

export default function DeleteVehicleModal({ id , refetch}) {
  const [open, setOpen] = useState(false);
  const [verificationText, setVerificationText] = useState(""); // State to track user input
  const requiredText = "DELETE"; // The text user needs to enter to confirm deletion

  const handleOpen = () => setOpen(!open);

  const [deleteVehicle, { isLoading, isError, error, isSuccess, data }] = useDeleteVehicleMutation(); // RTK Query Mutation Hook

  const handleDelete = async () => {
    try {
      await deleteVehicle(id).unwrap(); // Unwrap the promise to handle success or failure
      handleOpen();
      setVerificationText("");
      refetch()
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };


  useEffect(() => {
    if (isError) {
        toast.error(error?.data?.error);
    }

    if (isSuccess) {
        toast.success(data?.message);
    }
}, [isError, error, isSuccess, data]);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <Trash2 className="h-4 w-4" />
      </IconButton>

      <Dialog
        open={open}
        className="shadow-none hover:shadow-none rounded-md bg-white"
      >
        <DialogHeader>Are you sure?</DialogHeader>
        <DialogBody>
          <p className="app-font text-black">
            Do you really want to delete this vehicle? This process cannot be
            undone.
          </p>

          <p className="mt-2 mb-5 text-black">
            Please type{" "}
            <span className="font-bold text-red-500">{requiredText}</span> to
            confirm.
          </p>
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
            disabled={verificationText !== requiredText || isLoading} // Disable the button if text doesn't match or loading
          >
            <span>{isLoading ? "Deleting..." : "Confirm"}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
