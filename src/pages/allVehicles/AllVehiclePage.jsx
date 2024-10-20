// // import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
// // import { Button, Card, CardBody, Spinner } from "@material-tailwind/react";
// // import { useContext, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Layout from "../../components/layout/Layout";
// // import myContext from "../../context/myContext";
// // import SelectCityOrLocationModal from "../../components/modal/selectCityOrLocation/SelectCityOrLocationModal";

// // const AllVehiclePage = () => {
// //     const navigate = useNavigate();
// //     const { lat, setLat,
// //         lng, setLng,
// //         vehicleType, setVehicleType,
// //         vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);


// //     const { data: vehicles, error, isLoading } = useGetVehiclesNearbyQuery({
// //         lat,
// //         lng,
// //         vehicleCity,
// //         vehicleType,
// //     }); // Skip fetching if lat or lng is not available


// //     useEffect(() => {
// //         const storedCity = localStorage.getItem('selectedCity');
// //         const storedVehicleCity = localStorage.getItem('vehicleCity');
// //         const storedLat = localStorage.getItem('lat');
// //         const storedLng = localStorage.getItem('lng');
// //         const storedLocationName = localStorage.getItem('currentLocationName');
    
// //         if (storedCity && storedVehicleCity && storedLat && storedLng) {
// //             setSelectedCity(storedCity);
// //             setVehicleCity(storedVehicleCity);
// //             setLat(Number(storedLat));
// //             setLng(Number(storedLng));
// //             setCurrentLocationName(storedLocationName);
// //         } else {
// //             // setOpen(true);
// //         }
// //     }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName]); 



// //     return (
// //         <Layout>
// //             <section className=" body-font container mx-auto">
                {/* <pre>{JSON.stringify({
                    lat, setLat,
                    lng, setLng,
                    vehicleType, setVehicleType,
                    vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName
                },null,2)}</pre> */}

// //                 <Card className="mt-5">
// //                     <CardBody>
// //                        <div className="flex flex-wrap items-center lg:space-x-2">
// //                            <SelectCityOrLocationModal/>

// //                         <div className=" border px-8 drop-shadow py-2 app-font">
// //                             <h1>Vehicle Type : All</h1>
// //                         </div>

// //                         <div className=" border px-8 drop-shadow py-2 app-font">
// //                             <h1>Current Loaction : {currentLocationName || "N/A"}</h1>
// //                         </div>
// //                        </div>
// //                     </CardBody>
// //                 </Card>
                
               
// //                 <div className="container lg:px-5 py-10 mx-auto">
// //                     <div className="flex flex-wrap -m-4 justify-center">
// //                         {isLoading ? (
// //                             <div className="flex justify-center p-4">
// //                                 <Spinner className="h-8 w-8 text-green-500" />
// //                             </div>
// //                         ) : error ? (
// //                             <div className="p-4 ">
// //                                 <div className=" flex justify-center items-center">
// //                                     <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
// //                                 </div>
// //                                 <h1 className=" text-center" color="red">{error?.data?.error}</h1>
// //                             </div>
// //                         )

// //                             :
// //                             <>
// //                                 {vehicles?.vehicles?.map((item, index) => {
// //                                     const { _id, location, vehicleType, vehicleNumber, vehicleName, vehicleModel, vehiclePrice, bookingPrice, sittingCapacity, vehicleImage, vehicleAvailability, shop, numOfReviews, reviews, createdAt } = item
// //                                     return (
// //                                         <div key={index} className="p-4 w-full md:w-1/4">
// //                                             {/* <pre>{JSON.stringify(selectedCity, null, 2)}</pre> */}
// //                                             <Card className="h-full drop-shadow overflow-hidden">
// //                                                 <div className="flex justify-center cursor-pointer" onClick={() => {
// //                                                     navigate(`/vehicle-info/${selectedCity}/${_id}`)
// //                                                 }}>
// //                                                     <img
// //                                                         className="w-[280px] h-[200px] rounded-xl"
// //                                                         src={vehicleImage[0]?.url}
// //                                                         alt="blog"
// //                                                     />
// //                                                 </div>
// //                                                 <div className="p-6">
// //                                                     <h2 className="tracking-widest text-xs title-font font-medium mb-1 app-font">
// //                                                         Rideroz
// //                                                     </h2>
// //                                                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// //                                                         {vehicleName}
// //                                                     </h1>

