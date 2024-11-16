/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import { BookOpenCheck } from "lucide-react";
import { useVerifyShopOwnerMutation } from "../../../../../redux/slices/shopApiSlice";
import toast from "react-hot-toast";

export default function VerifyAccountModal({ id, account_holder_name, ifsc, account_number }) {
    const [open, setOpen] = useState(false);
    const [verifyShopOwner, { isLoading, isSuccess, isError, error, data }] =
        useVerifyShopOwnerMutation();

    const handleOpen = () => setOpen(!open);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    const handleVerify = async () => {
        try {
            await verifyShopOwner(id).unwrap(); // Call the mutation with the shop ID
            handleOpen(); // Close the modal after successful verification
        } catch (err) {
            console.error("Failed to verify:", err);
            toast.error("Verification failed. Please try again.");
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || "Failed to verify account, please try again");
        }

        if (isSuccess) {
            toast.success(data?.message || "Account verified successfully");
        }
    }, [isError, error, isSuccess, data]);

    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <BookOpenCheck className="h-4 w-4" />
            </IconButton>

            <Dialog open={open} className="shadow-lg rounded-lg bg-white">
                <DialogHeader className="text-lg font-bold text-gray-800">
                    Account Verification
                </DialogHeader>
                <DialogBody className="flex flex-col gap-4">
                    <Typography variant="paragraph" className="text-gray-700 text-sm">
                        Please send ₹1 to the account details below for verification. Click "Copy" to copy the
                        details to your clipboard.
                    </Typography>
                    <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-md">
                        <div className="flex justify-between items-center">
                            <Typography variant="small" className="font-semibold text-gray-900">
                                Account Holder:
                            </Typography>
                            <div className="flex items-center gap-2">
                                <Typography variant="small" className="text-gray-700">
                                    {account_holder_name}
                                </Typography>
                                <Button
                                    size="sm"
                                    variant="outlined"
                                    color="blue"
                                    onClick={() => handleCopy(account_holder_name)}
                                   className="text-xs px-3 py-1 outline-none border text-black hover:shadow-none shadow-none border-black bg-transparent"
                                >
                                    Copy
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography variant="small" className="font-semibold text-gray-900">
                                IFSC Code:
                            </Typography>
                            <div className="flex items-center gap-2">
                                <Typography variant="small" className="text-gray-700">
                                    {ifsc}
                                </Typography>
                                <Button
                                    size="sm"
                                    variant="outlined"
                                    color="blue"
                                    onClick={() => handleCopy(ifsc)}
                                    className="text-xs px-3 py-1 outline-none border text-black hover:shadow-none shadow-none border-black bg-transparent"
                                >
                                    Copy
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography variant="small" className="font-semibold text-gray-900">
                                Account Number:
                            </Typography>
                            <div className="flex items-center gap-2">
                                <Typography variant="small" className="text-gray-700">
                                    {account_number}
                                </Typography>
                                <Button
                                    size="sm"
                                    variant=" "
                                    color="blue"
                                    onClick={() => handleCopy(account_number)}
                                    className="text-xs px-3 py-1 outline-none border text-black hover:shadow-none shadow-none border-black bg-transparent"
                                >
                                    Copy
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-2"
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleVerify}
                        disabled={isLoading}
                    >
                        {isLoading ? "Verifying..." : "Confirm"}
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
