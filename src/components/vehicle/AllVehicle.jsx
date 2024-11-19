// // import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
// // import { Button, Spinner } from "@material-tailwind/react";
// // import { useContext, useEffect, useState } from "react";
// // import myContext from "../../context/myContext";
// // import { useNavigate } from "react-router-dom";
// // import DatePickerModule from "./DatePickerModule";
// // import RatingBadge from "./RatingBadge";

// // const AllVehicle = () => {
// //     const navigate = useNavigate();
// //     const [maxDistance, setMaxDistance] = useState(400);
// //     const { lat, lng, vehicleType, vehicleCity, selectedCity, currentLocationName } = useContext(myContext);
// //     const { data: vehicles, error, isLoading, refetch } = useGetVehiclesNearbyQuery({
// //         lat,
// //         lng,
// //         vehicleCity,
// //         vehicleType,
// //         maxDistance
// //     });

// //     // Auto-refetch every 5 minutes (300000 ms)
// //     useEffect(() => {
// //             refetch();
// //     }, [refetch]);

// //     return (
// //         <section className="py-5">
// //             <div className="container mx-auto px-">
// //                 <div className="flex flex-wrap -m-4 justify-center">
// //                     {isLoading ? (
// //                         <div className="flex justify-center p-4">
// //                             <Spinner className="h-8 w-8 text-green-500" />
// //                         </div>
// //                     ) : error ? (
// //                         <div className="p-4">
// //                             <div className="flex justify-center items-center">
// //                                 <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="Error" />
// //                             </div>
// //                             <h1 className="text-center text-red-500 mt-2">{error?.data?.error}</h1>
// //                         </div>
// //                     ) : (
// //                         vehicles?.vehicles?.map((item, index) => {
// //                             const { _id, vehicleName, vehiclePrice, vehicleImage, vehicleRatings, distance } = item;

// //                             return (
// //                                 <div key={index} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
// //                                     <div className="bg-white rounded-lg border border-gray-300 drop-shadow ">
// //                                         <div className="relative cursor-pointer" onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}>
// //                                             <img
// //                                                 className="w-full h-48 object-cover rounded-t-xl"
// //                                                 src={vehicleImage[0]?.url}
// //                                                 alt="Vehicle"
// //                                             />
// //                                         </div>
// //                                         <div className="p-4">
// //                                             <h2 className="tracking-widest text-sm app-font text-gray-600 mb-1">
// //                                                 Rideroz
// //                                             </h2>
// //                                             <div className="flex justify-between items-center mb-2">
// //                                                 <h1 className="text-xl font-bold text-gray-900">
// //                                                     {vehicleName}
// //                                                 </h1>
// //                                                 <RatingBadge vehicleRatings={vehicleRatings} />
// //                                             </div>
// //                                             <div className="flex justify-between items-center">
// //                                                 <p className="text-gray-600 font-medium">
// //                                                     ₹ <span className="font-bold text-black ">{vehiclePrice} /-</span>
// //                                                     <span className="app-font"> per day</span>
// //                                                 </p>
// //                                                 <span className="font-medium text-sm">{distance}</span>
// //                                             </div>
// //                                             <div className="flex w-full gap-2 mt-4">
// //                                                 <DatePickerModule vehicleId={_id} month={"2024-11"} />
// //                                                 <Button
// //                                                     onClick={() => navigate(`/checkout/${_id}`)}
// //                                                     className="bg-indigo-500 text-white w-full py-2 rounded shadow-none hover:bg-indigo-600 transition duration-300"
// //                                                 >
// //                                                     Book Now
// //                                                 </Button>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             );
// //                         })
// //                     )}
// //                 </div>
// //                 <div className="flex justify-center mt-8">
// //                     <Button
// //                         onClick={() => navigate(`/all-vehicles/${selectedCity}/${currentLocationName}`)}
// //                         className="bg-green-500 text-white px-8 py-3 rounded-full hover:shadow-none shadow-none hover:bg-green-600"
// //                     >
// //                         Show More
// //                     </Button>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default AllVehicle;


// import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
// import { Button, Spinner } from "@material-tailwind/react";
// import { useContext, useEffect, useState } from "react";
// import myContext from "../../context/myContext";
// import { useNavigate } from "react-router-dom";
// import DatePickerModule from "./DatePickerModule";
// import RatingBadge from "./RatingBadge";

// const AllVehicle = () => {
//     const navigate = useNavigate();
//     const [maxDistance, setMaxDistance] = useState(100);
//     const [isFetchingMore, setIsFetchingMore] = useState(false);
//     const { lat, lng, vehicleType, vehicleCity, selectedCity, currentLocationName } = useContext(myContext);
//     const { data: vehicles, error, isLoading, refetch } = useGetVehiclesNearbyQuery({
//         lat,
//         lng,
//         vehicleCity,
//         vehicleType,
//         maxDistance
//     });

//     // Auto-refetch every 5 minutes (300000 ms)
//     useEffect(() => {
//         const interval = setInterval(() => {
//             refetch();
//         }, 300000);
//         return () => clearInterval(interval);
//     }, [refetch]);

//     // Infinite loading logic
//     const handleScroll = () => {
//         if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !isFetchingMore) {
//             setIsFetchingMore(true);
//             setMaxDistance((prev) => prev + 100); // Increment maxDistance
//         }
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [isFetchingMore]);

