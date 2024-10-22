// // // // import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
// // // // import { Button, Card, Spinner } from "@material-tailwind/react";
// // // // import { useContext } from "react";
// // // // import myContext from "../../context/myContext";
// // // // import { useNavigate } from "react-router-dom";

// // // // const AllVehicle = () => {
// // // //     const navigate = useNavigate();
// // // //     const { lat, setLat,
// // // //         lng, setLng,
// // // //         vehicleType, setVehicleType,
// // // //         vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName } = useContext(myContext);


// // // //     const { data: vehicles, error, isLoading } = useGetVehiclesNearbyQuery({
// // // //         lat,
// // // //         lng,
// // // //         vehicleCity,
// // // //         vehicleType,
// // // //     }); // Skip fetching if lat or lng is not available


// // // //     return (
// // // //         <section className=" body-font">
// // // //             {/* <pre>{JSON.stringify({ vehicleCity }, null, 2)}</pre>
// // // //             <pre>{JSON.stringify({ lat, lng }, null, 2)}</pre> */}
// // // //             {/* <pre>{JSON.stringify(vehicleType,null,2)}</pre> */}
// // // //             <div className="container lg:px-5 py-10 mx-auto">
// // // //                 <div className="flex flex-wrap -m-4 justify-center">
// // // //                     {isLoading ? (
// // // //                         <div className="flex justify-center p-4">
// // // //                             <Spinner className="h-8 w-8 text-green-500" />
// // // //                         </div>
// // // //                     ) : error ? (
// // // //                         <div className="p-4 ">
// // // //                             <div className=" flex justify-center items-center">
// // // //                                 <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
// // // //                             </div>
// // // //                             <h1 className=" text-center" color="red">{error?.data?.error}</h1>
// // // //                         </div>
// // // //                     )

// // // //                         :
// // // //                         <>
// // // //                             {vehicles?.vehicles?.map((item, index) => {
// // // //                                 const { _id, location, vehicleType, vehicleNumber, vehicleName, vehicleModel, vehiclePrice, bookingPrice, sittingCapacity, vehicleImage, vehicleAvailability, shop, numOfReviews, reviews, createdAt } = item
// // // //                                 return (
// // // //                                     <div key={index} className="p-4 w-full md:w-1/4">
// // // //                                         {/* <pre>{JSON.stringify(selectedCity, null, 2)}</pre> */}
// // // //                                         <Card className="h-full drop-shadow overflow-hidden">
// // // //                                             <div className="flex justify-center cursor-pointer" onClick={() => {
// // // //                                                 navigate(`/vehicle-info/${selectedCity}/${_id}`)
// // // //                                             }}>
// // // //                                                 <img
// // // //                                                     className="w-[280px] h-[200px] rounded-xl"
// // // //                                                     src={vehicleImage[0]?.url}
// // // //                                                     alt="blog"
// // // //                                                 />
// // // //                                             </div>
// // // //                                             <div className="p-6">
// // // //                                                 <h2 className="tracking-widest text-xs title-font font-medium mb-1 app-font">
// // // //                                                     Rideroz
// // // //                                                 </h2>
// // // //                                                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// // // //                                                     {vehicleName}
// // // //                                                 </h1>

// // // //                                                 <p className=" app-font ">₹ <span className=" font-bold text-black">{vehiclePrice}/-</span> per day</p>

// // // //                                                 <Button onClick={()=> navigate(`/checkout/${_id}`)} variant="" className=" bg-[#82BE23] w-full mt-3 shadow-none hover:shadow-none">
// // // //                                                     Book Now
// // // //                                                 </Button>
// // // //                                             </div>
// // // //                                         </Card>
// // // //                                     </div>
// // // //                                 )
// // // //                             })}
// // // //                         </>



// // // //                     }
// // // //                 </div>

// // // //             </div>
// // // //             <div className=" flex justify-center" onClick={()=>{
// // // //                 navigate(`/all-vehicles/${selectedCity}/${currentLocationName}`)
// // // //             }}>
// // // //                 <Button variant="" className=" shadow-none hover:shadow-none bg-[#82BE23]">Show more</Button>
// // // //             </div>
// // // //         </section>
// // // //     )
// // // // }

// // // // export default AllVehicle

// // // import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
// // // import { Button, Card, Spinner } from "@material-tailwind/react";
// // // import { useContext, useState } from "react";
// // // import myContext from "../../context/myContext";
// // // import { useNavigate } from "react-router-dom";
// // // import DatePicker from "react-datepicker"; // Replace with your date picker library
// // // import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles

