import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
import { Button, Spinner } from "@material-tailwind/react";
import { useCallback, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";
import DatePickerModule from "./DatePickerModule";
import RatingBadge from "./RatingBadge";

const AllVehicle = () => {
    const navigate = useNavigate();
    const [maxDistance, setMaxDistance] = useState(1000); // Initial max distance set to 1000
    const { lat, lng, vehicleType, vehicleCity, selectedCity } = useContext(myContext);
    const { data: vehicles, error, isLoading, refetch } = useGetVehiclesNearbyQuery({
        lat,
        lng,
        vehicleCity,
        vehicleType,
        maxDistance,
    });

    const sortedVehicles = vehicles?.vehicles?.slice().sort((a, b) => (a.distance && b.distance ? a.distance - b.distance : 0));

    // Function to reset filters and refetch data
    const resetFilters = useCallback(() => {
        setMaxDistance(1000); // Reset max distance
        refetch(); // Trigger refetch
    }, [refetch]);

    // Scroll-based lazy loading, only if vehicles are available
    const handleScroll = useCallback(() => {
        if (vehicles?.vehicles?.length > 0 && window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && maxDistance < 10000) {
            setMaxDistance((prev) => Math.min(prev + 100, 10000)); // Increment distance limit up to a max of 10000
        }
    }, [maxDistance, vehicles]);

    useEffect(() => {
        if (vehicles?.vehicles?.length > 0) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll, vehicles]);

    // Automatically reset filters when vehicleCity changes
    useEffect(() => {
        resetFilters();
    }, [vehicleCity, resetFilters]);

    useEffect(() => {
        refetch(); // Fetch new data when maxDistance changes
    }, [refetch, maxDistance]);

    // Framer Motion animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1, // Staggered animation
                type: "spring",
                stiffness: 50,
            },
        }),
    };

    return (
        <section className="py-5">
            <div className="container mx-auto">
                <div className="flex flex-wrap -m-4 justify-center">
                    {isLoading ? (
                        <div className="flex justify-center p-4">
                            <Spinner className="h-8 w-8 text-green-500" />
                        </div>
                    ) : error ? (
                        <motion.div
                            className="p-4 w-full"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                        >
                            <div className="flex justify-center items-center">
                                <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="Error" />
                            </div>
                            <h1 className="text-center text-red-500 mt-2">{error?.data?.error || "An unexpected error occurred."}</h1>
                        </motion.div>
                    ) : (
                        sortedVehicles.map((item, index) => {
                            const { _id, vehicleName, vehiclePrice, vehicleImage, vehicleRatings, distance } = item;

                            return (
                                <motion.div
                                    key={index}
                                    className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                                    custom={index}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-white rounded-lg border border-gray-300 drop-shadow">
                                        <div
                                            className="relative cursor-pointer"
                                            onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}
                                        >
                                            <img
                                                className="w-full h-48 object-cover rounded-t-xl"
                                                src={vehicleImage[0]?.url}
                                                alt="Vehicle"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h2 className="tracking-widest text-sm app-font text-gray-600 mb-1">Rideroz</h2>
                                            <div className="flex justify-between items-center mb-2">
                                                <h1 className="text-xl font-bold text-gray-900">{vehicleName}</h1>
                                                <RatingBadge vehicleRatings={vehicleRatings} />
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="text-gray-600 font-medium">
                                                    ₹ <span className="font-bold text-black">{vehiclePrice} /-</span>
                                                    <span className="app-font"> per day</span>
                                                </p>
                                                <span className="font-medium text-sm">{distance}</span>
                                            </div>

                                            <div className="mt-2">
                                                <div className="py-[1px] border rounded border-green-100 bg-green-50 px-2 app-font text-sm text-center">
                                                    <p>Shop Time: <br  className=" lg:hidden"/> <span>{item?.shop?.shop_OpeningTime}-{item?.shop?.shop_ClosedTime}</span></p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap lg:flex-nowrap w-full gap-2 mt-2">
                                                <DatePickerModule vehicleId={_id} month={"2024-11"} />
                                                <Button
                                                    onClick={() => navigate(`/checkout/${_id}`)}
                                                    className="bg-indigo-500 text-white w-full py-2 rounded shadow-none hover:bg-indigo-600 transition duration-300"
                                                >
                                                    Book Now
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllVehicle;
