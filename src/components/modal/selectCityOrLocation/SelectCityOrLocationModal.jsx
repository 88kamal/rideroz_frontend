/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
    Button,
    Dialog,
    DialogBody,
    Spinner,
} from "@material-tailwind/react";
import { AiOutlineEnvironment } from "react-icons/ai";
import { Locate, X } from "lucide-react";
import myContext from "../../../context/myContext";
import { useGetCitiesQuery } from "../../../redux/slices/cityApiSlice";
import { useGetVehiclesNearbyQuery } from "../../../redux/slices/vehicleApiSlice";

export default function SelectCityOrLocationModal() {
    const [open, setOpen] = useState(false);
    const [dialogSize, setDialogSize] = useState("lg");
    const handleOpen = () => setOpen(!open);

    const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName, showAlert } = useContext(myContext);

    // Fetch cities using the appropriate hooks
    const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

    // Fetch nearby vehicles using the vehicle city and location (lat, lng)
    const { data, error, isLoading, refetch } = useGetVehiclesNearbyQuery({
        lat,
        lng,
        vehicleCity,
        vehicleType,
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDialogSize("xxl"); // Adjust size for mobile
            } else {
                setDialogSize("xl"); // Adjust size for desktop
            }
        };

        window.addEventListener("resize", handleResize);

        // Call resize function initially to set the right size
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])
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
    // const detectLocation = async () => {
    //     if (!navigator.geolocation) {
    //         showAlert("Geolocation is not supported by your browser.", "error", 2000);
    //         return;
    //     }

    //     try {
    //         // Check if permission for geolocation is granted or prompt if denied
    //         const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });

    //         if (permissionStatus.state === 'denied') {
    //             showAlert("Location permission denied. Please enable GPS in your device settings.", "error", 2000);
    //             return;
    //         } else if (permissionStatus.state === 'prompt') {
    //             showAlert("Please allow location access.", "warning", 2000);
    //         }

    //         // Request the current position
    //         showAlert("Detecting your location...", "success", 2000);
    //         navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    //         handleOpen();
    //     } catch (error) {
    //         console.error("Error detecting location permissions: ", error);
    //         showAlert("An error occurred while checking location permissions.", "error", 2000);
    //     }
    // };
    // Detect current location function
    const detectLocation = async () => {
        if (!navigator.geolocation) {
            showAlert("Geolocation is not supported by your browser.", "error", 2000);
            return;
        }

        try {
            // Check if permission for geolocation is granted, denied, or needs to be prompted
            const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });

            if (permissionStatus.state === 'denied') {
                // If permission is denied, alert the user to enable location services
                showAlert("Location permission is denied. Please enable GPS in your device settings.", "error", 3000);
                return;
            } else if (permissionStatus.state === 'prompt') {
                // If permission is in the "prompt" state, show a message to allow location access
                showAlert("Please allow location access.", "warning", 3000);
            }

            if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
                // Once permission is granted or prompted, try to detect location
                showAlert("Detecting your location...", "success", 2000);
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
                handleOpen();
            }

        } catch (error) {
            console.error("Error detecting location permissions: ", error);
            showAlert("An error occurred while checking location permissions.", "error", 2000);
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
                showAlert("Could not determine the city from your location.", "error", 2000);
            }
        } catch (error) {
            showAlert("Failed to fetch location details.", "error", 2000);
            console.error("Error fetching location details: ", error);
        }
    };

    const errorCallback = (error) => {
        console.error("Error detecting location: ", error);
        showAlert("Unable to detect location. Please try again.", "error", 2000);
    };


    useEffect(() => {
        if (selectedCity) {
            setOpen(false);
        }
    }, [selectedCity]);

    const CityCard = ({ cityImage, _id, cityName }) => (
        <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer">
            <img
                src={cityImage?.url}
                alt={cityName}
                className="w-full h-full object-cover"
                onClick={() => {
                    setSelectedCity(cityName);
                    setVehicleCity(_id);
                    setLat(null);
                    setLng(null);
                    setCurrentLocationName("");

                    localStorage.setItem('selectedCity', cityName);
                    localStorage.setItem('vehicleCity', _id);
                    localStorage.removeItem('lat');
                    localStorage.removeItem('lng');
                    localStorage.removeItem('currentLocationName');

                    refetch();
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

            <Dialog open={open} handler={handleOpen} size={dialogSize} className="lg:max-w-[90%] max-w-full outline-none shadow-none hover:shadow-none rounded-md bg-white">
                <div className="flex flex-wrap justify-between items-center px-4 lg:px-6 py-4 lg:py-0 rounded-xl">
                    <p className="text-lg font-semibold text-black">Select City or Location</p>
                    <div className="flex items-center gap-3 mt-3">
                        <Button
                            variant=""
                            onClick={detectLocation}
                            className="flex rounded-none items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none outline-none"
                        >
                            <Locate size={20} />
                            Detect Current Location
                        </Button>

                        <div onClick={handleOpen} className=" cursor-pointer py-1.5 px-2 border border-green-200 bg-green-50 shadow-none hover:shadow-none outline-none">
                            <X color="black" />
                        </div>
                    </div>
                </div>
                <DialogBody className="max-h-[78vh] overflow-y-auto">
                    <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
                        {isCitiesLoading ? (
                            <Spinner color="green" />
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
