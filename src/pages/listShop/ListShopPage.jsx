import { Button } from "@material-tailwind/react";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ShopLogin() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-white">
            
            <div className="max-w-5xl w-full bg-white lg:shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left Side - Image */}
                <div className="hidden md:block">
                    <Link to={'/'}>
                        <div className=" absolute bg-green-200 bg-opacity-60 mx-2 my-2 p-1 rounded-full">
                            <MoveLeft color="white" />
                        </div>
                        </Link>
                    <img
                        src="https://i.pinimg.com/564x/76/b2/a5/76b2a5bf994dc2916e4a12186b2d2b15.jpg" // Replace with actual image link
                        alt="Motorcycle Shop"
                        className="h-[44em] w-full"
                    />
                </div>

              
                {/* Right Side - Form */}
                <div className="flex flex-col justify-center p-8">
                    
                    <div className="text-center mb-8">
                        <div className="flex justify-center">
                            <img
                                src="../../logo/rideroz.png" // Replace with your actual logo URL
                                alt="Rideroz Logo"
                                className=" h-20 mb-4 w-48"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            List your shop with Rideroz
                        </h2>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        <div>

                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    name="mobile"
                                    id="mobile"
                                    className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm  border py-2.5 px-3 border-gray-300 outline-none"
                                    placeholder="Enter Mobile Number"
                                />
                            </div>
                        </div>

                        <div>
                            <Button
                                variant=""
                                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700  shadow-none hover:shadow-none"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ShopLogin;
