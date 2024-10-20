// // import React, { useState } from 'react';
// // import { useAddVehicleMutation } from '../../../redux/slices/vehicleApiSlice';

// // const AddVehicleForm = () => {
// //     const [formData, setFormData] = useState({
// //         vehicleType: '',
// //         vehicleName: '',
// //         vehicleNumber: '',
// //         vehicleModel: '',
// //         vehiclePrice: '',
// //         sittingCapacity: '',  // Added sittingCapacity
// //         vehicalDetails: '',
// //         vehicleImage: null,
// //         vehicleAvailability: true,  // Added vehicleAvailability
// //     });

// //     const [addVehicle, { isLoading, isSuccess, isError, error }] = useAddVehicleMutation();

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData((prevData) => ({ ...prevData, [name]: value }));
// //     };

// //     const handleFileChange = (e) => {
// //         setFormData((prevData) => ({ ...prevData, vehicleImage: e.target.files[0] }));
// //     };

// //     const handleAvailabilityChange = (e) => {
// //         setFormData((prevData) => ({ ...prevData, vehicleAvailability: e.target.checked }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         const vehicleData = new FormData();
// //         Object.entries(formData).forEach(([key, value]) => {
// //             vehicleData.append(key, value);
// //         });

// //         // Dispatch the API call
// //         await addVehicle(vehicleData);
// //     };

// //     return (
// //         <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
// //             <h2 className="text-2xl font-semibold text-center mb-6">Add Vehicle</h2>

// //             <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type:</label>
// //                 <input
// //                     type="text"
// //                     name="vehicleType"
// //                     value={formData.vehicleType}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Name:</label>
// //                 <input
// //                     type="text"
// //                     name="vehicleName"
// //                     value={formData.vehicleName}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number:</label>
// //                 <input
// //                     type="text"
// //                     name="vehicleNumber"
// //                     value={formData.vehicleNumber}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Model:</label>
// //                 <input
// //                     type="text"
// //                     name="vehicleModel"
// //                     value={formData.vehicleModel}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Price:</label>
// //                 <input
// //                     type="number"
// //                     name="vehiclePrice"
// //                     value={formData.vehiclePrice}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Sitting Capacity:</label>
// //                 <input
// //                     type="number"
// //                     name="sittingCapacity"
// //                     value={formData.sittingCapacity}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
// //                 />
// //             </div>

// //             <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Details:</label>
// //                 <textarea
// //                     name="vehicalDetails"
// //                     value={formData.vehicalDetails}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
// //                 ></textarea>
// //             </div>

// //             <div className="mb-4">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Image:</label>
// //                 <input
// //                     type="file"
// //                     name="vehicleImage"
// //                     onChange={handleFileChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
// //                 />
// //             </div>

// //             <div className="mb-4 flex items-center">
// //     <label className="block text-sm font-medium text-gray-700 mr-2">Vehicle Availability:</label>
// //     <input
// //         type="checkbox"
// //         name="vehicleAvailability"
// //         checked={formData.vehicleAvailability}
// //         onChange={handleAvailabilityChange}
// //         className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring focus:ring-indigo-300"
// //     />
// // </div>


// //             <button
// //                 type="submit"
// //                 disabled={isLoading}
// //                 className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300"
// //             >
// //                 {isLoading ? 'Adding...' : 'Add Vehicle'}
// //             </button>

// //             {isSuccess && <p className="mt-4 text-green-600">Vehicle added successfully!</p>}
// //             {isError && <p className="mt-4 text-red-600">Error: {error?.data?.error}</p>}
// //         </form>
// //     );
// // };

// // export default AddVehicleForm;


// import { useState } from 'react';
// import { useAddVehicleMutation } from '../../../redux/slices/vehicleApiSlice';

// const AddVehicleForm = () => {
//     const [formData, setFormData] = useState({
//         vehicleType: '',
//         vehicleName: '',
//         vehicleNumber: '',
//         vehicleModel: '',
//         vehiclePrice: '',
//         sittingCapacity: '',
//         vehicalDetails: '',
//         vehicleImage: null,
//         vehicleAvailability: true,
//     });

//     const [addVehicle, { isLoading, isSuccess, isError, error }] = useAddVehicleMutation();
//     const [imagePreview, setImagePreview] = useState(null); // For showing image preview

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setFormData((prevData) => ({ ...prevData, vehicleImage: file }));
//         setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the uploaded image
//     };

//     const handleAvailabilityChange = (e) => {
//         setFormData((prevData) => ({ ...prevData, vehicleAvailability: e.target.checked }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const vehicleData = new FormData();
//         Object.entries(formData).forEach(([key, value]) => {
//             vehicleData.append(key, value);
//         });

//         await addVehicle(vehicleData);
//     };

//     // Update sittingCapacity based on vehicleType selection
//     const handleVehicleTypeChange = (e) => {
//         const vehicleType = e.target.value;
//         setFormData((prevData) => ({
//             ...prevData,
//             vehicleType,
//             sittingCapacity: vehicleType === 'bike' || vehicleType === 'scooty' ? 2 : '',
//         }));
//     };

