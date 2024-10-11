/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // /* eslint-disable react/prop-types */
// // // /* eslint-disable react/prop-types */
// // // import { useEffect, useRef, useState } from "react";
// // // import {
// // //     Button,
// // //     Dialog,
// // //     DialogBody,
// // //     IconButton,
// // //     Input,
// // // } from "@material-tailwind/react";
// // // import { Edit, X } from "lucide-react";
// // // import toast from "react-hot-toast";
// // // import { useEditCityMutation } from "../../../../../redux/slices/cityApiSlice";

// // // export default function EditRoleModal({ id, roleName, roleCode, departmentName }) {
// // //     const [open, setOpen] = useState(false);

// // //     const handleOpen = () => {
// // //         setOpen(!open);
// // //         if (!open) {
// // //             // Set form data with initial values when opening the modal
// // //             setFormData({
// // //                 roleName : roleName || "",
// // //                 roleCode: roleCode || "",
// // //                 departmentName : departmentName || null,
// // //             });
// // //         }
// // //     };

// // //     const [formData, setFormData] = useState({
// // //         roleName : "",
// // //         roleCode : "",
// // //         cityImage: null,
// // //     });

// // //     const [editCity, { isLoading, isError, error, data, isSuccess }] = useEditCityMutation();

// // //     const handleInputChange = (e) => {
// // //         setFormData({
// // //             ...formData,
// // //             [e.target.name]: e.target.value,
// // //         });
// // //     };

// // //     const handleFileChange = (e) => {
// // //         setFormData({
// // //             ...formData,
// // //             cityImage: e.target.files[0],
// // //         });
// // //     };

// // //     const fileInputRef = useRef(null); // Create a ref for the file input

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             // Create a copy of formData to modify before sending to the API
// // //             const updatedData = { ...formData };

// // //             // Remove the cityImage field if no new image is selected
// // //             if (!(formData.cityImage instanceof File)) {
// // //                 delete updatedData.cityImage;
// // //             }

// // //              await editCity({ id, cityData: updatedData }).unwrap();

// // //             setFormData({
// // //                 cityName: "",
// // //                 cityState: "",
// // //                 cityImage: null,
// // //             });

// // //             // Reset the file input manually
// // //             if (fileInputRef.current) {
// // //                 fileInputRef.current.value = null; // This clears the file input field
// // //             }
// // //             handleOpen();
// // //         } catch (error) {
// // //             console.error("Failed to edit city: ", error);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         if (isError) {
// // //             toast.error(error?.data?.error || 'Failed to edit city, please try again');
// // //         }

// // //         if (isSuccess) {
// // //             toast.success(data?.message);
// // //         }
// // //     }, [isError, error, isSuccess, data]);

// // //     return (
// // //         <>
// // //             <IconButton
// // //                 onClick={handleOpen}
// // //                 variant="text"
// // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300">
// // //                 <Edit className="h-4 w-4" />
// // //             </IconButton>

// // //             <Dialog open={open} className="shadow-none hover:shadow-none rounded-md bg-white">
// // //                 <div className="px-4 py-4">
// // //                     <h1 className="text-xl text-black font-bold">Edit City</h1>
// // //                     <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer" onClick={handleOpen}>
// // //                         <X size={20} className="text-green-300 hover:text-green-400" />
// // //                     </div>
// // //                 </div>

// // //                 <DialogBody>
// // //                     <form onSubmit={handleSubmit} className="space-y-3">
// // //                         <div className="flex flex-col pt-2">
// // //                             <Input
// // //                                 type="text"
// // //                                 label="City Name"
// // //                                 name="cityName"
// // //                                 value={formData.cityName}
// // //                                 onChange={handleInputChange}
// // //                                 color="green"
// // //                                 size="lg"
// // //                                 placeholder="Enter city name"
// // //                                 className="app-font"
// // //                             />
// // //                         </div>

// // //                         <div className="flex flex-col pt-2">
// // //                             <Input
// // //                                 type="text"
// // //                                 label="City State"
// // //                                 name="cityState"
// // //                                 value={formData.cityState}
// // //                                 onChange={handleInputChange}
// // //                                 color="green"
// // //                                 size="lg"
// // //                                 placeholder="Enter state"
// // //                                 className="app-font"
// // //                             />
// // //                         </div>

// // //                         <div className="flex flex-col pt-2">
// // //                             <div className="border border-green-400 px-1 py-1 rounded-md mb-4">
// // //                                 <input
// // //                                     type="file"
// // //                                     ref={fileInputRef}
// // //                                     name="cityImage"
// // //                                     accept="image/*"
// // //                                     onChange={handleFileChange}
// // //                                     className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
// // //                                 />
// // //                             </div>

