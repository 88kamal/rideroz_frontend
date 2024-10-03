/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { AiOutlineEnvironment } from "react-icons/ai";
import { Locate, X } from "lucide-react";
import toast from 'react-hot-toast';


const cities = [
    { name: 'Delhi', image: './city/1.png' },
    { name: 'Noida', image: './city/2.png' },
    { name: 'Greater Noida', image: './city/3.png' },
    { name: 'Bengaluru', image: './city/4.png' },
    { name: 'Ghaziabad', image: './city/5.png' },
    { name: 'Faridabad', image: './city/6.png' },
    { name: 'Gurugram', image: './city/7.png' },
    { name: 'Jaipur', image: './city/8.png' },
    { name: 'Vadodara', image: './city/9.png' },
    { name: 'Vijayawada', image: './city/10.png', isNew: true },
    { name: 'Goa', image: './city/11.png', isNew: true },
    { name: 'Hyderabad', image: './city/12.png', isNew: true },
];

export default function SelectCityOrLocationModal({ selectedCity, setSelectedCity }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    // Detect current location function
    const detectLocation = () => {
        if (navigator.geolocation) {
            // toast.success("Detecting your location...");
            handleOpen()
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            toast.error("Geolocation is not supported by your browser.");
        }
    };

    const successCallback = async (position) => {
        const { latitude, longitude } = position.coords;

        // Reverse Geocoding using Google Maps API or similar service
        try {
            const response = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE`
            );
            const city = response.data.results[0].address_components.find((component) =>
                component.types.includes("locality")
            ).long_name;

            // Set the detected city
            setSelectedCity(city);
            handleOpen(); // Close the dialog after detection

            // Show success toast
            toast.success(`You are currently in ${city}`);
        } catch (error) {
            toast.error("Failed to fetch location details.");
            console.error("Error fetching location details: ", error);
        }
    };

    const errorCallback = (error) => {
        console.error("Error detecting location: ", error);
        toast.error("Unable to detect location. Please try again.");
    };

    const CityCard = ({ name, image, isNew }) => (
        <div className="relative rounded-xl overflow-hidden w-36 h-36 shadow-lg cursor-pointer" onClick={() => {
            setSelectedCity(name);
            handleOpen();
        }}>
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-1 transition-colors duration-300 hover:bg-green-600 hover:bg-opacity-80">
                {name}
            </div>
            {isNew && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                    New
                </div>
            )}
        </div>
    );

    return (
        <>
            <div onClick={handleOpen} className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0 cursor-pointer">
                {selectedCity ? <p>{selectedCity}</p> : <p>Select City</p>}
                <AiOutlineEnvironment className="text-gray-500" size={20} />
            </div>
            <Dialog open={open} handler={handleOpen} size="xl" className="lg:max-w-[90%] max-w-full outline-none">
                <DialogHeader className="flex flex-wrap justify-between items-center bg-white px-6 py-4 rounded-xl">
                    <p className="text-lg font-semibold">Select City</p>
                    <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 lg:hidden sm:hidden md:hidden">
                        <X color=" black" size={20} />
                    </Button>
                    <div className="flex items-center gap-3 mt-3">
                        <Button
                            variant=""
                            onClick={detectLocation} // Call detectLocation on click
                            className="flex items-center gap-2 py-2 px-4 text-black border border-green-200 bg-green-50 shadow-none hover:shadow-none"
                        >
                            <Locate size={20} />
                            Detect Current Location
                        </Button>
                        <Button variant="" onClick={handleOpen} className=" bg-gray-50 px-2 py-2 rounded-lg shadow-none hover:shadow-none border border-gray-200 hidden lg:block sm:block md:block">
                            <X color=" black" size={20} />
                        </Button>
                    </div>
                </DialogHeader>
                <DialogBody className="max-h-[78vh] overflow-y-auto">
                    <div className="flex flex-wrap gap-6 justify-center p-6 overflow-x-auto scrollbar-hide">
                        {cities.map((city) => (
                            <CityCard key={city.name} {...city} />
                        ))}
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}