//     return (
//         <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
//             <h2 className="text-2xl font-semibold text-center mb-6">Add Vehicle</h2>

//             {/* Vehicle Type Dropdown */}
//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type:</label>
//                 <select
//                     name="vehicleType"
//                     value={formData.vehicleType}
//                     onChange={handleVehicleTypeChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//                 >
//                     <option value="">Select Vehicle Type</option>
//                     <option value="car">Car</option>
//                     <option value="bike">Bike</option>
//                     <option value="scooty">Scooty</option>
//                 </select>
//             </div>

//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Name:</label>
//                 <input
//                     type="text"
//                     name="vehicleName"
//                     value={formData.vehicleName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number:</label>
//                 <input
//                     type="text"
//                     name="vehicleNumber"
//                     value={formData.vehicleNumber}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Model:</label>
//                 <input
//                     type="text"
//                     name="vehicleModel"
//                     value={formData.vehicleModel}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Price:</label>
//                 <input
//                     type="number"
//                     name="vehiclePrice"
//                     value={formData.vehiclePrice}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//                 />
//             </div>

//             {/* Sitting Capacity */}
//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Sitting Capacity:</label>
//                 {formData.vehicleType === 'car' ? (
//                     <select
//                         name="sittingCapacity"
//                         value={formData.sittingCapacity}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//                     >
//                         <option value="">Select Capacity</option>
//                         <option value="5">5</option>
//                         <option value="8">8</option>
//                         <option value="10">10</option>
//                     </select>
//                 ) : (
//                     <input
//                         type="number"
//                         name="sittingCapacity"
//                         value={formData.sittingCapacity}
//                         onChange={handleChange}
//                         readOnly={formData.vehicleType === 'bike' || formData.vehicleType === 'scooty'} // Disable input for bike/scooty
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//                     />
//                 )}
//             </div>

//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Details:</label>
//                 <textarea
//                     name="vehicalDetails"
//                     value={formData.vehicalDetails}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//                 ></textarea>
//             </div>

//             {/* Vehicle Image */}
//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Image:</label>
//                 <input
//                     type="file"
//                     name="vehicleImage"
//                     onChange={handleFileChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//                 />
//                 {imagePreview && (
//                     <img src={imagePreview} alt="Vehicle Preview" className="mt-4 max-w-xs" />
//                 )}
//             </div>

//             {/* Vehicle Availability */}
//             <div className="mb-4 flex items-center">
//                 <label className="block text-sm font-medium text-gray-700 mr-2">Vehicle Availability:</label>
//                 <input
//                     type="checkbox"
//                     name="vehicleAvailability"
//                     checked={formData.vehicleAvailability}
//                     onChange={handleAvailabilityChange}
//                     className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring focus:ring-indigo-300"
//                 />
//             </div>

//             <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300"
//             >
//                 {isLoading ? 'Adding...' : 'Add Vehicle'}
//             </button>

//             {isSuccess && <p className="mt-4 text-green-600">Vehicle added successfully!</p>}
//             {isError && <p className="mt-4 text-red-600">Error: {error?.data?.error}</p>}
//         </form>
//     );
// };

// export default AddVehicleForm;


import { useEffect, useRef, useState } from 'react';
import { useAddVehicleMutation } from '../../../redux/slices/vehicleApiSlice';
import { Button, Checkbox, Input, Textarea } from '@material-tailwind/react';
import toast from 'react-hot-toast';

const vehicleTypes = ['Car', 'Bike', 'Scooty']; // Array of vehicle types

