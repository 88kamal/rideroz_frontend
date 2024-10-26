// /* eslint-disable react/prop-types */
// import { useState, useEffect, useRef } from "react";
// import {
//     Dialog,
//     DialogBody,
//     IconButton,
// } from "@material-tailwind/react";
// import { MapPinHouse, X } from "lucide-react";

// // eslint-disable-next-line no-unused-vars
// export default function ShowLocationModal({ vehicle }) {
//     const [open, setOpen] = useState(false);
//     const [currentLocation, setCurrentLocation] = useState(null);
//     const mapRef = useRef(null);
//     const map = useRef(null);

//     const handleOpen = () => setOpen(!open);

//     // Fetch current location when modal opens
//     useEffect(() => {
//         if (open) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setCurrentLocation({ latitude, longitude });
//                 },
//                 (error) => console.error("Error fetching location:", error),
//                 { enableHighAccuracy: true }
//             );
//         }
//     }, [open]);

//     // Load the Google Maps script
//     useEffect(() => {
//         const loadGoogleMaps = () => {
//             if (!window.google) {
//                 const script = document.createElement("script");
//                 script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`;
//                 script.async = true;
//                 script.onload = initializeMap;
//                 document.body.appendChild(script);
//             } else {
//                 initializeMap();
//             }
//         };

//         if (open && currentLocation && vehicle?.location?.coordinates) {
//             loadGoogleMaps();
//         }
//     }, [open, currentLocation, vehicle?.location]);

//     const initializeMap = () => {
//         const { coordinates } = vehicle.location;
//         const shopLocation = { lat: coordinates[1], lng: coordinates[0] };

//         if (mapRef.current) {
//             map.current = new window.google.maps.Map(mapRef.current, {
//                 center: shopLocation,
//                 zoom: 12,
//             });

//             // Marker for the shop location
//             new window.google.maps.Marker({
//                 position: shopLocation,
//                 map: map.current,
//                 title: "Shop Location",
//             });

//             // Marker for the current location
//             new window.google.maps.Marker({
//                 position: {
//                     lat: currentLocation.latitude,
//                     lng: currentLocation.longitude,
//                 },
//                 map: map.current,
//                 title: "Your Location",
//                 icon: {
//                     url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//                 },
//             });
//         }
//     };

//     return (
//         <>
//             <IconButton
//                 onClick={handleOpen}
//                 variant="text"
//                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
//             >
//               <MapPinHouse className="w-5 h-5" />
//             </IconButton>

//             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-green-100">
//                 <div className="px-4 py-4">
//                     <h1 className="text-xl text-black font-bold">Employee Detail</h1>
//                     <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
//                         <X size={20} className="text-green-800 hover:text-green-900" />
//                     </div>
//                 </div>
//                 <DialogBody>
//                     <h2 className="text-lg font-semibold">Vehicle Location</h2>
//                     <pre>{JSON.stringify(vehicle.location, null, 2)}</pre>

//                     {currentLocation ? (
//                         <>
//                             <h2 className="text-lg font-semibold mt-4">Current Location</h2>
//                             <pre>{JSON.stringify(currentLocation, null, 2)}</pre>
//                         </>
//                     ) : (
//                         <p>Fetching current location...</p>
//                     )}

//                     {/* Map container */}
//                     <div
//                         ref={mapRef}
//                         style={{ width: "100%", height: "400px", marginTop: "20px" }}
//                         className="border border-gray-300 rounded-lg shadow-md"
//                     ></div>
//                 </DialogBody>
//             </Dialog>
//         </>
//     );
// }


/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import {
    Dialog,
    DialogBody,
    IconButton,
} from "@material-tailwind/react";
import { MapPinHouse, X } from "lucide-react";

export default function ShowLocationModal({ vehicle }) {
    const [open, setOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [currentLocationName, setCurrentLocationName] = useState("");
    const [vehicleLocationName, setVehicleLocationName] = useState("");
    const mapRef = useRef(null);
    const map = useRef(null);

    const handleOpen = () => setOpen(!open);

    // Fetch current location when modal opens
    useEffect(() => {
        if (open) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ latitude, longitude });
                    fetchLocationName(latitude, longitude, setCurrentLocationName);
                },
                (error) => console.error("Error fetching location:", error),
                { enableHighAccuracy: true }
            );
        }
    }, [open]);

    // Fetch location names
    const fetchLocationName = async (lat, lng, setLocationName) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
            );
            const data = await response.json();
            if (data.results && data.results[0]) {
                setLocationName(data.results[0].formatted_address);
            }
        } catch (error) {
            console.error("Error fetching location name:", error);
        }
    };

    // Load the Google Maps script
    useEffect(() => {
        const loadGoogleMaps = () => {
            if (!window.google) {
                const script = document.createElement("script");
                script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`;
                script.async = true;
                script.onload = initializeMap;
                document.body.appendChild(script);
            } else {
                initializeMap();
            }
        };

        if (open && currentLocation && vehicle?.location?.coordinates) {
            loadGoogleMaps();
            fetchLocationName(vehicle.location.coordinates[1], vehicle.location.coordinates[0], setVehicleLocationName);
        }
    }, [open, currentLocation, vehicle?.location]);

    const initializeMap = () => {
        const { coordinates } = vehicle.location;
        const shopLocation = { lat: coordinates[1], lng: coordinates[0] };

        if (mapRef.current) {
            map.current = new window.google.maps.Map(mapRef.current, {
                center: shopLocation,
                zoom: 12,
            });

            // Marker for the shop location
            new window.google.maps.Marker({
                position: shopLocation,
                map: map.current,
                title: "Shop Location",
            });

            // Marker for the current location
            new window.google.maps.Marker({
                position: {
                    lat: currentLocation.latitude,
                    lng: currentLocation.longitude,
                },
                map: map.current,
                title: "Your Location",
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                },
            });
        }
    };

    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <MapPinHouse className="w-5 h-5" />
            </IconButton>

            <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-white">
                <div className="px-4 py-4">
                    <h1 className="text-xl text-black font-bold">Location</h1>
                    <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
                        <X size={20} className="text-green-800 hover:text-green-900" />
                    </div>
                </div>
                <DialogBody className=" overflow-y-scroll">
                    <div className="bg-white p-6 rounded-lg drop-shadow">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Vehicle Location</h2>
                        <div className="flex items-center space-x-2 mb-6">
                            <MapPinHouse className="text-red-500 w-6 h-6" />
                            <p className="text-lg text-gray-800">{vehicleLocationName || "Location not available"}</p>
                        </div>

                        {currentLocation ? (
                            <>
                                <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Current Location</h2>
                                <div className="flex items-center space-x-2">
                                    <MapPinHouse className="text-blue-500 w-6 h-6" />
                                    <p className="text-lg text-gray-800">{currentLocationName || "Location not available"}</p>
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-500">Fetching current location...</p>
                        )}
                    </div>


                    {/* Map container */}
                    <div
                        ref={mapRef}
                        style={{ width: "100%", height: "400px", marginTop: "20px" }}
                        className="border border-gray-300 rounded-lg shadow-md"
                    ></div>
                </DialogBody>
            </Dialog>
        </>
    );
}
