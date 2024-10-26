

const invoiceData = {
  user: {
    userName: 'Kamal Nayan Upadhyay',
    userEmail: 'testuser@gmail.com',
    userPhoneNumber: '8292417430',
  },
  vehicle: {
    vehicleName: 'My First Bike',
    vehicleModel: '2024',
    vehicleNumber: 'UP26X0345',
    vehiclePrice: 600,
    bookingPrice: 60,
  },
  startDate: '2024-10-24T10:59:00.000Z',
  endDate: '2024-10-25T00:00:00.000Z',
  coupon: {
    code: 'Rideroz234',
    discountType: 'percentage',
    discountValue: 10,
    expirationDate: '2024-12-31T00:00:00.000Z',
  },
  shopAmount: 656,
  platformAmount: 60,
  miscAmount: 30,
  discountAmount: 35,
  totalAmount: 656,
  status: 'completed',
};

const Invoice = () => {
  const {
    user,
    vehicle,
    startDate,
    endDate,
    coupon,
    shopAmount,
    platformAmount,
    miscAmount,
    discountAmount,
    totalAmount,
    status,
  } = invoiceData;

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US');

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Invoice</h2>

      {/* User Information */}
      <div className="border-b pb-4 mb-4">
        <h3 className="text-lg font-semibold">Customer Details</h3>
        <p><strong>Name:</strong> {user.userName}</p>
        <p><strong>Email:</strong> {user.userEmail}</p>
        <p><strong>Phone:</strong> {user.userPhoneNumber}</p>
      </div>

      {/* Vehicle Information */}
      <div className="border-b pb-4 mb-4">
        <h3 className="text-lg font-semibold">Vehicle Details</h3>
        <p><strong>Name:</strong> {vehicle.vehicleName}</p>
        <p><strong>Model:</strong> {vehicle.vehicleModel}</p>
        <p><strong>Number:</strong> {vehicle.vehicleNumber}</p>
        <p><strong>Price Per Day:</strong> ₹{vehicle.vehiclePrice}</p>
        <p><strong>Booking Price:</strong> ₹{vehicle.bookingPrice}</p>
      </div>

      {/* Booking Details */}
      <div className="border-b pb-4 mb-4">
        <h3 className="text-lg font-semibold">Booking Details</h3>
        <p><strong>Start Date:</strong> {formatDate(startDate)}</p>
        <p><strong>End Date:</strong> {formatDate(endDate)}</p>
        <p><strong>Status:</strong> {status}</p>
      </div>

      {/* Payment Details */}
      <div className="pb-4 mb-4">
        <h3 className="text-lg font-semibold">Payment Details</h3>
        <div className="flex justify-between">
          <span>Shop Amount:</span>
          <span>₹{shopAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Platform Fee:</span>
          <span>₹{platformAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Miscellaneous Charges:</span>
          <span>₹{miscAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount:</span>
          <span>-₹{discountAmount}</span>
        </div>
        <div className="border-t border-gray-300 my-2"></div>
        <div className="flex justify-between font-semibold">
          <span>Total Amount:</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      {/* Coupon Details */}
      {coupon && (
        <div className="pb-4">
          <h3 className="text-lg font-semibold">Coupon</h3>
          <p><strong>Code:</strong> {coupon.code}</p>
          <p><strong>Discount Type:</strong> {coupon.discountType}</p>
          <p><strong>Discount Value:</strong> {coupon.discountValue}%</p>
          <p><strong>Expires on:</strong> {formatDate(coupon.expirationDate)}</p>
        </div>
      )}

      {/* Signature */}
      <div className="mt-6 text-center">
        <p className="italic">Thank you for choosing Rideroz!</p>
        <p className="mt-2">Signature: ___________________________</p>
      </div>
    </div>
  );
};

export default Invoice;
