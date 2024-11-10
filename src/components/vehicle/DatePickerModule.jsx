// // // // // /* eslint-disable react/prop-types */
// // // // // import { useEffect, useState } from "react";
// // // // // import "react-day-picker/style.css";

// // // // // import {
// // // // //   Button,
// // // // //   Dialog,
// // // // // } from "@material-tailwind/react";
// // // // // import dayjs from "dayjs";

// // // // // export default function DatePickerModule({ bookedDates }) {
// // // // //   const [open, setOpen] = useState(false);
// // // // //   const handleOpen = () => setOpen(!open);
// // // // //   const [selectedMonth, setSelectedMonth] = useState(dayjs()); // Initial month is the current month
// // // // //   const today = dayjs();


// // // // //   const isDateBooked = (date) => {
// // // // //     const bookedDate = bookedDates.find((bookedDate) => {
// // // // //         const startDate = dayjs(bookedDate.startDate);
// // // // //         const endDate = dayjs(bookedDate.endDate);

// // // // //         // Ignore bookings with invalid date ranges
// // // // //         if (endDate.isBefore(startDate)) {
// // // // //             console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
// // // // //             return false;
// // // // //         }

// // // // //         // Check if the selected date falls within the booking range, treating end times precisely
// // // // //         const isDuringBooking = dayjs(date).isBetween(startDate, endDate, 'day', '[)');
// // // // //         const isEndDateWithTime = dayjs(date).isSame(endDate, 'day') && endDate.hour() > 0;

// // // // //         // Mark as booked if the date is within the booking period or if it's the end date with time past midnight.
// // // // //         return isDuringBooking || isEndDateWithTime;
// // // // //     });

// // // // //     if (bookedDate) {
// // // // //         const startTime = dayjs(bookedDate.startDate).format('hh:mm A');
// // // // //         const endTime = dayjs(bookedDate.endDate).format('hh:mm A');
// // // // //         const startDateFormatted = dayjs(bookedDate.startDate).format('DD-MM-YYYY');
// // // // //         const endDateFormatted = dayjs(bookedDate.endDate).format('DD-MM-YYYY');

// // // // //         const isPartialBooking = dayjs(date).isSame(dayjs(bookedDate.endDate), 'day') &&
// // // // //             dayjs(bookedDate.endDate).hour() > 0; // Partial booking if end time is not midnight

// // // // //         return {
// // // // //             isBooked: true,
// // // // //             startTime,
// // // // //             endTime,
// // // // //             startDateFormatted,
// // // // //             endDateFormatted,
// // // // //             isPartialBooking,
// // // // //         };
// // // // //     }

// // // // //     return { isBooked: false, isPartialBooking: false };
// // // // // };


// // // // //   const handlePrevMonth = () => {
// // // // //     setSelectedMonth(selectedMonth.subtract(1, 'month'));
// // // // //   };

// // // // //   const handleNextMonth = () => {
// // // // //     setSelectedMonth(selectedMonth.add(1, 'month'));
// // // // //   };

// // // // //   const daysInMonth = Array.from(
// // // // //     { length: selectedMonth.daysInMonth() },
// // // // //     (_, i) => selectedMonth.startOf('month').add(i, 'day')
// // // // //   );
// // // // //   const currentMonth = selectedMonth.format('MMMM YYYY');
// // // // //   const [dialogSize, setDialogSize] = useState("xl"); // Set initial dialog size for desktop

// // // // //   useEffect(() => {
// // // // //     const updateDialogSize = () => {
// // // // //       if (window.innerWidth < 1024) {
// // // // //         setDialogSize("xxl"); // Set size to 'xxl' for mobile screens
// // // // //       } else {
// // // // //         setDialogSize("xl"); // Set size to 'lg' for desktop
// // // // //       }
// // // // //     };

// // // // //     // Add event listener to track window resize and set the correct dialog size
// // // // //     window.addEventListener("resize", updateDialogSize);

// // // // //     // Call it initially to set the size on load
// // // // //     updateDialogSize();

// // // // //     // Cleanup event listener on unmount
// // // // //     return () => window.removeEventListener("resize", updateDialogSize);
// // // // //   }, []);

// // // // //   return (
// // // // //     <>


// // // // //       <Button
// // // // //         onClick={handleOpen}
// // // // //         className="bg-green-500 text-white w-full mt-1 py-2 hover:shadow-none shadow-none rounded shadow-none hover:bg-green-600 transition duration-300"
// // // // //       >
// // // // //         Check Availbility
// // // // //       </Button>


