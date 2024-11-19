/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
import { useGetOrderByIdQuery } from '../../../../redux/slices/orderApiSlice';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button, Chip, Spinner } from '@material-tailwind/react';
import authService from '../../../../services/authService';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import ShowLocationModal from '../modal/ShowLocationModal';
import ShowLocationModalForInvoice from './ShowLocationModalForInvoice';

dayjs.extend(utc);
dayjs.extend(timezone);


const ViewUserBookingInvoice = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetOrderByIdQuery(id);

    const appUser = authService.getCurrentUser()

    if (isLoading) {
        return (
            <div className=' flex justify-center items-center'>
                <Spinner color="green" fontSize={90} />
            </div>
        );
    }

    if (error) {
        return <p>Error loading invoice details</p>;
    }


    // Ensure data is defined before destructuring
    if (!data || !data.order) {
        return <p>No order found.</p>;
    }


    const { user, vehicle, startDate, endDate, coupon, platformAmount, miscAmount, discountAmount, totalAmount, status, razorpay_order_id, razorpay_payment_id, rentDuration, extraHours, extraHourCharge } = data?.order || {};

    const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US');
    // const formatDateTime = (dateString, timeString) => {
    //     let date = dayjs(dateString);
    
    //     if (timeString) {
    //         const [hours, minutes] = timeString.split(':');
    //         date = date.hour(hours).minute(minutes);
    //     }
    
    //     return date.format('MMM D, YYYY h:mm A'); // Example: "Nov 17, 2024 3:45 PM"
    // };
    
    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            timeZone: 'UTC',
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    };
    
    const handleDownload = () => {
        const element = document.getElementById('invoice');
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 190;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            pdf.save('invoice.pdf');
        });
    };

    return (
        <div className="" >
            <div className="max-w-7xl mx-auto bg-white p- rounded-lg drop-shadow " id="invoice">
                {/* Header with Company Logo and Name */}
                <div className="">
                    <div className="flex items-center justify-between mb- p-6">

                        <div className="">
                            {/* <h1 className="text-3xl font-bold">Rideroz</h1> */}
                            <img src="../../../../logo/rideroz.png" alt="Company Logo" className="w-28 h-12" />
                            <p className="text-sm app-font">Your Trusted Vehicle Rental Service</p>
                        </div>

                        {/* <img src="../../../../logo/rideroz.png" alt="Company Logo" className="w-28 h-12" /> */}

                        <ShowLocationModalForInvoice vehicle={data?.order?.vehicle}/>
                    </div>

                    <div className="border-b">
                        <h2 className="text-2xl font-bold mb-4 text-center">Booking Invoice</h2>
                    </div>


                </div>


                {/* User Information Table */}

                {/* <pre>{JSON.stringify(data,null,2)}</pre> */}

                <div className=" p-6">
                    <div className="mb-6">
                        <table className="w-full border border-gray-300 app-font">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-2 text-left">Customer Details</th>
                                    <th className="p-2 text-left border border-gray-300">Vehicle Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <span >Name : </span> {user?.userName}
                                    </td>
                                    <td className="p-2 border border-gray-300">
                                        <span >Name : </span> {vehicle?.vehicleName}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <span >Email : </span> {user?.userEmail}
                                    </td>
                                    <td className="p-2 border border-gray-300">
                                        <span >Model : </span> {vehicle?.vehicleModel}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <span >Phone : </span> {user?.userPhoneNumber}
                                    </td>
                                    <td className="p-2 border border-gray-300">
                                        <span >Number : </span> {vehicle?.vehicleNumber}
                                    </td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-2 font-semibold"></td>
                                    <td className="p-2  border border-gray-300">
                                        <span >Price Per Day : </span> ₹ {vehicle?.vehiclePrice}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                    {/* Booking Details Table */}
                    <div className="mb-6 app-font">
                        <table className="w-full border border-gray-300 app-font">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-2 text-left">Booking Details</th>
                                    <th className="p-2 text-left border border-gray-300">Razorpay Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <span >Pickup Date : </span>
                                        {/* {formatDateTime(startDate, data?.order?.startTime || '')} */}
                                        {formatDateTime(startDate)}

                                    </td>
                                    <td className="p-2 border border-gray-300">
                                        <span >Order ID : </span>
                                        {razorpay_order_id}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <span >Drop Off Date : </span>
                                        {/* {formatDateTime(endDate, data?.order?.endTime || '')} */}
                                        {formatDateTime(endDate)}

                                    </td>
                                    <td className="p-2 border border-gray-300">
                                        <span >Payment ID : </span>
                                        {razorpay_payment_id}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <span >Rent Duration : </span>
                                        {rentDuration}
                                    </td>

                                </tr>

                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <span >Extra Hours : </span>
                                        {extraHours}
                                    </td>

                                </tr>

                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <span >Extra Hour Charge : </span>
                                        ₹ {extraHourCharge}
                                    </td>

                                </tr>

                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <p >Status :</p>
                                            <Chip
                                                size="sm"
                                                variant="ghost"
                                                value={status}
                                                color={
                                                    status === "failed" ? "red" :
                                                    status === "pending" ? "orange" : 
                                                    "green"
                                                  }
                                                  
                                                className="px-3 text-center w-28"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                    {/* Payment Details */}
                    <div className="mb-6 app-font">
                        <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
                        <table className="w-full border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-2 text-left">Description</th>
                                    <th className="p-2 text-right border border-gray-300">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 border border-gray-300">Vehicle Amount</td>
                                    <td className="p-2 text-right border border-gray-300">₹{vehicle?.vehiclePrice}</td>
                                </tr>

                                {[2, 3, 15].includes(appUser?.role) &&
                                    <>
                                        <tr>
                                            <td className="p-2 border border-gray-300">Platform Fee</td>
                                            <td className="p-2 text-right border border-gray-300">₹{platformAmount}</td>
                                        </tr>

                                        <tr>
                                            <td className="p-2 border border-gray-300">Miscellaneous Charges</td>
                                            <td className="p-2 text-right border border-gray-300">₹{miscAmount}</td>
                                        </tr>

                                        {/* {discountAmount && ( */}
                                            <tr>
                                                <td className="p-2 border border-gray-300">Discount</td>
                                                <td className="p-2 text-right border border-gray-300">-₹{discountAmount}</td>
                                            </tr>
                                        {/* )} */}

                                        <tr className="border-t">
                                            <td className="p-2 font-semibold">Total Amount</td>
                                            <td className="p-2 text-right font-semibold border border-gray-300">₹{totalAmount}</td>
                                        </tr>
                                    </>
                                }
                            </tbody>
                        </table>
                    </div>


                    {/* Coupon Details */}
                    {coupon && (
                        <div className="pb-4 app-font">
                            <h3 className="text-lg font-semibold">Coupon</h3>
                            <table className="min-w-full border-collapse border border-gray-300 mt-2">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 px-4 py-2 text-left">Detail</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2"><span>Code : </span></td>
                                        <td className="border border-gray-300 px-4 py-2">{coupon?.code}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2"><span>Discount Value : </span></td>
                                        <td className="border border-gray-300 px-4 py-2">{coupon?.discountValue}%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2"><span>Expires on : </span></td>
                                        <td className="border border-gray-300 px-4 py-2">{formatDate(coupon?.expirationDate)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* User Legal Docs */}

                    <div className="pb-4 app-font" hidden={[15].includes(appUser?.role)}
                    >
                        <h3 className="text-lg font-semibold">User Legal Docs (Aadhar Card)</h3>
                        <table className="min-w-full border-collapse border border-gray-300 mt-2">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Front</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Back</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <pre>{JSON.stringify(user?.adharcardImg,null,2)}</pre> */}
                                {user?.adharcardImg.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            {/* <pre>{JSON.stringify(item,null,2)}</pre> */}
                                            <td className="border border-gray-300 px-4 py-2">
                                                <img src={item?.url} alt="" className='w-80 rounded-md' />
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <img src={item?.url} alt="" className='w-80 rounded-md' />
                                            </td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>


                    {/* Signature */}
                    <div className="mt-6 text-center">
                        <p className="italic">Thank you for choosing Rideroz!</p>
                        <p className="mt-2">Signature: ___________________________</p>

                    </div>
                </div>
            </div>

            {/* Download Button */}
            {/* <div className="text-center mt-4">
                <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Download Invoice as PDF
                </button>
            </div> */}
        </div>

    );
};

export default ViewUserBookingInvoice;
