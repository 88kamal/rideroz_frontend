// // // import { useState, useEffect } from "react";
// // // import { Button, Dialog } from "@material-tailwind/react";
// // // import { X } from "lucide-react";
// // // import LoginForm from "./LoginForm";
// // // import SignupAndLoginButton from "./SignupAndLoginButton";
// // // import UserSignupForm from "./UserSignupForm";

// // // // eslint-disable-next-line react/prop-types
// // // export default function LoginModal({ autoOpen = false }) {
// // //     const [open, setOpen] = useState(autoOpen); // Set initial state based on autoOpen prop
// // //     const [isSignup, setIsSignup] = useState(false); // Track whether it's login or signup
// // //     const [isSignupForUser, setIsSignupForUser] = useState(false); // Track whether it's signup for user

// // //     useEffect(() => {
// // //         // If autoOpen changes, open the modal automatically
// // //         if (autoOpen) {
// // //             setOpen(true);
// // //         }
// // //     }, [autoOpen]);

// // //     const handleOpen = () => setOpen(!open);

// // //     const switchToSignup = () => {
// // //         setIsSignup(true);
// // //         setIsSignupForUser(false); // Reset to ensure fresh view when going to signup screen
// // //     };

// // //     const switchToLogin = () => {
// // //         setIsSignup(false);
// // //         setIsSignupForUser(false); // Reset to go back to login screen
// // //     };

// // //     const switchToSignupUser = () => setIsSignupForUser(true); // Toggle user signup form

// // //     return (
// // //         <>
// // //             {/* Existing clickable login trigger */}
// // //             {!autoOpen && ( // Hide buttons if modal auto-opens (e.g., for protected routes)
// // //                 <>
// // //                     <p onClick={handleOpen} className="text-black hidden lg:block">
// // //                         Log in
// // //                     </p>
// // //                     <Button
// // //                         onClick={handleOpen}
// // //                         variant=""
// // //                         className="bg-green-500 shadow-none hover:shadow-none lg:hidden">
// // //                         Login
// // //                     </Button>
// // //                 </>
// // //             )}

// // //             {/* The dialog itself */}
// // //             <Dialog open={open} handler={handleOpen} size="lg" className="shadow-none hover:shadow-none rounded-none">
// // //                 <div className="">
// // //                     <div className="flex items-center lg:space-x-3">
// // //                         <div className="left w-[40em] h-[33em] lg:flex justify-center items-center hidden lg:block">
// // //                             <div className="">
// // //                                 <img
// // //                                     src={
// // //                                         isSignup
// // //                                             ? "https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4847.jpg?ga=GA1.1.511006903.1728576851&semt=ais_hybrid"
// // //                                             : "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg"
// // //                                     }
// // //                                     alt={isSignup ? "signup" : "login"}
// // //                                 />
// // //                             </div>
// // //                         </div>

// // //                         <div className="right w-[42em] h-[33em] bg-green-50/50 p-5 lg:p-10">
// // //                             <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer" onClick={handleOpen}>
// // //                                 <X size={20} className="text-green-300 hover:text-green-400" />
// // //                             </div>
// // //                             <div className="flex justify-center mb-5 pt-8">
// // //                                 <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
// // //                             </div>

// // //                             <div className={`${isSignupForUser ? 'py-4' : 'py-10'}`}>
// // //                                 {isSignup ? (
// // //                                     <>
// // //                                         {!isSignupForUser ? (
// // //                                             <>
// // //                                                 <SignupAndLoginButton
// // //                                                     switchToSignupUser={switchToSignupUser}
// // //                                                     switchToLogin={switchToLogin}
// // //                                                 />
// // //                                             </>
// // //                                         ) : (
// // //                                             <>
// // //                                                 <UserSignupForm switchToLogin={switchToLogin} />
// // //                                             </>
// // //                                         )}
// // //                                     </>
// // //                                 ) : (
// // //                                     <>
// // //                                         <LoginForm switchToSignup={switchToSignup} switchToLogin={switchToLogin} />
// // //                                     </>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </Dialog>
// // //         </>
// // //     );
// // // }

