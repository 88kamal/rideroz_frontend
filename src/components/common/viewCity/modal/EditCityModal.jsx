/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    IconButton,
    Input,
} from "@material-tailwind/react";
import { Edit, X } from "lucide-react";
import { useEditCityMutation } from "../../../../redux/slices/cityApiSlice";
import toast from "react-hot-toast";

export default function EditCityModal({ id, cityName, cityState, cityImage }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        if (!open) {
            // Set form data with initial values when opening the modal
            setFormData({
                cityName: cityName || "",
                cityState: cityState || "",
                cityImage: cityImage || null,
            });
        }
    };

    const [formData, setFormData] = useState({
        cityName: "",
        cityState: "",
        cityImage: null,
    });

    const [editCity, { isLoading, isError, error, data, isSuccess }] = useEditCityMutation();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            cityImage: e.target.files[0],
        });
    };

    const fileInputRef = useRef(null); // Create a ref for the file input

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create a copy of formData to modify before sending to the API
            const updatedData = { ...formData };

            // Remove the cityImage field if no new image is selected
            if (!(formData.cityImage instanceof File)) {
                delete updatedData.cityImage;
            }

             await editCity({ id, cityData: updatedData }).unwrap();

            setFormData({
                cityName: "",
                cityState: "",
                cityImage: null,
            });

            // Reset the file input manually
            if (fileInputRef.current) {
                fileInputRef.current.value = null; // This clears the file input field
            }
            handleOpen();
        } catch (error) {
            console.error("Failed to edit city: ", error);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to edit city, please try again');
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
                    <h1 className="text-xl text-black font-bold">Edit City</h1>
                    <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer rounded-tr-md" onClick={handleOpen}>
                        <X size={20} className="text-green-300 hover:text-green-400" />
                    </div>
                </div>

                <DialogBody>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="flex flex-col pt-2">
                            <Input
                                type="text"
                                label="City Name"
                                name="cityName"
                                value={formData.cityName}
                                onChange={handleInputChange}
                                color="green"
                                size="lg"
                                placeholder="Enter city name"
                                className="app-font"
                            />
                        </div>

                        <div className="flex flex-col pt-2">
                            <Input
                                type="text"
                                label="City State"
                                name="cityState"
                                value={formData.cityState}
                                onChange={handleInputChange}
                                color="green"
                                size="lg"
                                placeholder="Enter state"
                                className="app-font"
                            />
                        </div>

                        <div className="flex flex-col pt-2">
                            <div className="border border-green-400 px-1 py-1 rounded-md mb-4">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    name="cityImage"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
                                />
                            </div>

                            <div className="flex justify-between items-center border border-green-400 space-x-2">
                                <div>
                                    <h1 className="text-green-800 app-font mb-1 bg-green-300 p-1">Previous</h1>
                                    <div className="p-2">
                                        <img className="w-40 h-40" src={cityImage?.url} alt="" />
                                    </div>
                                </div>
                                {formData?.cityImage instanceof File && (
                                    <div>
                                        <h1 className="text-green-800 app-font mb-1 bg-green-300 p-1">Updated</h1>
                                        <div className="p-2">
                                            <img
                                                src={URL.createObjectURL(formData.cityImage)}
                                                alt="City"
                                                className="w-40 h-40"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="text-center pt-2">
                            <Button
                                variant=""
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 shadow-none hover:shadow-none app-font"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? "Updating City..." : "Update City"}
                            </Button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}