// // // // //       <Dialog open={open} size={dialogSize} className="shadow-none hover:shadow-none rounded-md ">

// // // // //         <pre>{JSON.stringify(bookedDates,null,2)}</pre>
// // // // //         <>

// // // // //           <div className="overflow-y-scroll">
// // // // //             {/* Current month title with navigation */}
// // // // //             <div className="flex justify-between items-center mb-2 bg-blue-500 sticky top-0 z-50">
// // // // //               <Button variant="text"
// // // // //                 onClick={handlePrevMonth}
// // // // //                 className="text-xs hover:shadow-none shadow-none rounded-none text-white">
// // // // //                 Previous
// // // // //               </Button>
// // // // //               <div className="text-center text-lg lg:text-xl font-bold text-white">
// // // // //                 {currentMonth}
// // // // //               </div>
// // // // //               <Button variant="text"
// // // // //                 onClick={handleNextMonth}
// // // // //                 className="text-xs hover:shadow-none shadow-none rounded-none text-white">
// // // // //                 Next
// // // // //               </Button>
// // // // //             </div>

// // // // //             {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}
// // // // //             <div className="p-3">
// // // // //               {/* Calendar view */}
// // // // //               <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-4 mb-4">
// // // // //                 {daysInMonth.map((day) => {
// // // // //                   const { isBooked, startTime, endTime, startDateFormatted, endDateFormatted } = isDateBooked(day);
// // // // //                   const isPast = day.isBefore(today, 'day') && day.isSame(selectedMonth, 'month');

// // // // //                   return (
// // // // //                     <div
// // // // //                       key={day}
// // // // //                       className={`p-2 sm:p-4 rounded-lg border transition-transform transform ${isPast ? 'bg-gray-200 border-gray-300 cursor-not-allowed' :
// // // // //                         isBooked ? 'bg-red-100 border-red-300' : 'bg-green-100 border-green-300 hover:scale-105'
// // // // //                         }`}
// // // // //                     >
// // // // //                       <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
// // // // //                         {day.format('ddd')}, {day.format('DD')}
// // // // //                       </div>
// // // // //                       <div className="text-xs text-gray-500 text-center">
// // // // //                         {isPast ? (
// // // // //                           <div className="font-bold text-gray-500">Not Available</div>
// // // // //                         ) : isBooked ? (
// // // // //                           <div className="text-red-800">
// // // // //                             <p className=" font-bold mt-1 mb-1">Booked</p>
// // // // //                             <h1 className="app-font">
// // // // //                               From <span className=" font-semibold text-[10px]"> {startDateFormatted}, {startTime} </span> -
// // // // //                               <br className=" hidden lg:block md:block sm:block" />
// // // // //                              {" "}  To   <span className=" font-semibold text-[10px]">  {endDateFormatted} {endTime}</span>
// // // // //                             </h1>
// // // // //                           </div>
// // // // //                         ) : (
// // // // //                           <div className="font-bold text-green-500">Available</div>
// // // // //                         )}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   );
// // // // //                 })}
// // // // //               </div>

// // // // //               <Button
// // // // //                 variant=""
// // // // //                 color="red"
// // // // //                 onClick={handleOpen}
// // // // //                 className=" w-full"
// // // // //               >
// // // // //                 <span>Cancel</span>
// // // // //               </Button>
// // // // //             </div>


// // // // //           </div>

// // // // //         </>

// // // // //       </Dialog>
// // // // //     </>
// // // // //   );
// // // // // }


// // // // /* eslint-disable react/prop-types */
// // // // import { useEffect, useState } from "react";
// // // // import "react-day-picker/style.css";
// // // // import { Button, Dialog } from "@material-tailwind/react";
// // // // import dayjs from "dayjs";
// // // // import utc from "dayjs/plugin/utc";

// // // // dayjs.extend(utc);

// // // // export default function DatePickerModule({ bookedDates }) {
// // // //   const [open, setOpen] = useState(false);
// // // //   const handleOpen = () => setOpen(!open);
// // // //   const [selectedMonth, setSelectedMonth] = useState(dayjs());
// // // //   const today = dayjs();
// // //   // const [dialogSize, setDialogSize] = useState("xl");