// // import { useState, useEffect, useContext } from "react";
// // import { Button, Dialog } from "@material-tailwind/react";
// // import { X } from "lucide-react";
// // import LoginForm from "./LoginForm";
// // import SignupAndLoginButton from "./SignupAndLoginButton";
// // import UserSignupForm from "./UserSignupForm";
// // import myContext from "../../context/myContext";

// // // eslint-disable-next-line react/prop-types
// // export default function LoginModal({ autoOpen = false }) {
// //     const [open, setOpen] = useState(autoOpen); // Set initial state based on autoOpen prop
// //     const [isSignup, setIsSignup] = useState(false); // Track whether it's login or signup
// //     const [isSignupForUser, setIsSignupForUser] = useState(false); // Track whether it's signup for user
// //     const {setAutoOpenLogin } = useContext(myContext)
// //     useEffect(() => {
// //         // If autoOpen changes, open the modal automatically
// //         if (autoOpen) {
// //             setOpen(true);
// //         }
// //     }, [autoOpen]);

// //     const handleOpen = () => setOpen(!open);

// //     const handlAutoOpenLoginClose = setAutoOpenLogin(false)

// //     const switchToSignup = () => {
// //         setIsSignup(true);
// //         setIsSignupForUser(false); // Reset to ensure fresh view when going to signup screen
// //     };

// //     const switchToLogin = () => {
// //         setIsSignup(false);
// //         setIsSignupForUser(false); // Reset to go back to login screen
// //     };

// //     const switchToSignupUser = () => setIsSignupForUser(true); // Toggle user signup form

// //     return (
// //         <>
// //             {/* Existing clickable login trigger */}
// //             {!autoOpen && ( // Hide buttons if modal auto-opens (e.g., for protected routes)
// //                 <>
// //                     <p onClick={handleOpen} className="text-black hidden lg:block">
// //                         Log in
// //                     </p>
// //                     <Button
// //                         onClick={handleOpen}
// //                         variant=""
// //                         className="bg-green-500 shadow-none hover:shadow-none lg:hidden">
// //                         Login
// //                     </Button>
// //                 </>
// //             )}

// //             {/* The dialog itself */}
// //             <Dialog open={open} handler={handleOpen} size="lg" className="shadow-none hover:shadow-none rounded-none">
// //                 <div className="">
// //                     <div className="flex items-center lg:space-x-3">
// //                         <div className="left w-[40em] h-[33em] lg:flex justify-center items-center hidden lg:block">
// //                             <div className="">
// //                                 <img
// //                                     src={
// //                                         isSignup
// //                                             ? "https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4847.jpg?ga=GA1.1.511006903.1728576851&semt=ais_hybrid"
// //                                             : "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg"
// //                                     }
// //                                     alt={isSignup ? "signup" : "login"}
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="right w-[42em] h-[33em] bg-green-50/50 p-5 lg:p-10">
// //                             <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer" 
// //                             onClick={()=>{
// //                                 handleOpen()
// //                                 handlAutoOpenLoginClose()
// //                                 }}>
// //                                 <X size={20} className="text-green-300 hover:text-green-400" />
// //                             </div>
// //                             <div className="flex justify-center mb-5 pt-8">
// //                                 <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
// //                             </div>

// //                             <div className={`${isSignupForUser ? 'py-4' : 'py-10'}`}>
// //                                 {isSignup ? (
// //                                     <>
// //                                         {!isSignupForUser ? (
// //                                             <>
// //                                                 <SignupAndLoginButton
// //                                                     switchToSignupUser={switchToSignupUser}
// //                                                     switchToLogin={switchToLogin}
// //                                                 />
// //                                             </>
// //                                         ) : (
// //                                             <>
// //                                                 <UserSignupForm switchToLogin={switchToLogin} />
// //                                             </>
// //                                         )}
// //                                     </>
// //                                 ) : (
// //                                     <>
// //                                         <LoginForm switchToSignup={switchToSignup} switchToLogin={switchToLogin} />
// //                                     </>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </Dialog>
// //         </>
// //     );
// // }


