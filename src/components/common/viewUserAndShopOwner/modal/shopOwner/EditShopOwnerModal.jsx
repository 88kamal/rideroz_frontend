/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // // // /* eslint-disable react/prop-types */

// // // // // /* eslint-disable react/prop-types */
// // // // // import { useState } from "react";
// // // // // import {
// // // // //     Dialog,
// // // // //     DialogHeader,
// // // // //     DialogBody,
// // // // //     IconButton,
// // // // // } from "@material-tailwind/react";
// // // // // import { Edit, X } from "lucide-react";

// // // // // export default function EditShopOwnerModal({id, shopImage, legalDoc, shopName, ownerName, ownerEmail, ownerPhoneNumber, gender, selectCity, lat, lng}) {
// // // // //     const [open, setOpen] = useState(false);

// // // // //     const handleOpen = () => setOpen(!open);



// // // // //     return (
// // // // //         <>
// // // // //             <IconButton
// // // // //                 onClick={handleOpen}
// // // // //                 variant="text"
// // // // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // // // //             >
// // // // //                 <Edit className="h-4 w-4" />
// // // // //             </IconButton>

// // // // //             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-md bg-white">
// // // // //                 <div className="px-4 py-4">
// // // // //                     <h1 className="text-xl text-black font-bold">Edit Shop Owner</h1>
// // // // //                     <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
// // // // //                         <X size={20} className="text-green-800 hover:text-green-900" />
// // // // //                     </div>
// // // // //                 </div>
// // // // //                 <DialogBody>
// // // // //                     <p className="app-font text-black">
// // // // //                         Do you really want to delete this department? This process cannot be undone.
// // // // //                     </p>



// // // // //                 </DialogBody>

// // // // //             </Dialog>
// // // // //         </>
// // // // //     );
// // // // // }


// // // // import { useEffect, useState, useRef } from "react";
// // // // import {
// // // //     Button,
// // // //     Dialog,
// // // //     DialogBody,
// // // //     IconButton,
// // // //     Input,
// // // // } from "@material-tailwind/react";
// // // // import { Edit, X } from "lucide-react";
// // // // import toast from "react-hot-toast";
// // // // import { useEditShopMutation } from "../../../../../redux/slices/shopApiSlice";
// // // // import { useGetCitiesQuery } from "../../../../../redux/slices/cityApiSlice";

// // // // export default function EditShopOwnerModal({
// // // //     id,
// // // //     shopImage: initialShopImage,
// // // //     legalDoc: initialLegalDoc,
// // // //     shopName: initialShopName,
// // // //     ownerName: initialOwnerName,
// // // //     ownerEmail: initialOwnerEmail,
// // // //     ownerPhoneNumber: initialOwnerPhoneNumber,
// // // //     gender: initialGender,
// // // //     selectCity: initialCity,
// // // //     lat: initialLat,
// // // //     lng: initialLng,
// // // // }) {
// // // //     const [open, setOpen] = useState(false);
// // // //     const [formData, setFormData] = useState({
// // // //         shopName: "",
// // // //         ownerName: "",
// // // //         ownerEmail: "",
// // // //         ownerPhoneNumber: "",
// // // //         gender: "",
// // // //         city: "",
// // // //         lat: "",
// // // //         lng: "",
// // // //         shopImage: null,
// // // //         legalDoc: null,
// // // //     });
// // // //     const [imagePreview, setImagePreview] = useState(null);
// // // //     const [pdfPreview, setPdfPreview] = useState(null);
// // // //     const fileInputRef = useRef(null);

// // // //     const [editShop, { isLoading, isError, error, data, isSuccess }] = useEditShopMutation();


// // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();
// // // //     const [searchTerm, setSearchTerm] = useState("");
// // // //     const [showDropdown, setShowDropdown] = useState(false);
// // // //     const [showGenderDropdown, setShowGenderDropdown] = useState(false);

// // // //     const handleCitySearch = (event) => {
// // // //         const value = event.target.value;
// // // //         setSearchTerm(value);
// // // //         if (value.trim() === "") setShowDropdown(false);
// // // //         else setShowDropdown(true);
// // // //     };

// // // //     const filteredCities = cities?.filter((city) =>
// // // //         city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
// // // //     );

// // // //     const handleCitySelect = (cityName, cityState, _id) => {
// // // //         setFormData((prevState) => ({
// // // //             ...prevState,
// // // //             selectCity: _id,
// // // //         }));
// // // //         setSearchTerm(`${cityName}, ${cityState}`);
// // // //         setShowDropdown(false);
// // // //     };


// // // //     const handleOpen = () => {
// // // //         setOpen(!open);
// // // //         if (!open) {
// // // //             // Pre-fill form with initial values
// // // //             setFormData({
// // // //                 shopName: initialShopName || "",
// // // //                 ownerName: initialOwnerName || "",
// // // //                 ownerEmail: initialOwnerEmail || "",
// // // //                 ownerPhoneNumber: initialOwnerPhoneNumber || "",
// // // //                 gender: initialGender || "",
// // // //                 city: initialCity || "",
// // // //                 lat: initialLat || "",
// // // //                 lng: initialLng || "",
// // // //                 shopImage: null,
// // // //                 legalDoc: null,
// // // //             });

// // // //             // Set previews for initial images and PDFs
// // // //             setImagePreview(initialShopImage?.url || null);
// // // //             setPdfPreview(initialLegalDoc?.url || null);
// // // //         }
// // // //     };

// // // //     const handleInputChange = (e) => {
// // // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //     };

// // // //     const handleFileChange = (e) => {
// // // //         const { name, files } = e.target;
// // // //         const file = files[0];

// // // //         // Set the new file or keep the existing one if no file is selected
// // // //         setFormData((prevState) => ({
// // // //             ...prevState,
// // // //             [name]: file || prevState[name],
// // // //         }));

// // // //         // Update previews
// // // //         if (file) {
// // // //             if (file.type === "application/pdf") {
// // // //                 setPdfPreview(URL.createObjectURL(file));
// // // //             } else if (file.type.startsWith("image/")) {
// // // //                 setImagePreview(URL.createObjectURL(file));
// // // //             }
// // // //         }
// // // //     };

// // // //     const handleSubmit = async (e) => {
// // // //         e.preventDefault();

// // // //         // Prepare the form data
// // // //         const formDataToSend = { ...formData };

// // // //         // Check if there's an existing shopImage and legalDoc, use their URLs if no new file is uploaded
// // // //         if (!formData.shopImage && initialShopImage?.url) {
// // // //             formDataToSend.shopImage = { url: initialShopImage.url };
// // // //         }
// // // //         if (!formData.legalDoc && initialLegalDoc?.url) {
// // // //             formDataToSend.legalDoc = { url: initialLegalDoc.url };
// // // //         }

// // // //         try {
// // // //             // Call the mutation to edit the shop
// // // //             await editShop({ id, updatedData: formDataToSend }).unwrap();
// // // //         } catch (err) {
// // // //             console.error("Failed to update shop:", err);
// // // //         }
// // // //     };

// // // //     useEffect(() => {
// // // //         if (isError) {
// // // //             toast.error(error?.data?.error || 'Failed to edit role, please try again');
// // // //         }

// // // //         if (isSuccess) {
// // // //             handleOpen()
// // // //             toast.success(data?.message);
// // // //         }
// // // //     }, [isError, error, isSuccess, data]);