// // //                             <div className="flex justify-between items-center border border-green-400 space-x-2">
// // //                                 <div>
// // //                                     <h1 className="text-green-800 app-font mb-1 bg-green-300 p-1">Previous</h1>
// // //                                     <div className="p-2">
// // //                                         <img className="w-40 h-40" src={cityImage?.url} alt="" />
// // //                                     </div>
// // //                                 </div>
// // //                                 {formData?.cityImage instanceof File && (
// // //                                     <div>
// // //                                         <h1 className="text-green-800 app-font mb-1 bg-green-300 p-1">Updated</h1>
// // //                                         <div className="p-2">
// // //                                             <img
// // //                                                 src={URL.createObjectURL(formData.cityImage)}
// // //                                                 alt="City"
// // //                                                 className="w-40 h-40"
// // //                                             />
// // //                                         </div>
// // //                                     </div>
// // //                                 )}
// // //                             </div>
// // //                         </div>

// // //                         <div className="text-center pt-2">
// // //                             <Button
// // //                                 variant=""
// // //                                 type="submit"
// // //                                 className="w-full bg-green-500 hover:bg-green-600 shadow-none hover:shadow-none app-font"
// // //                                 size="lg"
// // //                                 disabled={isLoading}
// // //                             >
// // //                                 {isLoading ? "Updating City..." : "Update City"}
// // //                             </Button>
// // //                         </div>
// // //                     </form>
// // //                 </DialogBody>
// // //             </Dialog>
// // //         </>
// // //     );
// // // }


// // import { useEffect, useState } from "react";
// // import {
// //     Button,
// //     Dialog,
// //     DialogBody,
// //     IconButton,
// //     Input,
// // } from "@material-tailwind/react";
// // import { Edit, X } from "lucide-react";
// // import toast from "react-hot-toast";
// // import { useEditRoleMutation } from "../../../../../redux/slices/roleApiSlice";

// // export default function EditRoleModal({ id, roleName: initialRoleName, roleCode: initialRoleCode, departmentName: initialDepartmentName }) {
// //     const [open, setOpen] = useState(false);
// //     const [formData, setFormData] = useState({
// //         roleName: "",
// //         roleCode: "",
// //         departmentName: null,
// //     });

// //     const [editRole, { isLoading, isError, error, data, isSuccess }] = useEditRoleMutation(); // API call for role update

// //     const handleOpen = () => {
// //         setOpen(!open);
// //         if (!open) {
// //             // Set form data with initial values when opening the modal
// //             setFormData({
// //                 roleName: initialRoleName || "",
// //                 roleCode: initialRoleCode || "",
// //                 departmentName: initialDepartmentName || null,
// //             });
// //         }
// //     };

// //     const handleInputChange = (e) => {
// //         setFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value,
// //         });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await editRole({ id, ...formData }).unwrap(); // Call editRole API with the new data

// //             setFormData({
// //                 roleName: "",
// //                 roleCode: "",
// //                 departmentName: null,
// //             });
// //             handleOpen(); // Close modal on success
// //         } catch (error) {
// //             console.error("Failed to edit role: ", error);
// //         }
// //     };

// //     useEffect(() => {
// //         if (isError) {
// //             toast.error(error?.data?.error || 'Failed to edit role, please try again');
// //         }

// //         if (isSuccess) {
// //             toast.success(data?.message);
// //         }
// //     }, [isError, error, isSuccess, data]);

// //     return (
// //         <>
// //             <IconButton
// //                 onClick={handleOpen}
// //                 variant="text"
// //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300">
// //                 <Edit className="h-4 w-4" />
// //             </IconButton>

// //             <Dialog open={open} className="shadow-none hover:shadow-none rounded-md bg-white">
// //                 <div className="px-4 py-4">
// //                     <h1 className="text-xl text-black font-bold">Edit Role</h1>
// //                     <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer" onClick={handleOpen}>
// //                         <X size={20} className="text-green-300 hover:text-green-400" />
// //                     </div>
// //                 </div>

// //                 <DialogBody>
// //                     <form onSubmit={handleSubmit} className="space-y-3">
// //                         {/* Role Name */}
// //                         <div className="flex flex-col pt-2">
// //                             <Input
// //                                 type="text"
// //                                 label="Role Name"
// //                                 name="roleName"
// //                                 value={formData.roleName}
// //                                 onChange={handleInputChange}
// //                                 color="green"
// //                                 size="lg"
// //                                 placeholder="Enter role name"
// //                                 className="app-font"
// //                             />
// //                         </div>

// //                         {/* Role Code */}
// //                         <div className="flex flex-col pt-2">
// //                             <Input
// //                                 type="text"
// //                                 label="Role Code"
// //                                 name="roleCode"
// //                                 value={formData.roleCode}
// //                                 onChange={handleInputChange}
// //                                 color="green"
// //                                 size="lg"
// //                                 placeholder="Enter role code"
// //                                 className="app-font"
// //                             />
// //                         </div>