// import { useState, useEffect, useContext } from "react";
// import { Button, Dialog } from "@material-tailwind/react";
// import { X } from "lucide-react";
// import LoginForm from "./LoginForm";
// import SignupAndLoginButton from "./SignupAndLoginButton";
// import UserSignupForm from "./UserSignupForm";
// import myContext from "../../context/myContext";

// // eslint-disable-next-line react/prop-types
// export default function LoginModal({ autoOpen = false, showLoginButton = true }) {
//     const [open, setOpen] = useState(autoOpen); // Set initial state based on autoOpen prop
//     const [isSignup, setIsSignup] = useState(false); // Track whether it's login or signup
//     const [isSignupForUser, setIsSignupForUser] = useState(false); // Track whether it's signup for user
//     const { setAutoOpenLogin } = useContext(myContext);

//     useEffect(() => {
//         // If autoOpen changes, open the modal automatically
//         if (autoOpen) {
//             setOpen(true);
//         }
//     }, [autoOpen]);

//     const handleOpen = () => setOpen(!open);

//     const handlAutoOpenLoginClose = () => setAutoOpenLogin(false);

//     const switchToSignup = () => {
//         setIsSignup(true);
//         setIsSignupForUser(false); // Reset to ensure fresh view when going to signup screen
//     };

//     const switchToLogin = () => {
//         setIsSignup(false);
//         setIsSignupForUser(false); // Reset to go back to login screen
//     };

//     const switchToSignupUser = () => setIsSignupForUser(true); // Toggle user signup form

//     return (
//         <>
//             {/* Existing clickable login trigger */}
//             {showLoginButton && !autoOpen && ( // Show login button only if showLoginButton is true and modal is not auto-opened
//                 <>
//                     <p onClick={handleOpen} className="text-black hidden lg:block">
//                         Log in
//                     </p>
//                     <Button
//                         onClick={handleOpen}
//                         variant=""
//                         className="bg-green-500 shadow-none hover:shadow-none lg:hidden">
//                         Login
//                     </Button>
//                 </>
//             )}

//             {/* The dialog itself */}
//             <Dialog open={open} handler={handleOpen} size="lg" className="shadow-none hover:shadow-none rounded-none">
//                 <div className="">
//                     <div className="flex items-center lg:space-x-3">
//                         <div className="left w-[40em] h-[33em] lg:flex justify-center items-center hidden lg:block">
//                             <div className="">
//                                 <img
//                                     src={
//                                         isSignup
//                                             ? "https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4847.jpg?ga=GA1.1.511006903.1728576851&semt=ais_hybrid"
//                                             : "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg"
//                                     }
//                                     alt={isSignup ? "signup" : "login"}
//                                 />
//                             </div>
//                         </div>

//                         <div className="right w-[42em] h-[33em] bg-green-50/50 p-5 lg:p-10">
//                             <div
//                                 className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer"
//                                 onClick={() => {
//                                     handleOpen();
//                                     handlAutoOpenLoginClose();
//                                 }}>
//                                 <X size={20} className="text-green-300 hover:text-green-400" />
//                             </div>
//                             <div className="flex justify-center mb-5 pt-8">
//                                 <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
//                             </div>

