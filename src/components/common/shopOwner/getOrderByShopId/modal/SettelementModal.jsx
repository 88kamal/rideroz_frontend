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
import { BanknotesIcon } from "@heroicons/react/24/outline";

export default function SettelementModal({ id }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);



    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <BanknotesIcon className="h-5 w-5 text-green-600" />
            </IconButton>

            <Dialog open={open} handler={handleOpen} className="shadow-none hover:shadow-none rounded-md bg-white">
                <DialogHeader>Verify Otp</DialogHeader>
                <DialogBody>

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