//     useEffect(() => {
//         if (isFetchingMore) {
//             refetch();
//             setIsFetchingMore(false);
//         }
//     }, [maxDistance, refetch, isFetchingMore]);

//     return (
//         <section className="py-5">
//             <div className="container mx-auto ">
//                 <div className="flex flex-wrap -m-4 justify-center">
//                     {isLoading ? (
//                         <div className="flex justify-center p-4">
//                             <Spinner className="h-8 w-8 text-green-500" />
//                         </div>
//                     ) : error ? (
//                         <div className="p-4">
//                             <div className="flex justify-center items-center">
//                                 <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="Error" />
//                             </div>
//                             <h1 className="text-center text-red-500 mt-2">{error?.data?.error}</h1>
//                         </div>
//                     ) : (
//                         vehicles?.vehicles?.map((item, index) => {
//                             const { _id, vehicleName, vehiclePrice, vehicleImage, vehicleRatings, distance } = item;

//                             return (
//                                 <div key={index} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
//                                     <div className="bg-white rounded-lg border border-gray-300 drop-shadow">
//                                         <div className="relative cursor-pointer" onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}>
//                                             <img
//                                                 className="w-full h-48 object-cover rounded-t-xl"
//                                                 src={vehicleImage[0]?.url}
//                                                 alt="Vehicle"
//                                             />
//                                         </div>
//                                         <div className="p-4">
//                                             <h2 className="tracking-widest text-sm app-font text-gray-600 mb-1">
//                                                 Rideroz
//                                             </h2>
//                                             <div className="flex justify-between items-center mb-2">
//                                                 <h1 className="text-xl font-bold text-gray-900">
//                                                     {vehicleName}
//                                                 </h1>
//                                                 <RatingBadge vehicleRatings={vehicleRatings} />
//                                             </div>
//                                             <div className="flex justify-between items-center">
//                                                 <p className="text-gray-600 font-medium">
//                                                     ₹ <span className="font-bold text-black">{vehiclePrice} /-</span>
//                                                     <span className="app-font"> per day</span>
//                                                 </p>
//                                                 <span className="font-medium text-sm">{distance}</span>
//                                             </div>
//                                             <div className="flex w-full gap-2 mt-4">
//                                                 <DatePickerModule vehicleId={_id} month={"2024-11"} />
//                                                 <Button
//                                                     onClick={() => navigate(`/checkout/${_id}`)}
//                                                     className="bg-indigo-500 text-white w-full py-2 rounded shadow-none hover:bg-indigo-600 transition duration-300"
//                                                 >
//                                                     Book Now
//                                                 </Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })
//                     )}
//                 </div>
//                 {isFetchingMore && (
//                     <div className="flex justify-center mt-4">
//                         <Spinner className="h-8 w-8 text-green-500" />
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default AllVehicle;


import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
import { Button, Spinner } from "@material-tailwind/react";
import { useContext, useEffect, useState, useMemo } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";
import DatePickerModule from "./DatePickerModule";
import RatingBadge from "./RatingBadge";

const AllVehicle = () => {
    const navigate = useNavigate();
    const [maxDistance, setMaxDistance] = useState(100);
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const { lat, lng, vehicleType, vehicleCity, selectedCity } = useContext(myContext);

    const queryParameters = useMemo(
        () => ({ lat, lng, vehicleCity, vehicleType, maxDistance }),
        [lat, lng, vehicleCity, vehicleType, maxDistance]
    );

    const { data: vehicles, error, isLoading, refetch, isFetching } = useGetVehiclesNearbyQuery(queryParameters);

    // Debounce scroll handler for infinite loading
    const handleScroll = debounce(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100 &&
            !isFetchingMore
        ) {
            setIsFetchingMore(true);
            setMaxDistance((prev) => prev + 100);
        }
    }, 300);

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isFetchingMore]);

    // Trigger refetch when `maxDistance` changes
    useEffect(() => {
        if (isFetchingMore) {
            refetch();
            setIsFetchingMore(false);
        }
    }, [maxDistance, refetch, isFetchingMore]);

    return (
        <section className="py-5">
            <div className="container mx-auto">
                <div className="flex flex-wrap -m-4 justify-center">
                    {isLoading || isFetching ? (
                        <div className="flex justify-center p-4">
                            <Spinner className="h-8 w-8 text-green-500" />
                        </div>
                    ) : error ? (
                        <div className="p-4">
                            <div className="flex justify-center items-center">
                                <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="Error" />
                            </div>
                            <h1 className="text-center text-red-500 mt-2">{error?.data?.error || "Something went wrong"}</h1>
                        </div>
                    ) : (
                        vehicles?.vehicles?.map(({ _id, vehicleName, vehiclePrice, vehicleImage, vehicleRatings, distance }) => (
                            <div key={_id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
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
                                        <h2 className="tracking-widest text-sm app-font text-gray-600 mb-1">
                                            Rideroz
                                        </h2>
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
                                        <div className="flex w-full gap-2 mt-4">
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
                            </div>
                        ))
                    )}
                </div>
                {isFetchingMore && (
                    <div className="flex justify-center mt-4">
                        <Spinner className="h-8 w-8 text-green-500" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllVehicle;