// // // //   const isDateBooked = (date) => {
// // // //     const bookedDate = bookedDates.find((bookedDate) => {
// // // //       const startDate = dayjs(bookedDate.startDate);
// // // //       const endDate = dayjs(bookedDate.endDate);

// // // //       // Ignore bookings with invalid date ranges
// // // //       if (endDate.isBefore(startDate)) {
// // // //         console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
// // // //         return false;
// // // //       }

// // // //       // Check if the selected date falls within the booking range
// // // //       return dayjs(date).isBetween(startDate, endDate, 'day', '[]');
// // // //     });

// // // //     if (bookedDate) {
// // // //       // Parse and adjust the time based on the time zone or desired format
// // // //       const startTime = dayjs(bookedDate.startDate).utc().format('hh:mm A');
// // // //       const endTime = dayjs(bookedDate.endDate).utc().format('hh:mm A');

// // // //       const startDateFormatted = dayjs(bookedDate.startDate).format('DD-MM-YYYY');
// // // //       const endDateFormatted = dayjs(bookedDate.endDate).format('DD-MM-YYYY');

// // // //       // Check if the selected date is the end date of the booking
// // // //       const isPartialBooking = dayjs(date).isSame(dayjs(bookedDate.endDate), 'day');

// // // //       return {
// // // //         isBooked: true,
// // // //         startTime,
// // // //         endTime,
// // // //         startDateFormatted,
// // // //         endDateFormatted,
// // // //         isPartialBooking,
// // // //       };
// // // //     }

// // // //     return { isBooked: false, isPartialBooking: false };
// // // //   };



// // // //   const handlePrevMonth = () => {
// // // //     setSelectedMonth(selectedMonth.subtract(1, 'month'));
// // // //   };

// // // //   const handleNextMonth = () => {
// // // //     setSelectedMonth(selectedMonth.add(1, 'month'));
// // // //   };

// // // //   const daysInMonth = Array.from(
// // // //     { length: selectedMonth.daysInMonth() },
// // // //     (_, i) => selectedMonth.startOf('month').add(i, 'day')
// // // //   );
// // // //   const currentMonth = selectedMonth.format('MMMM YYYY');

// // //   // useEffect(() => {
// // //   //   const updateDialogSize = () => {
// // //   //     if (window.innerWidth < 1024) {
// // //   //       setDialogSize("xxl");
// // //   //     } else {
// // //   //       setDialogSize("xl");
// // //   //     }
// // //   //   };

// // //   //   window.addEventListener("resize", updateDialogSize);
// // //   //   updateDialogSize();

// // //   //   return () => window.removeEventListener("resize", updateDialogSize);
// // //   // }, []);

// // // //   return (
// // // //     <>
// // //       // <Button
// // //       //   onClick={handleOpen}
// // //       //   className="bg-green-500 text-white w-full py-2 hover:shadow-none shadow-none rounded shadow-none hover:bg-green-600 transition duration-300"
// // //       // >
// // //       //    Availability
// // //       // </Button>

// // // //       <Dialog open={open} size={dialogSize} className="shadow-none hover:shadow-none rounded-md">
// // // //         {/* <pre>{JSON.stringify(bookedDates, null,2)}</pre> */}
// // // //         <div className="overflow-y-scroll">
// // //           // <div className="flex justify-between items-center mb-2 bg-blue-500 sticky top-0 z-50">
// // //           //   <Button
// // //           //     variant="text"
// // //           //     onClick={handlePrevMonth}
// // //           //     className="text-xs hover:shadow-none shadow-none rounded-none text-white"
// // //           //   >
// // //           //     Previous
// // //           //   </Button>
// // //           //   <div className="text-center text-lg lg:text-xl font-bold text-white">
// // //           //     {currentMonth}
// // //           //   </div>
// // //           //   <Button
// // //           //     variant="text"
// // //           //     onClick={handleNextMonth}
// // //           //     className="text-xs hover:shadow-none shadow-none rounded-none text-white"
// // //           //   >
// // //           //     Next
// // //           //   </Button>
// // //           // </div>

// // // //           <div className="p-3">
// // // //             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-4 mb-4">
// // // //               {daysInMonth.map((day) => {
// // // //                 const {
// // // //                   isBooked,
// // // //                   startTime,
// // // //                   endTime,
// // // //                   startDateFormatted,
// // // //                   endDateFormatted,
// // // //                   isPartialBooking,
// // // //                 } = isDateBooked(day);
// // // //                 const isPast = day.isBefore(today, 'day') && day.isSame(selectedMonth, 'month');

