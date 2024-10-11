/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    IconButton,
    Input,
} from "@material-tailwind/react";
import { Edit, X } from "lucide-react";
import toast from "react-hot-toast";
import { useEditDepartmentMutation } from "../../../../../redux/slices/departmentApiSlice";

export default function EditDepartmentModal({ id, departmentName }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        if (!open) {
            // Set form data with initial values when opening the modal
            setFormData({
                departmentName: departmentName || "",
            });
        }
    };

    const [formData, setFormData] = useState({
        departmentName: ""
    });

    const [editDepartment, { isLoading, isError, error, data, isSuccess }] = useEditDepartmentMutation();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create a copy of formData to modify before sending to the API
            const updatedData = { ...formData };

            // Remove the cityImage field if no new image is selected
            if (!(formData.cityImage instanceof File)) {
                delete updatedData.cityImage;
            }

            await editDepartment({ id, updatedData: updatedData }).unwrap();

            setFormData({
                departmentName: "",
            });

            handleOpen();
        } catch (error) {
            console.error("Failed to edit department: ", error);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to edit department, please try again');
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
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300">
                <Edit className="h-4 w-4" />
            </IconButton>

            <Dialog open={open} className="shadow-none hover:shadow-none rounded-md bg-white">
                <div className="px-4 py-4">
                    <h1 className="text-xl text-black font-bold">Edit Department</h1>
                    <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer" onClick={handleOpen}>
                        <X size={20} className="text-green-300 hover:text-green-400" />
                    </div>
                </div>

                <DialogBody>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="flex flex-col pt-2">
                            <Input
                                type="text"
                                label="Department Name"
                                name="departmentName"
                                value={formData.departmentName}
                                onChange={handleInputChange}
                                color="green"
                                size="lg"
                                placeholder="Enter department name"
                                className="app-font"
                            />
                        </div>

                        <div className="text-center pt-2">
                            <Button
                                variant=""
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 shadow-none hover:shadow-none app-font"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? "Updating Department..." : "Update Department"}
                            </Button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}
