/* eslint-disable react/prop-types */
import { useState } from "react";
import {
    Button,
    Chip,
    Dialog,
    DialogBody,
    IconButton,
} from "@material-tailwind/react";
import { Eye, X } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// eslint-disable-next-line no-unused-vars
export default function ViewMoreOrderByShopIdModal({ order }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    // Format the date to be readable
    const readableStartDate = new Date(order.startDate).toLocaleString();
    const readableEndDate = new Date(order.endDate).toLocaleString();
    const readableCreatedAt = new Date(order.createdAt).toLocaleString();

    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <Eye className="h-4 w-4" />
            </IconButton>

            <Dialog open={open} size="xxl" 
            className="shadow-none hover:shadow-none rounded-none bg-green-100 overflow-y-scroll max-h-screen lg:max-h-[80vh]">
                <div className="px-4 py-4">
                    <h1 className="text-xl text-black font-bold">Order Details</h1>
                    <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
                        <X size={20} className="text-green-800 hover:text-green-900" />
                    </div>
                </div>
                <DialogBody>
                    <div className="mb-8">
                        <div className="flex justify-center items-center mb-1">
                            <LazyLoadImage
                                alt="Vehicle Image"
                                src={order.vehicle.vehicleImage[0]?.url}
                                className="w-20 h-20 shadow-md border border-green-300 p-1"
                                effect="opacity"
                                wrapperProps={{ style: { transitionDelay: "1s" } }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Vehicle Name: </span> <span>{order.vehicle.vehicleName}</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Vehicle Number: </span> <span>{order.vehicle.vehicleNumber}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Coupon Code: </span> <span>{order.coupon.code}</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Shop Amount: </span> <span>₹ {order.shopAmount}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Start Date: </span> <span>{readableStartDate}</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">End Date: </span> <span>{readableEndDate}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Rent Duration: </span> <span>{order.rentDuration}</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Total Amount: </span> <span>₹ {order.totalAmount}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Order Status: </span> <span>{order.status}</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Created Date: </span> <span>{readableCreatedAt}</span>
                        </div>
                    </div>

                    <div className="">
                        <h1 className=" text-black font-bold">User Detail</h1>
                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Name: </span> <span>{order.user?.userName}</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Email: </span> <span>{order.user?.userEmail}</span>
                        </div>
                    </div>

                    <div className="">
                        <h1 className=" text-black font-bold">Payment Detail</h1>
                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Razorpay order id: </span> <span>{order.razorpay_order_id}</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full lg:w-1/2">
                            <span className="font-bold">Razorpay payment id: </span> <span>{order.razorpay_payment_id}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                        <div className="bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full ">
                           <div className="flex items-center gap-4">
                           <span className="font-bold">Settled : </span> 
                            <Chip
                                                            size="sm"
                                                            variant="ghost"
                                                            value={order?.settled === false ? "pending" : "confirm"}
                                                            color={
                                                                order?.settled === false ? "red" :
                                                                    "green"
                                                            }

                                                            className="px-3 text-center w-28"
                                                        />
                           </div>
                        </div>
                    
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}