// //                         {/* Department Name */}
// //                         <div className="flex flex-col pt-2">
// //                             <Input
// //                                 type="text"
// //                                 label="Department Name"
// //                                 name="departmentName"
// //                                 value={formData.departmentName}
// //                                 onChange={handleInputChange}
// //                                 color="green"
// //                                 size="lg"
// //                                 placeholder="Enter department name"
// //                                 className="app-font"
// //                             />
// //                         </div>

// //                         <div className="text-center pt-2">
// //                             <Button
// //                                 type="submit"
// //                                 className="w-full bg-green-500 hover:bg-green-600 shadow-none hover:shadow-none app-font"
// //                                 size="lg"
// //                                 disabled={isLoading}
// //                             >
// //                                 {isLoading ? "Updating Role..." : "Update Role"}
// //                             </Button>
// //                         </div>
// //                     </form>
// //                 </DialogBody>
// //             </Dialog>
// //         </>
// //     );
// // }

// import { useEffect, useState } from "react";
// import {
//     Button,
//     Dialog,
//     DialogBody,
//     IconButton,
//     Input,
// } from "@material-tailwind/react";
// import { Edit, X } from "lucide-react";
// import toast from "react-hot-toast";
// import { useEditRoleMutation } from "../../../../../redux/slices/roleApiSlice";
// import { useGetDepartmentsQuery } from "../../../../../redux/slices/departmentApiSlice";

// export default function EditRoleModal({ id, roleName: initialRoleName, roleCode: initialRoleCode, departmentName: initialDepartmentName }) {
//     const [open, setOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         roleName: "",
//         roleCode: "",
//         departmentName: null,
//     });
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedDepartment, setSelectedDepartment] = useState({ name: initialDepartmentName, id: null });

//     const { data: departments } = useGetDepartmentsQuery();

//     const [editRole, { isLoading, isError, error, data, isSuccess }] = useEditRoleMutation(); // API call for role update

//     const handleOpen = () => {
//         setOpen(!open);
//         if (!open) {
//             setFormData({
//                 roleName: initialRoleName || "",
//                 roleCode: initialRoleCode || "",
//                 departmentName: initialDepartmentName?.departmentName || null,
//             });
//         }
//     };

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await editRole({ id, ...formData, departmentName: selectedDepartment.name }).unwrap(); // Update with selected department

//             setFormData({
//                 roleName: "",
//                 roleCode: "",
//                 departmentName: null,
//             });
//             setSelectedDepartment({ name: null, id: null });
//             handleOpen(); // Close modal on success
//         } catch (error) {
//             console.error("Failed to edit role: ", error);
//         }
//     };

//     useEffect(() => {
//         if (isError) {
//             toast.error(error?.data?.error || 'Failed to edit role, please try again');
//         }

//         if (isSuccess) {
//             toast.success(data?.message);
//         }
//     }, [isError, error, isSuccess, data]);

//     return (
//         <>
//             <IconButton
//                 onClick={handleOpen}
//                 variant="text"
//                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300">
//                 <Edit className="h-4 w-4" />
//             </IconButton>

//             <Dialog open={open} className="shadow-none hover:shadow-none rounded-md bg-white">
//                 <div className="px-4 py-4">
//                     <h1 className="text-xl text-black font-bold">Edit Role</h1>
//                     <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer" onClick={handleOpen}>
//                         <X size={20} className="text-green-300 hover:text-green-400" />
//                     </div>
//                 </div>

//                 <DialogBody>
//                     <form onSubmit={handleSubmit} className="space-y-3">
//                         {/* Role Name */}
//                         <div className="flex flex-col pt-2">
//                             <Input
//                                 type="text"
//                                 label="Role Name"
//                                 name="roleName"
//                                 value={formData.roleName}
//                                 onChange={handleInputChange}
//                                 color="green"
//                                 size="lg"
//                                 placeholder="Enter role name"
//                                 className="app-font"
//                             />
//                         </div>

//                         {/* Role Code */}
//                         <div className="flex flex-col pt-2">
//                             <Input
//                                 type="text"
//                                 label="Role Code"
//                                 name="roleCode"
//                                 value={formData.roleCode}
//                                 onChange={handleInputChange}
//                                 color="green"
//                                 size="lg"
//                                 placeholder="Enter role code"
//                                 className="app-font"
//                             />
//                         </div>

//                         <pre>{JSON.stringify(selectedDepartment,null,2)}</pre>