// // // //     return (
// // // //         <>
// // // //             <IconButton
// // // //                 onClick={handleOpen}
// // // //                 variant="text"
// // // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // // //             >
// // // //                 <Edit className="h-4 w-4" />
// // // //             </IconButton>

// // // //             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-md bg-white">
// // // //                 <div className="px-4 py-4">
// // // //                     <h1 className="text-xl text-black font-bold">Edit Shop Owner</h1>
// // // //                     <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer rounded-tr-md" onClick={handleOpen}>
// // // //                         <X size={20} className="text-green-300 hover:text-green-400" />
// // // //                     </div>
// // // //                 </div>

// // // //                 <DialogBody>
// // // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // // //                         <div className="flex justify-center mb-6">
// // // //                             <label htmlFor="shop-image-upload" className="custom-file-upload cursor-pointer">
// // // //                                 {imagePreview ? (
// // // //                                     <img
// // // //                                         className="w-24 h-24 border-2 rounded-full object-cover"
// // // //                                         src={imagePreview}
// // // //                                         alt="Shop"
// // // //                                     />
// // // //                                 ) : (
// // // //                                     <img
// // // //                                         src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
// // // //                                         className="h-24 w-24 border-2 rounded-full"
// // // //                                         alt="Default Shop"
// // // //                                     />
// // // //                                 )}
// // // //                             </label>
// // // //                             <input
// // // //                                 id="shop-image-upload"
// // // //                                 type="file"
// // // //                                 name="shopImage"
// // // //                                 accept="image/*"
// // // //                                 onChange={handleFileChange}
// // // //                                 className="hidden"
// // // //                             />
// // // //                         </div>

// // // //                         <div className="flex flex-col sm:flex-row gap-4">
// // // //                             <div className="w-full sm:w-1/2">
// // // //                                 <Input
// // // //                                     type="text"
// // // //                                     name="shopName"
// // // //                                     value={formData.shopName}
// // // //                                     onChange={handleInputChange}
// // // //                                     label="Shop Name"
// // // //                                     size="lg"
// // // //                                     color="green"
// // // //                                 />
// // // //                             </div>
// // // //                             <div className="w-full sm:w-1/2">
// // // //                                 <Input
// // // //                                     type="text"
// // // //                                     name="ownerName"
// // // //                                     value={formData.ownerName}
// // // //                                     onChange={handleInputChange}
// // // //                                     label="Owner Name"
// // // //                                     size="lg"
// // // //                                     color="green"
// // // //                                 />
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="flex flex-col sm:flex-row gap-4">
// // // //                             <div className="w-full sm:w-1/2">
// // // //                                 <Input
// // // //                                     type="email"
// // // //                                     name="ownerEmail"
// // // //                                     value={formData.ownerEmail}
// // // //                                     onChange={handleInputChange}
// // // //                                     label="Owner Email"
// // // //                                     size="lg"
// // // //                                     color="green"
// // // //                                 />
// // // //                             </div>
// // // //                             <div className="w-full sm:w-1/2">
// // // //                                 <Input
// // // //                                     type="text"
// // // //                                     name="ownerPhoneNumber"
// // // //                                     value={formData.ownerPhoneNumber}
// // // //                                     onChange={handleInputChange}
// // // //                                     label="Phone Number"
// // // //                                     size="lg"
// // // //                                     color="green"
// // // //                                 />
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="flex flex-col sm:flex-row gap-4">
// // // //                             <div className="w-full sm:w-1/2">
// // // //                                 <Input
// // // //                                     type="text"
// // // //                                     name="gender"
// // // //                                     value={formData.gender}
// // // //                                     onChange={handleInputChange}
// // // //                                     label="Gender"
// // // //                                     size="lg"
// // // //                                     color="green"
// // // //                                 />
// // // //                             </div>
// // // //                             {/* <div className="w-full sm:w-1/2">
// // // //                                 <Input
// // // //                                     type="text"
// // // //                                     name="city"
// // // //                                     value={formData.city}
// // // //                                     onChange={handleInputChange}
// // // //                                     label="City"
// // // //                                     size="lg"
// // // //                                     color="green"
// // // //                                 />
// // // //                             </div> */}
// // // //                             <div className="w-full relative sm:w-1/2">
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="selectCity"
// // // //                                     placeholder="Search for your city"
// // // //                                     value={searchTerm}
// // // //                                     onChange={handleCitySearch}
// // // //                                     className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
// // // //                                 />

// // // //                                 {isCitiesLoading && (
// // // //                                     <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
// // // //                                         <p className=" text-center">Loading cities...</p>
// // // //                                     </div>
// // // //                                 )}

// // // //                                 {citiesError && (
// // // //                                     <div className="absolute mt-1 bg-white z-10 border border-red-400 rounded-md w-full p-2">
// // // //                                         <p className="text-red-500 text-center">{citiesError?.data?.error}</p>
// // // //                                     </div>
// // // //                                 )}

// // // //                                 {showDropdown && !isCitiesLoading && !citiesError && filteredCities?.length > 0 && (
// // // //                                     <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full max-h-40 overflow-y-auto">
// // // //                                         {filteredCities.map((city) => (
// // // //                                             <div
// // // //                                                 key={city.id}
// // // //                                                 onClick={() => handleCitySelect(city.cityName, city.cityState, city._id)}
// // // //                                                 className="cursor-pointer p-2 hover:bg-gray-200"
// // // //                                             >
// // // //                                                 {city.cityName}, {city.cityState}
// // // //                                             </div>
// // // //                                         ))}
// // // //                                     </div>
// // // //                                 )}


// // // //                                 {!isCitiesLoading && !citiesError && showDropdown && filteredCities.length === 0 && (
// // // //                                     <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
// // // //                                         <p className=" text-center">No cities found.</p>
// // // //                                     </div>
// // // //                                 )}
// // // //                             </div>

// // // //                         </div>

// // // //                         <div className="flex flex-col sm:flex-row gap-4">
// // // //                             <div className="w-full sm:w-1/2">
// // // //                                 <Input
// // // //                                     type="text"
// // // //                                     name="lat"
// // // //                                     value={formData.lat}
// // // //                                     onChange={handleInputChange}
// // // //                                     label="Latitude"
// // // //                                     size="lg"
// // // //                                     color="green"
// // // //                                 />
// // // //                             </div>
// // // //                             <div className="w-full sm:w-1/2">
// // // //                                 <Input
// // // //                                     type="text"
// // // //                                     name="lng"
// // // //                                     value={formData.lng}
// // // //                                     onChange={handleInputChange}
// // // //                                     label="Longitude"
// // // //                                     size="lg"
// // // //                                     color="green"
// // // //                                 />
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="w-full">
// // // //                             <label>Legal Document (PDF):</label>
// // // //                             <input
// // // //                                 type="file"
// // // //                                 name="legalDoc"
// // // //                                 onChange={handleFileChange}
// // // //                                    accept="image/*"
// // // //                                 className="border border-gray-300 p-2"
// // // //                                 ref={fileInputRef}
// // // //                             />
// // // //                             {pdfPreview && (

// // // //                                 <img src={pdfPreview} className="w-40 h-40 mt-2" alt="" />
// // // //                             )}
// // // //                         </div>

// // // //                         <div className="flex justify-between mt-4">
// // // //                             <Button color="green" onClick={handleOpen} className="mr-2">
// // // //                                 Cancel
// // // //                             </Button>
// // // //                             <Button type="submit" color="green">
// // // //                                 Save
// // // //                             </Button>
// // // //                         </div>
// // // //                     </form>
// // // //                 </DialogBody>
// // // //             </Dialog>
// // // //         </>
// // // //     );
// // // // }



