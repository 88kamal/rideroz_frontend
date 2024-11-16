/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { useSettleOrderMutation } from "../../../../../redux/slices/settlementApiSlice";
import toast from "react-hot-toast";

export default function SettlementModal({ id, amount, refetch }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        settlementDate: '',
        settlementAmount: amount,
        settlementTransactionId: '',
        settlementPlatformUsed: '',
        settlementProofImage: null,
    });

    const [previewImage, setPreviewImage] = useState(null); // State for image preview
    const [dialogSize, setDialogSize] = useState("xl");

    const [settleOrder, { isLoading, isSuccess, isError, error, data }] = useSettleOrderMutation();

    const handleOpen = () => setOpen(!open);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({ ...prev, settlementProofImage: file }));

        // Generate a preview URL for the image
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        } else {
            setPreviewImage(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = new FormData();
        body.append('settlementDate', formData.settlementDate);
        body.append('settlementAmount', formData.settlementAmount);
        body.append('settlementTransactionId', formData.settlementTransactionId);
        body.append('settlementPlatformUsed', formData.settlementPlatformUsed);
        if (formData.settlementProofImage) {
            body.append('settlementProofImage', formData.settlementProofImage);
        }

        try {
            await settleOrder({ orderId: id, formData: body });
            setOpen(false); // Close modal on success
            refetch()
            setFormData({
                settlementDate: '',
                settlementAmount: amount,
                settlementTransactionId: '',
                settlementPlatformUsed: '',
                settlementProofImage: null,
            })
        } catch (err) {
            console.error('Error settling order:', err);
        }
    };

    const platforms = ["PhonePe", "Google Pay", "Paytm", "Amazon Pay", "BharatPe"];

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to add employee, please try again');
        }

        if (isSuccess) {
            toast.success(data?.message);
        }
    }, [isError, error, isSuccess, data]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDialogSize("xxl"); // Adjust size for mobile
            } else {
                setDialogSize("md"); // Adjust size for desktop
            }
        };

        window.addEventListener("resize", handleResize);

        // Call resize function initially to set the right size
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <BanknotesIcon className="h-5 w-5 text-green-600" />
            </IconButton>

            <Dialog open={open} size={dialogSize} handler={handleOpen} className="shadow-none rounded-md bg-white">
                <DialogHeader>Settle Order</DialogHeader>
                <DialogBody>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <Input
                            label="Settlement Date"
                            type="date"
                            name="settlementDate"
                            value={formData.settlementDate}
                            onChange={handleInputChange}
                            color="green"
                        />
                        <Input
                            label="Settlement Amount"
                            type="number"
                            name="settlementAmount"
                            value={formData.settlementAmount}
                            onChange={handleInputChange}
                            color="green"
                        />
                        <Input
                            label="Transaction ID"
                            type="text"
                            name="settlementTransactionId"
                            value={formData.settlementTransactionId}
                            onChange={handleInputChange}
                            color="green"
                        />
                        <Select
                            label="Select Platform"
                            name="settlementPlatformUsed"
                            value={formData.settlementPlatformUsed}
                            color="green"
                            onChange={(value) =>
                                handleInputChange({ target: { name: "settlementPlatformUsed", value } })
                            }
                            required
                            className="w-full"
                        >
                            {platforms.map((platform, index) => (
                                <Option key={index} value={platform.toLowerCase().replace(" ", "")}>
                                    {platform}
                                </Option>
                            ))}
                        </Select>

                        <input
                            type="file"
                            name="settlementProofImage"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer border p-1 border-green-300 rounded-md"
                        />

                        {/* Image Preview Section */}
                        {previewImage && (
                            <div className="">
                                {/* <p className="text-sm font-medium text-gray-600">Image Preview:</p> */}
                                <img
                                    src={previewImage}
                                    alt="Settlement Proof"
                                    className="w-full max-h-64 object-contain rounded-md border border-gray-300"
                                />
                            </div>
                        )}
                    </form>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Close</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        <span>{isLoading ? 'Submitting...' : 'Settle Order'}</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
