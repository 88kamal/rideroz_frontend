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
//     const [dialogSize, setDialogSize] = useState("lg");
//     const [isForgotPassword, setIsForgotPassword] = useState(false); // New state for forgot password


//     useEffect(() => {
//         // If autoOpen changes, open the modal automatically
//         if (autoOpen) {
//             setOpen(true);
//         }

//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//                 setDialogSize("xxl"); // Adjust size for mobile
//             } else {
//                 setDialogSize("lg"); // Adjust size for desktop
//             }
//         };

//         window.addEventListener("resize", handleResize);

//         // Call resize function initially to set the right size
//         handleResize();

//         return () => window.removeEventListener("resize", handleResize);
//     }, [autoOpen]);

//     const handleOpen = () => setOpen(!open);
//     const handlAutoOpenLoginClose = () => setAutoOpenLogin(false);

//     const switchToSignup = () => {
//         setIsSignup(true);
//         setIsSignupForUser(false);
//         setIsForgotPassword(false);

//     };

//     const switchToLogin = () => {
//         setIsSignup(false);
//         setIsSignupForUser(false);
//         setIsForgotPassword(false);

//     };

//     // const switchToSignupUser = () => setIsSignupForUser(true);
//     const switchToSignupUser = () => {
//         setIsSignupForUser(true);
//         setIsForgotPassword(false);
//     };

//     const switchToForgotPassword = () => {
//         setIsForgotPassword(true);
//         setIsSignup(false);
//         setIsSignupForUser(false);
//     };

//     return (
//         <>
//             {/* Existing clickable login trigger */}
//             {showLoginButton && !autoOpen && (
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
//             <Dialog open={open} handler={handleOpen} size={dialogSize} className="shadow-none hover:shadow-none rounded-none">
//                 <div className="">
//                     {/* <pre>{JSON.stringify(deviceToken,null,2)}</pre>
//                    {!deviceToken &&  <NotificationHandler/> } */}
                    
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

//                         <div className="right w-[42em] h-screen lg:h-[33em] bg-green-50/50 p-5 lg:p-10">
//                             <div
//                                 className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer"
//                                 onClick={() => {
//                                     handleOpen();
//                                     handlAutoOpenLoginClose();
//                                 }}>
//                                 <X size={20} className="text-green-300 hover:text-green-400" />
//                             </div>
//                             <div className="flex justify-center mb-5 pt-32 lg:pt-8">
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
//                                         <LoginForm handleOpen={handleOpen} switchToSignup={switchToSignup} switchToLogin={switchToLogin} />
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
import ForgotPassword from "./ForgotPassword";

export default function LoginModal({ autoOpen = false, showLoginButton = true }) {
    const [open, setOpen] = useState(autoOpen);
    const [isSignup, setIsSignup] = useState(false);
    const [isSignupForUser, setIsSignupForUser] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false); // New state for forgot password
    const { setAutoOpenLogin } = useContext(myContext);
    const [dialogSize, setDialogSize] = useState("lg");

    useEffect(() => {
        if (autoOpen) {
            setOpen(true);
        }

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDialogSize("xxl");
            } else {
                setDialogSize("lg");
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [autoOpen]);

    const handleOpen = () => setOpen(!open);
    const handleAutoOpenLoginClose = () => setAutoOpenLogin(false);

    const switchToSignup = () => {
        setIsSignup(true);
        setIsSignupForUser(false);
        setIsForgotPassword(false);
    };

    const switchToLogin = () => {
        setIsSignup(false);
        setIsSignupForUser(false);
        setIsForgotPassword(false);
    };

    const switchToSignupUser = () => {
        setIsSignupForUser(true);
        setIsForgotPassword(false);
    };

    const switchToForgotPassword = () => {
        setIsForgotPassword(true);
        setIsSignup(false);
        setIsSignupForUser(false);
    };

    return (
        <>
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

            <Dialog open={open} handler={handleOpen} size={dialogSize} className="shadow-none hover:shadow-none rounded-none">
                <div className="flex items-center lg:space-x-3">
                    <div className="left w-[40em] h-[33em] lg:flex justify-center items-center hidden lg:block">
                        <div>
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
                                handleAutoOpenLoginClose();
                            }}>
                            <X size={20} className="text-green-300 hover:text-green-400" />
                        </div>
                        <div className="flex justify-center mb-5 pt-32 lg:pt-8">
                            <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
                        </div>

                        <div className={`${isSignupForUser ? "py-4" : "py-10"}`}>
                            {isForgotPassword ? (
                                <>
                                    <ForgotPassword 
                                    switchToLogin={switchToLogin} 
                                    />
                                </>
                            ) : isSignup ? (
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
                                    <LoginForm
                                        handleOpen={handleOpen}
                                        switchToLogin={switchToLogin}
                                        switchToSignup={switchToSignup}
                                        switchToForgotPassword={switchToForgotPassword}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
