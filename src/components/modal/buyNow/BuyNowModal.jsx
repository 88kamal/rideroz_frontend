// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import {
//     Button,
//     Dialog,
//     DialogHeader,
//     DialogBody,
//     DialogFooter,
//     Input,
// } from "@material-tailwind/react";
// import { X } from "lucide-react";

// export default function BuyNowModal({ id, vehicleImage, vehicleName, vehiclePrice, vehicleType }) {
//     const [open, setOpen] = useState(false);

//     const handleOpen = () => setOpen(!open);

//     return (
//         <>
//             <Button variant="" onClick={handleOpen} className=" bg-[#82BE23] w-full mt-3 shadow-none hover:shadow-none">
//                 Book Now
//             </Button>

//             <Dialog
//                 open={open}
//                 handler={handleOpen}
//                 size="lg"
//                 className="shadow-none hover:shadow-none rounded-md"
//                 animate={{ mount: {}, unmount: {} }} // Disables animations
//             >
//                 {/* <div>Are you sure?</div> */}
//                 <DialogBody>
//                     <>
//                         <div className="flex items-center lg:space-x-3">
//                             <div className="left w-[40em] h-[33em] lg:fle justify-center items-center hidden lg:block">
//                                 <div className="">
//                                     <div className=" flex justify-center">
//                                     <img src={vehicleImage[0]?.url} alt={vehicleName} />
//                                     </div>
//                                     <div className="">
//                                         <h1 className=" text-green-700 app-font font-semibold">{vehicleName}</h1>
//                                         <h1 className=" text-green-700 app-font">₹ {vehiclePrice}</h1>
//                                     </div>

//                                     <div className=" bg-green-50 p-2 mt-4  animate-pulse border border-green-100">
//                                         <div className="flex justify-between items-center mb-1">
//                                             <p className=" text-black app-font">Coupons</p>
//                                             <p className=" app-font text-green-700">5% OFF</p>
//                                         </div>
//                                         <div className="flex justify-between items-center">
//                                             <div className="flex items-center space-x-2">
//                                                 <img className="w-8 h-8"
//                                                     src="https://cdn-icons-png.flaticon.com/128/1041/1041885.png" alt="coupon" />

//                                                 <h1 className=" text-green-500 app-font">Apply Coupon</h1>
//                                             </div>

//                                             <button
//                                                 className="bg-green-600 px-2 text-white text-sm py-[2px] app-font rounded-md">
//                                                 Apply Now
//                                             </button>
//                                         </div>

//                                         <div className="mt-2">
//                                             <Input
//                                                 label="Apply Coupon Code"
//                                                 className=""
//                                                 color="green"
//                                             />
//                                         </div>
//                                         <div className="flex  items-center gap-2 mt-2">
//                                             <h1 className=" text-sm app-font text-green-900">Coupon Code :</h1>
//                                             <h1 className=" text-sm text-green-600 animate-pulse app-font">Rideroz234</h1>
//                                         </div>
//                                     </div>

//                                     <div className=" border mt-4 p-2 px-4 bg-indigo-500 rounded-md text-white">
//                                         <h1 className=" app-font ">
//                                             <span className="font-bold"> Total Amount : </span>
//                                             <span>₹ {vehiclePrice}</span></h1>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="right w-[42em] h-[33em] bg-green-50/50 p-5 lg:p-10">
//                                 <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer" 
//                                 onClick={handleOpen}>
//                                     <X size={20} className="text-green-300 hover:text-green-400" />
//                                 </div>

//                                 <div className="lg:mb-16 ">
//                                 <div className="flex justify-center pt-8">
//                                     <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
//                                 </div>

//                                 </div>
                               
                              


//                                 <div className="">
//                                     <div className="">
//                                         <Input label="Pickup Date" type="date" />
//                                     </div>
//                                     <div className="mt-4">
//                                         <Input label="Pickup Time" type="time" />
//                                     </div>

//                                     <div className="mt-4">
//                                         <Input label="Dropoff Date" type="date" />
//                                     </div>
//                                     <div className="mt-4">
//                                         <Input label="Dropoff Time" type="time" />
//                                     </div>

//                                     <div className=" lg:hidden bg-green-50 p-2 mt-4  animate-pulse border border-green-100">
//                                         <div className="flex justify-between items-center mb-1">
//                                             <p className=" text-black app-font">Coupons</p>
//                                             <p className=" app-font text-green-700">5% OFF</p>
//                                         </div>
//                                         <div className="flex justify-between items-center">
//                                             <div className="flex items-center space-x-2">
//                                                 <img className="w-8 h-8"
//                                                     src="https://cdn-icons-png.flaticon.com/128/1041/1041885.png" alt="coupon" />

//                                                 <h1 className=" text-green-500 app-font">Apply Coupon</h1>
//                                             </div>

//                                             <button
//                                                 className="bg-green-600 px-2 text-white text-sm py-[2px] app-font rounded-md">
//                                                 Apply Now
//                                             </button>
//                                         </div>

//                                         <div className="mt-2">
//                                             <Input
//                                                 label="Apply Coupon Code"
//                                                 className=""
//                                                 color="green"
//                                             />
//                                         </div>
//                                         <div className="flex  items-center gap-2 mt-2">
//                                             <h1 className=" text-sm app-font text-green-900">Coupon Code :</h1>
//                                             <h1 className=" text-sm text-green-600 animate-pulse app-font">Rideroz234</h1>
//                                         </div>
//                                     </div>

//                                     <div className=" lg:hidden border mt-4 p-2 px-4 rounded-md border-green-400 text-black">
//                                         <h1 className=" app-font ">
//                                             <span className="font-bold"> Total Amount : </span>
//                                             <span>₹ {vehiclePrice}</span></h1>
//                                     </div>