// //                                                     <p className=" app-font ">₹ <span className=" font-bold text-black">{vehiclePrice}/-</span> per day</p>

// //                                                     <Button variant="" className=" bg-[#82BE23] w-full mt-3 shadow-none hover:shadow-none">
// //                                                         Book Now
// //                                                     </Button>

// //                                                 </div>
// //                                             </Card>
// //                                         </div>
// //                                     )
// //                                 })}
// //                             </>



// //                         }
// //                     </div>

// //                 </div>
// //             </section>
// //         </Layout>
// //     )
// // }

// // export default AllVehiclePage

// import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
// import { Button, Card, CardBody, Spinner } from "@material-tailwind/react";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../../components/layout/Layout";
// import myContext from "../../context/myContext";
// import SelectCityOrLocationModal from "../../components/modal/selectCityOrLocation/SelectCityOrLocationModal";
// import VehicleTypeDropdown from "./VehicleTypeDropdown";

// const AllVehiclePage = () => {
//     const navigate = useNavigate();
//     const { lat, setLat,
//         lng, setLng,
//         vehicleType, setVehicleType,
//         vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);


//     const { data: vehicles, error, isLoading } = useGetVehiclesNearbyQuery({
//         lat,
//         lng,
//         vehicleCity,
//         vehicleType,
//     }); // Skip fetching if lat or lng is not available


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
//         }
//     }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName]); 

//     return (
//         <Layout>
//             <section className="container mx-auto body-font py-5">
//                 <div className="flex">
//                 <Card className="mt-5 shadow-md">
//                     <CardBody>
//                         <div className="">
//                             <SelectCityOrLocationModal />

//                             <VehicleTypeDropdown />

//                             <div className="border px-8 py-2 rounded-lg shadow-sm">
//                                 <h1 className="text-gray-700 font-semibold">Current Location: <span className="text-blue-600">{currentLocationName || "N/A"}</span></h1>
//                             </div>
//                         </div>
//                     </CardBody>
//                 </Card>

//                 <div className="container lg:px-5 py-10 mx-auto">
//                     <div className="flex flex-wrap -m-4 justify-center">
//                         {isLoading ? (
//                             <div className="flex justify-center p-4">
//                                 <Spinner className="h-8 w-8 text-green-500" />
//                             </div>
//                         ) : error ? (
//                             <div className="p-4">
//                                 <div className="flex justify-center items-center">
//                                     <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="error-icon" />
//                                 </div>
//                                 <h1 className="text-center text-red-500">{error?.data?.error}</h1>
//                             </div>
//                         ) : (
//                             vehicles?.vehicles?.map((item, index) => {
//                                 const { _id, vehicleName, vehiclePrice, vehicleImage } = item;
//                                 return (
                                    // <div key={index} className="p-4 w-full md:w-1/3 lg:w-1/4">
                                    //     <Card className="h-full shadow-lg rounded-lg overflow-hidden">
                                    //         <div
                                    //             className="relative cursor-pointer"
                                    //             onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}
                                    //         >
                                    //             <img
                                    //                 className="w-full h-48 object-cover rounded-t-lg"
                                    //                 src={vehicleImage[0]?.url}
                                    //                 alt={vehicleName}
                                    //             />
                                    //         </div>
                                    //         <div className="p-6">
                                    //             <h2 className="tracking-widest text-xs font-bold text-gray-500 uppercase mb-1">Rideroz</h2>
                                    //             <h1 className="text-lg font-semibold text-gray-900 mb-3">{vehicleName}</h1>

                                    //             <p className="text-gray-600 font-medium mb-2">
                                    //                 ₹ <span className="font-bold text-black">{vehiclePrice}/-</span> per day
                                    //             </p>

                                    //             <Button
                                    //                 className="w-full bg-green-500 text-white rounded-md py-2 font-semibold shadow-sm hover:bg-green-600"
                                    //             >
                                    //                 Book Now
                                    //             </Button>
                                    //         </div>
                                    //     </Card>
                                    // </div>
