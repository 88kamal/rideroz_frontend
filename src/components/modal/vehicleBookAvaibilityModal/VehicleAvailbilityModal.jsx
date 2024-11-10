
// /* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import "react-day-picker/style.css";
// import { Button, Dialog } from "@material-tailwind/react";
// import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";

// dayjs.extend(utc);

// export default function VehicleAvailbilityModal({ bookedDates }) {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(!open);
//   const [selectedMonth, setSelectedMonth] = useState(dayjs());
//   const today = dayjs();
//   const [dialogSize, setDialogSize] = useState("xl");

//   const isDateBooked = (date) => {
//     const bookedDate = bookedDates.find((bookedDate) => {
//       const startDate = dayjs(bookedDate.startDate);
//       const endDate = dayjs(bookedDate.endDate);
  
//       // Ignore bookings with invalid date ranges
//       if (endDate.isBefore(startDate)) {
//         console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
//         return false;
//       }
  
//       // Check if the selected date falls within the booking range
//       return dayjs(date).isBetween(startDate, endDate, 'day', '[]');
//     });
  
//     if (bookedDate) {
//       // Parse and adjust the time based on the time zone or desired format
//       const startTime = dayjs(bookedDate.startDate).utc().format('hh:mm A');
//       const endTime = dayjs(bookedDate.endDate).utc().format('hh:mm A');
  
//       const startDateFormatted = dayjs(bookedDate.startDate).format('DD-MM-YYYY');
//       const endDateFormatted = dayjs(bookedDate.endDate).format('DD-MM-YYYY');
  
//       // Check if the selected date is the end date of the booking
//       const isPartialBooking = dayjs(date).isSame(dayjs(bookedDate.endDate), 'day');
  
//       return {
//         isBooked: true,
//         startTime,
//         endTime,
//         startDateFormatted,
//         endDateFormatted,
//         isPartialBooking,
//       };
//     }
  
//     return { isBooked: false, isPartialBooking: false };
//   };
  

//   const handlePrevMonth = () => {
//     setSelectedMonth(selectedMonth.subtract(1, 'month'));
//   };

//   const handleNextMonth = () => {
//     setSelectedMonth(selectedMonth.add(1, 'month'));
//   };

//   const daysInMonth = Array.from(
//     { length: selectedMonth.daysInMonth() },
//     (_, i) => selectedMonth.startOf('month').add(i, 'day')
//   );
//   const currentMonth = selectedMonth.format('MMMM YYYY');

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

//   return (
//     <>
      // <Button
      //   onClick={handleOpen}
      //   className="bg-green-500 text-white w-44 lg:w-52 mt-1 py-2 hover:shadow-none shadow-none rounded shadow-none hover:bg-green-600 transition duration-300"
      // >
      //   Check Availability
      // </Button>

//       <Dialog open={open} size={dialogSize} className="shadow-none hover:shadow-none rounded-md">
//         {/* <pre>{JSON.stringify(bookedDates)}</pre> */}
//         <div className="overflow-y-scroll">
//           <div className="flex justify-between items-center mb-2 bg-blue-500 sticky top-0 z-50">
//             <Button
//               variant="text"
//               onClick={handlePrevMonth}
//               className="text-xs hover:shadow-none shadow-none rounded-none text-white"
//             >
//               Previous
//             </Button>
//             <div className="text-center text-lg lg:text-xl font-bold text-white">
//               {currentMonth}
//             </div>
//             <Button
//               variant="text"
//               onClick={handleNextMonth}
//               className="text-xs hover:shadow-none shadow-none rounded-none text-white"
//             >
//               Next
//             </Button>
//           </div>

//           <div className="p-3">
//             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-4 mb-4">
//               {daysInMonth.map((day) => {
//                 const {
//                   isBooked,
//                   startTime,
//                   endTime,
//                   startDateFormatted,
//                   endDateFormatted,
//                   isPartialBooking,
//                 } = isDateBooked(day);
//                 const isPast = day.isBefore(today, 'day') && day.isSame(selectedMonth, 'month');