// // // //                 return (
// // // //                   <div
// // // //                     key={day}
// // // //                     className={`p-2 sm:p-4 rounded-lg border transition-transform transform ${isPast
// // // //                         ? 'bg-gray-100 border-gray-300 cursor-not-allowed' // Light gray background for past dates
// // // //                         : isBooked && isPartialBooking
// // // //                           ? 'bg-indigo-100 border-indigo-300' // Yellow background for partially booked days
// // // //                           : isBooked
// // // //                             ? 'bg-red-100 border-red-300' // Red background for fully booked days
// // // //                             : 'bg-green-100 border-green-300 hover:scale-105' // Green background for available days
// // // //                       }`}
// // // //                   >
// // // //                     <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
// // // //                       {day.format('ddd')}, {day.format('DD')}
// // // //                     </div>
// // // //                     <div className="text-xs text-gray-500 text-center">
// // // //                       {isPast ? (
// // // //                         <div className="font-bold text-gray-500">Not Available</div>
// // // //                       ) : isBooked ? (
// // // //                         isPartialBooking ? (
// // // //                           <div className="text-indigo-800">
// // // //                             <p className="font-bold mt-1 mb-1">Partially Booked</p>
// // // //                             <div>Available after {endTime}</div>
// // // //                             <div className="text-[10px]">From {endDateFormatted}</div>
// // // //                           </div>
// // // //                         ) : (
// // // //                           <div className="text-red-800">
// // // //                             <p className="font-bold mt-1 mb-1">Booked</p>
// // // //                             <h1 className="app-font">
// // // //                               From <span className="font-semibold text-[10px]">{startDateFormatted}, {startTime}</span> -
// // // //                               <br className="hidden lg:block md:block sm:block" />
// // // //                               {" "}To <span className="font-semibold text-[10px]">{endDateFormatted} {endTime}</span>
// // // //                             </h1>
// // // //                           </div>
// // // //                         )
// // // //                       ) : (
// // // //                         <div className="font-bold text-green-500">Available</div>
// // // //                       )}
// // // //                     </div>
// // // //                   </div>
// // // //                 );
// // // //               })}

// // // //             </div>

// // // //             <Button variant="" color="red" onClick={handleOpen} className="w-full">
// // // //               <span>Cancel</span>
// // // //             </Button>
// // // //           </div>
// // // //         </div>
// // // //       </Dialog>
// // // //     </>
// // // //   );
// // // // }


// // // // import React from 'react';
// // // // import { useFetchVehicleAvailabilityQuery } from '../../redux/slices/vehicleAvailabilitySlice';

// // // // const VehicleAvailability = ({ vehicleId, month }) => {
// // //     // const { data, error, isLoading } = useFetchVehicleAvailabilityQuery({ vehicleId, month });

// // //     // if (isLoading) return <p>Loading...</p>;
// // //     // if (error) return <p>An error occurred: {error.message}</p>;

// // // //     return (
// // //         // <div>
// // //         //     <h2>Availability for {month}</h2>
// // //         //     <ul>
// // //         //         {data.availabilityStatus.map((status) => (
// // //         //             <li key={status.date}>
// // //         //                 <strong>{status.date}</strong>: {status.status}
// // //         //                 {status.availableAfter && ` (Available After: ${status.availableAfter})`}
// // //         //             </li>
// // //         //         ))}
// // //         //     </ul>
// // //         // </div>
// // // //     );
// // // // };

// // // // export default VehicleAvailability;

// // import { useEffect, useState } from "react";
// // import dayjs from "dayjs";
// // import {
// //   Button,
// //   Dialog,
// // } from "@material-tailwind/react";
// // import { useFetchVehicleAvailabilityQuery } from "../../redux/slices/vehicleAvailabilitySlice";

// // export default function DatePickerModule({ vehicleId, initialMonth }) {
// //   const [open, setOpen] = useState(false);
// //   const [month, setMonth] = useState(initialMonth || dayjs().format("YYYY-MM")); // Default to current month
// //   const [dialogSize, setDialogSize] = useState("xl");

// //   const handleOpen = () => setOpen(!open);

// //   // Fetch data with the current vehicle ID and month
// //   const { data, error, isLoading } = useFetchVehicleAvailabilityQuery({
// //     vehicleId,
// //     month,
// //   });

