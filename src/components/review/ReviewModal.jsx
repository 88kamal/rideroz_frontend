/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    Rating,
    Textarea,
} from "@material-tailwind/react";
import { useAddReviewMutation } from "../../redux/slices/vehicleApiSlice";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import myContext from "../../context/myContext";
import authService from "../../services/authService";
import LoginModal from "../registration/LoginModal";

export function ReviewModal({ image, vehicleId, refetch }) {
    const [open, setOpen] = useState(false);

    const user = authService.getCurrentUser()

    const { autoOpenLogin, setAutoOpenLogin } = useContext(myContext);

    const handleOpen = () => {
        if (user) {
            setOpen(!open)
        }
        else {
            setAutoOpenLogin(true)
        }
    };


    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [addReview, { isError, error, data, isSuccess }] = useAddReviewMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addReview({ vehicleId, rating, comment }).unwrap();
            refetch();
        } catch (error) {
            console.error('Failed to add review:', error);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to add review, please try again');
            handleOpen();
        }

        if (isSuccess) {
            toast.success(data?.message);
            handleOpen();
            refetch();
            setRating("")
            setComment("")
        }
    }, [isError, error, isSuccess, data]);


    return (
        <>
            <Button
                onClick={() => handleOpen("lg")}
                className={`flex items-center fontPara justify-center rounded-md py-2.5 lg:px-5 lg:py-2 text-center text-[0.8em] lg:text-sm font-medium lg:w-full hover:shadow-none shadow-none gap-3 bg-transparent border text-black border-green-100 w-full`}
            >
                Write a Review
            </Button>

            <Dialog open={open} handler={handleOpen}>
                <DialogBody>
                    <div className="">
                        <h1 className="text-xl text-black font-bold">Employee Detail</h1>
                        <div className="absolute top-2 right-2 py-1.5 px-1.5 bg-gray-200 cursor-pointer rounded-full" onClick={handleOpen}>
                            <X size={20} className="text-gray-800 hover:text-green-900" />
                        </div>
                    </div>

                    <div className="">
                        <div className="flex justify-center">
                            <img className="w-64 lg:w-72" src={image} alt="" />
                        </div>
                    </div>

                    <div className="mb-2">
                        <h2 className=" app-font mb-2 text-black">
                            Overall Rating <span className="text-red-600">*</span>
                        </h2>
                        <Rating value={rating} onChange={setRating} color="green" />
                    </div>

                    <div className="mb-2">
                        <h2 className=" app-font mb-2 text-black">
                            Description <span className="text-red-600">*</span>
                        </h2>

                        <Textarea
                            label="Write review"
                            className="py-2 outline-none border w-full px-2 rounded mb-2 text-black"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            color="green"
                        />
                    </div>

                    <div className="">
                        <Button
                            variant=""
                            onClick={handleSubmit}
                            className="flex items-center justify-center rounded-md bg-slate-900 py-2.5 lg:px-5 lg:py-2 text-center text-[0.9em] lg:text-sm font-medium bg-green-500 text-white primaryBgColor fontPara w-full hover:shadow-none shadow-none"
                        >
                            Submit Review
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>

            {!user && <LoginModal showLoginButton={false} autoOpen={autoOpenLogin} />}
        </>
    );
}
