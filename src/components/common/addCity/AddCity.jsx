/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useAddCityMutation } from "../../../redux/slices/cityApiSlice";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Button, Input, CardBody } from "@material-tailwind/react";

const AddCity = () => {
    const [formData, setFormData] = useState({
        cityName: "",
        cityState: "",
        cityImage: null,
    });

    const [addCity, { isLoading, isError, error }] = useAddCityMutation();

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
            const response = await addCity(formData).unwrap();
            Swal.fire({
                title: response.message,
                icon: 'success',
                confirmButtonText: 'Cool',
            });

            setFormData({
                cityName : "",
                cityState : "",
                cityImage : null
            })

               // Reset the file input manually
    if (fileInputRef.current) {
        fileInputRef.current.value = null; // This clears the file input field
      }
        } catch (error) {
            console.error("Failed to add city: ", error);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Something went wrong!');
        }
    }, [isError]);

    return (
        <div className="flex justify-center items-center ">
            <div className="w-full max-w-2xl border border-green-300 bg-white rounded-md">
              
                <div className=" flex justify-center items-center pt-5">
                    <h2 className="text-black text-2xl font-semibold app-font">Add New City</h2>
                </div>
                
                <CardBody>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                                className=" app-font"
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
                                className=" app-font"
                            />
                        </div>

                        <div className="flex flex-col pt-2">

                            <input
                                type="file"
                                ref={fileInputRef}
                                name="cityImage"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
                            />
                        </div>

                        <div className="text-center pt-2 ">
                            <Button
                                variant=""
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 shadow-none hover:shadow-none app-font"
                                size="lg"
                                disabled={isLoading || !formData?.cityName || !formData?.cityState || !formData?.cityImage}
                            >
                                {isLoading ? "Adding City..." : "Add City"}
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </div>
        </div>
    );
};

export default AddCity;