// // // import { useEffect, useState, useRef } from "react";
// // // import {
// // //     Button,
// // //     Dialog,
// // //     DialogBody,
// // //     IconButton,
// // //     Input,
// // // } from "@material-tailwind/react";
// // // import { Edit, X } from "lucide-react";
// // // import toast from "react-hot-toast";
// // // import { useEditShopMutation } from "../../../../../redux/slices/shopApiSlice";
// // // import { useGetCitiesQuery } from "../../../../../redux/slices/cityApiSlice";

// // // export default function EditShopOwnerModal({
// // //     id,
// // //     shopImage: initialShopImage,
// // //     legalDoc: initialLegalDoc,
// // //     shopName: initialShopName,
// // //     ownerName: initialOwnerName,
// // //     ownerEmail: initialOwnerEmail,
// // //     ownerPhoneNumber: initialOwnerPhoneNumber,
// // //     gender: initialGender,
// // //     selectCity: initialCity,
// // //     lat: initialLat,
// // //     lng: initialLng,
// // // }) {
// // //     const [open, setOpen] = useState(false);
// // //     const [formData, setFormData] = useState({
// // //         shopName: "",
// // //         ownerName: "",
// // //         ownerEmail: "",
// // //         ownerPhoneNumber: "",
// // //         gender: "",
// // //         city: "",
// // //         lat: "",
// // //         lng: "",
// // //         shopImage: null,
// // //         legalDoc: null,
// // //     });
// // //     const [imagePreview, setImagePreview] = useState(null);
// // //     const [pdfPreview, setPdfPreview] = useState(null);
// // //     const fileInputRef = useRef(null);

// // //     const [editShop, { isLoading, isError, error, data, isSuccess }] = useEditShopMutation();

// // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();
// // //     const [searchTerm, setSearchTerm] = useState("");
// // //     const [showDropdown, setShowDropdown] = useState(false);

// // //     const handleCitySearch = (event) => {
// // //         const value = event.target.value;
// // //         setSearchTerm(value);
// // //         if (value.trim() === "") setShowDropdown(false);
// // //         else setShowDropdown(true);
// // //     };

// // //     const filteredCities = cities?.filter((city) =>
// // //         city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
// // //     );

// // //     const handleCitySelect = (cityName, cityState, _id) => {
// // //         setFormData((prevState) => ({
// // //             ...prevState,
// // //             selectCity: _id,
// // //         }));
// // //         setSearchTerm(`${cityName}, ${cityState}`);
// // //         setShowDropdown(false);
// // //     };

// // //     const handleOpen = () => {
// // //         setOpen(!open);
// // //         if (!open) {
// // //             // Pre-fill form with initial values
// // //             setFormData({
// // //                 shopName: initialShopName || "",
// // //                 ownerName: initialOwnerName || "",
// // //                 ownerEmail: initialOwnerEmail || "",
// // //                 ownerPhoneNumber: initialOwnerPhoneNumber || "",
// // //                 gender: initialGender || "",
// // //                 city: initialCity || "",
// // //                 lat: initialLat || "",
// // //                 lng: initialLng || "",
// // //                 shopImage: null,
// // //                 legalDoc: null,
// // //             });

// // //             // Set previews for initial images and PDFs
// // //             setImagePreview(initialShopImage?.url || null);
// // //             setPdfPreview(initialLegalDoc?.url || null);
// // //         }
// // //     };

// // //     const handleInputChange = (e) => {
// // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // //     };

// // //     const handleFileChange = (e) => {
// // //         const { name, files } = e.target;
// // //         const file = files[0];

// // //         setFormData((prevState) => ({
// // //             ...prevState,
// // //             [name]: file || prevState[name],
// // //         }));

// // //         if (file) {
// // //             if (file.type === "application/pdf") {
// // //                 setPdfPreview(URL.createObjectURL(file));  // Show PDF preview
// // //             } else if (file.type.startsWith("image/")) {
// // //                 setImagePreview(URL.createObjectURL(file));  // Show image preview
// // //             }
// // //         }
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();

// // //         const formDataToSend = { ...formData };

// // //         if (!formData.shopImage && initialShopImage?.url) {
// // //             formDataToSend.shopImage = { url: initialShopImage.url };
// // //         }
// // //         if (!formData.legalDoc && initialLegalDoc?.url) {
// // //             formDataToSend.legalDoc = { url: initialLegalDoc.url };
// // //         }

// // //         try {
// // //             await editShop({ id, updatedData: formDataToSend }).unwrap();
// // //         } catch (err) {
// // //             console.error("Failed to update shop:", err);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         if (isError) {
// // //             toast.error(error?.data?.error || 'Failed to edit role, please try again');
// // //         }

// // //         if (isSuccess) {
// // //             handleOpen();
// // //             toast.success(data?.message);
// // //         }
// // //     }, [isError, error, isSuccess, data]);

// // //     return (
// // //         <>
// // //             <IconButton
// // //                 onClick={handleOpen}
// // //                 variant="text"
// // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // //             >
// // //                 <Edit className="h-4 w-4" />
// // //             </IconButton>

// // //             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-md bg-white">
// // //                 <div className="px-4 py-4">
// // //                     <h1 className="text-xl text-black font-bold">Edit Shop Owner</h1>
// // //                     <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer rounded-tr-md" onClick={handleOpen}>
// // //                         <X size={20} className="text-green-300 hover:text-green-400" />
// // //                     </div>
// // //                 </div>

// // //                 <DialogBody>
// // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // //                         <div className="flex justify-center mb-6">
// // //                             <label htmlFor="shop-image-upload" className="custom-file-upload cursor-pointer">
// // //                                 {imagePreview ? (
// // //                                     <img
// // //                                         className="w-24 h-24 border-2 rounded-full object-cover"
// // //                                         src={imagePreview}
// // //                                         alt="Shop"
// // //                                     />
// // //                                 ) : (
// // //                                     <img
// // //                                         src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
// // //                                         className="h-24 w-24 border-2 rounded-full"
// // //                                         alt="Default Shop"
// // //                                     />
// // //                                 )}
// // //                             </label>
// // //                             <input
// // //                                 id="shop-image-upload"
// // //                                 type="file"
// // //                                 name="shopImage"
// // //                                 accept="image/*"
// // //                                 onChange={handleFileChange}
// // //                                 className="hidden"
// // //                             />
// // //                         </div>