// // // const AllVehicle = () => {
// // //     const navigate = useNavigate();
// // //     const { lat, lng, vehicleType, vehicleCity, selectedCity, currentLocationName } = useContext(myContext);

// // //     const { data: vehicles, error, isLoading } = useGetVehiclesNearbyQuery({
// // //         lat,
// // //         lng,
// // //         vehicleCity,
// // //         vehicleType,
// // //     });

// // //     // State for date range
// // //     const [selectedDate, setSelectedDate] = useState(null);

// // //     // Function to check availability (dummy example, replace with your logic)
// // //     const checkAvailability = (vehicleId) => {
// // //         // Here you can add logic to check availability for the selected vehicle and date range
// // //         console.log(`Checking availability for vehicle ID: ${vehicleId} on date: ${selectedDate}`);
// // //     };

// // //     return (
// // //         <section className="body-font">
// // //             <div className="container lg:px-5 py-10 mx-auto">
// // //                 <div className="flex flex-wrap -m-4 justify-center">
// // //                     {isLoading ? (
// // //                         <div className="flex justify-center p-4">
// // //                             <Spinner className="h-8 w-8 text-green-500" />
// // //                         </div>
// // //                     ) : error ? (
// // //                         <div className="p-4 ">
// // //                             <div className="flex justify-center items-center">
// // //                                 <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
// // //                             </div>
// // //                             <h1 className="text-center" color="red">{error?.data?.error}</h1>
// // //                         </div>
// // //                     ) : (
// // //                         <>
// // //                             {vehicles?.vehicles?.map((item, index) => {
// // //                                 const { _id, vehicleName, vehiclePrice, vehicleImage } = item;
// // //                                 return (
// // //                                     <div key={index} className="p-4 w-full md:w-1/4">
// // //                                         <Card className="h-full drop-shadow overflow-hidden">
// // //                                             <div className="flex justify-center cursor-pointer" onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}>
// // //                                                 <img
// // //                                                     className="w-[280px] h-[200px] rounded-xl"
// // //                                                     src={vehicleImage[0]?.url}
// // //                                                     alt="vehicle"
// // //                                                 />
// // //                                             </div>
// // //                                             <div className="p-6">
// // //                                                 <h2 className="tracking-widest text-xs title-font font-medium mb-1 app-font">
// // //                                                     Rideroz
// // //                                                 </h2>
// // //                                                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// // //                                                     {vehicleName}
// // //                                                 </h1>
// // //                                                 <p className="app-font">₹ <span className="font-bold text-black">{vehiclePrice}/-</span> per day</p>

// // //                                                 <div className="my-4 ">
// // //                                                     <DatePicker
// // //                                                         selected={selectedDate}
// // //                                                         onChange={(date) => setSelectedDate(date)}
// // //                                                         placeholderText="Select Date"
// // //                                                         className="w-20 border rounded bg-green-500 outline-none px-2 py-2 text-white "
// // //                                                     />
// // //                                                 </div>


// // //                                                 <Button
// // //                                                     onClick={() => navigate(`/checkout/${_id}`)}
// // //                                                     variant=""
// // //                                                     className="bg-[#82BE23] w-full mt-3 shadow-none hover:shadow-none"
// // //                                                 >
// // //                                                     Book Now
// // //                                                 </Button>
// // //                                             </div>
// // //                                         </Card>
// // //                                     </div>
// // //                                 );
// // //                             })}
// // //                         </>
// // //                     )}
// // //                 </div>
// // //             </div>
// // //             <div className="flex justify-center" onClick={() => navigate(`/all-vehicles/${selectedCity}/${currentLocationName}`)}>
// // //                 <Button variant="" className="shadow-none hover:shadow-none bg-[#82BE23]">
// // //                     Show more
// // //                 </Button>
// // //             </div>
// // //         </section>
// // //     );
// // // };

// // // export default AllVehicle;

// // import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
// // import { Button, Card, Spinner } from "@material-tailwind/react";
// // import { useContext, useState } from "react";
// // import myContext from "../../context/myContext";
// // import { useNavigate } from "react-router-dom";
// // import DatePickerModule from "./DatePickerModule";
// // // import DatePicker from "react-datepicker";
// // // import "react-datepicker/dist/react-datepicker.css";

