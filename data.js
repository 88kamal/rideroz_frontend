import React from 'react';
import { useGetOrderByIdQuery } from '../../../../redux/slices/orderApiSlice';
import { useParams } from 'react-router-dom';
import { FaUser, FaCar, FaMoneyBillWave, FaCalendarAlt, FaRegCheckCircle } from 'react-icons/fa';

const BookingInvoice = () => {
  const { id } = useParams(); // Assuming you're using React Router to get the order ID from the URL
  const { data, error, isLoading } = useGetOrderByIdQuery(id);

  const formatDate = (date) => new Date(date).toLocaleString();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.order) return <p>No data found.</p>;

  const {
    _id,
    status,
    user: { userName, userEmail, userPhoneNumber },
    vehicle: {
      vehicleName,
      vehicleModel,
      vehicleNumber,
      vehiclePrice,
      vehicleImage,
      bookedDates,
    },
    shopAmount,
    platformAmount,
    miscAmount,
    discountAmount,
    totalAmount,
    razorpay_order_id,
    razorpay_payment_id,
    coupon: { code } = {}, // Coupon might be optional, so provide a default value.
    startDate,
    endDate,
  } = data.order;

  return (
    <div className="invoice-container p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Booking Invoice</h2>
      <div className="border-t-2 border-gray-200 py-2 flex justify-between items-center">
        <p className="text-sm font-medium">Order ID: <span className="font-semibold">{_id}</span></p>
        <p className="text-sm font-medium flex items-center gap-1">
          <FaRegCheckCircle className="text-green-500" />
          <span>{status}</span>
        </p>
      </div>

      <div className="user-info mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
          <FaUser className="text-blue-500" /> User Information
        </h3>
        <p>Name: <span className="font-semibold">{userName}</span></p>
        <p>Email: <span className="font-semibold">{userEmail}</span></p>
        <p>Phone: <span className="font-semibold">{userPhoneNumber}</span></p>
      </div>

      <div className="vehicle-info mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
          <FaCar className="text-red-500" /> Vehicle Details
        </h3>
        <p>Name: <span className="font-semibold">{vehicleName}</span></p>
        <p>Model: <span className="font-semibold">{vehicleModel}</span></p>
        <p>Number: <span className="font-semibold">{vehicleNumber}</span></p>
        <p>Price per Day: <span className="font-semibold">₹{vehiclePrice}</span></p>
        <img
          src={vehicleImage[0]?.url}
          alt={vehicleName}
          className="w-40 h-auto mt-4 rounded-md shadow"
        />
        <h4 className="font-semibold mt-4">Booking Dates:</h4>
        <div className="mt-2">
          {bookedDates.map((date, index) => (
            <p key={index} className="text-sm">
              {formatDate(date.startDate)} - {formatDate(date.endDate)}
            </p>
          ))}
        </div>
      </div>

      <div className="pricing-info mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
          <FaMoneyBillWave className="text-green-500" /> Pricing Details
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <p>Shop Amount: <span className="font-semibold">₹{shopAmount}</span></p>
          <p>Platform Fee: <span className="font-semibold">₹{platformAmount}</span></p>
          <p>Miscellaneous Charges: <span className="font-semibold">₹{miscAmount}</span></p>
          {discountAmount && code && (
            <p>Coupon ({code}): <span className="font-semibold text-red-500">-₹{discountAmount}</span></p>
          )}
          <p className="col-span-2 font-bold text-xl">Total Amount: <span className="text-green-500">₹{totalAmount}</span></p>
        </div>
      </div>

      <div className="payment-info mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
          <FaMoneyBillWave className="text-purple-500" /> Payment Details
        </h3>
        <p>Razorpay Order ID: <span className="font-semibold">{razorpay_order_id}</span></p>
        <p>Razorpay Payment ID: <span className="font-semibold">{razorpay_payment_id}</span></p>
      </div>

      <div className="dates-info mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
          <FaCalendarAlt className="text-yellow-500" /> Duration
        </h3>
        <p>Start Date: <span className="font-semibold">{formatDate(startDate)}</span></p>
        <p>End Date: <span className="font-semibold">{formatDate(endDate)}</span></p>
      </div>
    </div>
  );
};

export default BookingInvoice;