//                         {/* Custom Select Department */}
//                         <div className="relative dropdown">
//                             <div
//                                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 className="w-full px-3 py-2 border border-[#607d8b] rounded-lg cursor-pointer focus:outline-none app-font text-[#607d8b]"
//                             >
//                                 {selectedDepartment?.name || "Select department"}
//                             </div>
//                             {isDropdownOpen && (
//                                 <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
//                                     {departments?.map((department) => (
//                                         <li
//                                             key={department._id}
//                                             className="px-4 py-2 hover:bg-green-100 cursor-pointer app-font"
//                                             onClick={() => {
//                                                 setSelectedDepartment({ name: department.departmentName, id: department._id });
//                                                 setIsDropdownOpen(false);
//                                             }}
//                                         >
//                                             {department?.departmentName}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>

//                         <div className="text-center pt-2">
//                             <Button
//                                 type="submit"
//                                 className="w-full bg-green-500 hover:bg-green-600 shadow-none hover:shadow-none app-font"
//                                 size="lg"
//                                 disabled={isLoading}
//                             >
//                                 {isLoading ? "Updating Role..." : "Update Role"}
//                             </Button>
//                         </div>
//                     </form>
//                 </DialogBody>
//             </Dialog>
//         </>
//     );
// }


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
import { useEditRoleMutation } from "../../../../../redux/slices/roleApiSlice";
import { useGetDepartmentsQuery } from "../../../../../redux/slices/departmentApiSlice";

export default function EditRoleModal({ id, roleName: initialRoleName, roleCode: initialRoleCode, departmentName: initialDepartmentName }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        roleName: "",
        roleCode: "",
        departmentName: null,
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState({
        name: initialDepartmentName?.departmentName || "",
        id: initialDepartmentName?.departmentId || "",
    });

    const { data: departments } = useGetDepartmentsQuery();

    const [editRole, { isLoading, isError, error, data, isSuccess }] = useEditRoleMutation(); // API call for role update

    const handleOpen = () => {
        setOpen(!open);
        if (!open) {
            setFormData({
                roleName: initialRoleName || "",
                roleCode: initialRoleCode || "",
                departmentName: initialDepartmentName?._id || "",
            });
            setSelectedDepartment({
                name: initialDepartmentName?.departmentName || "",
                id: initialDepartmentName?._id || "",
            });
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editRole({ id, updatedData : formData, departmentName: selectedDepartment.id }).unwrap(); // Use department ID for update
            setFormData({
                roleName: "",
                roleCode: "",
                departmentName: null,
            });
            setSelectedDepartment({ name: null, id: null });
            handleOpen(); // Close modal on success
        } catch (error) {
            console.error("Failed to edit role: ", error);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to edit role, please try again');
        }

        if (isSuccess) {
            toast.success(data?.message);
        }
    }, [isError, error, isSuccess, data]);

    // Close dropdown when clicked outside
    useEffect(() => {
        const closeDropdown = (e) => {
            if (!e.target.closest('.dropdown')) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

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
                    <h1 className="text-xl text-black font-bold">Edit Role</h1>
                    <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer rounded-tr-md" onClick={handleOpen}>
                        <X size={20} className="text-green-300 hover:text-green-400" />
                    </div>
                </div>

                {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}

                {/* <pre>{JSON.stringify(selectedDepartment,null,2)}</pre> */}

                <DialogBody>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Role Name */}
                        <div className="flex flex-col pt-2">
                            <Input
                                type="text"
                                label="Role Name"
                                name="roleName"
                                value={formData.roleName}
                                onChange={handleInputChange}
                                color="green"
                                size="lg"
                                placeholder="Enter role name"
                                className="app-font"
                            />
                        </div>

                        {/* Role Code */}
                        <div className="flex flex-col pt-2">
                            <Input
                                type="number" // Assuming roleCode is a number like in the Add Role Form
                                label="Role Code"
                                name="roleCode"
                                value={formData.roleCode}
                                onChange={handleInputChange}
                                color="green"
                                size="lg"
                                placeholder="Enter role code"
                                className="app-font"
                            />
                        </div>

                        {/* Custom Select Department */}
                        <div className="relative dropdown">
                            <div
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-3 py-2 border border-[#607d8b] rounded-lg cursor-pointer focus:outline-none app-font text-[#607d8b]"
                            >
                                {selectedDepartment?.name || "Select department"}
                            </div>
                            {isDropdownOpen && (
                                <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                                    {departments?.map((department) => (
                                        <li
                                            key={department._id}
                                            className="px-4 py-2 hover:bg-green-100 cursor-pointer app-font"
                                            onClick={() => {
                                                setSelectedDepartment({ name: department.departmentName, id: department._id });
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {department?.departmentName}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="text-center pt-2">
                            <Button
                                type="submit"
                                className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} shadow-none app-font`}
                                size="lg"
                                disabled={isLoading || !formData.roleName || !formData.roleCode || !selectedDepartment.id}
                            >
                                {isLoading ? "Updating Role..." : "Update Role"}
                            </Button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}
