import React from "react";
import {
    Dialog,
    Input,
} from "@material-tailwind/react";

export default function SignupModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    // https://img.freepik.com/premium-vector/computer-screen-with-picture-person-it_969863-217403.jpg?size=626&ext=jpg&ga=GA1.1.511006903.1728576851&semt=ais_hybrid

    // https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?ga=GA1.1.511006903.1728576851&semt=ais_hybrid
    return (
        <>
            <p onClick={handleOpen} >
                Log in
            </p>

            <Dialog open={open} handler={handleOpen} size="lg" className=" shadow-none hover:shadow-none rounded-none">

                <div className="">
                 
                </div>

            </Dialog>
        </>
    );
}