// //   // Handle month navigation
// //   const handleMonthChange = (direction) => {
// //     const newMonth = dayjs(month)
// //       .add(direction, "month")
// //       .format("YYYY-MM");
// //     setMonth(newMonth);
// //   };

// //   useEffect(() => {
// //     const updateDialogSize = () => {
// //       if (window.innerWidth < 1024) {
// //         setDialogSize("xxl");
// //       } else {
// //         setDialogSize("xl");
// //       }
// //     };

// //     window.addEventListener("resize", updateDialogSize);
// //     updateDialogSize();

// //     return () => window.removeEventListener("resize", updateDialogSize);
// //   }, []);

// //   // UI Loading and Error Handling
// //   if (isLoading) return <p>Loading...</p>;
// //   if (error) return <p>An error occurred: {error.message}</p>;

// //   return (
// //     <>
// //       <Button
// //         onClick={handleOpen}
// //         className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300"
// //       >
// //         Availability
// //       </Button>

// //       <Dialog
// //         open={open}
// //         size={dialogSize}
// //         className="bg-white max-w-md mx-auto shadow-none hover:shadow-none rounded-md"
// //         onClose={handleOpen}
// //       >
// //     <div className=" overflow-y-scroll">
// //     <div className="flex justify-between items-center bg-blue-500 sticky top-0 z-50">
// //           <Button
// //             variant="text"
// //             onClick={() => handleMonthChange(-1)}
// //             className="text-xs hover:shadow-none shadow-none rounded-none text-white"
// //           >
// //             Previous
// //           </Button>
// //           <h3 className="text-center text-lg lg:text-xl font-bold text-white">
// //             {dayjs(month).format("MMMM YYYY")}
// //           </h3>
// //           <Button
// //             variant="text"
// //             onClick={() => handleMonthChange(1)}
// //             className="text-xs hover:shadow-none shadow-none rounded-none text-white"
// //           >
// //             Next
// //           </Button>
// //         </div>
// //         <div className=" p-3">
// //           <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-4 mb-">
// //             {data.availabilityStatus.map((day, index) => (
// //              <div
// //              key={index}
// //              className={`p-3 rounded-lg  drop-shadow transition-transform transform ${
// //                day.status === "Available"
// //                  ? "bg-green-50 border-green-300 text-green-700 hover:scale-105"
// //                  : day.status === "Not Available"
// //                  ? "bg-gray-200 text-gray-500"
// //                  : day.status === "Booked"
// //                  ? "bg-red-50 text-red-700"
// //                  : "bg-yellow-50 text-yellow-700"
// //              } cursor-pointer`}
// //              style={{
// //                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// //              }}
// //            >
// //              <div className="text-sm font-semibold text-center">{day.date}</div>
// //              <div className="text-xs text-center">{day.status}</div>
// //              {day.availableAfter && <div className="text-xs text-center">After: {day.availableAfter}</div>}
// //  {day.bookingDetails && (
// //    <div className="text-xs text-center">
// //      <div>From: {day.bookingDetails.from}</div>
// //      <div>To: {day.bookingDetails.to}</div>
// //    </div>
// //  )}
// //            </div>

// //             ))}
// //           </div>
// //           <Button
// //             onClick={handleOpen}
// //             className="mt-4 py-3 bg-red-500 text-white w-full rounded hover:bg-red-600 transition duration-300"
// //           >
// //             Cancel
// //           </Button>
// //         </div>
// //     </div>
// //       </Dialog>
// //     </>
// //   );
// // }

// import { useEffect, useState } from "react";
// import dayjs from "dayjs";
// import { Button, Dialog } from "@material-tailwind/react";
// import { useFetchVehicleAvailabilityQuery } from "../../redux/slices/vehicleAvailabilitySlice";

// export default function DatePickerModule({ vehicleId, initialMonth }) {
//   const [open, setOpen] = useState(false);
//   const [month, setMonth] = useState(initialMonth || dayjs().format("YYYY-MM"));
//   const [dialogSize, setDialogSize] = useState("xl");
//   const [tooltip, setTooltip] = useState(null); // Define tooltip state

//   const handleOpen = () => setOpen(!open);

//   const { data, error, isLoading } = useFetchVehicleAvailabilityQuery({
//     vehicleId,
//     month,
//   });

