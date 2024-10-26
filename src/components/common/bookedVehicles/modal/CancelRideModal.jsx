/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { TicketX } from "lucide-react";

export default function CancelRideModal({ id, vehicleBasePrice, bookingTime }) {
  const [open, setOpen] = useState(false);
  const [verificationText, setVerificationText] = useState("");
  const [refundAmount, setRefundAmount] = useState(0); // Initialize refund amount
  const requiredText = "CANCEL";

  const handleOpen = () => {
    setOpen(!open);
    if (!open) {
      // Calculate refund when opening the modal
      setRefundAmount(vehicleBasePrice * 0.5); // Set refund to 50% of base price
    }
  };

  const handleDelete = async () => {
    try {
      // Implement your deletion logic here
      handleOpen();
      setVerificationText("");
    } catch (error) {
      console.error("Error deleting ride:", error);
    }
  };

  // Check if the cancellation is allowed (within 1 hour of booking)
  const isCancellationAllowed = () => {
    const bookingDate = new Date(bookingTime);
    const currentTime = new Date();
    const oneHourInMilliseconds = 60 * 60 * 1000;
    return currentTime - bookingDate < oneHourInMilliseconds;
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <TicketX className="h-5 w-5 text-red-500" />
      </IconButton>

      <Dialog open={open} className="shadow-none hover:shadow-none rounded-md bg-red-50">
        <DialogHeader>Cancel Ride</DialogHeader>
        <DialogBody>
          {isCancellationAllowed() ? (
            <>
              <p className="app-font text-black">
                Are you sure you want to cancel this ride? This action cannot be undone.
              </p>
              <p className="mt-2 mb-5 text-black">
                Please type <span className="font-bold text-red-500">{requiredText}</span> to confirm.
              </p>
              <Input
                type="text"
                label="Enter CANCEL to confirm"
                value={verificationText}
                onChange={(e) => setVerificationText(e.target.value)}
                color="green"
              />
              {refundAmount > 0 && (
                <p className="mt-4 text-red-700 app-font animate-pulse">
                  Refund processed: ₹ {refundAmount} (50% of base price: ₹ {vehicleBasePrice}).
                </p>
              )}
            </>
          ) : (
            <p className="text-black">
              You cannot cancel this ride. Cancellation is only allowed within 1 hour after booking.
            </p>
          )}
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
          {isCancellationAllowed() && (
            <Button
              variant="gradient"
              color="green"
              onClick={handleDelete}
              disabled={verificationText !== requiredText}
            >
              <span>Confirm</span>
            </Button>
          )}
        </DialogFooter>
      </Dialog>
    </>
  );
}
