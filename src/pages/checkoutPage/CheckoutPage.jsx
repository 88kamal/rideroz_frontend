/* eslint-disable react-hooks/exhaustive-deps */
// // // import Layout from "../../components/layout/Layout";
// // // import { BadgeIndianRupee } from 'lucide-react'
// // // import { useGetVehicleByIdQuery } from "../../redux/slices/vehicleApiSlice";
// // // import { useParams } from "react-router-dom";
// // // import RatingStar from "../../components/review/RatingStar";
// // // import { Button, Input } from "@material-tailwind/react";
// // // import { useContext, useEffect } from "react";
// // // import myContext from "../../context/myContext";

// // // const CartPage = () => {
// // //     const { id } = useParams();
// // //     const { data: vehicle, error, isLoading } = useGetVehicleByIdQuery(id);
// // //     const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

// // //     useEffect(() => {
// // //         const storedCity = localStorage.getItem('selectedCity');
// // //         const storedVehicleCity = localStorage.getItem('vehicleCity');
// // //         const storedLat = localStorage.getItem('lat');
// // //         const storedLng = localStorage.getItem('lng');
// // //         const storedLocationName = localStorage.getItem('currentLocationName');

// // //         if (storedCity && storedVehicleCity && storedLat && storedLng) {
// // //             setSelectedCity(storedCity);
// // //             setVehicleCity(storedVehicleCity);
// // //             setLat(Number(storedLat));
// // //             setLng(Number(storedLng));
// // //             setCurrentLocationName(storedLocationName);
// // //         }
// // //     }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName]);

// // //     return (
// // //         <Layout>
// // //             <div className="container mx-auto max-w-7xl px-2 lg:px-0">
// // //                 <div className="mx-auto max-w-2xl  lg:max-w-7xl">

// // //                     <form className="lg:mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-12">

// // //                         <section
// // //                             aria-labelledby="summary-heading"
// // //                             className="mt-5 mb-5 lg:mt-0 lg:mb-0 rounded-md lg:col-span-4 bg-white  drop-shadow p-5 order-last"
// // //                         >
// // //                             <div className="mb-8 lg:mb-8 flex justify-center pt-8">
// // //                                 <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
// // //                             </div>

// // //                             {/* Pickup/Dropoff Date and Time */}
// // //                             <div>
// // //                                 <div className="mt-4">
// // //                                     <Input label="Start Date" type="date" />
// // //                                 </div>
// // //                                 <div className="mt-4">
// // //                                     <Input label="Start Time" type="time" />
// // //                                 </div>
// // //                                 <div className="mt-4">
// // //                                     <Input label="End Date" type="date" />
// // //                                 </div>
// // //                                 <div className="mt-4">
// // //                                     <Input label="End Time" type="time" />
// // //                                 </div>

// // // {/* Coupons and Total for Mobile */}
// // // <div className=" bg-green-50 p-2 mt-4 animate-pulse border border-green-100">
// // //     <div className="flex justify-between items-center mb-1">
// // //         <p className="text-black app-font">Coupons</p>
// // //         <p className="app-font text-green-700">5% OFF</p>
// // //     </div>
// // //     <div className="flex justify-between items-center">
// // //         <div className="flex items-center space-x-2">
// // //             <img className="w-8 h-8"
// // //                 src="https://cdn-icons-png.flaticon.com/128/1041/1041885.png" alt="coupon" />
// // //             <h1 className="text-green-500 app-font">Apply Coupon</h1>
// // //         </div>
// // //         <button className="bg-green-600 px-2 text-white text-sm py-[2px] app-font rounded-md">
// // //             Apply Now
// // //         </button>
// // //     </div>
// // //     <div className="mt-2">
// // //         <Input label="Apply Coupon Code" className="" color="green" />
// // //     </div>
// // //     <div className="flex items-center gap-2 mt-2">
// // //         <h1 className="text-sm app-font text-green-900">Coupon Code :</h1>
// // //         <h1 className="text-sm text-green-600 animate-pulse app-font">Rideroz234</h1>
// // //     </div>
// // // </div>

// // // <div className="lg:hidden border mt-4 p-2 px-4 rounded-md border-green-400 text-black">
// // //     <h1 className="app-font">
// // //         <span className="font-bold"> Total Amount : </span>
// // //         <span>₹ {vehicle?.vehiclePrice}</span>
// // //     </h1>
// // // </div>

// // // {/* Confirm Button */}
// // // <div className="mt-4">
// // //     <Button variant="" size="small" className="hover:shadow-none shadow-none w-full bg-green-500">
// // //         Confirm
// // //     </Button>
// // // </div>
// // //                             </div>
// // //                         </section>