//                             <div className={`${isSignupForUser ? 'py-4' : 'py-10'}`}>
//                                 {isSignup ? (
//                                     <>
//                                         {!isSignupForUser ? (
//                                             <>
//                                                 <SignupAndLoginButton
//                                                     switchToSignupUser={switchToSignupUser}
//                                                     switchToLogin={switchToLogin}
//                                                 />
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <UserSignupForm switchToLogin={switchToLogin} />
//                                             </>
//                                         )}
//                                     </>
//                                 ) : (
//                                     <>
//                                         <LoginForm switchToSignup={switchToSignup} switchToLogin={switchToLogin} />
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


import { useState, useEffect, useContext } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import { X } from "lucide-react";
import LoginForm from "./LoginForm";
import SignupAndLoginButton from "./SignupAndLoginButton";
import UserSignupForm from "./UserSignupForm";
import myContext from "../../context/myContext";

// eslint-disable-next-line react/prop-types
export default function LoginModal({ autoOpen = false, showLoginButton = true }) {
    const [open, setOpen] = useState(autoOpen); // Set initial state based on autoOpen prop
    const [isSignup, setIsSignup] = useState(false); // Track whether it's login or signup
    const [isSignupForUser, setIsSignupForUser] = useState(false); // Track whether it's signup for user
    const { setAutoOpenLogin } = useContext(myContext);
    const [dialogSize, setDialogSize] = useState("lg");

    useEffect(() => {
        // If autoOpen changes, open the modal automatically
        if (autoOpen) {
            setOpen(true);
        }

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDialogSize("xxl"); // Adjust size for mobile
            } else {
                setDialogSize("lg"); // Adjust size for desktop
            }
        };

        window.addEventListener("resize", handleResize);

        // Call resize function initially to set the right size
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [autoOpen]);

    const handleOpen = () => setOpen(!open);
    const handlAutoOpenLoginClose = () => setAutoOpenLogin(false);

    const switchToSignup = () => {
        setIsSignup(true);
        setIsSignupForUser(false);
    };

    const switchToLogin = () => {
        setIsSignup(false);
        setIsSignupForUser(false);
    };

    const switchToSignupUser = () => setIsSignupForUser(true);

    return (
        <>
            {/* Existing clickable login trigger */}
            {showLoginButton && !autoOpen && (
                <>
                    <p onClick={handleOpen} className="text-black hidden lg:block">
                        Log in
                    </p>
                    <Button
                        onClick={handleOpen}
                        variant=""
                        className="bg-green-500 shadow-none hover:shadow-none lg:hidden">
                        Login
                    </Button>
                </>
            )}

            {/* The dialog itself */}
            <Dialog open={open} handler={handleOpen} size={dialogSize} className="shadow-none hover:shadow-none rounded-none">
                <div className="">
                    <div className="flex items-center lg:space-x-3">
                        <div className="left w-[40em] h-[33em] lg:flex justify-center items-center hidden lg:block">
                            <div className="">
                                <img
                                    src={
                                        isSignup
                                            ? "https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4847.jpg?ga=GA1.1.511006903.1728576851&semt=ais_hybrid"
                                            : "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg"
                                    }
                                    alt={isSignup ? "signup" : "login"}
                                />
                            </div>
                        </div>

                        <div className="right w-[42em] h-screen lg:h-[33em] bg-green-50/50 p-5 lg:p-10">
                            <div
                                className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer"
                                onClick={() => {
                                    handleOpen();
                                    handlAutoOpenLoginClose();
                                }}>
                                <X size={20} className="text-green-300 hover:text-green-400" />
                            </div>
                            <div className="flex justify-center mb-5 pt-32 lg:pt-8">
                                <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
                            </div>

                            <div className={`${isSignupForUser ? 'py-4' : 'py-10'}`}>
                                {isSignup ? (
                                    <>
                                        {!isSignupForUser ? (
                                            <>
                                                <SignupAndLoginButton
                                                    switchToSignupUser={switchToSignupUser}
                                                    switchToLogin={switchToLogin}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <UserSignupForm switchToLogin={switchToLogin} />
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <LoginForm switchToSignup={switchToSignup} switchToLogin={switchToLogin} />
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
