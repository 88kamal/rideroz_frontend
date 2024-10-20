// // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // /* eslint-disable no-unused-vars */
// // // // // // // // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // // //     Button,
// // // // // // // // // // // // // // // //     Dialog,
// // // // // // // // // // // // // // // //     DialogHeader,
// // // // // // // // // // // // // // // //     DialogBody,
// // // // // // // // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // // // // // // // import { AiOutlineEnvironment } from "react-icons/ai";
// // // // // // // // // // // // // // // // import { Locate, X } from "lucide-react";
// // // // // // // // // // // // // // // // import toast from 'react-hot-toast';
// // // // // // // // // // // // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";




// // // // // // // // // // // // // // // // export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
// // // // // // // // // // // // // // // //     const [open, setOpen] = useState(false);

// // // // // // // // // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // // // // // // // // //     // Fetching cities with the query hook
// // // // // // // // // // // // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// // // // // // // // // // // // // // // //     // Detect current location function
// // // // // // // // // // // // // // // //     const detectLocation = () => {
// // // // // // // // // // // // // // // //         if (navigator.geolocation) {
// // // // // // // // // // // // // // // //             // toast.success("Detecting your location...");
// // // // // // // // // // // // // // // //             handleOpen()
// // // // // // // // // // // // // // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// // // // // // // // // // // // // // // //         } else {
// // // // // // // // // // // // // // // //             toast.error("Geolocation is not supported by your browser.");
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // //     const successCallback = async (position) => {
// // // // // // // // // // // // // // // //         const { latitude, longitude } = position.coords;

// // // // // // // // // // // // // // // //         // Reverse Geocoding using Google Maps API or similar service
// // // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // // //             const response = await axios.get(
// // // // // // // // // // // // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // // // // // // // // // // // //             );
// // // // // // // // // // // // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // // // // // // // // // // // //                 component.types.includes("locality")
// // // // // // // // // // // // // // // //             ).long_name;

// // // // // // // // // // // // // // // //             // Set the detected city
// // // // // // // // // // // // // // // //             setSelectedCity(city);
// // // // // // // // // // // // // // // //             handleOpen(); // Close the dialog after detection

// // // // // // // // // // // // // // // //             // Show success toast
// // // // // // // // // // // // // // // //             toast.success(`You are currently in ${city}`);
// // // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // // //             toast.error("Failed to fetch location details.");
// // // // // // // // // // // // // // // //             console.error("Error fetching location details: ", error);
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // //     const errorCallback = (error) => {
// // // // // // // // // // // // // // // //         console.error("Error detecting location: ", error);
// // // // // // // // // // // // // // // //         toast.error("Unable to detect location. Please try again.");
// // // // // // // // // // // // // // // //     };


// // // // // // // // // // // // // // // //     const CityCard = ({ cityImage, _id, cityName, cityState, priority, }) => (
// // // // // // // // // // // // // // // //         <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => {
// // // // // // // // // // // // // // // //             setSelectedCity(cityName);
// // // // // // // // // // // // // // // //             handleOpen();
// // // // // // // // // // // // // // // //         }}>
// // // // // // // // // // // // // // // //             {/* <pre>{JSON.stringify(cityImage?.url)}</pre> */}
// // // // // // // // // // // // // // // //             <img
// // // // // // // // // // // // // // // //                 src={cityImage?.url}
// // // // // // // // // // // // // // // //                 alt={cityName}
// // // // // // // // // // // // // // // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // // // // // // // // // // // // //                 {cityName}
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //             {/* {isNew && (
// // // // // // // // // // // // // // // //                 <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // // // // // // // // // // //                     New
// // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // //             )} */}
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //     );

// // // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // // //         <>
// // // // // // // // // // // // // // // //             <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
// // // // // // // // // // // // // // // //                 {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
// // // // // // // // // // // // // // // //                 <AiOutlineEnvironment className="text-gray-500" size={20} />
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // // // // // // // // // // // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // // // // // // // // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // // // // // // // // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // // // // // // // // // // // //                         <X color=" black" size={20} />
// // // // // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // // // // // // // // // // // //                         <Button
// // // // // // // // // // // // // // // //                             variant=""
// // // // // // // // // // // // // // // //                             onClick={detectLocation} // Call detectLocation on click
// // // // // // // // // // // // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // // //                             <Locate size={20} />
// // // // // // // // // // // // // // // //                             Detect Current Location
// // // // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // // // // // // // // // // // //                             <X color=" black" size={20} />
// // // // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                 </DialogHeader>
// // // // // // // // // // // // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // // // // // // // // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // // // // // // // // // // // //                         {cities?.map((city) => (
// // // // // // // // // // // // // // // //                             <CityCard key={city.name} {...city} />
// // // // // // // // // // // // // // // //                         ))}
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                 </DialogBody>
// // // // // // // // // // // // // // // //             </Dialog>
// // // // // // // // // // // // // // // //         </>
// // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // }



// // // // // // // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // //     Button,
// // // // // // // // // // // // // // //     Dialog,
// // // // // // // // // // // // // // //     DialogHeader,
// // // // // // // // // // // // // // //     DialogBody,
// // // // // // // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // // // // // // import { AiOutlineEnvironment } from "react-icons/ai";
// // // // // // // // // // // // // // // import { Locate, X } from "lucide-react";
// // // // // // // // // // // // // // // import toast from 'react-hot-toast';
// // // // // // // // // // // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // // // // // // // // // // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";

// // // // // // // // // // // // // // // export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
// // // // // // // // // // // // // // //     const [open, setOpen] = useState(false);
// // // // // // // // // // // // // // //     const [lat, setLat] = useState(null); // State to hold latitude
// // // // // // // // // // // // // // //     const [lng, setLng] = useState(null); // State to hold longitude
// // // // // // // // // // // // // // //     const maxDistance = 50; // Set the maximum distance for vehicle search

// // // // // // // // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // // // // // // // //     // Fetching cities with the query hook
// // // // // // // // // // // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// // // // // // // // // // // // // // //     // Fetching vehicles nearby based on lat, lng, and maxDistance
// // // // // // // // // // // // // // //     const { data: vehicles, error: vehiclesError, isLoading: isVehiclesLoading } = useGetVehiclesNearbyQuery({
// // // // // // // // // // // // // // //         lat,
// // // // // // // // // // // // // // //         lng,
// // // // // // // // // // // // // // //         maxDistance,
// // // // // // // // // // // // // // //     }, { skip: !lat || !lng }); // Skip fetching if lat or lng is not available