{/* <section aria-labelledby="cart-heading"
    className=" drop-shadow bg-white py-4 border px-4 lg:col-span-8 ">
    <div className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Checkout
        </h1>
        <div className=" app-font mt-2">
            <span>Home</span> / <span>Renting</span> / <span>Checkout</span>
        </div>
    </div>
    <div className=" bg-white drop-shadow mb-4 px-4 py-4">
        <div className="">
            <h1 className=" mb-2 app-font">
                <span className=" font-bold">City : </span>
                <span>{selectedCity}</span>
            </h1>

            <h1 className=" mb-2 app-font">
                <span className=" font-bold">Current Location : </span>
                <span>{currentLocationName || "N/A"}</span>
            </h1>
        </div>
    </div>
    <div className=" bg-white drop-shadow mb-2">
        <ul role="list" className="divide-y divide-gray-200">
            <div className="">
                <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                        <img
                            src={vehicle?.vehicleImage[0]?.url}
                            alt={vehicle?.vehicleName}
                            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                        />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-sm">
                                        <a className="font-semibold text-black app-font">
                                            {vehicle?.vehicleName}
                                        </a>
                                    </h3>
                                </div>

                                <div className="mt-1 flex items-center space-x-2">

                                    <p className="text-sm app-font font-medium text-gray-900">
                                        ₹ {vehicle?.vehiclePrice}
                                    </p>
                                    <div className={` bg-green-600 px-2 app-font text-white  animate-pulse text-[10px]`}>
                                        {vehicle?.vehicleAvailability && "Available"}
                                    </div>

                                </div>

                                <div className="mt-2">
                                    <RatingStar
                                        rating={vehicle?.vehicleRatings}
                                        totalRating={vehicle?.numOfReviews}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

            </div>
        </ul>
    </div>

    <div className=" bg-white drop-shadow mb-4 px-4 py-4">
        <div className="flex items-center gap-2">
            <BadgeIndianRupee color="green" /> Excess Hourly Charges 100/hr
        </div>
    </div>

    <div className=" bg-white drop-shadow mb-4 px-4 py-4">
        <div className="">
            <p className=" app-font text-justify mb-1 text-red-600">"Vehicle book करने के बाद अगर आप 1 घंटे के अंदर Shop पर नहीं पहुँचते हैं, तो आपकी ride अपने आप cancel हो जाएगी और आपके amount का 50% refund कर दिया जाएगा।"</p>
            <p className=" app-font text-justify text-red-600">"If you don't arrive at the shop within 1 hour after booking the vehicle, your ride will be automatically canceled, and 50% of your amount will be refunded."</p>
        </div>
    </div>
    {/* <pre>{JSON.stringify(vehicle, null, 2)}</pre> */}


// </section > */}
// // //                     </form>
// // //                 </div>
// // //             </div>
// // //         </Layout>
// // //     );
// // // }

// // // export default CartPage;

// // import Layout from "../../components/layout/Layout";
// // import { BadgeIndianRupee } from 'lucide-react'
// // import { useGetVehicleByIdQuery } from "../../redux/slices/vehicleApiSlice";
// // import { useParams } from "react-router-dom";
// // import RatingStar from "../../components/review/RatingStar";
// // import { Button, Input } from "@material-tailwind/react";
// // import { useContext, useEffect, useState } from "react";
// // import myContext from "../../context/myContext";
// // import dayjs from "dayjs";
// // import DatePicker from "react-datepicker";
// // const CartPage = () => {
// //     const { id } = useParams();
// //     const { data: vehicle, error, isLoading } = useGetVehicleByIdQuery(id);
// //     const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

// //     const [formData, setFormData] = useState({
// //         startDate: null,
// //         endDate: null,
// //         startTime: '',
// //         endTime: '',
// //         shopAmount : 0
// //     });
// //     const [bookedDates, setBookedDates] = useState([]);

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
// //         }

// //         // Set the booked dates from vehicle data
// //         if (vehicle?.bookedDates) {
// //             setBookedDates(vehicle.bookedDates);
// //         }
// //     }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName, vehicle]);

// //     // Handle regular input changes
// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };


// //     const isDateBooked = (date) => {
// //         const bookedDate = bookedDates.find((bookedDate) => {
// //             const startDate = dayjs(bookedDate.startDate);
// //             const endDate = dayjs(bookedDate.endDate);

// //             // Ignore bookings with invalid date ranges
// //             if (endDate.isBefore(startDate)) {
// //                 console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
// //                 return false;
// //             }

// //             // Check if the selected date falls within the booking range
// //             return dayjs(date).isBetween(startDate, endDate, 'day', '[]');
// //         });

// //         if (bookedDate) {
// //             // Format date as DD-MM-YYYY and time in 12-hour format with AM/PM
// //             const startTime = dayjs(bookedDate.startDate).format('hh:mm A');
// //             const endTime = dayjs(bookedDate.endDate).format('hh:mm A');
// //             const startDateFormatted = dayjs(bookedDate.startDate).format('DD-MM-YYYY');
// //             const endDateFormatted = dayjs(bookedDate.endDate).format('DD-MM-YYYY');

// //             return {
// //                 isBooked: true,
// //                 startTime,
// //                 endTime,
// //                 startDateFormatted,
// //                 endDateFormatted,
// //             };
// //         }
// //         return { isBooked: false };
// //     };

