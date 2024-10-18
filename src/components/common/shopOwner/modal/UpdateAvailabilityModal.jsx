/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
} from "@material-tailwind/react";
import { SquarePen } from "lucide-react";
import { useUpdateVehicleAvailabilityMutation } from "../../../../redux/slices/vehicleApiSlice";
import toast from "react-hot-toast";

export default function UpdateAvailabilityModal({ id, vehicleAvailability }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);


    const [updateAvailability, { isLoading, isError, isSuccess, data, error }] = useUpdateVehicleAvailabilityMutation();

    const handleUpdate = async () => {
        try {
            await updateAvailability({ id, vehicleAvailability: vehicleAvailability === false ? true : false }).unwrap();
        } catch (error) {
            console.log('Failed to update availability:', error);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to update availability , please try again');
            handleOpen()
        }

        if (isSuccess) {
            toast.success(data?.message);

            handleOpen()

        }
    }, [isError, error, isSuccess, data]);

    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <SquarePen className="h-4 w-4" />
            </IconButton>

            <Dialog open={open} className="shadow-none hover:shadow-none rounded-none bg-green-100 rounded-md">
                <DialogHeader>Are you sure?</DialogHeader>
                <DialogBody>
                    <p className="app-font text-black">
                        Do you really want to Change this Availability?
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
                        onClick={handleUpdate}
                        disabled={isLoading} // Disable the button if text doesn't match
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
