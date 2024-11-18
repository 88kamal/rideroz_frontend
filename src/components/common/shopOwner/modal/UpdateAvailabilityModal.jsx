/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Dialog, DialogFooter, IconButton } from "@material-tailwind/react";
import { SquarePen } from "lucide-react";
import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import isBetween from 'dayjs/plugin/isBetween';
import "react-datepicker/dist/react-datepicker.css";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import CustomTimeDropdown from "../../../../pages/checkoutPage/CustomTimeDropdown";
import utc from "dayjs/plugin/utc";
import ShopAvailbility from "../shopOwnerAvailbility/ShopAvailbility";

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(utc);


export default function UpdateAvailabilityModal({ id, refetch }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    startTime: '',
    endTime: '',
  });

  const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

  const handleOpen = () => setOpen(!open);

  // Handle DatePicker changes separately
  const handleDateChange = (date, fieldName) => {
    const localDate = dayjs(date).startOf('day').format('YYYY-MM-DD'); // Format to store only the date
    setFormData({ ...formData, [fieldName]: localDate });
  };

  // Handle regular input changes
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.startDate || !formData.endDate || !formData.startTime || !formData.endTime) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await bookWalkin({ vehicleId: id, ...formData }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.error || 'Failed to update availability, please try again');
      handleOpen();
    }
    if (isSuccess) {
      toast.success(data?.message);
      refetch();
      handleOpen();
    }
  }, [isError, error, isSuccess, data]);
  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <SquarePen className="h-4 w-4" />
      </IconButton>

      <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-white">
        {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}
        <div className="overflow-y-scroll">

          <ShopAvailbility vehicleId={id}/>
          {/* Current month title with navigation */}
          {/* <div className="flex justify-between items-center mb-2 bg-blue-500">
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
          </div> */}

          {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}
          <div className="p-3">
            {/* Calendar view */}
            {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-4 mb-4">
              {daysInMonth.map((day) => {
                const {
                  isBooked,
                  startTime,
                  endTime,
                  startDateFormatted,
                  endDateFormatted,
                  isPartialBooking,
                } = isDateBooked(day);
                const isPast = day.isBefore(today, 'day') && day.isSame(selectedMonth, 'month');

                return (
                  <div
                    key={day}
                    className={`p-2 sm:p-4 rounded-lg border transition-transform transform ${isPast
                      ? 'bg-gray-100 border-gray-300 cursor-not-allowed' // Light gray background for past dates
                      : isBooked && isPartialBooking
                        ? 'bg-indigo-100 border-indigo-300' // Yellow background for partially booked days
                        : isBooked
                          ? 'bg-red-100 border-red-300' // Red background for fully booked days
                          : 'bg-green-100 border-green-400 hover:scale-105' // Green background for available days
                      }`}
                  >
                    <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
                      {day.format('ddd')}, {day.format('DD')}
                    </div>
                    <div className="text-xs text-gray-500 text-center">
                      {isPast ? (
                        <div className="font-bold text-gray-500">Not Available</div>
                      ) : isBooked ? (
                        isPartialBooking ? (
                          <div className="text-indigo-800">
                            <p className="font-bold mt-1 mb-1">Partially Booked</p>
                            <div>Available after {endTime}</div>
                            <div className="text-xs">From {endDateFormatted}</div>
                          </div>
                        ) : (
                          <div className="text-red-800">
                            <p className="font-bold mt-1 mb-1">Booked</p>
                            <h1 className="app-font">
                              From <span className="font-semibold text-[10px]">{startDateFormatted}, {startTime}</span> -
                              <br className="hidden lg:block md:block sm:block" />
                              {" "}To <span className="font-semibold text-[10px]">{endDateFormatted} {endTime}</span>
                            </h1>
                          </div>
                        )
                      ) : (
                        <div className="font-bold text-green-500">Available</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div> */}

            {/* Form for adding new booking */}
            <form onSubmit={handleSubmit} className="space-y-4 flex justify-end mb-20">
              <div className=" bg-gray-200 border border-gray-400 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="">
                    {/* <DatePicker
                                            selected={formData.startDate}
                                            onChange={(date) => handleDateChange(date, 'startDate')}
                                            filterDate={filterPassedDates} // Disable past and booked dates
                                            dateFormat="yyyy-MM-dd"
                                            className="text-xs sm:text-sm border p-2 w-full outline-none"
                                            placeholderText="Select Pickup Date"
                                            required
                                        /> */}
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleDateChange(e.target.value, 'startDate')}
                      min={new Date().toISOString().split('T')[0]} // This will prevent selecting past dates
                      className="text-xs sm:text-sm p-2 w-full outline-none rounded border-gray-500 border"
                      placeholder="Select Pickup Date"
                    />

                  </div>

                  <div className="">
                    {/* <input
                      label="Pickup Time"
                      type="time"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm border p-1.5 w-full outline-none"
                    /> */}
                    <CustomTimeDropdown
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    {/* <DatePicker
                      selected={formData.endDate}
                      onChange={(date) => handleDateChange(date, 'endDate')}
                      filterDate={filterPassedDates} // Disable past and booked dates
                      dateFormat="yyyy-MM-dd"
                      className="text-xs sm:text-sm border p-2 w-full outline-none"
                      placeholderText="Select Drop off Date"
                      required
                    /> */}
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleDateChange(e.target.value, 'endDate')}
                      min={new Date().toISOString().split('T')[0]} // This will prevent selecting past dates
                      className="text-xs sm:text-sm border p-2 w-full outline-none rounded border-gray-500"
                      placeholder="Select Drop off Date"
                    />
                  </div>

                  <div className="">
                    {/* <input
                      placeholder="Drop Off Time"
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                      required
                      className="text-xs sm:text-sm border p-1.5 w-full outline-none"
                    /> */}
                    <CustomTimeDropdown
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? 'Booking...' : 'Book Now'}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