// // //                         <div className="flex flex-col sm:flex-row gap-4">
// // //                             <div className="w-full sm:w-1/2">
// // //                                 <Input
// // //                                     type="text"
// // //                                     name="shopName"
// // //                                     value={formData.shopName}
// // //                                     onChange={handleInputChange}
// // //                                     label="Shop Name"
// // //                                     size="lg"
// // //                                     color="green"
// // //                                 />
// // //                             </div>
// // //                             <div className="w-full sm:w-1/2">
// // //                                 <Input
// // //                                     type="text"
// // //                                     name="ownerName"
// // //                                     value={formData.ownerName}
// // //                                     onChange={handleInputChange}
// // //                                     label="Owner Name"
// // //                                     size="lg"
// // //                                     color="green"
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div className="flex flex-col sm:flex-row gap-4">
// // //                             <div className="w-full sm:w-1/2">
// // //                                 <Input
// // //                                     type="email"
// // //                                     name="ownerEmail"
// // //                                     value={formData.ownerEmail}
// // //                                     onChange={handleInputChange}
// // //                                     label="Owner Email"
// // //                                     size="lg"
// // //                                     color="green"
// // //                                 />
// // //                             </div>
// // //                             <div className="w-full sm:w-1/2">
// // //                                 <Input
// // //                                     type="text"
// // //                                     name="ownerPhoneNumber"
// // //                                     value={formData.ownerPhoneNumber}
// // //                                     onChange={handleInputChange}
// // //                                     label="Phone Number"
// // //                                     size="lg"
// // //                                     color="green"
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div className="flex flex-col sm:flex-row gap-4">
// // //                             <div className="w-full sm:w-1/2">
// // //                                 <Input
// // //                                     type="text"
// // //                                     name="gender"
// // //                                     value={formData.gender}
// // //                                     onChange={handleInputChange}
// // //                                     label="Gender"
// // //                                     size="lg"
// // //                                     color="green"
// // //                                 />
// // //                             </div>

// // //                             <div className="w-full relative sm:w-1/2">
// // //                                 <input
// // //                                     type="text"
// // //                                     name="selectCity"
// // //                                     placeholder="Search for your city"
// // //                                     value={searchTerm}
// // //                                     onChange={handleCitySearch}
// // //                                     className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
// // //                                 />

// // //                                 {isCitiesLoading && (
// // //                                     <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
// // //                                         <p className=" text-center">Loading cities...</p>
// // //                                     </div>
// // //                                 )}

// // //                                 {citiesError && (
// // //                                     <div className="absolute mt-1 bg-white z-10 border border-red-400 rounded-md w-full p-2">
// // //                                         <p className="text-red-500 text-center">{citiesError?.data?.error}</p>
// // //                                     </div>
// // //                                 )}

// // //                                 {showDropdown && !isCitiesLoading && !citiesError && filteredCities?.length > 0 && (
// // //                                     <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full max-h-40 overflow-y-auto">
// // //                                         {filteredCities.map((city) => (
// // //                                             <div
// // //                                                 key={city.id}
// // //                                                 onClick={() => handleCitySelect(city.cityName, city.cityState, city._id)}
// // //                                                 className="cursor-pointer p-2 hover:bg-gray-200"
// // //                                             >
// // //                                                 {city.cityName}, {city.cityState}
// // //                                             </div>
// // //                                         ))}
// // //                                     </div>
// // //                                 )}

// // //                                 {!isCitiesLoading && !citiesError && showDropdown && filteredCities.length === 0 && (
// // //                                     <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
// // //                                         <p className=" text-center">No cities found.</p>
// // //                                     </div>
// // //                                 )}
// // //                             </div>
// // //                         </div>

// // //                         <div className="flex flex-col sm:flex-row gap-4">
// // //                             <div className="w-full sm:w-1/2">
// // //                                 <Input
// // //                                     type="text"
// // //                                     name="lat"
// // //                                     value={formData.lat}
// // //                                     onChange={handleInputChange}
// // //                                     label="Latitude"
// // //                                     size="lg"
// // //                                     color="green"
// // //                                 />
// // //                             </div>
// // //                             <div className="w-full sm:w-1/2">
// // //                                 <Input
// // //                                     type="text"
// // //                                     name="lng"
// // //                                     value={formData.lng}
// // //                                     onChange={handleInputChange}
// // //                                     label="Longitude"
// // //                                     size="lg"
// // //                                     color="green"
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div className="w-full">
// // //                             <label>Legal Document (PDF):</label>
// // //                             <input
// // //                                 type="file"
// // //                                 name="legalDoc"
// // //                                 onChange={handleFileChange}
// // //                                 accept="application/pdf"
// // //                                 className="border border-gray-300 p-2"
// // //                                 ref={fileInputRef}
// // //                             />
// // //                             {pdfPreview && (
// // //                                <img src={pdfPreview} className="w-40" alt="" />
// // //                             )}
// // //                         </div>

// // //                         <div className="flex justify-between mt-4">
// // //                             <Button color="green" onClick={handleOpen} className="mr-2">
// // //                                 Cancel
// // //                             </Button>
// // //                             <Button type="submit" color="green">
// // //                                 Save
// // //                             </Button>
// // //                         </div>
// // //                     </form>
// // //                 </DialogBody>
// // //             </Dialog>
// // //         </>
// // //     );
// // // }


// // import { useEffect, useState, useRef } from "react";
// // import {
// //     Button,
// //     Dialog,
// //     DialogBody,
// //     IconButton,
// //     Input,
// // } from "@material-tailwind/react";
// // import { Edit, X } from "lucide-react";
// // import toast from "react-hot-toast";
// // import { useEditShopMutation } from "../../../../../redux/slices/shopApiSlice";
// // import { useGetCitiesQuery } from "../../../../../redux/slices/cityApiSlice";

// // export default function EditShopOwnerModal({
// //     id,
// //     shopImage: initialShopImage,
// //     legalDoc: initialLegalDoc,
// //     shopName: initialShopName,
// //     ownerName: initialOwnerName,
// //     ownerEmail: initialOwnerEmail,
// //     ownerPhoneNumber: initialOwnerPhoneNumber,
// //     gender: initialGender,
// //     selectCity: initialCity,
// //     lat: initialLat,
// //     lng: initialLng,
// // }) {
// //     const [open, setOpen] = useState(false);
// //     const [formData, setFormData] = useState({
// //         shopName: "",
// //         ownerName: "",
// //         ownerEmail: "",
// //         ownerPhoneNumber: "",
// //         gender: "",
// //         city: "",
// //         lat: "",
// //         lng: "",
// //         shopImage: null,
// //         legalDoc: null,
// //     });
// //     const [imagePreview, setImagePreview] = useState(null);
// //     const [legalDocPreview, setLegalDocPreview] = useState(null);
// //     const fileInputRef = useRef(null);

// //     const [editShop, { isLoading, isError, error, data, isSuccess }] = useEditShopMutation();

// //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();
// //     const [searchTerm, setSearchTerm] = useState("");
// //     const [showDropdown, setShowDropdown] = useState(false);

// //     const handleCitySearch = (event) => {
// //         const value = event.target.value;
// //         setSearchTerm(value);
// //         if (value.trim() === "") setShowDropdown(false);
// //         else setShowDropdown(true);
// //     };

// //     const filteredCities = cities?.filter((city) =>
// //         city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     const handleCitySelect = (cityName, cityState, _id) => {
// //         setFormData((prevState) => ({
// //             ...prevState,
// //             selectCity: _id,
// //         }));
// //         setSearchTerm(`${cityName}, ${cityState}`);
// //         setShowDropdown(false);
// //     };

// //     const handleOpen = () => {
// //         setOpen(!open);
// //         if (!open) {
// //             // Pre-fill form with initial values
// //             setFormData({
// //                 shopName: initialShopName || "",
// //                 ownerName: initialOwnerName || "",
// //                 ownerEmail: initialOwnerEmail || "",
// //                 ownerPhoneNumber: initialOwnerPhoneNumber || "",
// //                 gender: initialGender || "",
// //                 city: initialCity || "",
// //                 lat: initialLat || "",
// //                 lng: initialLng || "",
// //                 shopImage: null,
// //                 legalDoc: null,
// //             });