//                                     <div className="mt-4">
//                                         <Button variant="" size="small" className=" hover:shadow-none shadow-none w-full bg-green-500">Confirm</Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </>

//                 </DialogBody>
//                 {/* <DialogFooter>
//                     <Button
//                         variant="text"
//                         color="red"
//                         onClick={handleOpen}
//                         className="mr-1"
//                     >
//                         <span>Cancel</span>
//                     </Button>
//                     <Button
//                         variant="gradient"
//                         color="green"
//                     >
//                         <span>Confirm</span>
//                     </Button>
//                 </DialogFooter> */}
//             </Dialog>
//         </>
//     );
// }


/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import { X } from "lucide-react";

export default function BuyNowModal({ id, vehicleImage, vehicleName, vehiclePrice, vehicleType }) {
    const [open, setOpen] = useState(false);
    const [dialogSize, setDialogSize] = useState("lg"); // Set initial dialog size for desktop

    // Function to handle opening and closing the dialog
    const handleOpen = () => setOpen(!open);

    // Effect to detect screen size and update dialog size accordingly
    useEffect(() => {
        const updateDialogSize = () => {
            if (window.innerWidth < 1024) {
                setDialogSize("xxl"); // Set size to 'xxl' for mobile screens
            } else {
                setDialogSize("lg"); // Set size to 'lg' for desktop
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
            <Button variant="" onClick={handleOpen} className=" bg-[#82BE23] w-full mt-3 shadow-none hover:shadow-none">
                Book Now
            </Button>

            <Dialog
                open={open}
                handler={handleOpen}
                size={dialogSize} // Dynamically set dialog size
                className="shadow-none hover:shadow-none rounded-md"
                animate={{ mount: {}, unmount: {} }} // Disables animations
            >
                <DialogBody>
                    <div className="flex items-center lg:space-x-3">
                        {/* Left Section for Desktop */}
                        <div className="left w-[40em] h-[33em] lg:flex justify-center items-center hidden lg:block sm:block md:block">
                            <div className="">
                                <div className="flex justify-center">
                                    <img src={vehicleImage[0]?.url} alt={vehicleName} />
                                </div>
                                <div className="">
                                    <h1 className="text-green-700 app-font font-semibold">{vehicleName}</h1>
                                    <h1 className="text-green-700 app-font">₹ {vehiclePrice}</h1>
                                </div>

                                <div className="bg-green-50 p-2 mt-4 animate-pulse border border-green-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-black app-font">Coupons</p>
                                        <p className="app-font text-green-700">5% OFF</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <img className="w-8 h-8"
                                                src="https://cdn-icons-png.flaticon.com/128/1041/1041885.png" alt="coupon" />
                                            <h1 className="text-green-500 app-font">Apply Coupon</h1>
                                        </div>
                                        <button
                                            className="bg-green-600 px-2 text-white text-sm py-[2px] app-font rounded-md">
                                            Apply Now
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <Input label="Apply Coupon Code" className="" color="green" />
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <h1 className="text-sm app-font text-green-900">Coupon Code :</h1>
                                        <h1 className="text-sm text-green-600 animate-pulse app-font">Rideroz234</h1>
                                    </div>
                                </div>

                                <div className="border mt-4 p-2 px-4 bg-indigo-500 rounded-md text-white">
                                    <h1 className="app-font">
                                        <span className="font-bold"> Total Amount : </span>
                                        <span>₹ {vehiclePrice}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        {/* Right Section for Form */}
                        <div className="right w-[42em] h-[41.8em] lg:h-[33em] md:h-[33em] bg-green-50/50 p-5 lg:p-10">
                            <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer" onClick={handleOpen}>
                                <X size={20} className="text-green-300 hover:text-green-400" />
                            </div>

                            <div className="mb-8 lg:mb-16 flex justify-center pt-8">
                                <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
                            </div>

                            {/* Pickup/Dropoff Date and Time */}
                            <div>
                                <div className="mt-4">
                                    <Input label="Pickup Date" type="date" />
                                </div>
                                <div className="mt-4">
                                    <Input label="Pickup Time" type="time" />
                                </div>
                                <div className="mt-4">
                                    <Input label="Dropoff Date" type="date" />
                                </div>
                                <div className="mt-4">
                                    <Input label="Dropoff Time" type="time" />
                                </div>

                                {/* Coupons and Total for Mobile */}
                                <div className="lg:hidden bg-green-50 p-2 mt-4 animate-pulse border border-green-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-black app-font">Coupons</p>
                                        <p className="app-font text-green-700">5% OFF</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <img className="w-8 h-8"
                                                src="https://cdn-icons-png.flaticon.com/128/1041/1041885.png" alt="coupon" />
                                            <h1 className="text-green-500 app-font">Apply Coupon</h1>
                                        </div>
                                        <button className="bg-green-600 px-2 text-white text-sm py-[2px] app-font rounded-md">
                                            Apply Now
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <Input label="Apply Coupon Code" className="" color="green" />
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <h1 className="text-sm app-font text-green-900">Coupon Code :</h1>
                                        <h1 className="text-sm text-green-600 animate-pulse app-font">Rideroz234</h1>
                                    </div>
                                </div>

                                <div className="lg:hidden border mt-4 p-2 px-4 rounded-md border-green-400 text-black">
                                    <h1 className="app-font">
                                        <span className="font-bold"> Total Amount : </span>
                                        <span>₹ {vehiclePrice}</span>
                                    </h1>
                                </div>

                                {/* Confirm Button */}
                                <div className="mt-4">
                                    <Button variant="" size="small" className="hover:shadow-none shadow-none w-full bg-green-500">
                                        Confirm
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}
