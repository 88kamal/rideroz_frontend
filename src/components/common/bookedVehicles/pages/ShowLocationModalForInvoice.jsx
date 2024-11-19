// /* eslint-disable react/prop-types */
// import { useState, useEffect, useRef } from "react";
// import { Button, Dialog, DialogBody } from "@material-tailwind/react";
// import { MapPinHouse, X } from "lucide-react";

// export default function ShowLocationModalForInvoice({ vehicle }) {
//     const [open, setOpen] = useState(false);
//     const [currentLocation, setCurrentLocation] = useState(null);
//     const [currentLocationName, setCurrentLocationName] = useState("");
//     const [vehicleLocationName, setVehicleLocationName] = useState("");
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
//                     fetchLocationName(latitude, longitude, setCurrentLocationName);
//                 },
//                 (error) => {
//                     console.error("Error fetching location:", error);
//                     if (error.code === error.PERMISSION_DENIED) {
//                         alert("Please enable location services to view your current location.");
//                     }
//                 },
//                 { enableHighAccuracy: true }
//             );
//         }
//     }, [open]);

//     // Fetch location names
//     const fetchLocationName = async (lat, lng, setLocationName) => {
//         try {
//             const response = await fetch(
//                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
//             );
//             const data = await response.json();
//             if (data.results && data.results[0]) {
//                 setLocationName(data.results[0].formatted_address);
//             }
//         } catch (error) {
//             console.error("Error fetching location name:", error);
//         }
//     };

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
//             fetchLocationName(vehicle.location.coordinates[1], vehicle.location.coordinates[0], setVehicleLocationName);
//         }
//     }, [open, currentLocation, vehicle?.location]);


//     const initializeMap = () => {
//         if (!vehicle?.location?.coordinates || !currentLocation) {
//             console.error("Vehicle or current location not available");
//             return;
//         }
    
//         const { coordinates } = vehicle.location;
//         const shopLocation = { lat: coordinates[1], lng: coordinates[0] };
    
//         if (mapRef.current) {
//             map.current = new window.google.maps.Map(mapRef.current, {
//                 center: shopLocation,
//                 zoom: 15, // Closer zoom level
//                 mapTypeControl: true,
//                 zoomControl: true,
//                 streetViewControl: false,
//             });
    
//             // Marker for the shop location
//             const shopMarker = new window.google.maps.Marker({
//                 position: shopLocation,
//                 map: map.current,
//                 title: "Shop Location",
//             });
    
//             // Add info window for shop location
//             const shopInfoWindow = new window.google.maps.InfoWindow({
//                 content: `<div style="font-size: 14px; font-weight: bold;">Shop Location</div>`,
//                 disableAutoPan: true, // Prevent panning on open
//             });
//             shopMarker.addListener("click", () => shopInfoWindow.open(map.current, shopMarker));
//             shopInfoWindow.open(map.current, shopMarker);
    
//             // Marker for the current location
//             const userLocation = {
//                 lat: currentLocation.latitude,
//                 lng: currentLocation.longitude,
//             };
    
//             const userMarker = new window.google.maps.Marker({
//                 position: userLocation,
//                 map: map.current,
//                 title: "Your Location",
//                 icon: {
//                     url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//                 },
//             });
    
//             // Add info window for current location
//             const userInfoWindow = new window.google.maps.InfoWindow({
//                 content: `<div style="font-size: 14px; font-weight: bold;">Your Location</div>`,
//                 disableAutoPan: true,
//             });
//             userMarker.addListener("click", () => userInfoWindow.open(map.current, userMarker));
//             userInfoWindow.open(map.current, userMarker);
    
//             // Draw a line between current location and shop location
//             new window.google.maps.Polyline({
//                 path: [shopLocation, userLocation],
//                 geodesic: true,
//                 strokeColor: "#FF0000",
//                 strokeOpacity: 1.0,
//                 strokeWeight: 2,
//                 map: map.current,
//             });
    
//             // Adjust map bounds to include both locations
//             const bounds = new window.google.maps.LatLngBounds();
//             bounds.extend(shopLocation);
//             bounds.extend(userLocation);
//             map.current.fitBounds(bounds);
//         }
//     };
    

//     return (
//         <>
//             <Button
//             v
//                 onClick={handleOpen}
//                 variant=""
//                 size="small"
//                 className=" bg-green-700 hover:shadow-none shadow-none"
//             >
//                 Location
//             </Button>

//             <Dialog open={open} size="xxl" className="shadow-lg rounded-xl bg-gradient-to-br from-white to-gray-50">
//                 <div className="px-4 py-4">
//                     <h1 className="text-xl text-black font-bold">Location</h1>
//                     <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
//                         <X size={20} className="text-green-800 hover:text-green-900" />
//                     </div>
//                 </div>
//                 <DialogBody className="overflow-y-scroll">
//                     <div className="bg-white p-6 rounded-lg drop-shadow">
//                         <h2 className="text-xl font-semibold text-gray-700 mb-4">Vehicle Location</h2>
//                         <div className="flex items-center space-x-2 mb-6">
//                             <MapPinHouse className="text-red-500 w-6 h-6" />
//                             <p className="text-lg text-gray-800">{vehicleLocationName || "Location not available"}</p>
//                         </div>

