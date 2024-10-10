// // import React from "react";
// // import {
// //     Button,
// //     Dialog,
// //     Input,
// // } from "@material-tailwind/react";

// // export default function LoginModal() {
// //     const [open, setOpen] = React.useState(false);

// //     const handleOpen = () => setOpen(!open);
// //     return (
// //         <>
// //             <p onClick={handleOpen} >
// //                 Log in
// //             </p>

// //             <Dialog open={open} handler={handleOpen} size="lg" className=" shadow-none hover:shadow-none rounded-none">

// //                 <div className="">
// //                     <div className="flex items-center lg:space-x-3">
// //                         <div className="left  w-[40em] h-[33em] lg:flex justify-center items-center hidden lg:block">
// //                             <div className="">
// //                                 <img
// //                                     className=""
// //                                     src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?ga=GA1.1.511006903.1728576851&semt=ais_hybrid"
// //                                     alt="login"
// //                                 />

// //                                 {/* <p className=" text-center text-black app-font text-xl">Login</p> */}
// //                             </div>
// //                         </div>

// //                         <div className="right w-[42em] h-[33em] bg-green-50/50 lg:p-10">

// //                             <div className="flex justify-center mb-5 pt-8">
// //                                 <img
// //                                     className=" w-[12em] h-[5em] "
// //                                     src="../logo/rideroz.png"
// //                                     alt="logo"
// //                                 />
// //                             </div>
// //                             <div className="py-10">
// //                                 <div className="mb-6">
// //                                     <Input
// //                                         color="green"
// //                                         label="Email"
// //                                         className=""

// //                                     />
// //                                 </div>

// //                                 <div className="mb-6">
// //                                     <Input
// //                                         color="green"
// //                                         label="Password"
// //                                         className=""
// //                                     />
// //                                 </div>

// //                                 <Button variant="" className=" w-full hover:shadow-none shadow-none bg-green-400">Login</Button>

// //                                 <div className="pt-2 flex justify-between items-center">
// //                                     <h1 className=" text-sm text-black">New to <span className=" font-bold text-green-400">Rideroz</span> ? Signup</h1>
// //                                     <h1 className=" text-sm text-black">Forgot Password?</h1>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //             </Dialog>
// //         </>
// //     );
// // }

// import React, { useState } from "react";
// import { Button, Dialog, Input } from "@material-tailwind/react";

// export default function LoginModal() {
//     const [open, setOpen] = useState(false);
//     const [isSignup, setIsSignup] = useState(false); // Track whether it's login or signup
//     const [isSignupForUser, setIsSignupForUser] = useState(false);

//     const handleOpen = () => setOpen(!open);

//     const switchToSignup = () => setIsSignup(true);
//     const switchToLogin = () => setIsSignup(false);

//     const switchToSignupUser = () => setIsSignup(true);

//     return (
//         <>
//             <p onClick={handleOpen}>
//                 Log in
//             </p>

//             <Dialog open={open} handler={handleOpen} size="lg" className="shadow-none hover:shadow-none rounded-none">
//                 <div className="">
//                     <div className="flex items-center lg:space-x-3">
//                         <div className="left w-[40em] h-[33em] lg:flex justify-center items-center hidden lg:block">
//                             <div className="">
//                                 <img
//                                     src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?ga=GA1.1.511006903.1728576851&semt=ais_hybrid"
//                                     alt="login"
//                                 />
//                             </div>
//                         </div>

//                         <div className="right w-[42em] h-[33em] bg-green-50/50 p-5 lg:p-10">
//                             <div className="flex justify-center mb-5 pt-8">
//                                 <img
//                                     className="w-[12em] h-[5em]"
//                                     src="../logo/rideroz.png"
//                                     alt="logo"
//                                 />
//                             </div>

//                             <div className="py-10">
//                                 {isSignup ? (
//                                     <>
//                                         <div className="">
//                                             <Button 
//                                             variant=""
//                                             onClick={switchToSignupUser}
//                                                 className=" hover:shadow-none shadow-none w-full bg-transparent rounded-sm border capitalize font-medium p-2 border-green-400 mb-5 text-green-600 app-font text-sm">
//                                                 Signup For User
//                                             </Button>

//                                             <Button variant=""
//                                                 className=" hover:shadow-none shadow-none w-full bg-transparent rounded-sm border capitalize font-medium p-2 border-green-400 mb-5 text-green-600 app-font text-sm">
//                                                 Signup For Shop Owner
//                                             </Button>

//                                             <Button
//                                                 onClick={switchToLogin}
//                                                 variant=""
//                                                 className=" hover:shadow-none shadow-none w-full bg-transparent rounded-sm border capitalize font-medium p-2 border-green-400 mb-5 text-green-600 app-font text-sm">
//                                                 Login Now
//                                             </Button>
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <>
//                                         {/* Login form */}
//                                         <div className="mb-6">
//                                             <Input color="green" label="Email" />
//                                         </div>
//                                         <div className="mb-6">
//                                             <Input color="green" label="Password" />
//                                         </div>
//                                         <Button variant="" className="w-full bg-green-400 hover:shadow-none shadow-none">Login</Button>
//                                         <div className="pt-2 flex justify-between items-center">
//                                             <h1 className="text-sm text-black">
//                                                 New to <span className="font-bold text-green-400 cursor-pointer" onClick={switchToSignup}>
//                                                     Rideroz
//                                                 </span>? Signup
//                                             </h1>
//                                             <h1 className="text-sm text-black">Forgot Password?</h1>
//                                         </div>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Dialog>
//         </>
//     );
// }