//   const handleMonthChange = (direction) => {
//     const newMonth = dayjs(month).add(direction, "month").format("YYYY-MM");
//     setMonth(newMonth);
//   };

//   useEffect(() => {
//     const updateDialogSize = () => {
//       if (window.innerWidth < 1024) {
//         setDialogSize("xxl");
//       } else {
//         setDialogSize("xl");
//       }
//     };

//     window.addEventListener("resize", updateDialogSize);
//     updateDialogSize();

//     return () => window.removeEventListener("resize", updateDialogSize);
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>An error occurred: {error.message}</p>;

//   return (
//     <>
//       <Button
//         onClick={handleOpen}
//         className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300"
//       >
//         Availability
//       </Button>

//       <Dialog
//         open={open}
//         size={dialogSize}
//         className="bg-white max-w-md mx-auto shadow-none hover:shadow-none rounded-md"
//         onClose={handleOpen}
//       >
//         <div className="overflow-y-scroll">
//           <div className="flex justify-between items-center bg-blue-500 sticky top-0 z-50">
//             <Button
//               variant="text"
//               onClick={() => handleMonthChange(-1)}
//               className="text-xs hover:shadow-none shadow-none rounded-none text-white"
//             >
//               Previous
//             </Button>
//             <h3 className="text-center text-lg lg:text-xl font-bold text-white">
//               {dayjs(month).format("MMMM YYYY")}
//             </h3>
//             <Button
//               variant="text"
//               onClick={() => handleMonthChange(1)}
//               className="text-xs hover:shadow-none shadow-none rounded-none text-white"
//             >
//               Next
//             </Button>
//           </div>
//           <div className="p-3">
//             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2 sm:gap-4">
//               {data.availabilityStatus.map((day, index) => (
//                 <div
//                   key={index}
//                   className={`relative h-28 flex justify-center items-center p-2 rounded-lg drop-shadow transition-all ${day.status === "Available"
//                     ? "bg-green-100 border-green-200"
//                     : day.status === "Not Available"
//                       ? "bg-gray-100 cursor-not-allowed"
//                       : day.status === "Booked"
//                         ? "bg-red-100"
//                         : "bg-yellow-100"
//                     }`}
//                   onMouseEnter={() => setTooltip(day)} // Set tooltip on hover
//                   onMouseLeave={() => setTooltip(null)} // Clear tooltip on leave
//                 >
//                   <div className="">
//                     <div className="text-sm font-semibold text-center">
//                       {day.date}
//                     </div>
//                     <div className={`text-xs text-center font-semibold ${day.status === "Available"
//                     ? "text-green-500"
//                     : day.status === "Not Available"
//                       ? "text-gray-400"
//                       : day.status === "Booked"
//                         ? "text-red-400"
//                         : "text-yellow-800"
//                     }`}>{day.status}</div>

//                     {day.bookingDetails && (
//                       <div className="text-xs text-center">
//                         <div className=" font-semibold">From: {day.bookingDetails.from}</div>
//                         <div className=" font-semibold">To: {day.bookingDetails.to}</div>
//                       </div>
//                     )}

//                     {/* Tooltip */}
//                     {tooltip && tooltip.date === day.date && (
//                       <div className="absolute flex justify-center items-center z-50 top-0 bottom-0 right-0 w-full h-28 p-2 bg-white shadow-lg rounded-lg text-xs left-1/2 transform -translate-x-1/2">
//                         <div className="">
//                           {day.availableAfter && (
//                             <p className=" text-center text-black font-semibold">Available After: {day.availableAfter}</p>
//                           )}
//                           {day.bookingDetails && (
//                             <>
//                               <p className=" text-center font-semibold text-purple-500">From: {day.bookingDetails.from}</p>
//                               <p className=" text-center font-semibold text-indigo-500">To: {day.bookingDetails.to}</p>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <Button
//               onClick={handleOpen}
//               className="mt-4 py-3 bg-red-500 text-white w-full rounded hover:bg-red-600 transition duration-300"
//             >
//               Cancel
//             </Button>
//           </div>
//         </div>
//       </Dialog>
//     </>
//   );
// }


// // import { useEffect, useState } from "react";
// // import dayjs from "dayjs";
// // import {
// //   Button,
// //   Dialog,
// // } from "@material-tailwind/react";
// // import { useFetchVehicleAvailabilityQuery } from "../../redux/slices/vehicleAvailabilitySlice";

