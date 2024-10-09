/* eslint-disable react/prop-types */
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { Trash2 } from "lucide-react";
import { useDeleteCityMutation } from "../../../../redux/slices/cityApiSlice";

export default function DeleteCityModal({ id }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [deleteCity, data] = useDeleteCityMutation();



  const handleDelete = async (id) => {
    try {
      await deleteCity(id).unwrap();
    } catch (error) {
      console.log('Error deleting city:', error);
    }
  };

  return (
    <>


      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300">
        <Trash2 className="h-4 w-4" />
      </IconButton>
      <Dialog open={open} >
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <DialogHeader>Are you sure?</DialogHeader>
        <DialogBody>
          <p className=" app-font"> Do you really want to delete this city? This process cannot be undone.</p>
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
          <Button variant="gradient" color="green" onClick={() => {
            // handleOpen()
            handleDelete(id)
          }}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}