// //             // Set previews for initial images
// //             setImagePreview(initialShopImage?.url || null);
// //             setLegalDocPreview(initialLegalDoc?.url || null);
// //         }
// //     };

// //     const handleInputChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };


// //     const handleFileChange = (e) => {
// //         const { name, files } = e.target;
// //         const file = files[0];

// //         setFormData((prevState) => ({
// //             ...prevState,
// //             [name]: file || prevState[name],
// //         }));

// //         if (file && file.type.startsWith("image/")) {
// //             if (name === "shopImage") {
// //                 setImagePreview(URL.createObjectURL(file));  // Preview for shop image
// //             } else if (name === "legalDoc") {
// //                 setLegalDocPreview(URL.createObjectURL(file));  // Preview for legal document
// //             }
// //         }
// //     };


// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         const formDataToSend = new FormData();

// //         // Add each field from formData to the FormData object
// //         for (const key in formData) {
// //             if (formData[key]) {
// //                 if (formData[key] instanceof File) {
// //                     formDataToSend.append(key, formData[key]);
// //                 } else {
// //                     formDataToSend.append(key, formData[key]);
// //                 }
// //             }
// //         }

// //         // Retain the initial shop image if no new image is uploaded
// //         if (!formDataToSend.has('shopImage') && initialShopImage?.url) {
// //             formDataToSend.append('shopImage', JSON.stringify({
// //                 url: initialShopImage.url,
// //                 public_id: initialShopImage.public_id,
// //             }));
// //         }

// //         // Retain the initial legal document if no new document is uploaded
// //         if (!formDataToSend.has('legalDoc') && initialLegalDoc?.url) {
// //             formDataToSend.append('legalDoc', JSON.stringify({
// //                 url: initialLegalDoc.url,
// //                 public_id: initialLegalDoc.public_id,
// //             }));
// //         }

// //         try {
// //             await editShop({ id, updatedData: formDataToSend }).unwrap();
// //         } catch (err) {
// //             console.error("Failed to update shop:", err);
// //         }
// //     };



// //     useEffect(() => {
// //         if (isError) {
// //             handleOpen();
// //             toast.error(error?.data?.error || 'Failed to edit shop, please try again');
// //         }

// //         if (isSuccess) {
// //             handleOpen();
// //             toast.success(data?.message);
// //         }
// //     }, [isError, error, isSuccess, data]);

// //     return (
// //         <>
// //             <IconButton
// //                 onClick={handleOpen}
// //                 variant="text"
// //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// //             >
// //                 <Edit className="h-4 w-4" />
// //             </IconButton>

// //             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-md bg-white">
// //                 <div className="px-4 py-4">
// //                     <h1 className="text-xl text-black font-bold">Edit Shop Owner</h1>
// //                     <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer rounded-tr-md" onClick={handleOpen}>
// //                         <X size={20} className="text-green-300 hover:text-green-400" />
// //                     </div>
// //                 </div>

// //                 <DialogBody>
// //                     {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}
// //                     <form onSubmit={handleSubmit} className="space-y-4">
// //                         <div className="flex justify-center mb-6">
// //                             <label htmlFor="shop-image-upload" className="custom-file-upload cursor-pointer">
// //                                 {imagePreview ? (
// //                                     <img
// //                                         className="w-24 h-24 border-2 rounded-full object-cover"
// //                                         src={imagePreview}
// //                                         alt="Shop"
// //                                     />
// //                                 ) : (
// //                                     <img
// //                                         src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
// //                                         className="h-24 w-24 border-2 rounded-full"
// //                                         alt="Default Shop"
// //                                     />
// //                                 )}
// //                             </label>
// //                             <input
// //                                 id="shop-image-upload"
// //                                 type="file"
// //                                 name="shopImage"
// //                                 accept="image/*"
// //                                 onChange={handleFileChange}
// //                                 className="hidden"
// //                             />
// //                         </div>

// //                         <div className="flex flex-col sm:flex-row gap-4">
// //                             <div className="w-full sm:w-1/2">
// //                                 <Input
// //                                     type="text"
// //                                     name="shopName"
// //                                     value={formData.shopName}
// //                                     onChange={handleInputChange}
// //                                     label="Shop Name"
// //                                     size="lg"
// //                                     color="green"
// //                                 />
// //                             </div>
// //                             <div className="w-full sm:w-1/2">
// //                                 <Input
// //                                     type="text"
// //                                     name="ownerName"
// //                                     value={formData.ownerName}
// //                                     onChange={handleInputChange}
// //                                     label="Owner Name"
// //                                     size="lg"
// //                                     color="green"
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="flex flex-col sm:flex-row gap-4">
// //                             <div className="w-full sm:w-1/2">
// //                                 <Input
// //                                     type="email"
// //                                     name="ownerEmail"
// //                                     value={formData.ownerEmail}
// //                                     onChange={handleInputChange}
// //                                     label="Owner Email"
// //                                     size="lg"
// //                                     color="green"
// //                                 />
// //                             </div>
// //                             <div className="w-full sm:w-1/2">
// //                                 <Input
// //                                     type="text"
// //                                     name="ownerPhoneNumber"
// //                                     value={formData.ownerPhoneNumber}
// //                                     onChange={handleInputChange}
// //                                     label="Phone Number"
// //                                     size="lg"
// //                                     color="green"
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="flex flex-col sm:flex-row gap-4">
// //                             <div className="w-full sm:w-1/2">
// //                                 <Input
// //                                     type="text"
// //                                     name="gender"
// //                                     value={formData.gender}
// //                                     onChange={handleInputChange}
// //                                     label="Gender"
// //                                     size="lg"
// //                                     color="green"
// //                                 />
// //                             </div>

// //                             <div className="w-full relative sm:w-1/2">
// //                                 <input
// //                                     type="text"
// //                                     name="selectCity"
// //                                     placeholder="Search for your city"
// //                                     value={searchTerm}
// //                                     onChange={handleCitySearch}
// //                                     className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
// //                                 />

// //                                 {isCitiesLoading && (
// //                                     <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
// //                                         <p className=" text-center">Loading cities...</p>
// //                                     </div>
// //                                 )}

// //                                 {citiesError && (
// //                                     <div className="absolute mt-1 bg-white z-10 border border-red-400 rounded-md w-full p-2">
// //                                         <p className="text-red-500 text-center">Error loading cities</p>
// //                                     </div>
// //                                 )}

// //                                 {showDropdown && filteredCities?.length > 0 && (
// //                                     <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
// //                                         {filteredCities.map((city) => (
// //                                             <div
// //                                                 key={city._id}
// //                                                 className="cursor-pointer p-2 hover:bg-green-100 transition"
// //                                                 onClick={() => handleCitySelect(city.cityName, city.stateName, city._id)}
// //                                             >
// //                                                 {city.cityName}, {city.stateName}
// //                                             </div>
// //                                         ))}
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>

// //                         <div className="flex flex-col gap-4">
// //                             <div>
// //                                 <label htmlFor="legal-doc-upload" className="custom-file-upload cursor-pointer">
// //                                     {legalDocPreview ? (
// //                                         <img
// //                                             className="w-24 h-24 border-2 rounded-md object-cover"
// //                                             src={legalDocPreview}
// //                                             alt="Legal Document"
// //                                         />
// //                                     ) : (
// //                                         <p className="text-gray-500">Upload Legal Document</p>
// //                                     )}
// //                                 </label>
// //                                 <input
// //                                     id="legal-doc-upload"
// //                                     type="file"
// //                                     name="legalDoc"
// //                                     accept="image/*"
// //                                     onChange={handleFileChange}
// //                                     className="hidden"
// //                                 />
// //                             </div>
// //                         </div>