// // // // // // // // // // // // // // //     // Detect current location function
// // // // // // // // // // // // // // //     const detectLocation = () => {
// // // // // // // // // // // // // // //         if (navigator.geolocation) {
// // // // // // // // // // // // // // //             handleOpen();
// // // // // // // // // // // // // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// // // // // // // // // // // // // // //         } else {
// // // // // // // // // // // // // // //             toast.error("Geolocation is not supported by your browser.");
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     const successCallback = async (position) => {
// // // // // // // // // // // // // // //         const { latitude, longitude } = position.coords;

// // // // // // // // // // // // // // //         setLat(latitude); // Set latitude
// // // // // // // // // // // // // // //         setLng(longitude); // Set longitude

// // // // // // // // // // // // // // //         // Reverse Geocoding using Google Maps API or similar service
// // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // //             const response = await axios.get(
// // // // // // // // // // // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // // // // // // // // // // //             );
// // // // // // // // // // // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // // // // // // // // // // //                 component.types.includes("locality")
// // // // // // // // // // // // // // //             ).long_name;

// // // // // // // // // // // // // // //             // Set the detected city
// // // // // // // // // // // // // // //             setSelectedCity(city);
// // // // // // // // // // // // // // //             handleOpen(); // Close the dialog after detection

// // // // // // // // // // // // // // //             // Show success toast
// // // // // // // // // // // // // // //             toast.success(`You are currently in ${city}`);
// // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // //             toast.error("Failed to fetch location details.");
// // // // // // // // // // // // // // //             console.error("Error fetching location details: ", error);
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     const errorCallback = (error) => {
// // // // // // // // // // // // // // //         console.error("Error detecting location: ", error);
// // // // // // // // // // // // // // //         toast.error("Unable to detect location. Please try again.");
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     const CityCard = ({ cityImage, _id, cityName, cityState, priority }) => (
// // // // // // // // // // // // // // //         <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => {
// // // // // // // // // // // // // // //             setSelectedCity(cityName);
// // // // // // // // // // // // // // //             handleOpen();
// // // // // // // // // // // // // // //         }}>
// // // // // // // // // // // // // // //             <img
// // // // // // // // // // // // // // //                 src={cityImage?.url}
// // // // // // // // // // // // // // //                 alt={cityName}
// // // // // // // // // // // // // // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // // // // // // // // // // // //                 {cityName}
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //     );

// // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // //         <>
// // // // // // // // // // // // // // //             <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
// // // // // // // // // // // // // // //                 {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
// // // // // // // // // // // // // // //                 <AiOutlineEnvironment className="text-gray-500" size={20} />
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // // // // // // // // // // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // // // // // // // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // // // // // // // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // // // // // // // // // // //                         <X color="black" size={20} />
// // // // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // // // // // // // // // // //                         <Button
// // // // // // // // // // // // // // //                             variant=""
// // // // // // // // // // // // // // //                             onClick={detectLocation} // Call detectLocation on click
// // // // // // // // // // // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // //                             <Locate size={20} />
// // // // // // // // // // // // // // //                             Detect Current Location
// // // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // // // // // // // // // // //                             <X color="black" size={20} />
// // // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                 </DialogHeader>
// // // // // // // // // // // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // // // // // // // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // // // // // // // // // // //                         {isCitiesLoading ? <p>Loading cities...</p> : cities?.map((city) => (
// // // // // // // // // // // // // // //                             <CityCard key={city._id} {...city} />
// // // // // // // // // // // // // // //                         ))}
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                     <div className="mt-6">
// // // // // // // // // // // // // // //                     {isVehiclesLoading ? <p>Loading vehicles...</p> : vehicles?.vehicles?.length > 0 ? (
// // // // // // // // // // // // // // //                             <div className="flex flex-wrap gap-4">
// // // // // // // // // // // // // // //                                 {vehicles?.vehicles?.map(vehicle => (
// // // // // // // // // // // // // // //                                     <div key={vehicle.id} className="p-2 border border-gray-300 rounded-md">
// // // // // // // // // // // // // // //                                         <img className="w-20 h-10" src={vehicle?.vehicleImage[0]?.url} alt="" />
// // // // // // // // // // // // // // //                                         <p>{vehicle.vehicleName}</p>
// // // // // // // // // // // // // // //                                     </div>
// // // // // // // // // // // // // // //                                 ))}
// // // // // // // // // // // // // // //                             </div>
// // // // // // // // // // // // // // //                         ) : (
// // // // // // // // // // // // // // //                             <p>No vehicles found nearby.</p>
// // // // // // // // // // // // // // //                         )}
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                 </DialogBody>
// // // // // // // // // // // // // // //             </Dialog>
// // // // // // // // // // // // // // //         </>
// // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // // // import {
// // // // // // // // // // // // // //     Button,
// // // // // // // // // // // // // //     Dialog,
// // // // // // // // // // // // // //     DialogHeader,
// // // // // // // // // // // // // //     DialogBody,
// // // // // // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // // // // // import { AiOutlineEnvironment } from "react-icons/ai";
// // // // // // // // // // // // // // import { Locate, X } from "lucide-react";
// // // // // // // // // // // // // // import toast from 'react-hot-toast';
// // // // // // // // // // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // // // // // // // // // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";

// // // // // // // // // // // // // // export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
// // // // // // // // // // // // // //     const [open, setOpen] = useState(false);
// // // // // // // // // // // // // //     const [lat, setLat] = useState(() => localStorage.getItem('lat') || null); // Retrieve lat from localStorage
// // // // // // // // // // // // // //     const [lng, setLng] = useState(() => localStorage.getItem('lng') || null); // Retrieve lng from localStorage
// // // // // // // // // // // // // //     const maxDistance = 50; // Set the maximum distance for vehicle search

// // // // // // // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // // // // // // //     // Fetching cities with the query hook
// // // // // // // // // // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// // // // // // // // // // // // // //     // Fetching vehicles nearby based on lat, lng, and maxDistance
// // // // // // // // // // // // // //     const { data: vehicles, error: vehiclesError, isLoading: isVehiclesLoading } = useGetVehiclesNearbyQuery({
// // // // // // // // // // // // // //         lat,
// // // // // // // // // // // // // //         lng,
// // // // // // // // // // // // // //         maxDistance,
// // // // // // // // // // // // // //     }, { skip: !lat || !lng }); // Skip fetching if lat or lng is not available

// // // // // // // // // // // // // //     // Detect current location function
// // // // // // // // // // // // // //     const detectLocation = () => {
// // // // // // // // // // // // // //         if (navigator.geolocation) {
// // // // // // // // // // // // // //             handleOpen();
// // // // // // // // // // // // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// // // // // // // // // // // // // //         } else {
// // // // // // // // // // // // // //             toast.error("Geolocation is not supported by your browser.");
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     const successCallback = async (position) => {
// // // // // // // // // // // // // //         const { latitude, longitude } = position.coords;

// // // // // // // // // // // // // //         setLat(latitude); // Set latitude
// // // // // // // // // // // // // //         setLng(longitude); // Set longitude
// // // // // // // // // // // // // //         localStorage.setItem('lat', latitude); // Store latitude in localStorage
// // // // // // // // // // // // // //         localStorage.setItem('lng', longitude); // Store longitude in localStorage

// // // // // // // // // // // // // //         // Reverse Geocoding using Google Maps API or similar service
// // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // //             const response = await axios.get(
// // // // // // // // // // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // // // // // // // // // //             );
// // // // // // // // // // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // // // // // // // // // //                 component.types.includes("locality")
// // // // // // // // // // // // // //             ).long_name;

// // // // // // // // // // // // // //             // Set the detected city
// // // // // // // // // // // // // //             setSelectedCity(city);
// // // // // // // // // // // // // //             handleOpen(); // Close the dialog after detection

// // // // // // // // // // // // // //             // Show success toast
// // // // // // // // // // // // // //             toast.success(`You are currently in ${city}`);
// // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // //             toast.error("Failed to fetch location details.");
// // // // // // // // // // // // // //             console.error("Error fetching location details: ", error);
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     const errorCallback = (error) => {
// // // // // // // // // // // // // //         console.error("Error detecting location: ", error);
// // // // // // // // // // // // // //         toast.error("Unable to detect location. Please try again.");
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     const CityCard = ({ cityImage, _id, cityName, cityState, priority }) => (
// // // // // // // // // // // // // //         <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => {
// // // // // // // // // // // // // //             setSelectedCity(cityName);
// // // // // // // // // // // // // //             handleOpen();
// // // // // // // // // // // // // //         }}>
// // // // // // // // // // // // // //             <img
// // // // // // // // // // // // // //                 src={cityImage?.url}
// // // // // // // // // // // // // //                 alt={cityName}
// // // // // // // // // // // // // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // // // // // // // // // // //                 {cityName}
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //     );

// // // // // // // // // // // // // //     // Clear lat and lng from localStorage when the user manually selects a city
// // // // // // // // // // // // // //     const handleCitySelect = (cityName) => {
// // // // // // // // // // // // // //         setSelectedCity(cityName);
// // // // // // // // // // // // // //         localStorage.removeItem('lat');
// // // // // // // // // // // // // //         localStorage.removeItem('lng');
// // // // // // // // // // // // // //         handleOpen();
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //         <>
// // // // // // // // // // // // // //             <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
// // // // // // // // // // // // // //                 {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
// // // // // // // // // // // // // //                 <AiOutlineEnvironment className="text-gray-500" size={20} />
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // // // // // // // // // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // // // // // // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // // // // // // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // // // // // // // // // //                         <X color="black" size={20} />
// // // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // // // // // // // // // //                         <Button
// // // // // // // // // // // // // //                             variant=""
// // // // // // // // // // // // // //                             onClick={detectLocation} // Call detectLocation on click
// // // // // // // // // // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // //                             <Locate size={20} />
// // // // // // // // // // // // // //                             Detect Current Location
// // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // // // // // // // // // //                             <X color="black" size={20} />
// // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // //                 </DialogHeader>
// // // // // // // // // // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // // // // // // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // // // // // // // // // //                         {isCitiesLoading ? <p>Loading cities...</p> : cities?.map((city) => (
// // // // // // // // // // // // // //                             <CityCard key={city._id} {...city} onClick={() => handleCitySelect(city.cityName)} />
// // // // // // // // // // // // // //                         ))}
// // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // //                     <div className="mt-6">
// // // // // // // // // // // // // //                     {isVehiclesLoading ? <p>Loading vehicles...</p> : vehicles?.vehicles?.length > 0 ? (
// // // // // // // // // // // // // //                             <div className="flex flex-wrap gap-4">
// // // // // // // // // // // // // //                                 {vehicles?.vehicles?.map(vehicle => (
// // // // // // // // // // // // // //                                     <div key={vehicle.id} className="p-2 border border-gray-300 rounded-md">
// // // // // // // // // // // // // //                                         <img className="w-20 h-10" src={vehicle?.vehicleImage[0]?.url} alt="" />
// // // // // // // // // // // // // //                                         <p>{vehicle.vehicleName}</p>
// // // // // // // // // // // // // //                                     </div>
// // // // // // // // // // // // // //                                 ))}
// // // // // // // // // // // // // //                             </div>
// // // // // // // // // // // // // //                         ) : (
// // // // // // // // // // // // // //                             <p>No vehicles found nearby.</p>
// // // // // // // // // // // // // //                         )}
// // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // //                 </DialogBody>
// // // // // // // // // // // // // //             </Dialog>
// // // // // // // // // // // // // //         </>
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // }


// // // // // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //     Button,
// // // // // // // // // // // // //     Dialog,
// // // // // // // // // // // // //     DialogHeader,
// // // // // // // // // // // // //     DialogBody,
// // // // // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // // // // import { AiOutlineEnvironment } from "react-icons/ai";
// // // // // // // // // // // // // import { Locate, X } from "lucide-react";
// // // // // // // // // // // // // import toast from 'react-hot-toast';
// // // // // // // // // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // // // // // // // // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";

// // // // // // // // // // // // // export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
// // // // // // // // // // // // //     const [open, setOpen] = useState(false);
// // // // // // // // // // // // //     const [lat, setLat] = useState(() => localStorage.getItem('lat') || null); // Retrieve lat from localStorage
// // // // // // // // // // // // //     const [lng, setLng] = useState(() => localStorage.getItem('lng') || null); // Retrieve lng from localStorage
// // // // // // // // // // // // //     const maxDistance = 50; // Set the maximum distance for vehicle search

// // // // // // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // // // // // //     // Automatically open modal if lat, lng, or selectedCity is not available
// // // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // // //         if (!lat || !lng || !selectedCity) {
// // // // // // // // // // // // //             setOpen(true);
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //     }, [lat, lng, selectedCity]);

// // // // // // // // // // // // //     // Fetching cities with the query hook
// // // // // // // // // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// // // // // // // // // // // // //     // Fetching vehicles nearby based on lat, lng, and maxDistance
// // // // // // // // // // // // //     const { data: vehicles, error: vehiclesError, isLoading: isVehiclesLoading } = useGetVehiclesNearbyQuery({
// // // // // // // // // // // // //         lat,
// // // // // // // // // // // // //         lng,
// // // // // // // // // // // // //         maxDistance,
// // // // // // // // // // // // //     }, { skip: !lat || !lng }); // Skip fetching if lat or lng is not available

// // // // // // // // // // // // //     // Detect current location function
// // // // // // // // // // // // //     const detectLocation = () => {
// // // // // // // // // // // // //         if (navigator.geolocation) {
// // // // // // // // // // // // //             handleOpen();
// // // // // // // // // // // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// // // // // // // // // // // // //         } else {
// // // // // // // // // // // // //             toast.error("Geolocation is not supported by your browser.");
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     const successCallback = async (position) => {
// // // // // // // // // // // // //         const { latitude, longitude } = position.coords;

// // // // // // // // // // // // //         setLat(latitude); // Set latitude
// // // // // // // // // // // // //         setLng(longitude); // Set longitude
// // // // // // // // // // // // //         localStorage.setItem('lat', latitude); // Store latitude in localStorage
// // // // // // // // // // // // //         localStorage.setItem('lng', longitude); // Store longitude in localStorage

// // // // // // // // // // // // //         // Reverse Geocoding using Google Maps API or similar service
// // // // // // // // // // // // //         try {
// // // // // // // // // // // // //             const response = await axios.get(
// // // // // // // // // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // // // // // // // // //             );
// // // // // // // // // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // // // // // // // // //                 component.types.includes("locality")
// // // // // // // // // // // // //             ).long_name;

// // // // // // // // // // // // //             // Set the detected city
// // // // // // // // // // // // //             setSelectedCity(city);
// // // // // // // // // // // // //             handleOpen(); // Close the dialog after detection

// // // // // // // // // // // // //             // Show success toast
// // // // // // // // // // // // //             toast.success(`You are currently in ${city}`);
// // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // //             toast.error("Failed to fetch location details.");
// // // // // // // // // // // // //             console.error("Error fetching location details: ", error);
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     const errorCallback = (error) => {
// // // // // // // // // // // // //         console.error("Error detecting location: ", error);
// // // // // // // // // // // // //         toast.error("Unable to detect location. Please try again.");
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     const CityCard = ({ cityImage, _id, cityName, cityState, priority }) => (
// // // // // // // // // // // // //         <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => {
// // // // // // // // // // // // //             setSelectedCity(cityName);
// // // // // // // // // // // // //             handleOpen();
// // // // // // // // // // // // //         }}>
// // // // // // // // // // // // //             <img
// // // // // // // // // // // // //                 src={cityImage?.url}
// // // // // // // // // // // // //                 alt={cityName}
// // // // // // // // // // // // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // // // // // // // // // //                 {cityName}
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //     );

// // // // // // // // // // // // //     // Clear lat and lng from localStorage when the user manually selects a city
// // // // // // // // // // // // //     const handleCitySelect = (cityName) => {
// // // // // // // // // // // // //         setSelectedCity(cityName);
// // // // // // // // // // // // //         localStorage.removeItem('lat');
// // // // // // // // // // // // //         localStorage.removeItem('lng');
// // // // // // // // // // // // //         handleOpen();
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //         <>
// // // // // // // // // // // // //             <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
// // // // // // // // // // // // //                 {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
// // // // // // // // // // // // //                 <AiOutlineEnvironment className="text-gray-500" size={20} />
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // // // // // // // // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // // // // // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // // // // // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // // // // // // // // //                         <X color="black" size={20} />
// // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // // // // // // // // //                         <Button
// // // // // // // // // // // // //                             variant=""
// // // // // // // // // // // // //                             onClick={detectLocation} // Call detectLocation on click
// // // // // // // // // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // // // // // // // // //                         >
// // // // // // // // // // // // //                             <Locate size={20} />
// // // // // // // // // // // // //                             Detect Current Location
// // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // // // // // // // // //                             <X color="black" size={20} />
// // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // //                 </DialogHeader>
// // // // // // // // // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // // // // // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // // // // // // // // //                         {isCitiesLoading ? <p>Loading cities...</p> : cities?.map((city) => (
// // // // // // // // // // // // //                             <CityCard key={city._id} {...city} onClick={() => handleCitySelect(city.cityName)} />
// // // // // // // // // // // // //                         ))}
// // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // //                     <div className="mt-6">
// // // // // // // // // // // // //                         {isVehiclesLoading ? <p>Loading vehicles...</p> : vehicles?.vehicles?.length > 0 ? (
// // // // // // // // // // // // //                             <div className="flex flex-wrap gap-4">
// // // // // // // // // // // // //                                 {vehicles?.vehicles?.map(vehicle => (
// // // // // // // // // // // // //                                     <div key={vehicle.id} className="p-2 border border-gray-300 rounded-md">
// // // // // // // // // // // // //                                         <img className="w-20 h-10" src={vehicle?.vehicleImage[0]?.url} alt="" />
// // // // // // // // // // // // //                                         <p>{vehicle.vehicleName}</p>
// // // // // // // // // // // // //                                     </div>
// // // // // // // // // // // // //                                 ))}
// // // // // // // // // // // // //                             </div>
// // // // // // // // // // // // //                         ) : (
// // // // // // // // // // // // //                             <p>No vehicles found nearby.</p>
// // // // // // // // // // // // //                         )}
// // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // //                 </DialogBody>
// // // // // // // // // // // // //             </Dialog>
// // // // // // // // // // // // //         </>
// // // // // // // // // // // // //     );
// // // // // // // // // // // // // }


// // // // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // import {
// // // // // // // // // // // //     Button,
// // // // // // // // // // // //     Dialog,
// // // // // // // // // // // //     DialogHeader,
// // // // // // // // // // // //     DialogBody,
// // // // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // // // import { AiOutlineEnvironment } from "react-icons/ai";
// // // // // // // // // // // // import { Locate, X } from "lucide-react";
// // // // // // // // // // // // import toast from 'react-hot-toast';
// // // // // // // // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // // // // // // // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";
// // // // // // // // // // // // import { useDispatch } from "react-redux";
// // // // // // // // // // // // import { setLocation } from "../../../redux/slices/location/locationSlice";

// // // // // // // // // // // // export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
// // // // // // // // // // // //     const [open, setOpen] = useState(false);
// // // // // // // // // // // //     const [lat, setLat] = useState(() => localStorage.getItem('lat') || null);
// // // // // // // // // // // //     const [lng, setLng] = useState(() => localStorage.getItem('lng') || null);
// // // // // // // // // // // //     const maxDistance = 50;

// // // // // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // // // // //     // Automatically open modal if lat, lng, and selectedCity are all not available
// // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // //         if (!lat && !lng && !selectedCity) {
// // // // // // // // // // // //             setOpen(true);
// // // // // // // // // // // //         }
// // // // // // // // // // // //     }, [lat, lng, selectedCity]);

// // // // // // // // // // // //     // Fetching cities with the query hook
// // // // // // // // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// // // // // // // // // // // //     // Fetching vehicles nearby based on lat, lng, and maxDistance
// // // // // // // // // // // //     const { data: vehicles, error: vehiclesError, isLoading: isVehiclesLoading } = useGetVehiclesNearbyQuery({
// // // // // // // // // // // //         lat,
// // // // // // // // // // // //         lng,
// // // // // // // // // // // //         maxDistance,
// // // // // // // // // // // //     }, { skip: !lat || !lng });

// // // // // // // // // // // //     // Detect current location function
// // // // // // // // // // // //     const detectLocation = () => {
// // // // // // // // // // // //         if (navigator.geolocation) {
// // // // // // // // // // // //             handleOpen();
// // // // // // // // // // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// // // // // // // // // // // //         } else {
// // // // // // // // // // // //             toast.error("Geolocation is not supported by your browser.");
// // // // // // // // // // // //         }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     // Inside the component:
// // // // // // // // // // // // const dispatch = useDispatch();

// // // // // // // // // // // //     const successCallback = async (position) => {
// // // // // // // // // // // //         const { latitude, longitude } = position.coords;

// // // // // // // // // // // //         setLat(latitude);
// // // // // // // // // // // //         setLng(longitude);
// // // // // // // // // // // //         localStorage.setItem('lat', latitude);
// // // // // // // // // // // //         localStorage.setItem('lng', longitude);
// // // // // // // // // // // //         dispatch(setLocation({ lat: latitude, lng: longitude })); // Update Redux store

// // // // // // // // // // // //         try {
// // // // // // // // // // // //             const response = await axios.get(
// // // // // // // // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // // // // // // // //             );
// // // // // // // // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // // // // // // // //                 component.types.includes("locality")
// // // // // // // // // // // //             ).long_name;

// // // // // // // // // // // //             setSelectedCity(city);
// // // // // // // // // // // //             handleOpen();

// // // // // // // // // // // //             toast.success(`You are currently in ${city}`);
// // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // //             toast.error("Failed to fetch location details.");
// // // // // // // // // // // //             console.error("Error fetching location details: ", error);
// // // // // // // // // // // //         }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     const errorCallback = (error) => {
// // // // // // // // // // // //         console.error("Error detecting location: ", error);
// // // // // // // // // // // //         toast.error("Unable to detect location. Please try again.");
// // // // // // // // // // // //     };

// // // // // // // // // // // //     const CityCard = ({ cityImage, _id, cityName }) => (
// // // // // // // // // // // //         <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => handleCitySelect(cityName)}>
// // // // // // // // // // // //             <img
// // // // // // // // // // // //                 src={cityImage?.url}
// // // // // // // // // // // //                 alt={cityName}
// // // // // // // // // // // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // // // // // // // // //             />
// // // // // // // // // // // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // // // // // // // // //                 {cityName}
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //     );

// // // // // // // // // // // //     const handleCitySelect = (cityName) => {
// // // // // // // // // // // //         setSelectedCity(cityName);
// // // // // // // // // // // //         localStorage.removeItem('lat');
// // // // // // // // // // // //         localStorage.removeItem('lng');
// // // // // // // // // // // //         handleOpen();
// // // // // // // // // // // //     };

// // // // // // // // // // // //     return (
// // // // // // // // // // // //         <>
// // // // // // // // // // // //             <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
// // // // // // // // // // // //                 {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
// // // // // // // // // // // //                 <AiOutlineEnvironment className="text-gray-500" size={20} />
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // // // // // // // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // // // // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // // // // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // // // // // // // //                         <X color="black" size={20} />
// // // // // // // // // // // //                     </Button>
// // // // // // // // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // // // // // // // //                         <Button
// // // // // // // // // // // //                             variant=""
// // // // // // // // // // // //                             onClick={detectLocation}
// // // // // // // // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // // // // // // // //                         >
// // // // // // // // // // // //                             <Locate size={20} />
// // // // // // // // // // // //                             Detect Current Location
// // // // // // // // // // // //                         </Button>
// // // // // // // // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // // // // // // // //                             <X color="black" size={20} />
// // // // // // // // // // // //                         </Button>
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                 </DialogHeader>
// // // // // // // // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // // // // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // // // // // // // //                         {isCitiesLoading ? <p>Loading cities...</p> : cities?.map((city) => (
// // // // // // // // // // // //                             <CityCard key={city._id} {...city} />
// // // // // // // // // // // //                         ))}
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                     <div className="mt-6">
// // // // // // // // // // // //                         {isVehiclesLoading ? <p>Loading vehicles...</p> : vehicles?.vehicles?.length > 0 ? (
// // // // // // // // // // // //                             <div className="flex flex-wrap gap-4">
// // // // // // // // // // // //                                 {vehicles?.vehicles?.map(vehicle => (
// // // // // // // // // // // //                                     <div key={vehicle.id} className="p-2 border border-gray-300 rounded-md">
// // // // // // // // // // // //                                         <img className="w-20 h-10" src={vehicle?.vehicleImage[0]?.url} alt="" />
// // // // // // // // // // // //                                         <p>{vehicle.vehicleName}</p>
// // // // // // // // // // // //                                     </div>
// // // // // // // // // // // //                                 ))}
// // // // // // // // // // // //                             </div>
// // // // // // // // // // // //                         ) : (
// // // // // // // // // // // //                             <p>No vehicles found nearby.</p>
// // // // // // // // // // // //                         )}
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                 </DialogBody>
// // // // // // // // // // // //             </Dialog>
// // // // // // // // // // // //         </>
// // // // // // // // // // // //     );
// // // // // // // // // // // // }



// // // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // import {
// // // // // // // // // // //     Button,
// // // // // // // // // // //     Dialog,
// // // // // // // // // // //     DialogHeader,
// // // // // // // // // // //     DialogBody,
// // // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // // import { AiOutlineEnvironment } from "react-icons/ai";
// // // // // // // // // // // import { Locate, X } from "lucide-react";
// // // // // // // // // // // import toast from 'react-hot-toast';
// // // // // // // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // // // // // // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";
// // // // // // // // // // // import { useDispatch } from "react-redux";
// // // // // // // // // // // import { setLocation } from "../../../redux/slices/location/locationSlice";

// // // // // // // // // // // export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
// // // // // // // // // // //     const [open, setOpen] = useState(false);
// // // // // // // // // // //     const dispatch = useDispatch();

// // // // // // // // // // //     // Initialize lat and lng from localStorage
// // // // // // // // // // //     const [lat, setLat] = useState(() => localStorage.getItem('lat') || null);
// // // // // // // // // // //     const [lng, setLng] = useState(() => localStorage.getItem('lng') || null);

// // // // // // // // // // //     const maxDistance = 50;

// // // // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // // // //     // Hydrate Redux state with location from localStorage when component mounts
// // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // //         const storedLat = localStorage.getItem('lat');
// // // // // // // // // // //         const storedLng = localStorage.getItem('lng');
// // // // // // // // // // //         if (storedLat && storedLng) {
// // // // // // // // // // //             dispatch(setLocation({ lat: storedLat, lng: storedLng }));
// // // // // // // // // // //         }
// // // // // // // // // // //     }, [dispatch]);

// // // // // // // // // // //     // Automatically open modal if lat, lng, and selectedCity are all not available
// // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // //         if (!lat && !lng && !selectedCity) {
// // // // // // // // // // //             setOpen(true);
// // // // // // // // // // //         }
// // // // // // // // // // //     }, [lat, lng, selectedCity]);

// // // // // // // // // // //     // Fetch cities and vehicles data
// // // // // // // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();
// // // // // // // // // // //     const { data: vehicles, error: vehiclesError, isLoading: isVehiclesLoading } = useGetVehiclesNearbyQuery(
// // // // // // // // // // //         { lat, lng, maxDistance }, { skip: !lat || !lng }
// // // // // // // // // // //     );

// // // // // // // // // // //     // Detect current location function
// // // // // // // // // // //     const detectLocation = () => {
// // // // // // // // // // //         if (navigator.geolocation) {
// // // // // // // // // // //             handleOpen();
// // // // // // // // // // //             const options = {
// // // // // // // // // // //                 enableHighAccuracy: true, // Use high accuracy if possible
// // // // // // // // // // //                 timeout: 10000,           // Timeout in 10 seconds if unable to retrieve location
// // // // // // // // // // //                 maximumAge: 0             // Use a cached location if it's not older than 0 milliseconds
// // // // // // // // // // //             };
// // // // // // // // // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
// // // // // // // // // // //         } else {
// // // // // // // // // // //             toast.error("Geolocation is not supported by your browser.");
// // // // // // // // // // //         }
// // // // // // // // // // //     };


// // // // // // // // // // //     const successCallback = async (position) => {
// // // // // // // // // // //         const { latitude, longitude } = position.coords;

// // // // // // // // // // //         setLat(latitude);
// // // // // // // // // // //         setLng(longitude);
// // // // // // // // // // //         localStorage.setItem('lat', latitude);
// // // // // // // // // // //         localStorage.setItem('lng', longitude);
// // // // // // // // // // //         dispatch(setLocation({ lat: latitude, lng: longitude })); // Update Redux store

// // // // // // // // // // //         try {
// // // // // // // // // // //             const response = await axios.get(
// // // // // // // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // // // // // // //             );
// // // // // // // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // // // // // // //                 component.types.includes("locality")
// // // // // // // // // // //             ).long_name;

// // // // // // // // // // //             setSelectedCity(city);
// // // // // // // // // // //             handleOpen();
// // // // // // // // // // //             toast.success(`You are currently in ${city}`);
// // // // // // // // // // //         } catch (error) {
// // // // // // // // // // //             toast.error("Failed to fetch location details.");
// // // // // // // // // // //             console.error("Error fetching location details: ", error);
// // // // // // // // // // //         }
// // // // // // // // // // //     };

// // // // // // // // // // //     const errorCallback = (error) => {
// // // // // // // // // // //         console.error("Error detecting location: ", error);
// // // // // // // // // // //         toast.error("Unable to detect location. Please try again.");
// // // // // // // // // // //     };

// // // // // // // // // // //     const CityCard = ({ cityImage, _id, cityName }) => (
// // // // // // // // // // //         <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => handleCitySelect(cityName)}>
// // // // // // // // // // //             <img
// // // // // // // // // // //                 src={cityImage?.url}
// // // // // // // // // // //                 alt={cityName}
// // // // // // // // // // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // // // // // // // //             />
// // // // // // // // // // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // // // // // // // //                 {cityName}
// // // // // // // // // // //             </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //     );

// // // // // // // // // // //     const handleCitySelect = (cityName) => {
// // // // // // // // // // //         setSelectedCity(cityName);
// // // // // // // // // // //         localStorage.removeItem('lat');
// // // // // // // // // // //         localStorage.removeItem('lng');
// // // // // // // // // // //         handleOpen();
// // // // // // // // // // //     };

// // // // // // // // // // //     return (
// // // // // // // // // // //         <>
// // // // // // // // // // //             <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
// // // // // // // // // // //                 {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
// // // // // // // // // // //                 <AiOutlineEnvironment className="text-gray-500" size={20} />
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // // // // // // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // // // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // // // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // // // // // // //                         <X color="black" size={20} />
// // // // // // // // // // //                     </Button>
// // // // // // // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // // // // // // //                         <Button
// // // // // // // // // // //                             variant=""
// // // // // // // // // // //                             onClick={detectLocation}
// // // // // // // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // // // // // // //                         >
// // // // // // // // // // //                             <Locate size={20} />
// // // // // // // // // // //                             Detect Current Location
// // // // // // // // // // //                         </Button>
// // // // // // // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // // // // // // //                             <X color="black" size={20} />
// // // // // // // // // // //                         </Button>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                 </DialogHeader>
// // // // // // // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // // // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // // // // // // //                         {isCitiesLoading ? <p>Loading cities...</p> : cities?.map((city) => (
// // // // // // // // // // //                             <CityCard key={city._id} {...city} />
// // // // // // // // // // //                         ))}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <div className="mt-6">
// // // // // // // // // // //                         {isVehiclesLoading ? <p>Loading vehicles...</p> : vehicles?.vehicles?.length > 0 ? (
// // // // // // // // // // //                             <div className="flex flex-wrap gap-4">
// // // // // // // // // // //                                 {vehicles?.vehicles?.map(vehicle => (
// // // // // // // // // // //                                     <div key={vehicle.id} className="p-2 border border-gray-300 rounded-md">
// // // // // // // // // // //                                         <img className="w-20 h-10" src={vehicle?.vehicleImage[0]?.url} alt="" />
// // // // // // // // // // //                                         <p>{vehicle.vehicleName}</p>
// // // // // // // // // // //                                     </div>
// // // // // // // // // // //                                 ))}
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                         ) : (
// // // // // // // // // // //                             <p>No vehicles found nearby.</p>
// // // // // // // // // // //                         )}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                 </DialogBody>
// // // // // // // // // // //             </Dialog>
// // // // // // // // // // //         </>
// // // // // // // // // // //     );
// // // // // // // // // // // }




// // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // import axios from "axios";
// // // // // // // // // // import {
// // // // // // // // // //     Button,
// // // // // // // // // //     Dialog,
// // // // // // // // // //     DialogHeader,
// // // // // // // // // //     DialogBody,
// // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // import { Locate, X } from "lucide-react";
// // // // // // // // // // import toast from 'react-hot-toast';
// // // // // // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // // // // // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";
// // // // // // // // // // import { useDispatch } from "react-redux";
// // // // // // // // // // import { setLocation } from "../../../redux/slices/location/locationSlice";

// // // // // // // // // // export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
// // // // // // // // // //     const [open, setOpen] = useState(false);
// // // // // // // // // //     const dispatch = useDispatch();

// // // // // // // // // //     // Initialize lat and lng from localStorage
// // // // // // // // // //     const [lat, setLat] = useState(() => localStorage.getItem('lat') || null);
// // // // // // // // // //     const [lng, setLng] = useState(() => localStorage.getItem('lng') || null);

// // // // // // // // // //     const maxDistance = 50;

// // // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // // //     // Hydrate Redux state with location from localStorage when component mounts
// // // // // // // // // //     useEffect(() => {
// // // // // // // // // //         const storedLat = localStorage.getItem('lat');
// // // // // // // // // //         const storedLng = localStorage.getItem('lng');
// // // // // // // // // //         if (storedLat && storedLng) {
// // // // // // // // // //             dispatch(setLocation({ lat: storedLat, lng: storedLng }));
// // // // // // // // // //         }
// // // // // // // // // //     }, [dispatch]);

// // // // // // // // // //     // Automatically open modal if lat, lng, and selectedCity are all not available
// // // // // // // // // //     useEffect(() => {
// // // // // // // // // //         if (!lat && !lng && !selectedCity) {
// // // // // // // // // //             setOpen(true);
// // // // // // // // // //         }
// // // // // // // // // //     }, [lat, lng, selectedCity]);

// // // // // // // // // //     // Fetch cities and vehicles data
// // // // // // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();
// // // // // // // // // //     const { data: vehicles, error: vehiclesError, isLoading: isVehiclesLoading } = useGetVehiclesNearbyQuery(
// // // // // // // // // //         { lat, lng, maxDistance }, { skip: !lat || !lng }
// // // // // // // // // //     );

// // // // // // // // // //     // Detect current location function
// // // // // // // // // // const detectLocation = () => {
// // // // // // // // // //     if (navigator.geolocation) {
// // // // // // // // // //         handleOpen();
// // // // // // // // // //         const options = {
// // // // // // // // // //             enableHighAccuracy: true, // Use high accuracy if possible
// // // // // // // // // //             timeout: 10000,           // Timeout in 10 seconds if unable to retrieve location
// // // // // // // // // //             maximumAge: 0             // Use a cached location if it's not older than 0 milliseconds
// // // // // // // // // //         };
// // // // // // // // // //         navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
// // // // // // // // // //     } else {
// // // // // // // // // //         toast.error("Geolocation is not supported by your browser.");
// // // // // // // // // //     }
// // // // // // // // // // };


// // // // // // // // // //     const successCallback = async (position) => {
// // // // // // // // // //         const { latitude, longitude } = position.coords;

// // // // // // // // // //         setLat(latitude);
// // // // // // // // // //         setLng(longitude);
// // // // // // // // // //         localStorage.setItem('lat', latitude);
// // // // // // // // // //         localStorage.setItem('lng', longitude);
// // // // // // // // // //         dispatch(setLocation({ lat: latitude, lng: longitude })); // Update Redux store

// // // // // // // // // //         try {
// // // // // // // // // //             const response = await axios.get(
// // // // // // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // // // // // //             );
// // // // // // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // // // // // //                 component.types.includes("locality")
// // // // // // // // // //             ).long_name;

// // // // // // // // // //             setSelectedCity(city);
// // // // // // // // // //             handleOpen();
// // // // // // // // // //             toast.success(`You are currently in ${city}`);
// // // // // // // // // //         } catch (error) {
// // // // // // // // // //             toast.error("Failed to fetch location details.");
// // // // // // // // // //             console.error("Error fetching location details: ", error);
// // // // // // // // // //         }
// // // // // // // // // //     };

// // // // // // //     // const errorCallback = (error) => {
// // // // // // //     //     if (error.code === error.PERMISSION_DENIED) {
// // // // // // //     //         toast.error("Please enable location services in your device settings.");
// // // // // // //     //     } else {
// // // // // // //     //         console.error("Error detecting location: ", error);
// // // // // // //     //         toast.error("Unable to detect location. Please try again.");
// // // // // // //     //     }
// // // // // // //     // };


// // // // // // // // // // const CityCard = ({ cityImage, _id, cityName }) => (
// // // // // // // // // //     <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => handleCitySelect(cityName)}>
// // // // // // // // // //         <img
// // // // // // // // // //             src={cityImage?.url}
// // // // // // // // // //             alt={cityName}
// // // // // // // // // //             className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // // // // // // //         />
// // // // // // // // // //         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // // // // // // //             {cityName}
// // // // // // // // // //         </div>
// // // // // // // // // //     </div>
// // // // // // // // // // );

// // // // // // // // // // const handleCitySelect = (cityName) => {
// // // // // // // // // //     setSelectedCity(cityName);
// // // // // // // // // //     localStorage.removeItem('lat');
// // // // // // // // // //     localStorage.removeItem('lng');
// // // // // // // // // //     handleOpen();
// // // // // // // // // // };

// // // // // // // // // //     return (
// // // // // // // // // //         <>
// // // // // // // // // {/* <div className=""  onClick={handleOpen}>
// // // // // // // // //                 <input
// // // // // // // // //                   readOnly
// // // // // // // // //                   type="text"
// // // // // // // // //                   placeholder={selectedCity ? selectedCity : "Select City"}
// // // // // // // // //                   className=' border-green-300 border bg-white py-2 px-2 outline-none rounded-l-md' />
// // // // // // // // //                 <button className=' py-2 bg-green-400 text-white rounded-none px-5 lg:px-8 border border-green-600 rounded-r-md mx-1'>Serach Vehicle</button>
// // // // // // // // //               </div> */}
// // // // // // // // // //             <Dialog 
// // // // // // // // // //              open={open} 
// // // // // // // // // //              handler={handleOpen} 
// // // // // // // // // //              size="xl" 
// // // // // // // // // //              className="lg:max-w-[90%] max-w-full outline-none"
// // // // // // // // // //              animate={{
// // // // // // // // // //                  mount: { opacity: 1 },   // Disable default animation
// // // // // // // // // //                  unmount: { opacity: 0 }, // Remove exit animation
// // // // // // // // // //              }}>
// // // // // // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // // // // // //                         <X color="black" size={20} />
// // // // // // // // // //                     </Button>
// // // // // // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // // // // // //                         <Button
// // // // // // // // // //                             variant=""
// // // // // // // // // //                             onClick={detectLocation}
// // // // // // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // // // // // //                         >
// // // // // // // // // //                             <Locate size={20} />
// // // // // // // // // //                             Detect Current Location
// // // // // // // // // //                         </Button>
// // // // // // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // // // // // //                             <X color="black" size={20} />
// // // // // // // // // //                         </Button>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </DialogHeader>
// // // // // // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // // // // // //                         {isCitiesLoading ? <p>Loading cities...</p> : cities?.map((city) => (
// // // // // // // // // //                             <CityCard key={city._id} {...city} />
// // // // // // // // // //                         ))}
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <div className="mt-6">
// // // // // // // // // //                         {isVehiclesLoading ? <p>Loading vehicles...</p> : vehicles?.vehicles?.length > 0 ? (
// // // // // // // // // //                             <div className="flex flex-wrap gap-4">
// // // // // // // // // //                                 {vehicles?.vehicles?.map(vehicle => (
// // // // // // // // // //                                     <div key={vehicle.id} className="p-2 border border-gray-300 rounded-md">
// // // // // // // // // //                                         <img className="w-20 h-10" src={vehicle?.vehicleImage[0]?.url} alt="" />
// // // // // // // // // //                                         <p>{vehicle.vehicleName}</p>
// // // // // // // // // //                                     </div>
// // // // // // // // // //                                 ))}
// // // // // // // // // //                             </div>
// // // // // // // // // //                         ) : (
// // // // // // // // // //                             <p>No vehicles found nearby.</p>
// // // // // // // // // //                         )}
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </DialogBody>
// // // // // // // // // //             </Dialog>
// // // // // // // // // //         </>
// // // // // // // // // //     );
// // // // // // // // // // }


// // // // // // // // // import { useContext, useState } from "react";
// // // // // // // // // import axios from "axios";
// // // // // // // // // import {
// // // // // // // // //     Button,
// // // // // // // // //     Dialog,
// // // // // // // // //     DialogHeader,
// // // // // // // // //     DialogBody,
// // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // import { AiOutlineEnvironment } from "react-icons/ai";
// // // // // // // // // import { Locate, X } from "lucide-react";
// // // // // // // // // import toast from 'react-hot-toast';
// // // // // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // // // // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";
// // // // // // // // // import myContext from "../../../context/myContext";


// // // // // // // // // export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
// // // // // // // // //     const [open, setOpen] = useState(false);

// // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // //     const { lat, setLat,
// // // // // // // // //         lng, setLng,
// // // // // // // // //         vehicleType, setVehicleType,
// // // // // // // // //         vehicleCity, setVehicleCity } = useContext(myContext);

// // // // // // // // //     const { data, error, isLoading } = useGetVehiclesNearbyQuery({
// // // // // // // // //         lat,
// // // // // // // // //         lng,
// // // // // // // // //         vehicleCity,
// // // // // // // // //         vehicleType,
// // // // // // // // //     });


// // // // // // // // //     // Fetching cities with the query hook
// // // // // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();


// // // // // // // // //     // Detect current location function
// // // // // // // // //     const detectLocation = () => {
// // // // // // // // //         if (navigator.geolocation) {
// // // // // // // // //             handleOpen();
// // // // // // // // //             const options = {
// // // // // // // // //                 enableHighAccuracy: true, // Use high accuracy if possible
// // // // // // // // //                 timeout: 10000,           // Timeout in 10 seconds if unable to retrieve location
// // // // // // // // //                 maximumAge: 0             // Use a cached location if it's not older than 0 milliseconds
// // // // // // // // //             };
// // // // // // // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
// // // // // // // // //         } else {
// // // // // // // // //             toast.error("Geolocation is not supported by your browser.");
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     const successCallback = async (position) => {
// // // // // // // // //         const { latitude, longitude } = position.coords;

// // // // // // // // //         setLat(latitude)
// // // // // // // // //         setLng(longitude)

// // // // // // // // //         // Reverse Geocoding using Google Maps API or similar service
// // // // // // // // //         try {
// // // // // // // // //             const response = await axios.get(
// // // // // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // // // // //             );
// // // // // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // // // // //                 component.types.includes("locality")
// // // // // // // // //             ).long_name;

// // // // // // // // //             // Set the detected city
// // // // // // // // //             setSelectedCity(city);
// // // // // // // // //             handleOpen(); // Close the dialog after detection

// // // // // // // // //             // Show success toast
// // // // // // // // //             toast.success(`You are currently in ${city}`);
// // // // // // // // //         } catch (error) {
// // // // // // // // //             toast.error("Failed to fetch location details.");
// // // // // // // // //             console.error("Error fetching location details: ", error);
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     const errorCallback = (error) => {
// // // // // // // // //         console.error("Error detecting location: ", error);
// // // // // // // // //         toast.error("Unable to detect location. Please try again.");
// // // // // // // // //     };

// // // // // // // // //     const CityCard = ({ cityImage, _id, cityName }) => (
// // // // // // // // //         <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => handleCitySelect(cityName, _id)}>
// // // // // // // // //             <img
// // // // // // // // //                 src={cityImage?.url}
// // // // // // // // //                 alt={cityName}
// // // // // // // // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // // // // // //             />
// // // // // // // // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // // // // // //                 {cityName}
// // // // // // // // //             </div>
// // // // // // // // //         </div>
// // // // // // // // //     );

// // // // // // // // //     const handleCitySelect = (cityName, _id) => {
// // // // // // // // //         setSelectedCity(cityName);
// // // // // // // // //         setVehicleCity(_id);
// // // // // // // // //         localStorage.removeItem('lat');
// // // // // // // // //         localStorage.removeItem('lng');
// // // // // // // // //         handleOpen();
// // // // // // // // //     }
// // // // // // // // //     // if (isLoading) return <div>Loading...</div>;
// // // // // // // // //     // if (error) return <div>Error: {error?.data?.message}</div>;



// // // // // // // // //     return (
// // // // // // // // //         <>
// // // // // // // // //             <div className="" onClick={handleOpen}>
// // // // // // // // //                 <input
// // // // // // // // //                     readOnly
// // // // // // // // //                     type="text"
// // // // // // // // //                     placeholder={selectedCity ? selectedCity : "Select City"}
// // // // // // // // //                     className=' border-green-300 border bg-white py-2 px-2 outline-none rounded-l-md' />
// // // // // // // // //                 <button className=' py-2 bg-green-400 text-white rounded-none px-5 lg:px-8 border border-green-600 rounded-r-md mx-1'>Serach Vehicle</button>
// // // // // // // // //             </div>
// // // // // // // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">

// // // // // // // // //                 <pre>{JSON.stringify({
// // // // // // // // //                     lat,
// // // // // // // // //                     lng
// // // // // // // // //                 }, null, 2)}</pre>
// // // // // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // // // // //                         <X color=" black" size={20} />
// // // // // // // // //                     </Button>
// // // // // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // // // // //                         <Button
// // // // // // // // //                             variant=""
// // // // // // // // //                             onClick={detectLocation} // Call detectLocation on click
// // // // // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // // // // //                         >
// // // // // // // // //                             <Locate size={20} />
// // // // // // // // //                             Detect Current Location
// // // // // // // // //                         </Button>
// // // // // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // // // // //                             <X color=" black" size={20} />
// // // // // // // // //                         </Button>
// // // // // // // // //                     </div>
// // // // // // // // //                 </DialogHeader>
// // // // // // // // //                 {/* <pre>{JSON.stringify(cities,null,2)}</pre> */}
// // // // // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // // // // //                         {cities?.map((city) => (
// // // // // // // // //                             <CityCard key={city.cityName} {...city} />
// // // // // // // // //                         ))}
// // // // // // // // //                     </div>

// // // // // // // // //                     <pre>{JSON.stringify(data,null,2)}</pre>
// // // // // // // // //                 </DialogBody>
// // // // // // // // //             </Dialog>
// // // // // // // // //         </>
// // // // // // // // //     );
// // // // // // // // // }


// // // // // // // // import { useContext, useEffect, useState } from "react";
// // // // // // // // import axios from "axios";
// // // // // // // // import {
// // // // // // // //     Button,
// // // // // // // //     Dialog,
// // // // // // // //     DialogHeader,
// // // // // // // //     DialogBody,
// // // // // // // // } from "@material-tailwind/react";
// // // // // // // // import { Locate, X } from "lucide-react";
// // // // // // // // import toast from 'react-hot-toast';
// // // // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // // // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";
// // // // // // // // import myContext from "../../../context/myContext";

// // // // // // // // export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
// // // // // // // //     const [open, setOpen] = useState(false);

// // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // //     const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity } = useContext(myContext);

// // // // // // // //     // Retrieve stored values from localStorage on mount
// // // // // // // //     useEffect(() => {
// // // // // // // //         const storedLat = localStorage.getItem('lat');
// // // // // // // //         const storedLng = localStorage.getItem('lng');
// // // // // // // //         const storedCity = localStorage.getItem('selectedCity');
// // // // // // // //         const storedVehicleCity = localStorage.getItem('vehicleCity');

// // // // // // // //         if (storedLat && storedLng) {
// // // // // // // //             setLat(parseFloat(storedLat));
// // // // // // // //             setLng(parseFloat(storedLng));
// // // // // // // //         }

// // // // // // // //         if (storedCity) {
// // // // // // // //             setSelectedCity(storedCity);
// // // // // // // //         }

// // // // // // // //         if (storedVehicleCity) {
// // // // // // // //             setVehicleCity(storedVehicleCity);
// // // // // // // //         }
// // // // // // // //     }, [setLat, setLng, setSelectedCity, setVehicleCity]);

// // // // // // // //     const { data, error, isLoading } = useGetVehiclesNearbyQuery({
// // // // // // // //         lat,
// // // // // // // //         lng,
// // // // // // // //         vehicleCity,
// // // // // // // //         vehicleType,
// // // // // // // //     });

// // // // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// // // // // // // //     const detectLocation = () => {
// // // // // // // //         if (navigator.geolocation) {
// // // // // // // //             handleOpen();
// // // // // // // //             const options = {
// // // // // // // //                 enableHighAccuracy: true,
// // // // // // // //                 timeout: 10000,
// // // // // // // //                 maximumAge: 0
// // // // // // // //             };
// // // // // // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
// // // // // // // //         } else {
// // // // // // // //             toast.error("Geolocation is not supported by your browser.");
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const successCallback = async (position) => {
// // // // // // // //         const { latitude, longitude } = position.coords;
// // // // // // // //         setLat(latitude);
// // // // // // // //         setLng(longitude);

// // // // // // // //         // Save lat and lng to localStorage
// // // // // // // //         localStorage.setItem('lat', latitude);
// // // // // // // //         localStorage.setItem('lng', longitude);

// // // // // // // //         try {
// // // // // // // //             const response = await axios.get(
// // // // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // // // //             );
// // // // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // // // //                 component.types.includes("locality")
// // // // // // // //             ).long_name;

// // // // // // // //             setSelectedCity(city);
// // // // // // // //             localStorage.setItem('selectedCity', city); // Store selected city in localStorage
// // // // // // // //             handleOpen();

// // // // // // // //             toast.success(`You are currently in ${city}`);
// // // // // // // //         } catch (error) {
// // // // // // // //             toast.error("Failed to fetch location details.");
// // // // // // // //             console.error("Error fetching location details: ", error);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const errorCallback = (error) => {
// // // // // // // //         console.error("Error detecting location: ", error);
// // // // // // // //         toast.error("Unable to detect location. Please try again.");
// // // // // // // //     };

// // // // // // // //     const handleCitySelect = (cityName, _id) => {
// // // // // // // //         setSelectedCity(cityName);
// // // // // // // //         setVehicleCity(_id);
// // // // // // // //         localStorage.setItem('selectedCity', cityName);
// // // // // // // //         localStorage.setItem('vehicleCity', _id); // Store vehicleCity in localStorage
// // // // // // // //         localStorage.removeItem('lat');
// // // // // // // //         localStorage.removeItem('lng');
// // // // // // // //         handleOpen();
// // // // // // // //     };

// // // // // // // //     const CityCard = ({ cityImage, _id, cityName }) => (
// // // // // // // //         <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => handleCitySelect(cityName, _id)}>
// // // // // // // //             <img
// // // // // // // //                 src={cityImage?.url}
// // // // // // // //                 alt={cityName}
// // // // // // // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // // // // //             />
// // // // // // // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // // // // //                 {cityName}
// // // // // // // //             </div>
// // // // // // // //         </div>
// // // // // // // //     );

// // // // // // // //     return (
// // // // // // // //         <>
// // // // // // // //             <div className="" onClick={handleOpen}>
// // // // // // // //                 <input
// // // // // // // //                     readOnly
// // // // // // // //                     type="text"
// // // // // // // //                     placeholder={selectedCity ? selectedCity : "Select City"}
// // // // // // // //                     className='border-green-300 border bg-white py-2 px-2 outline-none rounded-l-md'
// // // // // // // //                 />
// // // // // // // //                 <button className='py-2 bg-green-400 text-white rounded-none px-5 lg:px-8 border border-green-600 rounded-r-md mx-1'>
// // // // // // // //                     Search Vehicle
// // // // // // // //                 </button>
// // // // // // // //             </div>
// // // // // // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // // // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // // // //                         <X color=" black" size={20} />
// // // // // // // //                     </Button>
// // // // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // // // //                         <Button
// // // // // // // //                             variant=""
// // // // // // // //                             onClick={detectLocation}
// // // // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // // // //                         >
// // // // // // // //                             <Locate size={20} />
// // // // // // // //                             Detect Current Location
// // // // // // // //                         </Button>
// // // // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // // // //                             <X color=" black" size={20} />
// // // // // // // //                         </Button>
// // // // // // // //                     </div>
// // // // // // // //                 </DialogHeader>
// // // // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // // // //                         {cities?.map((city) => (
// // // // // // // //                             <CityCard key={city.cityName} {...city} />
// // // // // // // //                         ))}
// // // // // // // //                     </div>
// // // // // // // //                 </DialogBody>
// // // // // // // //             </Dialog>
// // // // // // // //         </>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // import { useContext, useEffect, useState } from "react";
// // // // // // // import axios from "axios";
// // // // // // // import {
// // // // // // //     Button,
// // // // // // //     Dialog,
// // // // // // //     DialogHeader,
// // // // // // //     DialogBody,
// // // // // // // } from "@material-tailwind/react";
// // // // // // // import { Locate, X } from "lucide-react";
// // // // // // // import toast from 'react-hot-toast';
// // // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";
// // // // // // // import myContext from "../../../context/myContext";

// // // // // // // export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
// // // // // // //     const [open, setOpen] = useState(false);

// // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // //     const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity } = useContext(myContext);

// // // // // // //     useEffect(() => {
// // // // // // //         // Check geolocation permissions
// // // // // // //         navigator.permissions.query({ name: 'geolocation' }).then(permission => {
// // // // // // //             if (permission.state === 'denied') {
// // // // // // //                 // Open modal if geolocation is denied
// // // // // // //                 setOpen(true);
// // // // // // //             }
// // // // // // //         });

// // // // // // //         // Retrieve stored values from localStorage on mount
// // // // // // //         const storedLat = localStorage.getItem('lat');
// // // // // // //         const storedLng = localStorage.getItem('lng');
// // // // // // //         const storedCity = localStorage.getItem('selectedCity');
// // // // // // //         const storedVehicleCity = localStorage.getItem('vehicleCity');

// // // // // // //         if (storedLat && storedLng) {
// // // // // // //             setLat(parseFloat(storedLat));
// // // // // // //             setLng(parseFloat(storedLng));
// // // // // // //         }

// // // // // // //         if (storedCity) {
// // // // // // //             setSelectedCity(storedCity);
// // // // // // //         }

// // // // // // //         if (storedVehicleCity) {
// // // // // // //             setVehicleCity(storedVehicleCity);
// // // // // // //         }
// // // // // // //     }, [setLat, setLng, setSelectedCity, setVehicleCity]);

// // // // // // //     const { data, error, isLoading } = useGetVehiclesNearbyQuery({
// // // // // // //         lat,
// // // // // // //         lng,
// // // // // // //         vehicleCity,
// // // // // // //         vehicleType,
// // // // // // //     });

// // // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// // // // // // //     const detectLocation = () => {
// // // // // // //         if (navigator.geolocation) {
// // // // // // //             handleOpen();
// // // // // // //             const options = {
// // // // // // //                 enableHighAccuracy: true,
// // // // // // //                 timeout: 10000,
// // // // // // //                 maximumAge: 0
// // // // // // //             };
// // // // // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
// // // // // // //         } else {
// // // // // // //             toast.error("Geolocation is not supported by your browser.");
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const successCallback = async (position) => {
// // // // // // //         const { latitude, longitude } = position.coords;
// // // // // // //         setLat(latitude);
// // // // // // //         setLng(longitude);

// // // // // // //         // Save lat and lng to localStorage
// // // // // // //         localStorage.setItem('lat', latitude);
// // // // // // //         localStorage.setItem('lng', longitude);

// // // // // // //         try {
// // // // // // //             const response = await axios.get(
// // // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // // //             );
// // // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // // //                 component.types.includes("locality")
// // // // // // //             ).long_name;

// // // // // // //             setSelectedCity(city);
// // // // // // //             localStorage.setItem('selectedCity', city); // Store selected city in localStorage
// // // // // // //             handleOpen();

// // // // // // //             toast.success(`You are currently in ${city}`);
// // // // // // //         } catch (error) {
// // // // // // //             toast.error("Failed to fetch location details.");
// // // // // // //             console.error("Error fetching location details: ", error);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const errorCallback = (error) => {
// // // // // // //         if (error.code === error.PERMISSION_DENIED) {
// // // // // // //             toast.error("Please enable location services in your device settings.");
// // // // // // //         } else {
// // // // // // //             console.error("Error detecting location: ", error);
// // // // // // //             toast.error("Unable to detect location. Please try again.");
// // // // // // //         }
// // // // // // //     };


// // // // // // //     const handleCitySelect = (cityName, _id) => {
// // // // // // //         setSelectedCity(cityName);
// // // // // // //         setVehicleCity(_id);
// // // // // // //         localStorage.setItem('selectedCity', cityName);
// // // // // // //         localStorage.setItem('vehicleCity', _id); // Store vehicleCity in localStorage
// // // // // // //         localStorage.removeItem('lat');
// // // // // // //         localStorage.removeItem('lng');
// // // // // // //         handleOpen();
// // // // // // //     };

// // // // // // //     const CityCard = ({ cityImage, _id, cityName }) => (
// // // // // // //         <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => handleCitySelect(cityName, _id)}>
// // // // // // //             <img
// // // // // // //                 src={cityImage?.url}
// // // // // // //                 alt={cityName}
// // // // // // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // // // //             />
// // // // // // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // // // //                 {cityName}
// // // // // // //             </div>
// // // // // // //         </div>
// // // // // // //     );

// // // // // // //     return (
// // // // // // //         <>
// // // // // // //             <div className="" onClick={handleOpen}>
// // // // // // //                 <input
// // // // // // //                     readOnly
// // // // // // //                     type="text"
// // // // // // //                     placeholder={selectedCity ? selectedCity : "Select City"}
// // // // // // //                     className='border-green-300 border bg-white w-52 py-2 px-2 outline-none rounded-l-md'
// // // // // // //                 />
// // // // // // //                 <button className='py-2 bg-green-400 text-white rounded-none px-2 lg:px-8 border border-green-600 rounded-r-md mx-1'>
// // // // // // //                     Search Vehicle
// // // // // // //                 </button>
// // // // // // //             </div>
// // // // // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // // //                         <X color=" black" size={20} />
// // // // // // //                     </Button>
// // // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // // //                         <Button
// // // // // // //                             variant=""
// // // // // // //                             onClick={detectLocation}
// // // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // // //                         >
// // // // // // //                             <Locate size={20} />
// // // // // // //                             Detect Current Location
// // // // // // //                         </Button>
// // // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // // //                             <X color=" black" size={20} />
// // // // // // //                         </Button>
// // // // // // //                     </div>
// // // // // // //                 </DialogHeader>
// // // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // // //                         {cities?.map((city) => (
// // // // // // //                             <CityCard key={city.cityName} {...city} />
// // // // // // //                         ))}
// // // // // // //                     </div>
// // // // // // //                 </DialogBody>
// // // // // // //             </Dialog>
// // // // // // //         </>
// // // // // // //     );
// // // // // // // }


// // // // // // import { useContext, useEffect, useState } from "react";
// // // // // // import axios from "axios";
// // // // // // import {
// // // // // //     Button,
// // // // // //     Dialog,
// // // // // //     DialogHeader,
// // // // // //     DialogBody,
// // // // // // } from "@material-tailwind/react";
// // // // // // import { Locate, X } from "lucide-react";
// // // // // // import toast from 'react-hot-toast';
// // // // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";
// // // // // // import myContext from "../../../context/myContext";

// // // // // // export default function SelectCityOrLocationModal() {
// // // // // //     const [open, setOpen] = useState(false);

// // // // // //     const handleOpen = () => setOpen(!open);

// // // // //     const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity } = useContext(myContext);

// // // // // //     useEffect(() => {
// // // // // //         // Retrieve stored values from localStorage on mount
// // // // // //         const storedLat = localStorage.getItem('lat');
// // // // // //         const storedLng = localStorage.getItem('lng');
// // // // // //         const storedCity = localStorage.getItem('selectedCity');
// // // // // //         const storedVehicleCity = localStorage.getItem('vehicleCity');

// // // // // //         // If lat, lng, or city is not stored, open the modal
// // // // // //         if (!storedLat || !storedLng || !storedCity) {
// // // // // //             setOpen(true);
// // // // // //         }

// // // // // //         if (storedLat && storedLng) {
// // // // // //             setLat(parseFloat(storedLat));
// // // // // //             setLng(parseFloat(storedLng));
// // // // // //         }

// // // // // //         if (storedCity) {
// // // // // //             setSelectedCity(storedCity);
// // // // // //         }

// // // // // //         if (storedVehicleCity) {
// // // // // //             setVehicleCity(storedVehicleCity);
// // // // // //         }

// // // // // //         // Check geolocation permissions
// // // // // //         navigator.permissions.query({ name: 'geolocation' }).then(permission => {
// // // // // //             if (permission.state === 'denied') {
// // // // // //                 // Open modal if geolocation is denied
// // // // // //                 setOpen(true);
// // // // // //             }
// // // // // //         });
// // // // // //     }, [setLat, setLng, setSelectedCity, setVehicleCity]);

// // // //     // const { data, error, isLoading } = useGetVehiclesNearbyQuery({
// // // //     //     lat,
// // // //     //     lng,
// // // //     //     vehicleCity,
// // // //     //     vehicleType,
// // // //     // });

// // // // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// // // // // //     const detectLocation = () => {
// // // // // //         if (navigator.geolocation) {
// // // // // //             handleOpen();
// // // // // //             const options = {
// // // // // //                 enableHighAccuracy: true,
// // // // // //                 timeout: 10000,
// // // // // //                 maximumAge: 0
// // // // // //             };
// // // // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
// // // // // //         } else {
// // // // // //             toast.error("Geolocation is not supported by your browser.");
// // // // // //         }
// // // // // //     };

// // // // // //     const successCallback = async (position) => {
// // // // // //         const { latitude, longitude } = position.coords;
// // // // // //         setLat(latitude);
// // // // // //         setLng(longitude);

// // // // // //         // Save lat and lng to localStorage
// // // // // //         localStorage.setItem('lat', latitude);
// // // // // //         localStorage.setItem('lng', longitude);

// // // // // //         try {
// // // // // //             const response = await axios.get(
// // // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // // //             );
// // // // // //             const city = response.data.results[0].address_components.find((component) =>
// // // // // //                 component.types.includes("locality")
// // // // // //             ).long_name;

// // // // // //             setSelectedCity(city);
// // // // // //             localStorage.setItem('selectedCity', city); // Store selected city in localStorage
// // // // // //             handleOpen();

// // // // // //             toast.success(`You are currently in ${city}`);
// // // // // //         } catch (error) {
// // // // // //             toast.error("Failed to fetch location details.");
// // // // // //             console.error("Error fetching location details: ", error);
// // // // // //         }
// // // // // //     };

// // // // // //     const errorCallback = (error) => {
// // // // // //         if (error.code === error.PERMISSION_DENIED) {
// // // // // //             toast.error("Please enable location services in your device settings.");
// // // // // //         } else {
// // // // // //             console.error("Error detecting location: ", error);
// // // // // //             toast.error("Unable to detect location. Please try again.");
// // // // // //         }
// // // // // //     };


// // // // // //     const handleCitySelect = (cityName, _id) => {
// // // // // //         setSelectedCity(cityName);
// // // // // //         setVehicleCity(_id);
// // // // // //         localStorage.setItem('selectedCity', cityName);
// // // // // //         localStorage.setItem('vehicleCity', _id); // Store vehicleCity in localStorage
// // // // // //         localStorage.removeItem('lat');
// // // // // //         localStorage.removeItem('lng');
// // // // // //         handleOpen();
// // // // // //     };

// // // // // const CityCard = ({ cityImage, _id, cityName }) => (
// // // // //     <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => handleCitySelect(cityName, _id)}>
// // // // //         <img
// // // // //             src={cityImage?.url}
// // // // //             alt={cityName}
// // // // //             className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // // //         />
// // // // //         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // // //             {cityName}
// // // // //         </div>
// // // // //     </div>
// // // // // );

// // // // // //     return (
// // // // // //         <>
// // // // // //             <div className="" onClick={handleOpen}>
// // // // // //                 <input
// // // // // //                     readOnly
// // // // // //                     type="text"
// // // // // //                     placeholder={selectedCity ? selectedCity : "Select City"}
// // // // // //                     className='border-green-300 border bg-white w-52 py-2 px-2 outline-none rounded-l-md'
// // // // // //                 />
// // // // // //                 <button className='py-2 bg-green-400 text-white rounded-none px-2 lg:px-8 border border-green-600 rounded-r-md mx-1'>
// // // // // //                     Search Vehicle
// // // // // //                 </button>
// // // // // //             </div>
// // // // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // // // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // // // //                     <p className="text-lg font-semibold">Select City</p>
// // // // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // // // //                         <X color=" black" size={20} />
// // // // // //                     </Button>
// // // // // //                     <div className="flex items-center gap-3 mt-3">
// // // // // //                         <Button
// // // // // //                             variant=""
// // // // // //                             onClick={detectLocation}
// // // // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // // // //                         >
// // // // // //                             <Locate size={20} />
// // // // // //                             Detect Current Location
// // // // // //                         </Button>
// // // // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // // // //                             <X color=" black" size={20} />
// // // // // //                         </Button>
// // // // // //                     </div>
// // // // // //                 </DialogHeader>
// // // // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // // // {cities?.map((city) => (
// // // // //     <CityCard key={city.cityName} {...city} />
// // // // // ))}
// // // // // //                     </div>
// // // // // //                 </DialogBody>
// // // // // //             </Dialog>
// // // // // //         </>
// // // // // //     );
// // // // // // }


// // // // // import React, { useState, useEffect, useContext } from 'react';
// // // // // import myContext from '../../../context/myContext';
// // // // // import { useGetCitiesQuery } from '../../../redux/slices/cityApiSlice';
// // // // // import { useGetVehiclesNearbyQuery } from '../../../redux/slices/vehicleApiSlice';

// // // // // const VehicleFinder = () => {
// // // // //     const {
// // // // //         lat,
// // // // //         setLat,
// // // // //         lng,
// // // // //         setLng,
// // // // //         vehicleType,
// // // // //         setVehicleType,
// // // // //         vehicleCity,
// // // // //         setVehicleCity,
// // // // //         selectedCity,
// // // // //         setSelectedCity,
// // // // //     } = useContext(myContext);

// // // // //     const [isModalOpen, setIsModalOpen] = useState(true);
// // // // //     const [currentLocationName, setCurrentLocationName] = useState('');

// // // // // // Fetch cities and nearby vehicles using the appropriate hooks
// // // // // const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();
// // // // //     const { data: vehicles, error: vehiclesError, isLoading: isVehiclesLoading } = useGetVehiclesNearbyQuery({
// // // // //         lat,
// // // // //         lng,
// // // // //         vehicleCity,
// // // // //         vehicleType,
// // // // //     });

// // // // //     // Function to detect the user's current location using the Geolocation API
// // // // //     const handleDetectLocation = () => {
// // // // //         if (navigator.geolocation) {
// // // // //             navigator.geolocation.getCurrentPosition(
// // // // //                 (position) => {
// // // // //                     const { latitude, longitude } = position.coords;
// // // // //                     setLat(latitude);
// // // // //                     setLng(longitude);
// // // // //                     setSelectedCity('');
// // // // //                     setVehicleCity('');
// // // // //                     setIsModalOpen(false);

// // // // //                     // Call function to get location name from latitude and longitude
// // // // //                     fetchLocationName(latitude, longitude);
// // // // //                 },
// // // // //                 () => {
// // // // //                     alert('Unable to detect location. Please select a city manually.');
// // // // //                 }
// // // // //             );
// // // // //         } else {
// // // // //             alert('Geolocation is not supported by this browser.');
// // // // //         }
// // // // //     };

// // // // //     // Function to fetch location name from latitude and longitude using reverse geocoding
// // // // //     const fetchLocationName = async (latitude, longitude) => {
// // // // //         try {
// // // // //             const response = await fetch(
// // // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // // //             );
// // // // //             const data = await response.json();
// // // // //             if (data.results && data.results.length > 0) {
// // // // //                 setCurrentLocationName(data.results[0].formatted_address);
// // // // //             } else {
// // // // //                 setCurrentLocationName('Unknown Location');
// // // // //             }
// // // // //         } catch (error) {
// // // // //             console.error('Error fetching location name:', error);
// // // // //             setCurrentLocationName('Error fetching location');
// // // // //         }
// // // // //     };

// // // // //     // Function to handle manual city selection
// // // // //     const handleSelectCity = (event) => {
// // // // //         const city = event.target.value;
// // // // //         setVehicleCity(city);
// // // // //         setSelectedCity(city);
// // // // //         setLat('');
// // // // //         setLng('');
// // // // //         setCurrentLocationName(city); // Set the selected city as the location name
// // // // //         setIsModalOpen(false);
// // // // //     };

// // // // //     return (
// // // // //         <div>
// // // // //             {/* Modal for selecting location */}
// // // // //             {isModalOpen && (
// // // // //                 <div className="modal">
// // // // //                     <div className="modal-content">
// // // // //                         <h3>Select your location</h3>
// // // // //                         <button onClick={handleDetectLocation}>Detect My Current Location</button>
// // // // //                         <h4>Or Select Your City</h4>
// // // // //                         {isCitiesLoading ? (
// // // // //                             <p>Loading cities...</p>
// // // // //                         ) : (
// // // // //                             <select onChange={handleSelectCity} defaultValue="">
// // // // //                                 <option value="" disabled>
// // // // //                                     Select City
// // // // //                                 </option>
// // // // //                                 {cities?.map((city) => (
// // // // //                                     <option key={city.id} value={city.name}>
// // // // //                                         {city.name}
// // // // //                                     </option>
// // // // //                                 ))}
// // // // //                             </select>
// // // // //                         )}
// // // // //                     </div>
// // // // //                 </div>
// // // // //             )}

// // // // //             {/* Display selected location and nearby vehicles */}
// // // // //             {!isModalOpen && (
// // // // //                 <div>
// // // // //                     <h2>Selected Location: {selectedCity || currentLocationName || `Lat: ${lat}, Lng: ${lng}`}</h2>
// // // // //                     {isVehiclesLoading ? (
// // // // //                         <p>Loading vehicles...</p>
// // // // //                     ) : vehiclesError ? (
// // // // //                         <p>Error loading vehicles.</p>
// // // // //                     ) : (
// // // // //                         <div>
// // // // //                             <pre>{JSON.stringify(vehicles, null, 2)}</pre>
// // // // //                         </div>
// // // // //                     )}
// // // // //                 </div>
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default VehicleFinder;


// // // // /* eslint-disable react/prop-types */
// // // // import { useContext, useState } from "react";
// // // // import axios from "axios";
// // // // import {
// // // //     Button,
// // // //     Dialog,
// // // //     DialogHeader,
// // // //     DialogBody,
// // // // } from "@material-tailwind/react";
// // // // import { AiOutlineEnvironment } from "react-icons/ai";
// // // // import { Locate, X } from "lucide-react";
// // // // import toast from 'react-hot-toast';
// // // // import myContext from "../../../context/myContext";
// // // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";

// // // // export default function SelectCityOrLocationModal() {
// // // //     const [open, setOpen] = useState(false);

// // // //     const handleOpen = () => setOpen(!open);

// // // //     const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity } = useContext(myContext);

// // // //     // Fetch cities and nearby vehicles using the appropriate hooks
// // // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// // // //     const { data, error, isLoading } = useGetVehiclesNearbyQuery({
// // // //         lat,
// // // //         lng,
// // // //         vehicleCity,
// // // //         vehicleType,
// // // //     });

// // // //     // Detect current location function
// // // //     const detectLocation = () => {
// // // //         if (navigator.geolocation) {
// // // //             // toast.success("Detecting your location...");
// // // //             handleOpen()
// // // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// // // //         } else {
// // // //             toast.error("Geolocation is not supported by your browser.");
// // // //         }
// // // //     };

// // // //     const successCallback = async (position) => {
// // // //         const { latitude, longitude } = position.coords;

// // // //         // Reverse Geocoding using Google Maps API or similar service
// // // //         try {
// // // //             const response = await axios.get(
// // // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // // //             );
// // // //             const city = response.data.results[0].address_components.find((component) =>
// // // //                 component.types.includes("locality")
// // // //             ).long_name;

// // // //             // Set the detected city
// // // //             setSelectedCity(city);
// // // //             handleOpen(); // Close the dialog after detection

// // // //             // Show success toast
// // // //             toast.success(`You are currently in ${city}`);
// // // //         } catch (error) {
// // // //             toast.error("Failed to fetch location details.");
// // // //             console.error("Error fetching location details: ", error);
// // // //         }
// // // //     };

// // // //     const errorCallback = (error) => {
// // // //         console.error("Error detecting location: ", error);
// // // //         toast.error("Unable to detect location. Please try again.");
// // // //     };

// // // //     const CityCard = ({ cityImage, _id, cityName }) => (
// // // //         <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer">
// // // //             <img
// // // //                 src={cityImage?.url}
// // // //                 alt={cityName}
// // // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // // //             />
// // // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // // //                 {cityName}
// // // //             </div>
// // // //         </div>
// // // //     );

// // // //     return (
// // // //         <>
// // // //             <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
// // // //                 {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
// // // //                 <AiOutlineEnvironment className="text-gray-500" size={20} />
// // // //             </div>
// // // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // // //                     <p className="text-lg font-semibold">Select City</p>
// // // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // // //                         <X color=" black" size={20} />
// // // //                     </Button>
// // // //                     <div className="flex items-center gap-3 mt-3">
// // // //                         <Button
// // // //                             variant=""
// // // //                             onClick={detectLocation} // Call detectLocation on click
// // // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // // //                         >
// // // //                             <Locate size={20} />
// // // //                             Detect Current Location
// // // //                         </Button>
// // // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // // //                             <X color=" black" size={20} />
// // // //                         </Button>
// // // //                     </div>
// // // //                 </DialogHeader>
// // // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // // //                         {cities?.map((city) => (
// // // //                             <CityCard key={city.cityName} {...city} />
// // // //                         ))}
// // // //                     </div>
// // // //                 </DialogBody>
// // // //             </Dialog>
// // // //         </>
// // // //     );
// // // // }



// // // /* eslint-disable react/prop-types */
// // // import { useContext, useState } from "react";
// // // import axios from "axios";
// // // import {
// // //     Button,
// // //     Dialog,
// // //     DialogHeader,
// // //     DialogBody,
// // // } from "@material-tailwind/react";
// // // import { AiOutlineEnvironment } from "react-icons/ai";
// // // import { Locate, X } from "lucide-react";
// // // import toast from 'react-hot-toast';
// // // import myContext from "../../../context/myContext";
// // // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";

// // // export default function SelectCityOrLocationModal() {
// // //     const [open, setOpen] = useState(false);

// // //     const handleOpen = () => setOpen(!open);

// // //     const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

// // //     // Fetch cities and nearby vehicles using the appropriate hooks
// // //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// // //     const { data, error, isLoading } = useGetVehiclesNearbyQuery({
// // //         lat,
// // //         lng,
// // //         vehicleCity,
// // //         vehicleType,
// // //     });

// // //     // Detect current location function
// // //     const detectLocation = () => {
// // //         if (navigator.geolocation) {
// // //             toast.success("Detecting your location...");
// // //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// // //         } else {
// // //             toast.error("Geolocation is not supported by your browser.");
// // //         }
// // //     };

// // //     const successCallback = async (position) => {
// // //         const { latitude, longitude } = position.coords;
// // //         setLat(latitude);
// // //         setLng(longitude);

// // //         // Reverse Geocoding using Google Maps API
// // //         try {
// // //             const response = await axios.get(
// // //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// // //             );
// // //             const addressComponents = response.data.results[0].address_components;

// // //             // Find the city name
// // //             const city = addressComponents.find((component) =>
// // //                 component.types.includes("locality")
// // //             )?.long_name;

// // //             // Get full address for the location
// // //             const locationName = response.data.results[0].formatted_address;

// // //             if (city) {
// // //                 // Set the detected city and location name
// // //                 setSelectedCity(city);
// // //                 setVehicleCity(city);
// // //                 // toast.success(`You are currently in ${city}, ${locationName}`);
// // //                 setCurrentLocationName(locationName)
// // //                 handleOpen(); // Close the dialog after detection
// // //             } else {
// // //                 toast.error("Could not determine the city from your location.");
// // //             }
// // //         } catch (error) {
// // //             toast.error("Failed to fetch location details.");
// // //             console.error("Error fetching location details: ", error);
// // //         }
// // //     };


// // //     const errorCallback = (error) => {
// // //         console.error("Error detecting location: ", error);
// // //         toast.error("Unable to detect location. Please try again.");
// // //     };

// // //     const CityCard = ({ cityImage, _id, cityName }) => (
// // //         <div
// // //             className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer"
// // //             onClick={() => {
// // //                 setSelectedCity(cityName);
// // //                 setVehicleCity(_id);
// // //                 handleOpen();
// // //             }}
// // //         >
// // //             <img
// // //                 src={cityImage?.url}
// // //                 alt={cityName}
// // //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// // //             />
// // //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// // //                 {cityName}
// // //             </div>
// // //         </div>
// // //     );

// // //     return (
// // //         <>
// // //             <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
// // //                 {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
// // //                 <AiOutlineEnvironment className="text-gray-500" size={20} />
// // //             </div>
// // //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
// // //                 <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
// // //                     <p className="text-lg font-semibold">Select City or Location</p>
// // //                     <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// // //                         <X color=" black" size={20} />
// // //                     </Button>
// // //                     <div className="flex items-center gap-3 mt-3">
// // //                         <Button
// // //                             variant=""
// // //                             onClick={detectLocation}
// // //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
// // //                         >
// // //                             <Locate size={20} />
// // //                             Detect Current Location
// // //                         </Button>
// // //                         <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// // //                             <X color=" black" size={20} />
// // //                         </Button>
// // //                     </div>
// // //                 </DialogHeader>
// // //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// // //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// // //                         {isCitiesLoading ? (
// // //                             <p>Loading cities...</p>
// // //                         ) : (
// // //                             cities?.map((city) => (
// // //                                 <CityCard key={city.cityName} {...city} />
// // //                             ))
// // //                         )}
// // //                     </div>
// // //                 </DialogBody>
// // //             </Dialog>
// // //         </>
// // //     );

// // // }

// // /* eslint-disable react/prop-types */
// // import { useContext, useState, useEffect } from "react";
// // import axios from "axios";
// // import {
// //     Button,
// //     Dialog,
// //     DialogHeader,
// //     DialogBody,
// // } from "@material-tailwind/react";
// // import { AiOutlineEnvironment } from "react-icons/ai";
// // import { Locate, X } from "lucide-react";
// // import toast from 'react-hot-toast';
// // import myContext from "../../../context/myContext";
// // import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// // import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";

// // export default function SelectCityOrLocationModal() {
// //     const [open, setOpen] = useState(false);

// //     const handleOpen = () => setOpen(!open);

// //     const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

// //     // Fetch cities and nearby vehicles using the appropriate hooks
// //     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

// //     const { data, error, isLoading } = useGetVehiclesNearbyQuery({
// //         lat,
// //         lng,
// //         vehicleCity,
// //         vehicleType,
// //     });

// //     // Show modal automatically if no city or location is selected
// //     useEffect(() => {
// //         if (!selectedCity || !vehicleCity || !lat || !lng) {
// //             setOpen(true);
// //         }
// //     }, [selectedCity, vehicleCity, lat, lng]);

// //     // Detect current location function
// //     const detectLocation = () => {
// //         if (navigator.geolocation) {
// //             toast.success("Detecting your location...");
// //             navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// //             handleOpen()
// //         } else {
// //             toast.error("Geolocation is not supported by your browser.");
// //         }
// //     };

// //     const successCallback = async (position) => {
// //         const { latitude, longitude } = position.coords;
// //         setLat(latitude);
// //         setLng(longitude);

// //         // Reverse Geocoding using Google Maps API
// //         try {
// //             const response = await axios.get(
// //                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
// //             );
// //             const addressComponents = response.data.results[0].address_components;

// //             // Find the city name
// //             const city = addressComponents.find((component) =>
// //                 component.types.includes("locality")
// //             )?.long_name;

// //             // Get full address for the location
// //             const locationName = response.data.results[0].formatted_address;

// //             if (city) {
// //                 // Set the detected city and location name
// //                 setSelectedCity(city);
// //                 setVehicleCity(city);
// //                 setCurrentLocationName(locationName);
// //                 handleOpen(); // Close the dialog after detection
// //             } else {
// //                 toast.error("Could not determine the city from your location.");
// //             }
// //         } catch (error) {
// //             toast.error("Failed to fetch location details.");
// //             console.error("Error fetching location details: ", error);
// //         }
// //     };

// //     const errorCallback = (error) => {
// //         console.error("Error detecting location: ", error);
// //         toast.error("Unable to detect location. Please try again.");
// //     };

// //     const promptToEnableLocation = () => {
// //         toast.error("Location services are disabled. Please enable GPS to use this feature.");
// //         // Optionally, you can redirect users to settings (in mobile apps).
// //     };

// //     // Check if location services are enabled (browser-specific)
// //     const checkLocationServices = () => {
// //         if (!navigator.geolocation) {
// //             promptToEnableLocation();
// //         }
// //     };

// //     const CityCard = ({ cityImage, _id, cityName }) => (
// //         <div
// //             className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer"
// //             onClick={() => {
// //                 setSelectedCity(cityName);
// //                 setVehicleCity(_id);
// //                 handleOpen();
// //             }}
// //         >
// //             <img
// //                 src={cityImage?.url}
// //                 alt={cityName}
// //                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
// //             />
// //             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
// //                 {cityName}
// //             </div>
// //         </div>
// //     );

// //     return (
// //         <>
// //             <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
// //                 {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
// //                 <AiOutlineEnvironment className="text-gray-500" size={20} />
// //             </div>
// //             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none shadow-none hover:shadow-none rounded-md bg-white">
// //                 <div className="flex flex-wrap justify-between items-center px-4 lg:px-6 py-4 lg:py-0 rounded-xl">
// //                     <p className="text-lg font-semibold text-black">Select City or Location</p>
// //                     {/* <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
// //                         <X color=" black" size={20} />
// //                     </Button> */}
// //                     <div className="flex items-center gap-3 mt-3">
// //                         <Button
// //                             variant=""
// //                             onClick={detectLocation}
// //                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none outline-none"
// //                         >
// //                             <Locate size={20} />
// //                             Detect Current Location
// //                         </Button>
// //                         {/* <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
// //                             <X color=" black" size={20} />
// //                         </Button> */}
// //                     </div>
// //                 </div>
// //                 <DialogBody className="max-h-[78vh] overflow-y-auto">
// //                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
// //                         {isCitiesLoading ? (
// //                             <p>Loading cities...</p>
// //                         ) : (
// //                             cities?.map((city) => (
// //                                 <CityCard key={city.cityName} {...city} />
// //                             ))
// //                         )}
// //                     </div>
// //                 </DialogBody>
// //             </Dialog>
// //         </>
// //     );
// // }


// /* eslint-disable react/prop-types */
// import { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import {
//     Button,
//     Dialog,
//     DialogBody,
// } from "@material-tailwind/react";
// import { AiOutlineEnvironment } from "react-icons/ai";
// import { Locate } from "lucide-react";
// import toast from 'react-hot-toast';
// import myContext from "../../../context/myContext";
// import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
// import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";

// export default function SelectCityOrLocationModal() {
//     const [open, setOpen] = useState(false);

//     const handleOpen = () => setOpen(!open);

//     const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

//     // Fetch cities and nearby vehicles using the appropriate hooks
//     const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

//     const { data, error, isLoading } = useGetVehiclesNearbyQuery({
//         lat,
//         lng,
//         vehicleCity,
//         vehicleType,
//     });

//     // Check if user has previously selected a city or location and set it
//     useEffect(() => {
//         const storedCity = localStorage.getItem('selectedCity');
//         const storedVehicleCity = localStorage.getItem('vehicleCity');
//         const storedLat = localStorage.getItem('lat');
//         const storedLng = localStorage.getItem('lng');
//         const storedLocationName = localStorage.getItem('currentLocationName');

//         if (storedCity && storedVehicleCity && storedLat && storedLng) {
//             setSelectedCity(storedCity);
//             setVehicleCity(storedVehicleCity);
//             setLat(Number(storedLat));
//             setLng(Number(storedLng));
//             setCurrentLocationName(storedLocationName);
//         } else {
//             setOpen(true);
//         }
//     }, []);

//     // Detect current location function
//     const detectLocation = () => {
//         if (navigator.geolocation) {
//             toast.success("Detecting your location...");
//             navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//             handleOpen();
//         } else {
//             toast.error("Geolocation is not supported by your browser.");
//         }
//     };

//     const successCallback = async (position) => {
//         const { latitude, longitude } = position.coords;
//         setLat(latitude);
//         setLng(longitude);

//         // Reverse Geocoding using Google Maps API
//         try {
//             const response = await axios.get(
//                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
//             );
//             const addressComponents = response.data.results[0].address_components;

//             // Find the city name
//             const city = addressComponents.find((component) =>
//                 component.types.includes("locality")
//             )?.long_name;

//             // Get full address for the location
//             const locationName = response.data.results[0].formatted_address;

//             if (city) {
//                 // Set the detected city and location name
//                 setSelectedCity(city);
//                 setVehicleCity(city);
//                 setCurrentLocationName(locationName);

//                 // Store selected city and location in localStorage
//                 localStorage.setItem('selectedCity', city);
//                 localStorage.setItem('vehicleCity', city);
//                 localStorage.setItem('lat', latitude);
//                 localStorage.setItem('lng', longitude);
//                 localStorage.setItem('currentLocationName', locationName);

//                 handleOpen(); // Close the dialog after detection
//             } else {
//                 toast.error("Could not determine the city from your location.");
//             }
//         } catch (error) {
//             toast.error("Failed to fetch location details.");
//             console.error("Error fetching location details: ", error);
//         }
//     };

//     const errorCallback = (error) => {
//         console.error("Error detecting location: ", error);
//         toast.error("Unable to detect location. Please try again.");
//     };

//     const CityCard = ({ cityImage, _id, cityName }) => (
//         <div
//             className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer"
//             onClick={() => {
//                 setSelectedCity(cityName);
//                 setVehicleCity(_id);

//                 // Store selected city in localStorage
//                 localStorage.setItem('selectedCity', cityName);
//                 localStorage.setItem('vehicleCity', _id);

//                 handleOpen();
//             }}
//         >
//             <img
//                 src={cityImage?.url}
//                 alt={cityName}
//                 className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
//                 {cityName}
//             </div>
//         </div>
//     );

//     return (
//         <>
//             <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
//                 {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
//                 <AiOutlineEnvironment className="text-gray-500" size={20} />
//             </div>
//             <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none shadow-none hover:shadow-none rounded-md bg-white">
//                 <div className="flex flex-wrap justify-between items-center px-4 lg:px-6 py-4 lg:py-0 rounded-xl">
//                     <p className="text-lg font-semibold text-black">Select City or Location</p>
//                     <div className="flex items-center gap-3 mt-3">
//                         <Button
//                             variant=""
//                             onClick={detectLocation}
//                             className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none outline-none"
//                         >
//                             <Locate size={20} />
//                             Detect Current Location
//                         </Button>
//                     </div>
//                 </div>
//                 <DialogBody className="max-h-[78vh] overflow-y-auto">
//                     <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
//                         {isCitiesLoading ? (
//                             <p>Loading cities...</p>
//                         ) : (
//                             cities?.map((city) => (
//                                 <CityCard key={city.cityName} {...city} />
//                             ))
//                         )}
//                     </div>
//                 </DialogBody>
//             </Dialog>
//         </>
//     );
// }


import { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
    Button,
    Dialog,
    DialogBody,
    Spinner,
} from "@material-tailwind/react";
import { AiOutlineEnvironment } from "react-icons/ai";
import { Locate } from "lucide-react";
import toast from 'react-hot-toast';
import myContext from "../../../context/myContext";
import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";

export default function SelectCityOrLocationModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

    // Fetch cities using the appropriate hooks
    const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

    // Fetch nearby vehicles using the vehicle city and location (lat, lng)
    const { data, error, isLoading, refetch } = useGetVehiclesNearbyQuery({
        lat,
        lng,
        vehicleCity,
        vehicleType,
    });

    // Check if user has previously selected a city or location and set it
    // useEffect(() => {
    //     const storedCity = localStorage.getItem('selectedCity');
    //     const storedVehicleCity = localStorage.getItem('vehicleCity');
    //     const storedLat = localStorage.getItem('lat');
    //     const storedLng = localStorage.getItem('lng');
    //     const storedLocationName = localStorage.getItem('currentLocationName');

    //     if (storedCity && storedVehicleCity && storedLat && storedLng) {
    //         setSelectedCity(storedCity);
    //         setVehicleCity(storedVehicleCity);
    //         setLat(Number(storedLat));
    //         setLng(Number(storedLng));
    //         setCurrentLocationName(storedLocationName);

    //         // Refetch vehicles when data is available from localStorage
    //         refetch();  // Add this line to refetch nearby vehicles
    //     } else {
    //         setOpen(true);
    //     }
    // }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName, refetch]);

    useEffect(() => {
        const storedCity = localStorage.getItem('selectedCity');
        const storedVehicleCity = localStorage.getItem('vehicleCity');
        const storedLat = localStorage.getItem('lat');
        const storedLng = localStorage.getItem('lng');
        const storedLocationName = localStorage.getItem('currentLocationName');
    
        if (storedCity && storedVehicleCity && storedLat && storedLng) {
            setSelectedCity(storedCity);
            setVehicleCity(storedVehicleCity);
            setLat(Number(storedLat));
            setLng(Number(storedLng));
            setCurrentLocationName(storedLocationName);
        } else {
            setOpen(true);
        }
    }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName, refetch]); 

    
    useEffect(() => {
        // Check if all required data is available before showing the modal
        if (!selectedCity || !vehicleCity || !lat || !lng) {
            setOpen(true);
        } else {
            setOpen(false);  // Make sure to close the modal if data is available
        }
    }, [selectedCity, vehicleCity, lat, lng]);

    
    // Detect current location function
    const detectLocation = () => {
        if (navigator.geolocation) {
            toast.success("Detecting your location...");
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            handleOpen();
        } else {
            toast.error("Geolocation is not supported by your browser.");
        }
    };

    const successCallback = async (position) => {
        const { latitude, longitude } = position.coords;
        setLat(latitude);
        setLng(longitude);

        // Reverse Geocoding using Google Maps API
        try {
            const response = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
            );
            const addressComponents = response.data.results[0].address_components;

            // Find the city name
            const city = addressComponents.find((component) =>
                component.types.includes("locality")
            )?.long_name;

            // Get full address for the location
            const locationName = response.data.results[0].formatted_address;

            if (city) {
                // Set the detected city and location name
                setSelectedCity(city);
                setVehicleCity(city);
                setCurrentLocationName(locationName);

                // Store selected city and location in localStorage
                localStorage.setItem('selectedCity', city);
                localStorage.setItem('vehicleCity', city);
                localStorage.setItem('lat', latitude);
                localStorage.setItem('lng', longitude);
                localStorage.setItem('currentLocationName', locationName);

                // Refetch vehicles after location detection
                refetch();  // Add this to fetch vehicles after detecting location

                handleOpen(); // Close the dialog after detection
            } else {
                toast.error("Could not determine the city from your location.");
            }
        } catch (error) {
            toast.error("Failed to fetch location details.");
            console.error("Error fetching location details: ", error);
        }
    };

    const errorCallback = (error) => {
        console.error("Error detecting location: ", error);
        toast.error("Unable to detect location. Please try again.");
    };

    // const CityCard = ({ cityImage, _id, cityName }) => (
    //     <div
    //         className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer"
    //         onClick={() => {
    //             setSelectedCity(cityName);
    //             setVehicleCity(_id);

    //             // Store selected city in localStorage
    //             localStorage.setItem('selectedCity', cityName);
    //             localStorage.setItem('vehicleCity', _id);

    //             // Refetch vehicles when city is selected
    //             refetch();  // Fetch vehicles when a city is selected

    //             handleOpen();
    //         }}
    //     >
    //         <img
    //             src={cityImage?.url}
    //             alt={cityName}
    //             className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
    //         />
    //         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
    //             {cityName}
    //         </div>
    //     </div>
    // );

    const CityCard = ({ cityImage, _id, cityName }) => (
        <div
            className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer">
            <img
                src={cityImage?.url}
                alt={cityName}
                className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
                onClick={() => {
                    // Set selected city and vehicle city
                    setSelectedCity(cityName);
                    setVehicleCity(_id);
        
                    // Remove current location from state
                    setLat(null);
                    setLng(null);
                    setCurrentLocationName("");
        
                    // Update localStorage: store selected city, remove location data
                    localStorage.setItem('selectedCity', cityName);
                    localStorage.setItem('vehicleCity', _id);
                    localStorage.removeItem('lat');
                    localStorage.removeItem('lng');
                    localStorage.removeItem('currentLocationName');
        
                    // Refetch vehicles for the newly selected city
                    refetch();
        
                    handleOpen();  // Close the dialog
                }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
                {cityName}
            </div>
        </div>
    );
    

    return (
        <>
            <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
                {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
                <AiOutlineEnvironment className="text-gray-500" size={20} />
            </div>
            <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none shadow-none hover:shadow-none rounded-md bg-white">
                <div className="flex flex-wrap justify-between items-center px-4 lg:px-6 py-4 lg:py-0 rounded-xl">
                    <p className="text-lg font-semibold text-black">Select City or Location</p>
                    <div className="flex items-center gap-3 mt-3">
                        <Button
                            variant=""
                            onClick={detectLocation}
                            className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none outline-none"
                        >
                            <Locate size={20} />
                            Detect Current Location
                        </Button>
                    </div>
                </div>
                <DialogBody className="max-h-[78vh] overflow-y-auto">
                    <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
                        {isCitiesLoading ? (
                           <Spinner color="green"/>
                        ) : (
                            cities?.map((city) => (
                                <CityCard key={city.cityName} {...city} />
                            ))
                        )}
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}