//                 return (
//                   <div
//                     key={day}
//                     className={`p-2 sm:p-4 rounded-lg border transition-transform transform ${isPast
//                         ? 'bg-gray-100 border-gray-300 cursor-not-allowed' // Light gray background for past dates
//                         : isBooked && isPartialBooking
//                           ? 'bg-indigo-100 border-indigo-300' // Yellow background for partially booked days
//                           : isBooked
//                             ? 'bg-red-100 border-red-300' // Red background for fully booked days
//                             : 'bg-green-100 border-green-300 hover:scale-105' // Green background for available days
//                       }`}
//                   >
//                     <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
//                       {day.format('ddd')}, {day.format('DD')}
//                     </div>
//                     <div className="text-xs text-gray-500 text-center">
//                       {isPast ? (
//                         <div className="font-bold text-gray-500">Not Available</div>
//                       ) : isBooked ? (
//                         isPartialBooking ? (
//                           <div className="text-indigo-800">
//                             <p className="font-bold mt-1 mb-1">Partially Booked</p>
//                             <div>Available after {endTime}</div>
//                             <div className="text-[10px]">From {endDateFormatted}</div>
//                           </div>
//                         ) : (
//                           <div className="text-red-800">
//                             <p className="font-bold mt-1 mb-1">Booked</p>
//                             <h1 className="app-font">
//                               From <span className="font-semibold text-[10px]">{startDateFormatted}, {startTime}</span> -
//                               <br className="hidden lg:block md:block sm:block" />
//                               {" "}To <span className="font-semibold text-[10px]">{endDateFormatted} {endTime}</span>
//                             </h1>
//                           </div>
//                         )
//                       ) : (
//                         <div className="font-bold text-green-500">Available</div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}

//             </div>

//             <Button variant="" color="red" onClick={handleOpen} className="w-full">
//               <span>Cancel</span>
//             </Button>
//           </div>
//         </div>
//       </Dialog>
//     </>
//   );
// }


/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button, Dialog } from "@material-tailwind/react";
import { useFetchVehicleAvailabilityQuery } from "../../../redux/slices/vehicleAvailabilitySlice";

export default function DatePickerModule({ vehicleId, initialMonth }) {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(initialMonth || dayjs().format("YYYY-MM"));
  const [dialogSize, setDialogSize] = useState("xl");

  const handleOpen = () => setOpen(!open);

  const { data, error, isLoading, refetch } = useFetchVehicleAvailabilityQuery({
    vehicleId,
    month,
  });

  const handleMonthChange = (direction) => {
    const newMonth = dayjs(month).add(direction, "month").format("YYYY-MM");
    setMonth(newMonth);
  };

  const refreshData = () => {
    refetch();
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
        className="bg-green-500 text-white w-44 lg:w-52 mt-1 py-2 hover:shadow-none shadow-none rounded shadow-none hover:bg-green-600 transition duration-300"
      >
        Check Availability
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
              {data?.availability?.map((day, index) => (
                <div
                  key={index}
                  className={`relative h-28 flex border justify-center items-center p-2 rounded-lg transition-all ${
                    day.status === "Available"
                      ? "bg-green-100 border-green-300"
                      : day.status === "Not Available"
                      ? "bg-gray-100 cursor-not-allowed border-gray-300"
                      : day.status === "Booked"
                      ? "bg-red-100 border-red-300"
                      : "bg-yellow-100 border-yellow-800"
                  }`}
                >
                  <div className="">
                    <div className="text-sm font-semibold text-center text-gray-700">
                      {day.date}
                    </div>
                    <div className={`text-sm text-center mb-1 font-semibold ${
                      day.status === "Available"
                        ? "text-green-500"
                        : day.status === "Not Available"
                        ? "text-gray-400"
                        : day.status === "Booked"
                        ? "text-red-400"
                        : "text-yellow-900"
                    }`}>{day.status}</div>

                    {day.bookingDetails && (
                      <>
                        <p className="text-xs text-center font-semibold mb-1 text-black">From: {day.bookingDetails.from}</p>
                        <p className="text-xs text-center font-semibold mb-1 text-black">To: {day.bookingDetails.to}</p>
                      </>
                    )}

                    {day.availableAfter && (
                      <p className="text-xs mt-1 text-center text-green-700 font-semibold">Available After: {day.availableAfter}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" sticky bottom-0 z-50 bg-white p-2 border-t border-gray-300">
            <div className="flex justify-between">
              <Button
              onClick={handleOpen}
              className="bg-red-500 py-2 text-white rounded hover:bg-red-600 transition duration-300"
            >
              Cancel
            </Button>

            <Button
              variant=""
              onClick={refreshData}
              className="text-xs py-2 text-white bg-indigo-500 rounded shadow-none hover:shadow-none"
            >
              Refresh
            </Button>
            </div>
            
          </div>
        </div>
      </Dialog>
    </>
  );
}
