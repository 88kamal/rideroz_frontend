/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button, Dialog } from "@material-tailwind/react";
import { useFetchVehicleAvailabilityQuery } from "../../../redux/slices/vehicleAvailabilitySlice";
import { CheckCircleIcon } from "lucide-react";

export default function VehicleAvailbilityModal({ vehicleId, initialMonth }) {
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

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <>
       <Button
                variant=""
                onClick={handleOpen}
                className={`flex items-center justify-center rounded-md py-2.5  lg:px-5 lg:py-2 text-center text-[0.6em] lg:text-sm font-medium w-full hover:shadow-none shadow-none  gap-2 bg-transparent border text-green-800  `}
            >
                <CheckCircleIcon className={`text-green-800 lg:text-md size-5 `} />
                <span className="fontPara">Check Availability</span>
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