// // export default function DatePickerModule({ vehicleId, initialMonth }) {
// //   const [open, setOpen] = useState(false);
// //   const [month, setMonth] = useState(initialMonth || dayjs().format("YYYY-MM")); // Default to current month
// //   const [dialogSize, setDialogSize] = useState("xl");

// //   const handleOpen = () => setOpen(!open);

// //   // Fetch data with the current vehicle ID and month
// //   const { data, error, isLoading } = useFetchVehicleAvailabilityQuery({
// //     vehicleId,
// //     month,
// //   });

// //   // Handle month navigation
// //   const handleMonthChange = (direction) => {
// //     const newMonth = dayjs(month)
// //       .add(direction, "month")
// //       .format("YYYY-MM");
// //     setMonth(newMonth);
// //   };

// //   useEffect(() => {
// //     const updateDialogSize = () => {
// //       if (window.innerWidth < 1024) {
// //         setDialogSize("xxl");
// //       } else {
// //         setDialogSize("xl");
// //       }
// //     };

// //     window.addEventListener("resize", updateDialogSize);
// //     updateDialogSize();

// //     return () => window.removeEventListener("resize", updateDialogSize);
// //   }, []);

// //   // UI Loading and Error Handling
// //   if (isLoading) return <p>Loading...</p>;
// //   if (error) return <p>An error occurred: {error.message}</p>;

// //   return (
// //     <>
// //       <Button
// //         onClick={handleOpen}
// //         className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300"
// //       >
// //         Availability
// //       </Button>

// //       <Dialog
// //         open={open}
// //         size={dialogSize}
// //         className="bg-white max-w-md mx-auto shadow-none hover:shadow-none rounded-md"
// //         onClose={handleOpen}
// //       >
// //         <div className=" overflow-y-scroll">
// //           <div className="flex justify-between items-center bg-blue-500 sticky top-0 z-50">
// //             <Button
// //               variant="text"
// //               onClick={() => handleMonthChange(-1)}
// //               className="text-xs hover:shadow-none shadow-none rounded-none text-white"
// //             >
// //               Previous
// //             </Button>
// //             <h3 className="text-center text-lg lg:text-xl font-bold text-white">
// //               {dayjs(month).format("MMMM YYYY")}
// //             </h3>
// //             <Button
// //               variant="text"
// //               onClick={() => handleMonthChange(1)}
// //               className="text-xs hover:shadow-none shadow-none rounded-none text-white"
// //             >
// //               Next
// //             </Button>
// //           </div>
// //           <div className=" p-3">
// //             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4 mb-">
// //               {data.availabilityStatus.map((day, index) => (
// //                 <div
// //                   key={index}
// //                   className={`p-2 sm:p-4 flex justify-center items-center rounded-lg border transition-transform transform text-black ${day.status === "Available"
// //                       ? "bg-green-100 border-green-300 text-green-500"
// //                       : day.status === "Not Available"
// //                         ? "bg-gray-100 cursor-not-allowed border-gray-300 text-gray-500"
// //                         : day.status === "Booked"
// //                           ? "bg-red-100 border-red-300 text-red-500"
// //                           : "bg-orange-100 border-orange-300 text-orange-500"
// //                     }`}
// //                 >
// //                  <div className="">
// //                  <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center">{day.date}</div>
// //                   <div className="text-xs text-center font-bold">{day.status}</div>
// //                   {day.availableAfter && (
// //                     <div className="text-xs text-center">After: {day.availableAfter}</div>
// //                   )}
// //                   {day.bookingDetails && (
// //                     <div className="text-xs text-center">
// //                       <div className=" font-semibold">From: {day.bookingDetails.from}</div>
// //                       <div className=" font-semibold">To: {day.bookingDetails.to}</div>
// //                     </div>
// //                   )}
// //                  </div>
// //                 </div>
// //               ))}
// //             </div>
// //             <Button
// //               onClick={handleOpen}
// //               className="mt-4 py-3 bg-red-500 text-white w-full rounded hover:bg-red-600 transition duration-300"
// //             >
// //               Cancel
// //             </Button>
// //           </div>
// //         </div>
// //       </Dialog>
// //     </>
// //   );
// // }

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button, Dialog } from "@material-tailwind/react";
import { useFetchVehicleAvailabilityQuery } from "../../redux/slices/vehicleAvailabilitySlice";

