/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "react-day-picker/style.css";

import {
  Button,
  Dialog,
} from "@material-tailwind/react";
import dayjs from "dayjs";

export default function DatePickerModule({ bookedDates }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [selectedMonth, setSelectedMonth] = useState(dayjs()); // Initial month is the current month
  const today = dayjs();

  const isDateBooked = (date) => {
    const bookedDate = bookedDates.find((bookedDate) => {
      const startDate = dayjs(bookedDate.startDate);
      const endDate = dayjs(bookedDate.endDate);

      // Ignore bookings with invalid date ranges
      if (endDate.isBefore(startDate)) {
        console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
        return false;
      }

      // Check if the selected date falls within the booking range
      return dayjs(date).isBetween(startDate, endDate, 'day', '[]');
    });

    if (bookedDate) {
      // Format date as DD-MM-YYYY and time in 12-hour format with AM/PM
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

  const handlePrevMonth = () => {
    setSelectedMonth(selectedMonth.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setSelectedMonth(selectedMonth.add(1, 'month'));
  };

  const daysInMonth = Array.from(
    { length: selectedMonth.daysInMonth() },
    (_, i) => selectedMonth.startOf('month').add(i, 'day')
  );
  const currentMonth = selectedMonth.format('MMMM YYYY');
  const [dialogSize, setDialogSize] = useState("xl"); // Set initial dialog size for desktop

  useEffect(() => {
    const updateDialogSize = () => {
      if (window.innerWidth < 1024) {
        setDialogSize("xxl"); // Set size to 'xxl' for mobile screens
      } else {
        setDialogSize("xl"); // Set size to 'lg' for desktop
      }
    };

    // Add event listener to track window resize and set the correct dialog size
    window.addEventListener("resize", updateDialogSize);

    // Call it initially to set the size on load
    updateDialogSize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateDialogSize);
  }, []);

  return (
    <>


      <Button
        onClick={handleOpen}
        className="bg-green-500 text-white w-full mt-1 py-2 hover:shadow-none shadow-none rounded shadow-none hover:bg-green-600 transition duration-300"
      >
        Check Availbility
      </Button>


      <Dialog open={open} size={dialogSize} className="shadow-none hover:shadow-none rounded-md ">

        {/* <pre>{JSON.stringify(bookedDates,null,2)}</pre> */}
        <>

          <div className="overflow-y-scroll">
            {/* Current month title with navigation */}
            <div className="flex justify-between items-center mb-2 bg-blue-500 sticky top-0 z-50">
              <Button variant="text"
                onClick={handlePrevMonth}
                className="text-xs hover:shadow-none shadow-none rounded-none text-white">
                Previous
              </Button>
              <div className="text-center text-lg lg:text-xl font-bold text-white">
                {currentMonth}
              </div>
              <Button variant="text"
                onClick={handleNextMonth}
                className="text-xs hover:shadow-none shadow-none rounded-none text-white">
                Next
              </Button>
            </div>

            {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}
            <div className="p-3">
              {/* Calendar view */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-4 mb-4">
                {daysInMonth.map((day) => {
                  const { isBooked, startTime, endTime, startDateFormatted, endDateFormatted } = isDateBooked(day);
                  const isPast = day.isBefore(today, 'day') && day.isSame(selectedMonth, 'month');

                  return (
                    <div
                      key={day}
                      className={`p-2 sm:p-4 rounded-lg border transition-transform transform ${isPast ? 'bg-gray-200 border-gray-300 cursor-not-allowed' :
                        isBooked ? 'bg-red-100 border-red-300' : 'bg-green-100 border-green-300 hover:scale-105'
                        }`}
                    >
                      <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
                        {day.format('ddd')}, {day.format('DD')}
                      </div>
                      <div className="text-xs text-gray-500 text-center">
                        {isPast ? (
                          <div className="font-bold text-gray-500">Not Available</div>
                        ) : isBooked ? (
                          <div className="text-red-800">
                            <p className=" font-bold mt-1 mb-1">Booked</p>
                            <h1 className="app-font">
                              From <span className=" font-semibold text-[10px]"> {startDateFormatted}, {startTime} </span> -
                              <br className=" hidden lg:block md:block sm:block" />
                             {" "}  To   <span className=" font-semibold text-[10px]">  {endDateFormatted} {endTime}</span>
                            </h1>
                          </div>
                        ) : (
                          <div className="font-bold text-green-500">Available</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button
                variant=""
                color="red"
                onClick={handleOpen}
                className=" w-full"
              >
                <span>Cancel</span>
              </Button>
            </div>


          </div>

        </>
        {/* <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
          // onClick={handleDelete}
          // disabled={verificationText !== requiredText} // Disable the button if text doesn't match
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </>
  );
}
