import { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
} from "@material-tailwind/react";
import { ShieldCheck } from "lucide-react";
import OtpInput from "otp-input-react";

export default function VerifyRideModal({ id }) {
    const [open, setOpen] = useState(false);
    const [otp, setOtp] = useState(""); // State to store OTP input

    const handleOpen = () => setOpen(!open);

    const handleVerify = () => {
        console.log("Verifying OTP:", otp);
        // Add OTP verification logic here
    };

    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <ShieldCheck className="h-5 w-5 text-green-600" />
            </IconButton>

            <Dialog open={open} handler={handleOpen} className="shadow-none hover:shadow-none rounded-md bg-white">
                <DialogHeader>Verify Otp</DialogHeader>
                <DialogBody>
                    <div className="flex justify-center">
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            OTPLength={4}
                            otpType="number"
                            disabled={false}
                            autoFocus
                            className="otp-input"
                            inputStyles={{
                                width: "50px",
                                height: "50px",
                                margin: "0 8px",
                                fontSize: "20px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                textAlign: "center",
                                backgroundColor: "#f9f9f9",
                                outline: "none",
                                transition: "border-color 0.2s ease-in-out",
                            }}
                            classNames={{
                                container: "flex justify-center",
                                input: "focus:border-green-500 focus:outline-none app-font",
                            }}
                        />
                    </div>
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
                        onClick={handleOpen} // Call handleVerify to verify OTP
                    >
                        <span>Verify</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