// //     const handleDateChange = (date, fieldName) => {
// //         const localDate = dayjs(date).startOf('day').format('YYYY-MM-DD'); // Format to store only the date
// //         setFormData({ ...formData, [fieldName]: localDate });
// //     };

// //     const today = dayjs();

// //     const filterPassedDates = (date) => {
// //         return dayjs(date).isSameOrAfter(today, 'day') && !isDateBooked(date).isBooked;
// //     };


// //     return (
// //         <Layout>
// //             <div className="container mx-auto max-w-7xl px-2 lg:px-0">
// //                 <div className="mx-auto max-w-2xl lg:max-w-7xl">
// //                     <form className="lg:mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-12">
// //                         {/* Summary Section */}
// //                         <section
// //                             aria-labelledby="summary-heading"
// //                             className="mt-5 mb-5 lg:mt-0 lg:mb-0 rounded-md lg:col-span-4 bg-white drop-shadow p-5 order-last"
// //                         >
// //                             <div className="mb-8 lg:mb-8 flex justify-center pt-8">
// //                                 <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
// //                             </div>

// //                             {/* Pickup/Dropoff Date and Time */}
// //                             <div className="">
// //                                 <div className="">
// //                                     <div className="mb-2">
// //                                         <DatePicker
// //                                             selected={formData.startDate}
// //                                             onChange={(date) => handleDateChange(date, 'startDate')}
// //                                             filterDate={filterPassedDates} // Disable past and booked dates
// //                                             dateFormat="yyyy-MM-dd"
// //                                             className="text-xs sm:text-sm p-2 w-[241%] md:w-[200%] lg:w-[216.4%] outline-none border-gray-500 border"
// //                                             placeholderText="Select Pickup Date"
// //                                             required
// //                                         />
// //                                     </div>

// //                                     <div className="mb-2">
// //                                         <input
// //                                             label="Pickup Time"
// //                                             type="time"
// //                                             name="startTime"
// //                                             value={formData.startTime}
// //                                             onChange={handleChange}
// //                                             required
// //                                             className="text-xs sm:text-sm border p-1.5 w-full outline-none border-gray-500"
// //                                         />
// //                                     </div>
// //                                 </div>
// //                                 <div className="">
// //                                     <div className="mb-2">
// //                                         <DatePicker
// //                                             selected={formData.endDate}
// //                                             onChange={(date) => handleDateChange(date, 'endDate')}
// //                                             filterDate={filterPassedDates} // Disable past and booked dates
// //                                             dateFormat="yyyy-MM-dd"
// //                                             className="text-xs sm:text-sm border p-2 w-[241%] md:w-[200%] lg:w-[216.4%] outline-none border-gray-500"
// //                                             placeholderText="Select Drop off Date"
// //                                             required
// //                                         />
// //                                     </div>

// //                                     <div className="">
// //                                         <input
// //                                             placeholder="Drop Off Time"
// //                                             type="time"
// //                                             name="endTime"
// //                                             value={formData.endTime}
// //                                             onChange={handleChange}
// //                                             required
// //                                             className="text-xs sm:text-sm border p-1.5 w-full outline-none border-gray-500"
// //                                         />
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             {/* Coupons and Total for Mobile */}
// <div className=" bg-green-50 p-2 mt-4 animate-pulse border border-green-100">
//     <div className="flex justify-between items-center mb-1">
//         <p className="text-black app-font">Coupons</p>
//         <p className="app-font text-green-700">5% OFF</p>
//     </div>
//     <div className="flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//             <img className="w-8 h-8"
//                 src="https://cdn-icons-png.flaticon.com/128/1041/1041885.png" alt="coupon" />
//             <h1 className="text-green-500 app-font">Apply Coupon</h1>
//         </div>
//         <button className="bg-green-600 px-2 text-white text-sm py-[2px] app-font rounded-md">
//             Apply Now
//         </button>
//     </div>
//     <div className="mt-2">
//         <Input label="Apply Coupon Code" className="" color="green" />
//     </div>
//     <div className="flex items-center gap-2 mt-2">
//         <h1 className="text-sm app-font text-green-900">Coupon Code :</h1>
//         <h1 className="text-sm text-green-600 animate-pulse app-font">Rideroz234</h1>
//     </div>
// </div>

// //                             <div className="lg:hidden border mt-4 p-2 px-4 rounded-md border-green-400 text-black">
// //                                 <h1 className="app-font">
// //                                     <span className="font-bold"> Total Amount : </span>
// //                                     <span>₹ {vehicle?.vehiclePrice}</span>
// //                                 </h1>
// //                             </div>

// //                             {/* Confirm Button */}
// //                             <div className="mt-4">
// //                                 <Button variant="" size="small" className="hover:shadow-none shadow-none w-full bg-green-500">
// //                                     Confirm
// //                                 </Button>
// //                             </div>
// //                         </section>