// // const AllVehicle = () => {
// //     const navigate = useNavigate();
// //     const { lat, lng, vehicleType, vehicleCity, selectedCity, currentLocationName } = useContext(myContext);

// //     const { data: vehicles, error, isLoading } = useGetVehiclesNearbyQuery({
// //         lat,
// //         lng,
// //         vehicleCity,
// //         vehicleType,
// //     });

// //     const [selectedDate, setSelectedDate] = useState(null);

// //     const checkAvailability = (vehicleId) => {
// //         console.log(`Checking availability for vehicle ID: ${vehicleId} on date: ${selectedDate}`);
// //     };

// //     return (
// //         <section className=" py-5">
// //             <div className="container mx-auto px-5">
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
// //                             const { _id, vehicleName, vehiclePrice, vehicleImage } = item;
// //                             return (
// //                                 <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
// //                                     <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
// //                                         <div className="relative cursor-pointer" onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}>
// //                                             <img
// //                                                 className="w-full h-48 object-cover rounded-t-xl"
// //                                                 src={vehicleImage[0]?.url}
// //                                                 alt="Vehicle"
// //                                             />
// //                                             <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
// //                                                 Available
// //                                             </span>
// //                                         </div>
// //                                         <div className="p-4">
// //                                             <h2 className="text-sm font-semibold text-gray-600 uppercase mb-1">
// //                                                 Rideroz
// //                                             </h2>
// //                                             <h1 className="text-xl font-bold text-gray-900 mb-2">
// //                                                 {vehicleName}
// //                                             </h1>
// //                                             <p className="text-green-600 font-bold text-lg">
// //                                                 ₹ {vehiclePrice}/- per day
// //                                             </p>
// //                                             <div className="my-4">
// //                                                 {/* <DatePicker
// //                                                     selected={selectedDate}
// //                                                     onChange={(date) => setSelectedDate(date)}
// //                                                     placeholderText="Select Date"
// //                                                     className="w-full border rounded bg-green-500 text-white px-4 py-2 focus:outline-none"
// //                                                 /> */}
// //                                                 <DatePickerModule/>
// //                                             </div>
// //                                             <Button
// //                                                 onClick={() => checkAvailability(_id)}
// //                                                 className="bg-green-500 text-white w-full mt-3 py-2 rounded shadow-none hover:bg-green-600 transition duration-300"
// //                                             >
// //                                                 Check Availability
// //                                             </Button>
// //                                             <Button
// //                                                 onClick={() => navigate(`/checkout/${_id}`)}
// //                                                 className="bg-blue-500 text-white w-full mt-2 py-2 rounded shadow-none hover:bg-blue-600 transition duration-300"
// //                                             >
// //                                                 Book Now
// //                                             </Button>
// //                                         </div>
// //                                     </Card>
// //                                 </div>
// //                             );
// //                         })
// //                     )}
// //                 </div>
// //                 <div className="flex justify-center mt-8">
// //                     <Button
// //                         onClick={() => navigate(`/all-vehicles/${selectedCity}/${currentLocationName}`)}
// //                         className="bg-green-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
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
// import { Button, Card, Spinner } from "@material-tailwind/react";
// import { useContext } from "react";
// import myContext from "../../context/myContext";
// import { useNavigate } from "react-router-dom";
// import DatePickerModule from "./DatePickerModule";

// const AllVehicle = () => {
//     const navigate = useNavigate();
//     const { lat, lng, vehicleType, vehicleCity, selectedCity, currentLocationName } = useContext(myContext);
//     const { data: vehicles, error, isLoading } = useGetVehiclesNearbyQuery({
//         lat,
//         lng,
//         vehicleCity,
//         vehicleType,
//     });
//     return (
//         <section className="py-5">
//             <div className="container mx-auto px-5">
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
//                             const { _id, vehicleName, vehiclePrice, vehicleImage } = item;
//                             return (
//                                 <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
//                                     <Card className="bg-white rounded-xl border shadow-md hover:shadow-xl transition-shadow duration-300">
//                                         <div className="relative cursor-pointer" onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}>
//                                             <img
//                                                 className="w-full h-48 object-cover rounded-t-xl"
//                                                 src={vehicleImage[0]?.url}
//                                                 alt="Vehicle"
//                                             />
//                                             <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
//                                                 Available
//                                             </span>
//                                         </div>
//                                         <div className="p-4">
//                                             <h2 className="text-sm app-font text-gray-600 mb-1">
//                                                 Rideroz
//                                             </h2>