const AddVehicleForm = () => {
    const [formData, setFormData] = useState({
        vehicleType: '',
        vehicleName: '',
        vehicleNumber: '',
        vehicleModel: '',
        vehiclePrice: '',
        sittingCapacity: '',
        vehicalDetails: '',
        vehicleImage: null,
        vehicleAvailability: true,
    });

    const [addVehicle, { isLoading, isSuccess, isError, error, data }] = useAddVehicleMutation();
    const [imagePreview, setImagePreview] = useState(null); // For showing image preview
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown open/close

    const fileInputRef = useRef(null); // Create a ref for the file input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, vehicleImage: file }));
        setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the uploaded image
    };

    const handleAvailabilityChange = (e) => {
        setFormData((prevData) => ({ ...prevData, vehicleAvailability: e.target.checked }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const vehicleData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            vehicleData.append(key, value);
        });

        await addVehicle(vehicleData);

        if (fileInputRef.current) {
            fileInputRef.current.value = null; // This clears the file input field
        }
    };

    // Toggle dropdown open/close
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Handle vehicle type selection
    const handleVehicleTypeSelect = (vehicleType) => {
        setFormData((prevData) => ({
            ...prevData,
            vehicleType,
            sittingCapacity: vehicleType === 'bike' || vehicleType === 'scooty' ? 2 : '',
        }));
        setIsDropdownOpen(false); // Close dropdown after selection
    };


    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to add role, please try again');
        }

        if (isSuccess) {
            toast.success(data?.message);
            setFormData({
                vehicleType: '',
                vehicleName: '',
                vehicleNumber: '',
                vehicleModel: '',
                vehiclePrice: '',
                sittingCapacity: '',
                vehicalDetails: '',
                vehicleImage: null,
                vehicleAvailability: true,
            })
            // Reset the file input manually
            if (fileInputRef.current) {
                fileInputRef.current.value = null; // This clears the file input field
            }
        }
    }, [isError, error, isSuccess, data]);


    return (
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 bg-white border border-green-400 rounded-md">
            <div className="text-center bg-green-50 py-6 rounded-md mb-4 border border-green-300">
                <div className="flex justify-center">
                    <img
                        src="../../logo/rideroz.png"
                        alt="Rideroz Logo"
                        className="h-20 w-48 mb-2"
                    />
                </div>
                {/* <h2 className="text-xl text-gray-800 app-font">
                            Add Vehicle
                        </h2> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                    <div className=" relative">
                        <div
                            className="w-full px-4 py-2 border border-[#b0bec5] text-gray-600 rounded-md focus:outline-none cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            {formData.vehicleType ? formData.vehicleType : 'Select Vehicle Type'}
                        </div>
                        {isDropdownOpen && (
                            <ul className="absolute w-full bg-white border border-[#b0bec5] rounded-md mt-1 z-10">
                                {vehicleTypes.map((type, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                                        onClick={() => handleVehicleTypeSelect(type.toLowerCase())}
                                    >
                                        {type}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="w-full sm:w-1/2">
                    <div className="mb-4">
                        <Input
                            type="text"
                            label='Vehicle Name '
                            name="vehicleName"
                            value={formData.vehicleName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md "
                            color='green'
                            required
                        />
                    </div>

                </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                    <div className="">
                        <Input
                            label='Vehicle Number'
                            type="text"
                            name="vehicleNumber"
                            value={formData.vehicleNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md "
                            color='green'
                            required
                        />
                    </div>
                </div>

                <div className="w-full sm:w-1/2">
                    <div className="mb-4">
                        <Input
                            label='Vehicle Model'
                            type="text"
                            name="vehicleModel"
                            value={formData.vehicleModel}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md "
                            color='green'
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                    <div className="">
                        <Input
                            label='Vehicle Price'
                            type="number"
                            name="vehiclePrice"
                            value={formData.vehiclePrice}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md "
                            color='green'
                            required
                        />
                    </div>
                </div>

                <div className="w-full sm:w-1/2">
                    <div className="mb-4">
                        {formData.vehicleType === 'car' ? (
                            <select
                                name="sittingCapacity"
                                value={formData.sittingCapacity}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            >
                                <option value="">Select Capacity</option>
                                <option value="5">5</option>
                                <option value="8">8</option>
                                <option value="10">10</option>
                            </select>
                        ) : (
                            <Input
                                label='Sitting Capacity'
                                type="number"
                                name="sittingCapacity"
                                value={formData.sittingCapacity}
                                onChange={handleChange}
                                readOnly={formData.vehicleType === 'bike' || formData.vehicleType === 'scooty'} // Disable input for bike/scooty
                                className="w-full px-4 py-2 rounded-md "
                                color='green'
                                required
                            />
                        )}
                    </div>

                </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                    <div className="-mb-1.5">
                        <Textarea
                            label='Vehicle Details'
                            name="vehicalDetails"
                            value={formData.vehicalDetails}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md "
                            color='green'
                        ></Textarea>
                    </div>
                </div>

                <div className="w-full sm:w-1/2">
                    <div className="mb-4">
                        <div className=" border border-[#b0bec5] rounded-md ">
                            <h1 className=' mb-1.5 bg-gray-200 px-2 py-2 rounded-t-md text-black'>Vehicle Image</h1>
                            <input
                                type="file"
                                ref={fileInputRef}
                                name="vehicleImage"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer px-2 py-2"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <>
                {imagePreview && (
                    <div className=" flex justify-center items-center border border-green-500 mb-4 rounded-md bg-white  drop-shadow">
                        <img src={imagePreview} alt="Vehicle Preview" className="mt-4 max-w-xs" />

                    </div>

                )}
            </>

            {/* Vehicle Availability */}
            <div className="mb-4 flex items-center border border-gray-400 rounded-md">
                {/* <label className="block text-sm font-medium text-gray-700 mr-2">Vehicle Availability:</label> */}
                <Checkbox
                    label='Vehicle Availability'
                    type="checkbox"
                    name="vehicleAvailability"
                    checked={formData.vehicleAvailability}
                    onChange={handleAvailabilityChange}
                    className="h-4 w-4 text-green rounded"
                />
            </div>

            <Button
                variant=''
                type="submit"
                disabled={isLoading}
                className="w-full px-4 hover:shadow-none shadow-none py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 disabled:bg-green-400 "
            >
                {isLoading ? 'Adding...' : 'Add Vehicle'}
            </Button>

            {/* {isSuccess && <p className="mt-4 text-green-600">Vehicle added successfully!</p>}
            {isError && <p className="mt-4 text-red-600">Error: {error?.data?.error}</p>} */}
        </form>
    );
};

export default AddVehicleForm;