// //                         {/* Cart Details Section */}
// //                         <section aria-labelledby="cart-heading"
// //                             className=" drop-shadow bg-white py-4 border px-4 lg:col-span-8 ">
// //                             <div className="mb-4">
// //                                 <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
// //                                     Checkout
// //                                 </h1>
// //                                 <div className=" app-font mt-2">
// //                                     <span>Home</span> / <span>Renting</span> / <span>Checkout</span>
// //                                 </div>
// //                             </div>
// //                             <div className=" bg-white drop-shadow mb-4 px-4 py-4">
// //                                 <div className="">
// //                                     <h1 className=" mb-2 app-font">
// //                                         <span className=" font-bold">City : </span>
// //                                         <span>{selectedCity}</span>
// //                                     </h1>

// //                                     <h1 className=" mb-2 app-font">
// //                                         <span className=" font-bold">Current Location : </span>
// //                                         <span>{currentLocationName || "N/A"}</span>
// //                                     </h1>
// //                                 </div>
// //                             </div>
// //                             <div className=" bg-white drop-shadow mb-2">
// //                                 <ul role="list" className="divide-y divide-gray-200">
// //                                     <div className="">
// //                                         <li className="flex py-6 sm:py-6 ">
// //                                             <div className="flex-shrink-0">
// //                                                 <img
// //                                                     src={vehicle?.vehicleImage[0]?.url}
// //                                                     alt={vehicle?.vehicleName}
// //                                                     className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
// //                                                 />
// //                                             </div>

// //                                             <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
// //                                                 <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
// //                                                     <div>
// //                                                         <div className="flex justify-between">
// //                                                             <h3 className="text-sm">
// //                                                                 <a className="font-semibold text-black app-font">
// //                                                                     {vehicle?.vehicleName}
// //                                                                 </a>
// //                                                             </h3>
// //                                                         </div>

// //                                                         <div className="mt-1 flex items-center space-x-2">

// //                                                             <p className="text-sm app-font font-medium text-gray-900">
// //                                                                 ₹ {vehicle?.vehiclePrice}
// //                                                             </p>
// //                                                             <div className={` bg-green-600 px-2 app-font text-white  animate-pulse text-[10px]`}>
// //                                                                 {vehicle?.vehicleAvailability && "Available"}
// //                                                             </div>

// //                                                         </div>

// //                                                         <div className="mt-2">
// //                                                             <RatingStar
// //                                                                 rating={vehicle?.vehicleRatings}
// //                                                                 totalRating={vehicle?.numOfReviews}
// //                                                             />
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </li>

// //                                     </div>
// //                                 </ul>
// //                             </div>

// //                             <div className=" bg-white drop-shadow mb-4 px-4 py-4">
// //                                 <div className="flex items-center gap-2">
// //                                     <BadgeIndianRupee color="green" /> Excess Hourly Charges 100/hr
// //                                 </div>
// //                             </div>

// //                             <div className=" bg-white drop-shadow mb-4 px-4 py-4">
// //                                 <div className="">
// //                                     <p className=" app-font text-justify mb-1 text-red-600">"Vehicle book करने के बाद अगर आप 1 घंटे के अंदर Shop पर नहीं पहुँचते हैं, तो आपकी ride अपने आप cancel हो जाएगी और आपके amount का 50% refund कर दिया जाएगा।"</p>
// //                                     <p className=" app-font text-justify text-red-600">"If you don't arrive at the shop within 1 hour after booking the vehicle, your ride will be automatically canceled, and 50% of your amount will be refunded."</p>
// //                                 </div>
// //                             </div>
// //                             {/* <pre>{JSON.stringify(vehicle, null, 2)}</pre> */}


// //                         </section>
// //                     </form>
// //                 </div>
// //             </div>
// //         </Layout>
// //     );
// // };

// // export default CartPage;


// import Layout from "../../components/layout/Layout";
// import { BadgeIndianRupee } from 'lucide-react';
// import { useGetVehicleByIdQuery } from "../../redux/slices/vehicleApiSlice";
// import { useParams } from "react-router-dom";
// import RatingStar from "../../components/review/RatingStar";
// import { Button, Input } from "@material-tailwind/react";
// import { useContext, useEffect, useState } from "react";
// import myContext from "../../context/myContext";
// import dayjs from "dayjs";
// import DatePicker from "react-datepicker";

// const CartPage = () => {
//     const { id } = useParams();
//     const { data: vehicle, error, isLoading } = useGetVehicleByIdQuery(id);
//     const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

//     const [formData, setFormData] = useState({
//         startDate: null,
//         endDate: null,
//         startTime: '',
//         endTime: '',
//         shopAmount: 0,
//     });
//     const [bookedDates, setBookedDates] = useState([]);

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

//         if (vehicle?.bookedDates) {
//             setBookedDates(vehicle.bookedDates);
//         }
//     }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName, vehicle]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleDateChange = (date, fieldName) => {
//         setFormData({ ...formData, [fieldName]: dayjs(date).startOf('day').format('YYYY-MM-DD') });
//     };

//     const calculateShopAmount = () => {
//         const { startDate, endDate } = formData;