export default function DatePickerModule({ vehicleId, initialMonth }) {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(initialMonth || dayjs().format("YYYY-MM"));
  const [dialogSize, setDialogSize] = useState("xl");
  const [tooltip, setTooltip] = useState(null); // Define tooltip state

  const handleOpen = () => setOpen(!open);

  const { data, error, isLoading } = useFetchVehicleAvailabilityQuery({
    vehicleId,
    month,
  });

  const handleMonthChange = (direction) => {
    const newMonth = dayjs(month).add(direction, "month").format("YYYY-MM");
    setMonth(newMonth);
  };

  useEffect(() => {
    const updateDialogSize = () => {
      if (window.innerWidth < 1024) {
        setDialogSize("xxl");
      } else {
        setDialogSize("xl");
      }
    };

    window.addEventListener("resize", updateDialogSize);
    updateDialogSize();

    return () => window.removeEventListener("resize", updateDialogSize);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300"
      >
        Availability
      </Button>

      <Dialog
        open={open}
        size={dialogSize}
        className="bg-white max-w-md mx-auto shadow-none hover:shadow-none rounded-md"
        onClose={handleOpen}
      >
        <div className="overflow-y-scroll max-h-screen lg:max-h-[80vh]">
          <div className="flex justify-between items-center bg-blue-500 sticky top-0 z-50">
            <Button
              variant="text"
              onClick={() => handleMonthChange(-1)}
              className="text-xs hover:shadow-none shadow-none rounded-none text-white"
            >
              Previous
            </Button>
            <h3 className="text-center text-lg lg:text-xl font-bold text-white">
              {dayjs(month).format("MMMM YYYY")}
            </h3>
            <Button
              variant="text"
              onClick={() => handleMonthChange(1)}
              className="text-xs hover:shadow-none shadow-none rounded-none text-white"
            >
              Next
            </Button>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-4">
              {data?.availabilityStatus?.map((day, index) => (
                <div
                  key={index}
                  className={`relative h-28 flex border justify-center items-center p-2 rounded-lg transition-all ${day.status === "Available"
                    ? "bg-green-100 border-green-300"
                    : day.status === "Not Available"
                      ? "bg-gray-100 cursor-not-allowed border-gray-300"
                      : day.status === "Booked"
                        ? "bg-red-100 border-red-300"
                        : "bg-yellow-100 border-yellow-800"
                    }`}
                  onMouseEnter={() => setTooltip(day)} // Set tooltip on hover
                  onMouseLeave={() => setTooltip(null)} // Clear tooltip on leave
                >
                  <div className="">
                    <div className="text-sm font-semibold text-center text-gray-700">
                      {day.date}
                    </div>
                    <div className={`text-sm text-center mb-1 font-semibold ${day.status === "Available"
                      ? "text-green-500"
                      : day.status === "Not Available"
                        ? "text-gray-400"
                        : day.status === "Booked"
                          ? "text-red-400"
                          : "text-yellow-900"
                      }`}>{day.status}</div>

                    {day.bookingDetails && (
                      <>
                        <p className=" text-xs text-center font-semibold mb-1 text-black">From: {day.bookingDetails.from}</p>
                        <p className=" text-xs text-center font-semibold mb-1 text-black">To: {day.bookingDetails.to}</p>
                      </>
                    )}

{day.availableAfter && (
                      <p className="text-xs mt-1  text-center text-green-700 font-semibold">Available After: {day.availableAfter}</p>
                    )}

                    {/* Tooltip */}
                    {/* {tooltip && tooltip.date === day.date && (
                      <div className="absolute flex justify-center items-center z-50 top-0 bottom-0 right-0 w-full h-28 p-2 bg-white shadow-lg rounded-lg text-xs left-1/2 transform -translate-x-1/2">
                        <div className="">
                          {day.availableAfter && (
                            <p className=" text-center text-black font-semibold">Available After: {day.availableAfter}</p>
                          )}
                          {day.bookingDetails && (
                            <>
                              <p className=" text-center font-semibold text-purple-500">From: {day.bookingDetails.from}</p>
                              <p className=" text-center font-semibold text-indigo-500">To: {day.bookingDetails.to}</p>
                            </>
                          )}
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className=" bg-red-500 sticky bottom-0 z-50 ">
            <Button
              onClick={handleOpen}
              className=" py-3 bg-red-500 text-white w-full rounded hover:bg-red-600 transition duration-300"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