// <div className="flex flex-col sm:flex-row gap-4">
//     <div className="w-full sm:w-1/2">

//     </div>
//     <div className="w-full sm:w-1/2">

//     </div>
// </div>

// //                         <div className="flex justify-center">
// //                             <Button
// //                                 type="submit"
// //                                 color="green"
// //                                 size="lg"
// //                                 className="w-full sm:w-1/2"
// //                                 disabled={isLoading}
// //                             >
// //                                 {isLoading ? "Updating..." : "Update Shop"}
// //                             </Button>
// //                         </div>
// //                     </form>
// //                 </DialogBody>
// //             </Dialog>
// //         </>
// //     );
// // }





// import { useEffect, useState, useRef } from "react";
// import {
//     Button,
//     Dialog,
//     DialogBody,
//     IconButton,
//     Input,
// } from "@material-tailwind/react";
// import { Edit, X } from "lucide-react";
// import toast from "react-hot-toast";
// import { useEditShopMutation } from "../../../../../redux/slices/shopApiSlice";
// import { useGetCitiesQuery } from "../../../../../redux/slices/cityApiSlice";

// export default function EditShopOwnerModal({
//     id,
//     shopImage: initialShopImage,
//     legalDoc: initialLegalDoc,
//     shopName: initialShopName,
//     ownerName: initialOwnerName,
//     ownerEmail: initialOwnerEmail,
//     ownerPhoneNumber: initialOwnerPhoneNumber,
//     gender: initialGender,
//     selectCity: initialCity,
//     lat: initialLat,
//     lng: initialLng,
// }) {
//     const [open, setOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         shopName: "",
//         ownerName: "",
//         ownerEmail: "",
//         ownerPhoneNumber: "",
//         gender: "",
//         city: "",
//         lat: "",
//         lng: "",
//         shopImage: null,
//         legalDoc: null,
//     });
//     const [imagePreview, setImagePreview] = useState(null);
//     const [legalDocPreview, setLegalDocPreview] = useState(null);
//     const fileInputRef = useRef(null);

//     const [editShop, { isLoading, isError, error, data, isSuccess }] = useEditShopMutation();

//     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();
//     const [searchTerm, setSearchTerm] = useState("");
//     const [showDropdown, setShowDropdown] = useState(false);

//     const handleCitySearch = (event) => {
//         const value = event.target.value;
//         setSearchTerm(value);
//         if (value.trim() === "") setShowDropdown(false);
//         else setShowDropdown(true);
//     };

//     const filteredCities = cities?.filter((city) =>
//         city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const handleCitySelect = (cityName, cityState, _id) => {
//         setFormData((prevState) => ({
//             ...prevState,
//             selectCity: _id,
//         }));
//         setSearchTerm(`${cityName}, ${cityState}`);
//         setShowDropdown(false);
//     };

//     const handleOpen = () => {
//         setOpen(!open);
//         if (!open) {
//             // Pre-fill form with initial values
//             setFormData({
//                 shopName: initialShopName || "",
//                 ownerName: initialOwnerName || "",
//                 ownerEmail: initialOwnerEmail || "",
//                 ownerPhoneNumber: initialOwnerPhoneNumber || "",
//                 gender: initialGender || "",
//                 city: initialCity || "",
//                 lat: initialLat || "",
//                 lng: initialLng || "",
//                 shopImage: null,
//                 legalDoc: null,
//             });

//             // Set previews for initial images
//             setImagePreview(initialShopImage?.url || null);
//             setLegalDocPreview(initialLegalDoc?.url || null);
//         }
//     };

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleFileChange = (e) => {
//         const { name, files } = e.target;
//         const file = files[0];

//         setFormData((prevState) => ({
//             ...prevState,
//             [name]: file || prevState[name],
//         }));

//         if (file && file.type.startsWith("image/")) {
//             if (name === "shopImage") {
//                 setImagePreview(URL.createObjectURL(file));  // Preview for shop image
//             } else if (name === "legalDoc") {
//                 setLegalDocPreview(URL.createObjectURL(file));  // Preview for legal document
//             }
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formDataToSend = new FormData();

//         // Add each field from formData to the FormData object
//         for (const key in formData) {
//             if (formData[key]) {
//                 if (formData[key] instanceof File) {
//                     formDataToSend.append(key, formData[key]);
//                 } else {
//                     formDataToSend.append(key, formData[key]);
//                 }
//             }
//         }

//         // Retain the initial shop image if no new image is uploaded
//         if (!formDataToSend.has("shopImage") && initialShopImage?.url) {
//             formDataToSend.append(
//                 "shopImage",
//                 JSON.stringify({
//                     url: initialShopImage.url,
//                     public_id: initialShopImage.public_id,
//                 })
//             );
//         }

//         // Retain the initial legal document if no new document is uploaded
//         if (!formDataToSend.has("legalDoc") && initialLegalDoc?.url) {
//             formDataToSend.append(
//                 "legalDoc",
//                 JSON.stringify({
//                     url: initialLegalDoc.url,
//                     public_id: initialLegalDoc.public_id,
//                 })
//             );
//         }

//         try {
//             await editShop({ id, updatedData: formDataToSend }).unwrap();
//         } catch (err) {
//             console.error("Failed to update shop:", err);
//         }
//     };

//     useEffect(() => {
//         if (isError) {
//             handleOpen();
//             toast.error(error?.data?.error || "Failed to edit shop, please try again");
//         }

//         if (isSuccess) {
//             handleOpen();
//             toast.success(data?.message);
//         }
//     }, [isError, error, isSuccess, data]);

//     return (
//         <>
//             <IconButton
//                 onClick={handleOpen}
//                 variant="text"
//                 className="hover:text-blue-900"
//             >
//                 <Edit className="h-4" />
//             </IconButton>
//             <Dialog open={open} size="xxl" handler={handleOpen} className="overflow-auto">
//                 <div className="flex items-center justify-between">
//                     <h1 className="text-xl font-bold px-5 py-3">Edit Shop Details</h1>
//                     <IconButton
//                         variant="text"
//                         onClick={handleOpen}
//                         className="px-5"
//                     >
//                         <X />
//                     </IconButton>
//                 </div>
//                 <DialogBody>
//                     <form onSubmit={handleSubmit}>
//                         <div className="grid grid-cols-1 gap-4 mb-4">

//                             <div className="flex justify-center mb-6">
//                                 <label htmlFor="shop-image-upload" className="custom-file-upload cursor-pointer">
//                                     {imagePreview ? (
//                                         <img
//                                             className="w-24 h-24 border-2 rounded-full object-cover"
//                                             src={imagePreview}
//                                             alt="Shop"
//                                         />
//                                     ) : (
//                                         <img
//                                             src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
//                                             className="h-24 w-24 border-2 rounded-full"
//                                             alt="Default Shop"
//                                         />
//                                     )}
//                                 </label>
//                                 <input
//                                     id="shop-image-upload"
//                                     type="file"
//                                     name="shopImage"
//                                     ref={fileInputRef}
//                                     accept="image/*"
//                                     onChange={handleFileChange}
//                                     className="hidden"
//                                 />
//                             </div>

//                             <Input
//                                 label="Shop Name"
//                                 name="shopName"
//                                 value={formData.shopName}
//                                 onChange={handleInputChange}

//                             />
//                             <Input
//                                 label="Owner Name"
//                                 name="ownerName"
//                                 value={formData.ownerName}
//                                 onChange={handleInputChange}

//                             />
//                             <Input
//                                 label="Owner Email"
//                                 name="ownerEmail"
//                                 value={formData.ownerEmail}
//                                 onChange={handleInputChange}

//                             />
//                             <Input
//                                 label="Owner Phone Number"
//                                 name="ownerPhoneNumber"
//                                 value={formData.ownerPhoneNumber}
//                                 onChange={handleInputChange}

//                             />
//                             <Input
//                                 label="Gender"
//                                 name="gender"
//                                 value={formData.gender}
//                                 onChange={handleInputChange}

//                             />
//                             <Input
//                                 label="Latitude"
//                                 name="lat"
//                                 value={formData.lat}
//                                 onChange={handleInputChange}

//                             />
//                             <Input
//                                 label="Longitude"
//                                 name="lng"
//                                 value={formData.lng}
//                                 onChange={handleInputChange}
//                             />

//                             <div className="relative">
//                                 <Input
//                                     label="City"
//                                     name="city"
//                                     value={searchTerm}
//                                     onChange={handleCitySearch}

//                                 />
//                                 {showDropdown && (
//                                     <ul className="absolute w-full bg-white z-10 border rounded shadow">
//                                         {filteredCities.map((city) => (
//                                             <li
//                                                 key={city._id}
//                                                 onClick={() => handleCitySelect(city.cityName, city.cityState, city._id)}
//                                                 className="cursor-pointer hover:bg-gray-200 p-2"
//                                             >
//                                                 {city.cityName}, {city.cityState}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>

//                             <div className="flex flex-col pt-2 border border-green-200 p-2">

//                                 <label className="block font-bold mb-2">Legal Document</label>

//                                 <input
//                                      type="file"
//                                      name="legalDoc"
//                                      ref={fileInputRef}
//                                      accept="image/*"
//                                      onChange={handleFileChange}
//                                     className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
//                                 />


//                             </div>

//                             <div className="border border-green-200 p-2">
//                             {legalDocPreview && (
//                                     <img src={legalDocPreview} alt="Legal Doc Preview" className="mb-2 w-96 h-80" />
//                                 )}

//                             </div>


//                             <Button type="submit" fullWidth disabled={isLoading}>
//                                 {isLoading ? "Updating..." : "Update Shop"}
//                             </Button>
//                         </div>
//                     </form>
//                 </DialogBody>
//             </Dialog>
//         </>
//     );
// }


import { useEffect, useState, useRef } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    IconButton,
    Input,
} from "@material-tailwind/react";
import { Edit, X } from "lucide-react";
import toast from "react-hot-toast";
import { useEditShopMutation } from "../../../../../redux/slices/shopApiSlice";
import { useGetCitiesQuery } from "../../../../../redux/slices/cityApiSlice";

