import { useState } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import { X } from "lucide-react";
import LoginForm from "./LoginForm";
import SignupAndLoginButton from "./SignupAndLoginButton";
import UserSignupForm from "./UserSignupForm";

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
                                <X size={20} className=" text-green-300 hover:text-green-400" />
                            </div>
                            <div className="flex justify-center mb-5 pt-8">
                                <img
                                    className="w-[12em] h-[5em]"
                                    src="../logo/rideroz.png"
                                    alt="logo"
                                />
                            </div>

                            <div className={`${isSignupForUser ? 'py-4' : 'py-10'}`}>
                                {isSignup ? (
                                    <>
                                        {/* Signup options */}
                                        {!isSignupForUser ? (
                                            <>
                                                <SignupAndLoginButton
                                                    switchToSignupUser={switchToSignupUser}
                                                    switchToLogin={switchToLogin}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                {/* User signup form */}
                                                <UserSignupForm switchToLogin={switchToLogin} />
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {/* Login form */}
                                        <LoginForm switchToSignup={switchToSignup} />
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
