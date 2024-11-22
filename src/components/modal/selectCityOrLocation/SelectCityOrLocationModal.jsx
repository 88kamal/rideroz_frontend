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
import { useGetVehiclesNearbyQuery, vehicleApi } from "../../../redux/slices/vehicleApiSlice";
import { useDispatch } from "react-redux";

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

    const detectLocation = async () => {
        if (!navigator.geolocation) {
            showAlert("Geolocation is not supported by your browser.", "error", 2000);
            return;
        }

        try {
            // Show a prompt for location detection
            showAlert("Detecting your location...", "success", 2000);

            // Request the current position
            navigator.geolocation.getCurrentPosition(
                successCallback,
                errorCallback,
                {
                    enableHighAccuracy: true, // Use high accuracy if available
                    timeout: 10000, // Timeout after 10 seconds
                }
            );
        } catch (error) {
            console.error("Error detecting location: ", error);
            showAlert("An error occurred while detecting location. Please try again.", "error", 2000);
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
            const addressComponents = response.data.results[0]?.address_components;

            const city = addressComponents?.find((component) =>
                component.types.includes("locality")
            )?.long_name;

            const locationName = response.data.results[0]?.formatted_address;

            if (city) {
                setSelectedCity(city);
                setVehicleCity(city);
                setCurrentLocationName(locationName);

                localStorage.setItem("selectedCity", city);
                localStorage.setItem("vehicleCity", city);
                localStorage.setItem("lat", latitude);
                localStorage.setItem("lng", longitude);
                localStorage.setItem("currentLocationName", locationName);

                refetch(); // Fetch nearby vehicles
                handleOpen(); // Close the modal
            } else {
                showAlert("Could not determine the city from your location.", "error", 2000);
            }
        } catch (error) {
            console.error("Error fetching location details: ", error);
            showAlert("Failed to fetch location details.", "error", 2000);
        }
    };

    const errorCallback = (error) => {
        let errorMessage = "Unable to detect location. Please try again.";

        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorMessage = "Location permission denied. Please enable it in your browser or device settings.";
                break;
            case error.POSITION_UNAVAILABLE:
                errorMessage = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                errorMessage = "The request to get your location timed out.";
                break;
            default:
                errorMessage = "An unknown error occurred while detecting location.";
                break;
        }

        console.error("Error detecting location: ", error);
        showAlert(errorMessage, "error", 2000);
    };



    useEffect(() => {
        if (selectedCity) {
            setOpen(false);
        }
    }, [selectedCity]);

    

    // const CityCard = ({ cityImage, _id, cityName }) => (


    //     <button className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer"

    //         onClick={() => {
    //             setSelectedCity(cityName);
    //             setVehicleCity(_id);
    //             setLat(null);
    //             setLng(null);
    //             setCurrentLocationName("");

    //             dispatch(vehicleApi.util.resetApiState()); // Reset entire RTK Query cache


    //             localStorage.setItem('selectedCity', cityName);
    //             localStorage.setItem('vehicleCity', _id);
    //             localStorage.removeItem('lat');
    //             localStorage.removeItem('lng');
    //             localStorage.removeItem('currentLocationName');

    //             refetch();
    //         }}>
    //         <img
    //             src={cityImage?.url}
    //             alt={cityName}
    //             className="w-full h-full object-cover"

    //         />
    //         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
    //             {cityName}
    //         </div>
    //     </button>
    // );

    const CityCard = ({ cityImage, _id, cityName, refetch }) => {
        const [resettingCache, setResettingCache] = useState(false); // Track cache reset state
        const dispatch = useDispatch();
    
        const handleClick = () => {
            setResettingCache(true); // Start resetting cache
    
            // Reset cache
            dispatch(vehicleApi.util.resetApiState());
    
            // Ensure the cache reset completes before proceeding
            setTimeout(() => {
                setResettingCache(false); // Cache reset complete
                updateSelection();
            }, 0); // Adjust timeout based on your application behavior
        };
    
        const updateSelection = () => {
            setSelectedCity(cityName);
            setVehicleCity(_id);
            setLat(null);
            setLng(null);
            setCurrentLocationName("");
    
            // Update localStorage
            localStorage.setItem("selectedCity", cityName);
            localStorage.setItem("vehicleCity", _id);
            localStorage.removeItem("lat");
            localStorage.removeItem("lng");
            localStorage.removeItem("currentLocationName");
    
            refetch(); // Trigger refetch of nearby vehicles
        };
    
        return (
            <button
                className={`relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer ${resettingCache ? "opacity-50 pointer-events-none" : ""}`}
                onClick={handleClick}
                disabled={resettingCache} // Prevent repeated clicks during reset
            >
                <img
                    src={cityImage?.url}
                    alt={cityName}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
                    {cityName}
                </div>
            </button>
        );
    };



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
                    <pre>{JSON.stringify(data?.vehicles?.length, null, 2)}</pre>
                    {/* <pre>{JSON.stringify(isFetching,null,2)}</pre> */}

                    {/* <Button
                        onClick={() => {
                            dispatch(vehicleApi.util.resetApiState()); // Reset entire RTK Query cache

                        }}
                    >
                        Reset
                    </Button> */}
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