//                         {currentLocation ? (
//                             <>
//                                 <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Current Location</h2>
//                                 <div className="flex items-center space-x-2">
//                                     <MapPinHouse className="text-blue-500 w-6 h-6" />
//                                     <p className="text-lg text-gray-800">{currentLocationName || "Location not available"}</p>
//                                 </div>
//                             </>
//                         ) : (
//                             <p className="text-gray-500">Fetching current location...</p>
//                         )}
//                     </div>

//                     {/* Map container */}
//                     <div
//                         ref={mapRef}
//                         style={{ width: "100%", height: "450px", marginTop: "20px" }}
//                         className="border border-gray-300 rounded-lg shadow-md"
//                     ></div>
//                 </DialogBody>
//             </Dialog>
//         </>
//     );
// }


import { useState, useEffect, useRef } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { MapPinHouse, X } from "lucide-react";

export default function ShowLocationModalForInvoice({ vehicle }) {
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
                (error) => {
                    console.error("Error fetching location:", error);
                    if (error.code === error.PERMISSION_DENIED) {
                        alert("Please enable location services to view your current location.");
                    }
                },
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
        if (!vehicle?.location?.coordinates || !currentLocation) {
            console.error("Vehicle or current location not available");
            return;
        }

        const { coordinates } = vehicle.location;
        const shopLocation = { lat: coordinates[1], lng: coordinates[0] };

        if (mapRef.current) {
            map.current = new window.google.maps.Map(mapRef.current, {
                center: shopLocation,
                zoom: 15,
                mapTypeControl: true,
                zoomControl: true,
                streetViewControl: false,
            });

            // Marker for the shop location
            const shopMarker = new window.google.maps.Marker({
                position: shopLocation,
                map: map.current,
                title: "Shop Location",
            });

            // Add info window for shop location
            const shopInfoWindow = new window.google.maps.InfoWindow({
                content: `<div style="font-size: 14px; font-weight: bold;">Shop Location</div>`,
                disableAutoPan: true,
            });
            shopMarker.addListener("click", () => shopInfoWindow.open(map.current, shopMarker));
            shopInfoWindow.open(map.current, shopMarker);

            // Marker for the current location
            const userLocation = {
                lat: currentLocation.latitude,
                lng: currentLocation.longitude,
            };

            const userMarker = new window.google.maps.Marker({
                position: userLocation,
                map: map.current,
                title: "Your Location",
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                },
            });

            // Add info window for current location
            const userInfoWindow = new window.google.maps.InfoWindow({
                content: `<div style="font-size: 14px; font-weight: bold;">Your Location</div>`,
                disableAutoPan: true,
            });
            userMarker.addListener("click", () => userInfoWindow.open(map.current, userMarker));
            userInfoWindow.open(map.current, userMarker);

            // Draw a line between current location and shop location
            new window.google.maps.Polyline({
                path: [shopLocation, userLocation],
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2,
                map: map.current,
            });

            // Adjust map bounds to include both locations
            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend(shopLocation);
            bounds.extend(userLocation);
            map.current.fitBounds(bounds);
        }
    };

    // Generate Google Maps navigation link
    const generateNavigationLink = () => {
        if (!currentLocation || !vehicle?.location?.coordinates) {
            return "#";
        }
        const { latitude, longitude } = currentLocation;
        const { coordinates } = vehicle.location;
        const destinationLat = coordinates[1];
        const destinationLng = coordinates[0];
        return `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destinationLat},${destinationLng}&travelmode=driving`;
    };

    return (
        <>
            <Button
                onClick={handleOpen}
                variant=""
                size="small"
                className=" bg-green-700 hover:shadow-none shadow-none"
            >
                Location
            </Button>

            <Dialog open={open} size="xxl" className="shadow-lg rounded-xl bg-gradient-to-br from-white to-gray-50">
                <div className="px-4 py-4">
                    <h1 className="text-xl text-black font-bold">Location</h1>
                    <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
                        <X size={20} className="text-green-800 hover:text-green-900" />
                    </div>
                </div>
                <DialogBody className="overflow-y-scroll">
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
                                <a
                                    href={generateNavigationLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 text-center"
                                >
                                    Navigate to Shop
                                </a>
                            </>
                        ) : (
                            <p className="text-gray-500">Fetching current location...</p>
                        )}
                    </div>

                    {/* Map container */}
                    <div
                        ref={mapRef}
                        style={{ width: "100%", height: "450px", marginTop: "20px" }}
                        className="border border-gray-300 rounded-lg shadow-md"
                    ></div>
                </DialogBody>
            </Dialog>
        </>
    );
}