//         // Check if both dates are selected
//         if (startDate && endDate) {
//             const start = dayjs(startDate);
//             const end = dayjs(endDate);

//             // Calculate the difference in days
//             const days = end.diff(start, 'day') + 1; // Add 1 to include the start date

//             // Multiply by vehicle price
//             const totalAmount = days * vehicle?.vehiclePrice || 0;

//             // Update shopAmount in formData
//             setFormData({ ...formData, shopAmount: totalAmount });
//         }
//     };

//     useEffect(() => {
//         calculateShopAmount(); // Recalculate shop amount whenever startDate or endDate changes
//     }, [formData.startDate, formData.endDate]);

//     const today = dayjs();

//     const filterPassedDates = (date) => {
//         return dayjs(date).isSameOrAfter(today, 'day') && !isDateBooked(date).isBooked;
//     };

//     const isDateBooked = (date) => {
//         const bookedDate = bookedDates.find((bookedDate) => {
//             const startDate = dayjs(bookedDate.startDate);
//             const endDate = dayjs(bookedDate.endDate);

//             if (endDate.isBefore(startDate)) {
//                 console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
//                 return false;
//             }

//             return dayjs(date).isBetween(startDate, endDate, 'day', '[]');
//         });

//         if (bookedDate) {
//             const startTime = dayjs(bookedDate.startDate).format('hh:mm A');
//             const endTime = dayjs(bookedDate.endDate).format('hh:mm A');
//             const startDateFormatted = dayjs(bookedDate.startDate).format('DD-MM-YYYY');
//             const endDateFormatted = dayjs(bookedDate.endDate).format('DD-MM-YYYY');

//             return {
//                 isBooked: true,
//                 startTime,
//                 endTime,
//                 startDateFormatted,
//                 endDateFormatted,
//             };
//         }
//         return { isBooked: false };
//     };

//     return (
//         <Layout>
//             <div className="container mx-auto max-w-7xl px-2 lg:px-0">
//                 <pre>{JSON.stringify(vehicle?.vehiclePrice,null,2)}</pre>
//                 <div className="mx-auto max-w-2xl lg:max-w-7xl">
//                     <form className="lg:mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-12">
//                         <section
//                             aria-labelledby="summary-heading"
//                             className="mt-5 mb-5 lg:mt-0 lg:mb-0 rounded-md lg:col-span-4 bg-white drop-shadow p-5 order-last"
//                         >
//                             <div className="mb-8 lg:mb-8 flex justify-center pt-8">
//                                 <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
//                             </div>

//                             {/* Pickup/Dropoff Date and Time */}
//                             <div>
//                                 <div className="mb-2">
//                                     <DatePicker
//                                         selected={formData.startDate}
//                                         onChange={(date) => handleDateChange(date, 'startDate')}
//                                         filterDate={filterPassedDates}
//                                         dateFormat="yyyy-MM-dd"
//                                         className="text-xs sm:text-sm p-2 w-[241%] md:w-[200%] lg:w-[216.4%] outline-none border-gray-500 border"
//                                         placeholderText="Select Pickup Date"
//                                         required
//                                     />
//                                 </div>

//                                 <div className="mb-2">
//                                     <input
//                                         label="Pickup Time"
//                                         type="time"
//                                         name="startTime"
//                                         value={formData.startTime}
//                                         onChange={handleChange}
//                                         required
//                                         className="text-xs sm:text-sm border p-1.5 w-full outline-none border-gray-500"
//                                     />
//                                 </div>

//                                 <div className="mb-2">
//                                     <DatePicker
//                                         selected={formData.endDate}
//                                         onChange={(date) => handleDateChange(date, 'endDate')}
//                                         filterDate={filterPassedDates}
//                                         dateFormat="yyyy-MM-dd"
//                                         className="text-xs sm:text-sm border p-2 w-[241%] md:w-[200%] lg:w-[216.4%] outline-none border-gray-500"
//                                         placeholderText="Select Drop off Date"
//                                         required
//                                     />
//                                 </div>

//                                 <div>
//                                     <input
//                                         placeholder="Drop Off Time"
//                                         type="time"
//                                         name="endTime"
//                                         value={formData.endTime}
//                                         onChange={handleChange}
//                                         required
//                                         className="text-xs sm:text-sm border p-1.5 w-full outline-none border-gray-500"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Display the total shopAmount */}
//                             <div className=" border mt-4 p-2 px-4 rounded-md border-green-400 text-black">
//                                 <h1 className="app-font">
//                                     <span className="font-bold">Total Amount: </span>
//                                     <span>₹ {formData.shopAmount}</span>
//                                 </h1>
//                             </div>

//                             <div className="mt-4">
//                                 <Button variant="" size="small" className="hover:shadow-none shadow-none w-full bg-green-500">
//                                     Confirm
//                                 </Button>
//                             </div>
//                         </section>

//                         {/* Remaining checkout details */}
//                     </form>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default CartPage;