import { useState } from "react";
import { Button, Dialog, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function LoginModal() {
    const [open, setOpen] = useState(false);
    const [isSignup, setIsSignup] = useState(false); // Track whether it's login or signup
    const [isSignupForUser, setIsSignupForUser] = useState(false); // Track whether it's signup for user

    const handleOpen = () => setOpen(!open);

    const switchToSignup = () => {
        setIsSignup(true);
        setIsSignupForUser(false); // Reset to ensure fresh view when going to signup screen
    };
    const switchToLogin = () => {
        setIsSignup(false);
        setIsSignupForUser(false); // Reset to go back to login screen
    };

    const switchToSignupUser = () => setIsSignupForUser(true); // Toggle user signup form

    return (
        <>

            <p onClick={handleOpen} className=" text-black hidden lg:block">
                Log in
            </p>

            <Button
                onClick={handleOpen}
                variant=""
                className=" bg-green-500 shadow-none hover:shadow-none lg:hidden">
                Login
            </Button>

            <Dialog open={open} handler={handleOpen} size="lg" className="shadow-none hover:shadow-none rounded-none">
                <div className="">
                    <div className="flex items-center lg:space-x-3">
                        <div className="left w-[40em] h-[33em] lg:flex justify-center items-center hidden lg:block">

                            <div className="">
                                {/* Conditionally render login or signup image */}
                                <img
                                    src={
                                        isSignup
                                            ? "https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4847.jpg?ga=GA1.1.511006903.1728576851&semt=ais_hybrid" // Signup image
                                            : "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg" // Login image
                                    }
                                    alt={isSignup ? "signup" : "login"}
                                />
                            </div>
                        </div>

                        <div className="right w-[42em] h-[33em] bg-green-50/50 p-5 lg:p-10">
                        <div className=" absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer" onClick={handleOpen}>
                            <X size={20} className=" text-green-300"/>
                        </div>
                            <div className="flex justify-center mb-5 pt-8">
                                <img
                                    className="w-[12em] h-[5em]"
                                    src="../logo/rideroz.png"
                                    alt="logo"
                                />
                            </div>

                            <div className="py-10">
                                {isSignup ? (
                                    <>
                                        {/* Signup options */}
                                        {!isSignupForUser ? (
                                            <>
                                                <div>
                                                    <Button
                                                        variant=""
                                                        onClick={switchToSignupUser}
                                                        className="hover:shadow-none shadow-none w-full bg-transparent rounded-sm border capitalize font-medium p-2 border-green-400 mb-5 text-green-600 app-font text-sm"
                                                    >
                                                        Signup For User
                                                    </Button>

                                                    <Link to={'/list-shop'} target="_blank">
                                                        <Button
                                                            variant=""
                                                            className="hover:shadow-none shadow-none w-full bg-transparent rounded-sm border capitalize font-medium p-2 border-green-400 mb-5 text-green-600 app-font text-sm"
                                                        >
                                                            Signup For Shop Owner
                                                        </Button>
                                                    </Link>

                                                    <Button
                                                        onClick={switchToLogin}
                                                        variant=""
                                                        className="hover:shadow-none shadow-none w-full bg-transparent rounded-sm border capitalize font-medium p-2 border-green-400 mb-5 text-green-600 app-font text-sm"
                                                    >
                                                        Login Now
                                                    </Button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {/* User signup form */}
                                                <div className="mb-6">
                                                    <Input color="green" label="Full Name" />
                                                </div>
                                                <div className="mb-6">
                                                    <Input color="green" label="Email" />
                                                </div>
                                                <div className="mb-6">
                                                    <Input color="green" label="Password" />
                                                </div>
                                                <Button variant="" className="w-full bg-green-400 hover:shadow-none shadow-none">
                                                    Signup
                                                </Button>
                                                <div className="pt-2 text-center">
                                                    <h1 className="text-sm text-black">
                                                        Already have an account?{" "}
                                                        <span className="font-bold text-green-400 cursor-pointer" onClick={switchToLogin}>
                                                            Log in
                                                        </span>
                                                    </h1>
                                                </div>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {/* Login form */}
                                        <div className="mb-6">
                                            <Input color="green" label="Email" />
                                        </div>
                                        <div className="mb-6">
                                            <Input color="green" label="Password" />
                                        </div>
                                        <Button variant="" className="w-full bg-green-400 hover:shadow-none shadow-none">
                                            Login
                                        </Button>
                                        <div className="pt-2 flex justify-between items-center">
                                            <h1 className="text-sm text-black">
                                                New to{" "}
                                                <span className="font-bold text-green-400 cursor-pointer" onClick={switchToSignup}>
                                                    Rideroz
                                                </span>
                                                ? Signup
                                            </h1>
                                            <h1 className="text-sm text-black">Forgot Password?</h1>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