//                                 );
//                             })
//                         )}
//                     </div>
//                 </div>
//                 </div>
//             </section>
//         </Layout>
//     );
// }

// export default AllVehiclePage;


import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
import { Button, Card, CardBody, Spinner } from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import SelectCityOrLocationModal from "../../components/modal/selectCityOrLocation/SelectCityOrLocationModal";
import VehicleTypeDropdown from "./VehicleTypeDropdown";

const AllVehiclePage = () => {
    const navigate = useNavigate();
    const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

    const { data: vehicles, error, isLoading } = useGetVehiclesNearbyQuery({
        lat,
        lng,
        vehicleCity,
        vehicleType,
    }); 

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
        }
    }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName]); 

    return (
        <Layout>
            <section className="container mx-auto px-4 py-6">
                {/* <pre>{JSON.stringify({
                    lat, setLat,
                    lng, setLng,
                    vehicleType, setVehicleType,
                    vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName
                },null,2)}</pre> */}
                <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
                    {/* Filter Section */}
                    <div className=" h-[23em] lg:w-1/4 drop-shadow bg-white rounded-md">
                        <CardBody>
                            <div className="space-y-4">
                                <SelectCityOrLocationModal />

                                {/* Custom Vehicle Type Dropdown */}
                               <div className="">
                               <VehicleTypeDropdown />
                               </div>

                                <div className="border px-4 py-2 rounded-lg shadow-sm w-full lg:w-[15.5em]">
                                    <h1 className="text-gray-700 app-font">Current Location: <span className="text-blue-600">{currentLocationName || "N/A"}</span></h1>
                                </div>
                            </div>
                        </CardBody>
                    </div>

                    {/* Vehicles List Section */}
                    <div className="w-full lg:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {isLoading ? (
                                <div className="flex justify-center items-center col-span-full py-10">
                                    <Spinner className="h-10 w-10 text-green-500" />
                                </div>
                            ) : error ? (
                                <div className="flex flex-col justify-center items-center col-span-full py-10">
                                    <img className="w-16" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="error-icon" />
                                    <h1 className="text-red-500 text-lg mt-2">{error?.data?.error}</h1>
                                </div>
                            ) : (
                                vehicles?.vehicles?.map((item, index) => {
                                    const { _id, vehicleName, vehiclePrice, vehicleImage } = item;
                                    return (
                                        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                            <div
                                                className="relative cursor-pointer flex justify-center"
                                                onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}
                                            >
                                                <img
                                                    className="w-[280px] h-[200px] rounded-xl"
                                                    src={vehicleImage[0]?.url}
                                                    alt={vehicleName}
                                                />
                                            </div>

                                            <div className="p-4">
                                                <h2 className="tracking-widest text-xs font-bold text-gray-500 uppercase mb-1">Rideroz</h2>
                                                <h1 className="text-lg font-semibold text-gray-900 mb-3">{vehicleName}</h1>

                                                <p className="text-gray-600 font-medium">
                                                    ₹ <span className="font-bold text-black">{vehiclePrice}/-</span> per day
                                                </p>

                                                <Button
                                                    className="w-full mt-3 bg-green-500 text-white rounded-md py-2 font-semibold shadow-sm hover:bg-green-600 transition duration-300"
                                                >
                                                    Book Now
                                                </Button>
                                            </div>
                                        </div>
                                        
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default AllVehiclePage;