import Layout from "../../components/layout/Layout";
import { BadgeIndianRupee } from 'lucide-react';
import { useGetVehicleByIdQuery } from "../../redux/slices/vehicleApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import RatingStar from "../../components/review/RatingStar";
import { Button, Input } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { useCreateOrderMutation, useVerifyPaymentMutation } from "../../redux/slices/orderApiSlice";
import toast from "react-hot-toast";

const CartPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: vehicle } = useGetVehicleByIdQuery(id);
    const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

    const [bookedDates, setBookedDates] = useState([]);
    const [rentDuration, setRentDuration] = useState(0); // State to store rent duration in days
    const [discountedAmount, setDiscountedAmount] = useState(0); // Discounted total amount after coupon
    const [discountAmount, setDiscountAmount] = useState(0); // Discount value

    const [formData, setFormData] = useState({
        startDate: null,
        endDate: null,
        startTime: '',
        endTime: '',
        shopAmount: 0,
        platformAmount: 0,
        miscAmount: 0,
        couponCode: '',
        discountAmount: discountAmount
    });

    const [isCouponApplied, setIsCouponApplied] = useState(false); // New state to track coupon application

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

        if (vehicle?.bookedDates) {
            setBookedDates(vehicle.bookedDates);
        }
    }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName, vehicle]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date, fieldName) => {
        setFormData({ ...formData, [fieldName]: dayjs(date).startOf('day').format('YYYY-MM-DD') });
    };

    const vehiclePricePerDay = vehicle?.vehiclePrice || 0;

    const calculateShopAmount = () => {
        const { startDate, endDate } = formData;

        // Check if both dates are selected
        if (startDate && endDate) {
            const start = dayjs(startDate);
            const end = dayjs(endDate);

            // Calculate the difference in hours
            const hours = end.diff(start, 'hour');

            // Determine the base price based on hours
            const days = Math.ceil(hours / 24); // Convert hours to full days (rounding up)
            const basePrice = days * vehiclePricePerDay;

            // Calculate platform and misc charges
            const platformAmount = (10 / 100) * basePrice; // 10% platform charge
            const miscAmount = (5 / 100) * basePrice;      // 5% miscellaneous charge

            // Calculate total amount
            const totalAmount = basePrice + platformAmount + miscAmount;

            // Update the formData and rent duration with calculated values
            setFormData(prevState => ({
                ...prevState,
                platformAmount: platformAmount,
                miscAmount: miscAmount,
                shopAmount: totalAmount
            }));

            // Update rent duration in days
            setRentDuration(days);
            setDiscountedAmount(null); // Reset discountedAmount when dates change
            setDiscountAmount(0); // Reset discount amount when dates change
        }
    };

    const applyCoupon = () => {
        if (isCouponApplied) {
            return; // Prevent applying the coupon more than once
        }

        if (formData.couponCode === 'Rideroz234') {
            const discount = (5 / 100) * formData.shopAmount; // Calculate 5% discount
            const discountedValue = formData.shopAmount - discount; // Calculate discounted amount

            setDiscountedAmount(Math.round(discountedValue)); // Round to the nearest integer
            setDiscountAmount(Math.round(discount)); // Set the discount value

            // Update the shopAmount with the discounted amount
            setFormData(prevState => ({
                ...prevState,
                shopAmount: Math.round(discountedValue), // Update shop amount
                discountAmount: Math.round(discount) // Set the discount amount in formData
            }));

            setIsCouponApplied(true); // Mark the coupon as applied
            toast.success('Coupon applied successfully!');
        } else {
            alert('Invalid Coupon Code');
            setDiscountedAmount(null); // Reset if invalid
            setDiscountAmount(0); // Reset if invalid
        }
    };


    // Recalculate shop amount whenever startDate or endDate changes
    useEffect(() => {
        calculateShopAmount();
    }, [formData.startDate, formData.endDate]);


    const today = dayjs();

    const filterPassedDates = (date) => {
        return dayjs(date).isSameOrAfter(today, 'day') && !isDateBooked(date).isBooked;
    };

    const isDateBooked = (date) => {
        const bookedDate = bookedDates.find((bookedDate) => {
            const startDate = dayjs(bookedDate.startDate);
            const endDate = dayjs(bookedDate.endDate);

            if (endDate.isBefore(startDate)) {
                console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
                return false;
            }

            return dayjs(date).isBetween(startDate, endDate, 'day', '[]');
        });

        if (bookedDate) {
            const startTime = dayjs(bookedDate.startDate).format('hh:mm A');
            const endTime = dayjs(bookedDate.endDate).format('hh:mm A');
            const startDateFormatted = dayjs(bookedDate.startDate).format('DD-MM-YYYY');
            const endDateFormatted = dayjs(bookedDate.endDate).format('DD-MM-YYYY');

            return {
                isBooked: true,
                startTime,
                endTime,
                startDateFormatted,
                endDateFormatted,
            };
        }
        return { isBooked: false };
    };

    const [createOrder, { isLoading, isError, error, data }] = useCreateOrderMutation();
    const [verifyPayment, { isLoading: verifyPaymentLoading, isError: isVerifyPaymentError, error: verifyPaymentError, isSuccess }] = useVerifyPaymentMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const vehicleId = id;  // Replace with the actual vehicle ID
        try {
            const orderResponse = await createOrder({ vehicleId, body: formData }).unwrap();

            console.log("orderResponse", orderResponse)
            if (orderResponse.success) {
                handlePaymentVerify(orderResponse);
            }
        } catch (error) {
            console.error('Failed to create order:', error);
        }
    };


    const handlePaymentVerify = (order) => {
        const options = {
            key: 'rzp_test_4saMdxYboIyJ2n',
            amount: order.amount,
            currency: order.currency,
            name: 'Rideroz',
            order_id: order.razorpayOrderId,
            handler: async (response) => {
                try {

                    console.log("response", response)
                    const paymentDetails = {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    };

                    // console.log("paymentDetails", paymentDetails)

                    const verifyResponse = await verifyPayment(paymentDetails).unwrap();

                    console.log("verifyResponse", verifyResponse)

                    if (verifyResponse.message) {
                        toast.success(verifyResponse.message);
                        navigate(`/success-payment/1234`)
                    } else {
                        toast.error('Payment verification failed');
                    }
                } catch (error) {
                    console.error('Error verifying payment:', error);
                    toast.error('Payment verification failed');
                }
            },
            theme: {
                color: '#5f63b8',
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to confirm payment, please try again');
        }

        if (isVerifyPaymentError) {
            toast.error(verifyPaymentError?.data?.error || 'Failed to confirm payment, please try again');
        }

    }, [isError, error, isSuccess, data, isVerifyPaymentError, verifyPaymentError]);


    return (
        <Layout>
            <div className="container mx-auto max-w-7xl px-2 lg:px-0">
                {/* <pre>{JSON.stringify(vehicle?.vehiclePrice, null, 2)}</pre> */}
                <pre>{JSON.stringify(formData, null, 2)}</pre>
                {/* <pre>{JSON.stringify(discountAmount,null,2)}</pre> */}

                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <form className="lg:mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-12">

                        <section
                            aria-labelledby="summary-heading"
                            className="mt-5 mb-5 lg:mt-0 lg:mb-0 rounded-md lg:col-span-4 bg-white drop-shadow p-5 order-first lg:order-last"
                        >
                            {/* Pickup/Dropoff Date and Time */}
                            <div>
                                <div className="mb-2">
                                    <DatePicker
                                        selected={formData.startDate}
                                        onChange={(date) => handleDateChange(date, 'startDate')}
                                        filterDate={filterPassedDates}
                                        dateFormat="yyyy-MM-dd"
                                        className="text-xs sm:text-sm p-2 w-[241%] md:w-[200%] lg:w-[216.4%] outline-none border-gray-500 border"
                                        placeholderText="Select Pickup Date"
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <input
                                        label="Pickup Time"
                                        type="time"
                                        name="startTime"
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        required
                                        className="text-xs sm:text-sm border p-1.5 w-full outline-none border-gray-500"
                                    />
                                </div>

                                <div className="mb-2">
                                    <DatePicker
                                        selected={formData.endDate}
                                        onChange={(date) => handleDateChange(date, 'endDate')}
                                        filterDate={filterPassedDates}
                                        dateFormat="yyyy-MM-dd"
                                        className="text-xs sm:text-sm border p-2 w-[241%] md:w-[200%] lg:w-[216.4%] outline-none border-gray-500"
                                        placeholderText="Select Drop off Date"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        placeholder="Drop Off Time"
                                        type="time"
                                        name="endTime"
                                        value={formData.endTime}
                                        onChange={handleChange}
                                        required
                                        className="text-xs sm:text-sm border p-1.5 w-full outline-none border-gray-500"
                                    />
                                </div>
                            </div>


                            <div className=" bg-green-50 p-2 mt-4 border border-green-100">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-black app-font">Coupons</p>
                                    <p className="app-font text-green-700">5% OFF</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <img className="w-8 h-8"
                                            src="https://cdn-icons-png.flaticon.com/128/1041/1041885.png" alt="coupon" />
                                        <h1 className="text-green-500 app-font">Apply Coupon</h1>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={applyCoupon}
                                        disabled={isCouponApplied || !formData.startDate || !formData.endDate || !formData.startTime || !formData.endTime} // Disable button if coupon is applied or dates/times are missing
                                        className="bg-green-600 px-2 text-white text-sm py-[2px] app-font rounded-md">
                                        Apply Now
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        value={formData.couponCode}
                                        onChange={e => setFormData({ ...formData, couponCode: e.target.value })}
                                        placeholder="Apply Coupon Code"
                                        label="Apply Coupon Code"
                                        disabled={isCouponApplied || !formData.startDate || !formData.endDate || !formData.startTime || !formData.endTime} // Disable input if coupon is applied or dates/times are missing
                                        className=""
                                        color="green"
                                    />
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <h1 className="text-sm app-font text-green-900">Coupon Code :</h1>
                                    <h1 className="text-sm text-green-600 animate-pulse app-font">Rideroz234</h1>
                                </div>
                            </div>

                            {/* Display the total shopAmount */}
                            <div className="border mt-4 p-2 px-4 rounded-md drop-shadow border-green-400 text-black">
                                <h1 className="app-font">
                                    <span className="font-bold">Price Breakdown:</span>
                                </h1>
                                <p className="text-xs mt-1 mb-1  app-font">
                                    Base Price: ₹ {vehiclePricePerDay}
                                </p>

                                <p className="text-xs mb-1  app-font">
                                    Misc Charge : ₹ {formData?.miscAmount || 0}
                                </p>

                                <p className="text-xs mb-1  app-font">
                                    Platform Charge : ₹ {formData?.platformAmount || 0}
                                </p>

                                <p className="text-xs mb-1  app-font">
                                    Rent Duration: {rentDuration} day(s)
                                </p>

                                {discountedAmount ? <p className="text-green-500 text-sm">
                                    Discount Amount: ₹ {discountAmount}  {/* Display the discount amount */}
                                </p> : ""}

                                <p>
                                    <span className=" font-bold">Total Shop Amount</span> :
                                    <span className=" app-font"> ₹ {
                                        discountedAmount !== null
                                            ? discountedAmount  // Show discounted amount if coupon applied
                                            : formData.shopAmount  // Show original amount if no coupon applied
                                    }</span>
                                </p>
                            </div>

                            <div className="mt-4">
                                <Button
                                    onClick={handleSubmit}
                                    variant=""
                                    size="small"
                                    className="hover:shadow-none shadow-none w-full bg-green-500"
                                    disabled={verifyPaymentLoading || !formData.startDate || !formData.endDate || !formData.startTime || !formData.endTime} // Disable if loading or fields are missing
                                >
                                    {verifyPaymentLoading ? "Confirmed" : "Confirm"}
                                </Button>

                            </div>
                        </section>



                        <section aria-labelledby="cart-heading"
                            className=" drop-shadow bg-white py-4 border px-4 lg:col-span-8 ">
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Checkout
                                </h1>
                                <div className=" app-font mt-2">
                                    <span>Home</span> / <span>Renting</span> / <span>Checkout</span>
                                </div>
                            </div>
                            <div className=" bg-white drop-shadow mb-4 px-4 py-4">
                                <div className="">
                                    <h1 className=" mb-2 app-font">
                                        <span className=" font-bold">City : </span>
                                        <span>{selectedCity}</span>
                                    </h1>

                                    <h1 className=" mb-2 app-font">
                                        <span className=" font-bold">Current Location : </span>
                                        <span>{currentLocationName || "N/A"}</span>
                                    </h1>
                                </div>
                            </div>
                            <div className=" bg-white drop-shadow mb-2">
                                <ul role="list" className="divide-y divide-gray-200">
                                    <div className="">
                                        <li className="flex py-6 sm:py-6 ">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={vehicle?.vehicleImage[0]?.url}
                                                    alt={vehicle?.vehicleName}
                                                    className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <a className="font-semibold text-black app-font">
                                                                    {vehicle?.vehicleName}
                                                                </a>
                                                            </h3>
                                                        </div>

                                                        <div className="mt-1 flex items-center space-x-2">

                                                            <p className="text-sm app-font font-medium text-gray-900">
                                                                ₹ {vehicle?.vehiclePrice}
                                                            </p>
                                                            <div className={` bg-green-600 px-2 app-font text-white  animate-pulse text-[10px]`}>
                                                                {vehicle?.vehicleAvailability && "Available"}
                                                            </div>

                                                        </div>

                                                        <div className="mt-2">
                                                            <RatingStar
                                                                rating={vehicle?.vehicleRatings}
                                                                totalRating={vehicle?.numOfReviews}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </div>
                                </ul>
                            </div>

                            <div className=" bg-white drop-shadow mb-4 px-4 py-4">
                                <div className="flex items-center gap-2">
                                    <BadgeIndianRupee color="green" /> Excess Hourly Charges 100/hr
                                </div>
                            </div>

                            <div className=" bg-white drop-shadow mb-4 px-4 py-4">
                                <div className="">
                                    <p className=" app-font text-justify mb-1 text-red-600">"Vehicle book करने के बाद अगर आप 1 घंटे के अंदर Shop पर नहीं पहुँचते हैं, तो आपकी ride अपने आप cancel हो जाएगी और आपके amount का 50% refund कर दिया जाएगा।"</p>
                                    <p className=" app-font text-justify text-red-600">"If you don't arrive at the shop within 1 hour after booking the vehicle, your ride will be automatically canceled, and 50% of your amount will be refunded."</p>
                                </div>
                            </div>
                            {/* <pre>{JSON.stringify(vehicle, null, 2)}</pre> */}


                        </section>


                    </form>


                </div>
            </div>
        </Layout>
    );
};

export default CartPage;