export default function EditShopOwnerModal({
    id,
    shopImage: initialShopImage,
    legalDoc: initialLegalDoc,
    shopName: initialShopName,
    ownerName: initialOwnerName,
    ownerEmail: initialOwnerEmail,
    ownerPhoneNumber: initialOwnerPhoneNumber,
    gender: initialGender,
    selectCity: initialCity,
    lat: initialLat,
    lng: initialLng,
}) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        shopName: "",
        ownerName: "",
        ownerEmail: "",
        ownerPhoneNumber: "",
        gender: "",
        city: "",
        lat: "",
        lng: "",
        shopImage: null,
        legalDoc: null,
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [legalDocPreview, setLegalDocPreview] = useState(null);
    const fileInputRef = useRef(null);

    const [editShop, { isLoading, isError, error, data, isSuccess }] = useEditShopMutation();
    const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

    const [searchTerm, setSearchTerm] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [isFormChanged, setIsFormChanged] = useState(false);

    const handleCitySearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        if (value.trim() === "") setShowDropdown(false);
        else setShowDropdown(true);
    };

    const filteredCities = cities?.filter((city) =>
        city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCitySelect = (cityName, cityState, _id) => {
        setFormData((prevState) => ({
            ...prevState,
            selectCity: _id,
        }));
        setSearchTerm(`${cityName}, ${cityState}`);
        setShowDropdown(false);
    };

    const handleOpen = () => {
        setOpen(!open);
        if (!open) {
            // Pre-fill form with initial values
            setFormData({
                shopName: initialShopName || "",
                ownerName: initialOwnerName || "",
                ownerEmail: initialOwnerEmail || "",
                ownerPhoneNumber: initialOwnerPhoneNumber || "",
                gender: initialGender || "",
                city: initialCity || "",
                lat: initialLat || "",
                lng: initialLng || "",
                shopImage: null,
                legalDoc: null,
            });

            // Set previews for initial images
            setImagePreview(initialShopImage?.url || null);
            setLegalDocPreview(initialLegalDoc?.url || null);
            setSearchTerm(`${initialCity?.cityName || ""}, ${initialCity?.cityState || ""}`);
            setIsFormChanged(false); // Reset form change status
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        checkFormChanges();
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        setFormData((prevState) => ({
            ...prevState,
            [name]: file || prevState[name],
        }));

        if (file && file.type.startsWith("image/")) {
            if (name === "shopImage") {
                setImagePreview(URL.createObjectURL(file));  // Preview for shop image
            } else if (name === "legalDoc") {
                setLegalDocPreview(URL.createObjectURL(file));  // Preview for legal document
            }
        }
        checkFormChanges();
    };

    const [genderDropdownOpen, setGenderDropdownOpen] = useState(false);

    const genders = ["male", "female", "other"];

    const handleGenderSelect = (selectedGender) => {
        setFormData({ ...formData, gender: selectedGender });
        setGenderDropdownOpen(false);
        checkFormChanges();
    };

    const handleGenderToggle = () => {
        setGenderDropdownOpen(!genderDropdownOpen);
    };

    const checkFormChanges = () => {
        const isChanged =
            formData.shopName !== initialShopName ||
            formData.ownerName !== initialOwnerName ||
            formData.ownerEmail !== initialOwnerEmail ||
            formData.ownerPhoneNumber !== initialOwnerPhoneNumber ||
            formData.gender !== (initialGender || "") || // Compare selected gender with the initial one
            formData.city !== initialCity?._id || // Compare city IDs to detect changes
            formData.lat !== initialLat ||
            formData.lng !== initialLng ||
            formData.shopImage !== null || // Check if a new shop image is selected
            formData.legalDoc !== null; // Check if a new legal doc is selected

        setIsFormChanged(isChanged);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        // Add each field from formData to the FormData object
        for (const key in formData) {
            if (formData[key]) {
                if (formData[key] instanceof File) {
                    formDataToSend.append(key, formData[key]);
                } else {
                    formDataToSend.append(key, formData[key]);
                }
            }
        }

        // Retain the initial shop image if no new image is uploaded
        if (!formDataToSend.has("shopImage") && initialShopImage?.url) {
            formDataToSend.append(
                "shopImage",
                JSON.stringify({
                    url: initialShopImage.url,
                    public_id: initialShopImage.public_id,
                })
            );
        }

        // Retain the initial legal document if no new document is uploaded
        if (!formDataToSend.has("legalDoc") && initialLegalDoc?.url) {
            formDataToSend.append(
                "legalDoc",
                JSON.stringify({
                    url: initialLegalDoc.url,
                    public_id: initialLegalDoc.public_id,
                })
            );
        }

        try {
            await editShop({ id, updatedData: formDataToSend }).unwrap();
        } catch (err) {
            console.error("Failed to update shop:", err);
        }
    };

    useEffect(() => {
        if (isError) {
            handleOpen();
            toast.error(error?.data?.error || "Failed to edit shop, please try again");
        }

        if (isSuccess) {
            handleOpen();
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
                <Edit className="h-4" />
            </IconButton>
            <Dialog open={open} size="xxl" handler={handleOpen} className="shadow-none hover:shadow-none rounded-none bg-green-50 overflow-scroll">
                <div className="px-4 py-4">
                    <h1 className="text-xl text-black font-bold">Edit Employee</h1>
                    <div
                        className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-500 cursor-pointer "
                        onClick={handleOpen}
                    >
                        <X size={20} className="text-green-100 hover:text-white" />
                    </div>
                </div>
                <DialogBody>
                    <form onSubmit={handleSubmit}>
                        {/* <pre>{JSON.stringify(initialCity, null, 2)}</pre> */}
                        <div className="grid grid-cols-1 gap-4 mb-4">

                            <div className="flex justify-center mb-6">
                                <label htmlFor="shop-image-upload" className="custom-file-upload cursor-pointer shadow-md rounded-full">
                                    {imagePreview ? (
                                        <img
                                            className="w-24 h-24 border-2 rounded-full object-cover border-green-200"
                                            src={imagePreview}
                                            alt="Shop"
                                        />
                                    ) : (
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                                            className="h-24 w-24 border-2 rounded-full"
                                            alt="Default Shop"
                                        />
                                    )}
                                </label>
                                <input
                                    id="shop-image-upload"
                                    type="file"
                                    name="shopImage"
                                    ref={fileInputRef}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>


                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="w-full sm:w-1/2">
                                    <Input
                                        label="Shop Name"
                                        name="shopName"
                                        value={formData.shopName}
                                        onChange={handleInputChange}
                                        color="green"
                                        className=" app-font"
                                    />
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <Input
                                        label="Owner Name"
                                        name="ownerName"
                                        value={formData.ownerName}
                                        onChange={handleInputChange}
                                        color="green"
                                        className=" app-font"
                                    />
                                </div>
                            </div>


                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="w-full sm:w-1/2">
                                    <Input
                                        label="Owner Email"
                                        name="ownerEmail"
                                        value={formData.ownerEmail}
                                        onChange={handleInputChange}
                                        color="green"
                                          className=" app-font"
                                    />
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <Input
                                        label="Owner Phone Number"
                                        name="ownerPhoneNumber"
                                        value={formData.ownerPhoneNumber}
                                        onChange={handleInputChange}
                                        color="green"
                                          className=" app-font"
                                    />
                                </div>
                            </div>


                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="w-full sm:w-1/2 relative">
                                    <div
                                        className="border border-gray-500 p-2 rounded-md cursor-pointer capitalize app-font"
                                        onClick={handleGenderToggle}
                                    >
                                        {formData.gender || "Select Gender"}
                                    </div>
                                    {genderDropdownOpen && (
                                        <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-md w-full shadow-lg">
                                            {genders.map((gender) => (
                                                <div
                                                    key={gender}
                                                    className="p-2 hover:bg-gray-100 cursor-pointer capitalize app-font"
                                                    onClick={() => handleGenderSelect(gender)}
                                                >
                                                    {gender}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="w-full sm:w-1/2">

                                    <div className="relative">
                                        <Input
                                            label="Search City"
                                            name="city"
                                            value={searchTerm}
                                            onChange={handleCitySearch}
                                            color="green"
                                              className=" app-font capitalize"
                                        />
                                        {isCitiesLoading && (
                                            <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
                                                <p className=" text-center">Loading cities...</p>
                                            </div>
                                        )}

                                        <pre>{JSON.stringify(citiesError)}</pre>

                                        {citiesError && (
                                            <div className="absolute mt-1 bg-green-200 z-10 border border-red-400 rounded-md w-full p-2">
                                                <p className="text-red-500 text-center">{citiesError?.data?.error}</p>
                                            </div>
                                        )}

                                        {showDropdown && !isCitiesLoading && !citiesError && filteredCities?.length > 0 && (
                                            <div className="absolute mt-1 bg-green-100 z-10 border border-gray-400 app-font rounded-md w-full max-h-40 overflow-y-auto">
                                                {filteredCities.map((city) => (
                                                    <div
                                                        key={city.id}
                                                        onClick={() => handleCitySelect(city.cityName, city.cityState, city._id)}
                                                        className="cursor-pointer p-2 hover:bg-gray-200 app-font text-green-700 capitalize"
                                                    >
                                                        {city.cityName}, {city.cityState}
                                                    </div>
                                                ))}
                                            </div>
                                        )}


                                        {/* {!isCitiesLoading && !citiesError && showDropdown && filteredCities.length === 0 && (
                                            <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
                                                <p className=" text-center">No cities found.</p>
                                            </div>
                                        )} */}
                                    </div>
                                </div>
                            </div>


                            {/* <div className="flex flex-col sm:flex-row gap-4">
                                <div className="w-full sm:w-1/2">

                                    <Input
                                label="Longitude"
                                name="lng"
                                value={formData.lng}
                                onChange={handleInputChange}
                            />

                                </div>
                                <div className="w-full sm:w-1/2">

                                    <div className="relative">
                                        <Input
                                            label="City"
                                            name="city"
                                            value={searchTerm}
                                            onChange={handleCitySearch}
                                        />
                                        {isCitiesLoading && (
                                            <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
                                                <p className=" text-center">Loading cities...</p>
                                            </div>
                                        )}

                                        {citiesError && (
                                            <div className="absolute mt-1 bg-white z-10 border border-red-400 rounded-md w-full p-2">
                                                <p className="text-red-500 text-center">{citiesError?.data?.error}</p>
                                            </div>
                                        )}

                                        {showDropdown && !isCitiesLoading && !citiesError && filteredCities?.length > 0 && (
                                            <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full max-h-40 overflow-y-auto">
                                                {filteredCities.map((city) => (
                                                    <div
                                                        key={city.id}
                                                        onClick={() => handleCitySelect(city.cityName, city.cityState, city._id)}
                                                        className="cursor-pointer p-2 hover:bg-gray-200"
                                                    >
                                                        {city.cityName}, {city.cityState}
                                                    </div>
                                                ))}
                                            </div>
                                        )}


                                        {!isCitiesLoading && !citiesError && showDropdown && filteredCities.length === 0 && (
                                            <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
                                                <p className=" text-center">No cities found.</p>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div> */}










                            <div className="flex flex-col pt-2 border border-green-200 p-2">
                                <label className="block font-bold mb-2">Legal Document</label>
                                <input
                                    type="file"
                                    name="legalDoc"
                                    ref={fileInputRef}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
                                />
                            </div>

                            <div className="border border-green-200 p-2 flex justify-center">
                                {legalDocPreview && (
                                    <img src={legalDocPreview} alt="Legal Doc Preview" className="mb-2 w-96 h-80" />
                                )}
                            </div>

                            <Button type="submit" fullWidth disabled={isLoading || !isFormChanged}>
                                {isLoading ? "Updating..." : "Update Shop"}
                            </Button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}
