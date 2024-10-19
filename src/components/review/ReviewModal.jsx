import React, { useContext } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    Rating,
} from "@material-tailwind/react";
import myContext from "../../context/myContext";

export function ReviewModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode } = context;

    return (
        <>
            <Button
                onClick={() => handleOpen("lg")}
                className={`flex items-center fontPara justify-center rounded-md py-2.5  lg:px-5 lg:py-2 text-center text-[0.8em] lg:text-sm font-medium w-80 lg:w-full hover:shadow-none shadow-none  gap-3 bg-transparent border text-black border-green-100 `}
            >
                Write a Review
            </Button>
            <Dialog open={open} handler={handleOpen} style={{
                    backgroundColor: mode === 'dark' ? '#182031' : 'white'
                }}>
                <DialogBody>
                    <div className="">
                        <h1 className={`font-bold text-xl mb-2 `}>Write A Review</h1>
                    </div>

                    <div className="">
                        <div className="flex justify-center">
                            <img className=" w-64 lg:w-72" src="https://res.cloudinary.com/dolajkbv5/image/upload/v1729315222/wsbcp4bihosgeo9mtfnr.png" alt="" />
                        </div>
                    </div>



                    <div className="mb-2">
                        <h2 className={`fontPara mb-2 `}>Overall Rating <span className="text-red-600">*</span></h2>
                        <Rating value={4} />
                    </div>


                    <div className="mb-2">
                        <h2 className={`fontPara mb-2 `}>Your Name <span className="text-red-600">*</span></h2>
                        <input type="text"
                            placeholder="Name"
                            className={`py-2 outline-none border w-full
                             px-2 rounded
                             mb-2`}
                        />
                    </div>

                    <div className="mb-2">
                        <h2 className={`fontPara mb-2 `}>Description <span className="text-red-600">*</span></h2>
                        <textarea type="text"
                            placeholder="Description..."
                            className={`py-2 outline-none border w-full
                             px-2 rounded
                             mb-2`}
                        />
                    </div>

                    <div className="">
                        <Button
                            className="flex items-center justify-center rounded-md bg-slate-900 py-2.5  lg:px-5 lg:py-2 text-center text-[0.9em] lg:text-sm font-medium text-white primaryBgColor fontPara w-full hover:shadow-none shadow-none  "
                        >
                            Submit Review
                        </Button>
                    </div>
                </DialogBody>

            </Dialog>
        </>
    );
}