//                                             <h1 className="text-xl font-bold text-gray-900 mb-2">
//                                                 {vehicleName}
//                                             </h1>
//                                             <p className="text-green-600 font-bold text-lg">
//                                                 ₹ {vehiclePrice}/- per day
//                                             </p>
//                                             <div className="my-4">
//                                                 <DatePickerModule bookedDates={item?.bookedDates}/>
//                                             </div>
//                                             <Button
//                                                 onClick={() => navigate(`/checkout/${_id}`)}
//                                                 className="bg-blue-500 text-white w-full  py-2 rounded shadow-none hover:bg-blue-600 transition duration-300"
//                                             >
//                                                 Book Now
//                                             </Button>
//                                         </div>
//                                     </Card>
//                                 </div>
//                             );
//                         })
//                     )}
//                 </div>
//                 <div className="flex justify-center mt-8">
//                     <Button
//                         onClick={() => navigate(`/all-vehicles/${selectedCity}/${currentLocationName}`)}
//                         className="bg-green-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
//                     >
//                         Show More
//                     </Button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AllVehicle;


import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
import { Button, Card, Spinner } from "@material-tailwind/react";
import { useContext } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";
import DatePickerModule from "./DatePickerModule";

const AllVehicle = () => {
    const navigate = useNavigate();
    const { lat, lng, vehicleType, vehicleCity, selectedCity, currentLocationName } = useContext(myContext);
    const { data: vehicles, error, isLoading } = useGetVehiclesNearbyQuery({
        lat,
        lng,
        vehicleCity,
        vehicleType,
    });

    // Function to check if the current date falls within any booked date range
    const isAvailable = (bookedDates) => {
        const currentDate = new Date();
        const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    
        if (!bookedDates || bookedDates.length === 0) {
            return true; // No booked dates, so the vehicle is available
        }
    
        return !bookedDates.some((booking) => {
            const startDate = new Date(booking.startDate);
            const endDate = new Date(booking.endDate);
            const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
            const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    
            return currentDateOnly >= startDateOnly && currentDateOnly <= endDateOnly; // Return true if current date is within the range
        });
    };
    

    return (
        <section className="py-5">
            <div className="container mx-auto px-5">
                <div className="flex flex-wrap -m-4 justify-center">
                    {isLoading ? (
                        <div className="flex justify-center p-4">
                            <Spinner className="h-8 w-8 text-green-500" />
                        </div>
                    ) : error ? (
                        <div className="p-4">
                            <div className="flex justify-center items-center">
                                <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="Error" />
                            </div>
                            <h1 className="text-center text-red-500 mt-2">{error?.data?.error}</h1>
                        </div>
                    ) : (
                        vehicles?.vehicles?.map((item, index) => {
                            const { _id, vehicleName, vehiclePrice, vehicleImage, bookedDates } = item;
                            const available = isAvailable(bookedDates); // Check availability

                            return (
                                <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <Card className="bg-white rounded-xl border shadow-md hover:shadow-xl transition-shadow duration-300">
                                        <div className="relative cursor-pointer" onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}>
                                        {available ? (
                                                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                                    Available
                                                </span>
                                            ) : (
                                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                                    Not Available
                                                </span>
                                            )}
                                            <img
                                                className="w-full h-48 object-cover rounded-t-xl"
                                                src={vehicleImage[0]?.url}
                                                alt="Vehicle"
                                            />
                                           
                                        </div>
                                        <div className="p-4">
                                            <h2 className="text-sm app-font text-gray-600 mb-1">
                                                Rideroz
                                            </h2>
                                            
                                            <h1 className="text-xl font-bold text-gray-900 mb-2">
                                                {vehicleName}
                                            </h1>
                                            <p className="text-green-600 text-lg app-font">
                                                ₹ {vehiclePrice}/- per day
                                            </p>
                                            <div className="my-4">
                                                <DatePickerModule bookedDates={item?.bookedDates}/>
                                            </div>
                                            <Button
                                                onClick={() => navigate(`/checkout/${_id}`)}
                                                className="bg-blue-500 text-white w-full py-2 rounded shadow-none hover:bg-blue-600 transition duration-300"
                                            >
                                                Book Now
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            );
                        })
                    )}
                </div>
                <div className="flex justify-center mt-8">
                    <Button
                        onClick={() => navigate(`/all-vehicles/${selectedCity}/${currentLocationName}`)}
                        className="bg-green-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
                    >
                        Show More
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AllVehicle;
