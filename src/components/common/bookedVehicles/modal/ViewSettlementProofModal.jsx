/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
    Button,
    Chip,
    Dialog,
    DialogBody,
    IconButton,
} from "@material-tailwind/react";
import { CheckCheck, Eye, X } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// eslint-disable-next-line no-unused-vars
export default function ViewSettlementProofModal({ settled, settlementProofImage, settlementAmount, settlementDate, settlementPlatformUsed, settlementTransactionId }) {
    const [open, setOpen] = useState(false);
    const [dialogSize, setDialogSize] = useState("lg");

    const handleOpen = () => setOpen(!open);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDialogSize("xxl"); // Adjust size for mobile
            } else {
                setDialogSize("xl"); // Adjust size for desktop
            }
        };

        window.addEventListener("resize", handleResize);

        // Call resize function initially to set the right size
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return (
        <>
           <IconButton
    onClick={handleOpen}
    variant="text"
    className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
    disabled={!settled} // Disable the button when settled is false
>
    <CheckCheck className="h-4 w-4" />
</IconButton>


            <Dialog open={open} size={dialogSize} className="shadow-none hover:shadow-none rounded-none bg-green-100">
                <div className="px-4 py-4">
                    <h1 className="text-xl text-black font-bold">Settlement Proof Detail</h1>
                    <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
                        <X size={20} className="text-green-800 hover:text-green-900" />
                    </div>
                </div>
                <DialogBody>


                    <div className="flex flex-wrap justify-between items-center">
                        <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
                            <span className=" font-bold">Settlement Amount : </span> <span className=" app-font">₹ {settlementAmount}</span>
                        </div>

                        <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
                            <span className=" font-bold">Settlement Date : </span> <span className=" app-font">{settlementDate}</span>
                        </div>

                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                        <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
                            <span className=" font-bold">Settlement Platform Used : </span> <span className=" app-font capitalize">{settlementPlatformUsed}</span>
                        </div>

                        <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
                            <span className=" font-bold">Settlement Transaction Id : </span> <span className=" app-font capitalize">{settlementTransactionId}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center">


                        <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-full flex items-center gap-2">
                            <span className=" font-bold">Settlement Status : </span>
                            <Chip
                                size="sm"
                                variant="ghost"
                                value={settled === false ? "pending" : "fullfill"}
                                color={
                                    settled === false ? "red" :
                                        "green"
                                }

                                className="px-3 text-center w-28"
                            />
                        </div>



                    </div>

                    <div className="">
                        <h1 className=" text-black font-bold mb-1 ">Settlement Proof Image</h1>

                        <img src={settlementProofImage?.url} alt="img" className=" rounded-md lg:h-96" />
                    </div>




                </DialogBody>
            </Dialog>
        </>
    );
}
