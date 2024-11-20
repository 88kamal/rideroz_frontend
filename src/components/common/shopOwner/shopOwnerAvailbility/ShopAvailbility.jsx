
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button, Spinner } from "@material-tailwind/react";
import { useFetchVehicleAvailabilityQuery } from "../../../../redux/slices/vehicleAvailabilitySlice";

export default function ShopAvailbility({ vehicleId, initialMonth }) {
  const [month, setMonth] = useState(initialMonth || dayjs().format("YYYY-MM"));

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


  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>An error occurred: {error}</p>;

  return (
    <>
    
      <div
        className="bg-white "
      >
        {/* <pre>{JSON.stringify(vehicleId,null,2)}</pre> */}
        <div className="">
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
            {isLoading ? 
            
            <div className="flex justify-center">
              <Spinner/>
            </div>
            : <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-4">
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
            </div>}
          </div>
        </div>
      </div>
    </>
  );
}
