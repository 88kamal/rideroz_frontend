import Layout from "../../components/layout/Layout";
import { BadgeIndianRupee } from 'lucide-react'
import { useGetVehicleByIdQuery } from "../../redux/slices/vehicleApiSlice";
import { useParams } from "react-router-dom";
import RatingStar from "../../components/review/RatingStar";
import { Button, Input } from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";

const CartPage = () => {
    const { id } = useParams();
    const { data: vehicle, error, isLoading } = useGetVehicleByIdQuery(id);
    const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

    useEffect(() => {
        const storedCity = localStorage.getItem('selectedCity');
        const storedVehicleCity = localStorage.getItem('vehicleCity');
        const storedLat = localStorage.getItem('lat');
        const storedLng = localStorage.getItem('lng');
        const storedLocationName = localStorage.getItem('currentLocationName');

        if (storedCity && storedVehicleCity && storedLat && storedLng) {
            setSelectedCity(storedCity);
            setVehicleCity(storedVehicleCity);
            setLat(Number(storedLat));
            setLng(Number(storedLng));
            setCurrentLocationName(storedLocationName);
        }
    }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName]);

    return (
        <Layout>
            <div className="container mx-auto max-w-7xl px-2 lg:px-0">
                <div className="mx-auto max-w-2xl  lg:max-w-7xl">

                    <form className="lg:mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-12">
                    
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-5 mb-5 lg:mt-0 lg:mb-0 rounded-md lg:col-span-4 bg-white  drop-shadow p-5 order-last"
                        >
                            <div className="mb-8 lg:mb-8 flex justify-center pt-8">
                                <img className="w-[12em] h-[5em]" src="../../logo/rideroz.png" alt="logo" />
                            </div>

                            {/* Pickup/Dropoff Date and Time */}
                            <div>
                                <div className="mt-4">
                                    <Input label="Pickup Date" type="date" />
                                </div>
                                <div className="mt-4">
                                    <Input label="Pickup Time" type="time" />
                                </div>
                                <div className="mt-4">
                                    <Input label="Dropoff Date" type="date" />
                                </div>
                                <div className="mt-4">
                                    <Input label="Dropoff Time" type="time" />
                                </div>

                                {/* Coupons and Total for Mobile */}
                                <div className=" bg-green-50 p-2 mt-4 animate-pulse border border-green-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-black app-font">Coupons</p>
                                        <p className="app-font text-green-700">5% OFF</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <img className="w-8 h-8"
                                                src="https://cdn-icons-png.flaticon.com/128/1041/1041885.png" alt="coupon" />
                                            <h1 className="text-green-500 app-font">Apply Coupon</h1>
                                        </div>
                                        <button className="bg-green-600 px-2 text-white text-sm py-[2px] app-font rounded-md">
                                            Apply Now
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <Input label="Apply Coupon Code" className="" color="green" />
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <h1 className="text-sm app-font text-green-900">Coupon Code :</h1>
                                        <h1 className="text-sm text-green-600 animate-pulse app-font">Rideroz234</h1>
                                    </div>
                                </div>

                                <div className="lg:hidden border mt-4 p-2 px-4 rounded-md border-green-400 text-black">
                                    <h1 className="app-font">
                                        <span className="font-bold"> Total Amount : </span>
                                        <span>₹ {vehicle?.vehiclePrice}</span>
                                    </h1>
                                </div>

                                {/* Confirm Button */}
                                <div className="mt-4">
                                    <Button variant="" size="small" className="hover:shadow-none shadow-none w-full bg-green-500">
                                        Confirm
                                    </Button>
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="cart-heading" 
                        className=" drop-shadow bg-white py-4 border px-4 lg:col-span-8 ">
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Checkout
                                </h1>
                                <div className=" app-font mt-2">
                                    <span>Home</span> / <span>Renting</span> / <span>Checkout</span>
                                </div>
                            </div>
                            <div className=" bg-white drop-shadow mb-4 px-4 py-4">
                                <div className="">
                                    <h1 className=" mb-2 app-font">
                                        <span className=" font-bold">City : </span>
                                        <span>{selectedCity}</span>
                                    </h1>

                                    <h1 className=" mb-2 app-font">
                                        <span className=" font-bold">Current Location : </span>
                                        <span>{currentLocationName || "N/A"}</span>
                                    </h1>
                                </div>
                            </div>
                            <div className=" bg-white drop-shadow mb-2">
                                <ul role="list" className="divide-y divide-gray-200">
                                    <div className="">
                                        <li className="flex py-6 sm:py-6 ">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={vehicle?.vehicleImage[0]?.url}
                                                    alt={vehicle?.vehicleName}
                                                    className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <a className="font-semibold text-black app-font">
                                                                    {vehicle?.vehicleName}
                                                                </a>
                                                            </h3>
                                                        </div>

                                                        <div className="mt-1 flex items-center space-x-2">

                                                            <p className="text-sm app-font font-medium text-gray-900">
                                                                ₹ {vehicle?.vehiclePrice}
                                                            </p>
                                                            <div className={` bg-green-600 px-2 app-font text-white  animate-pulse text-[10px]`}>
                                                                {vehicle?.vehicleAvailability && "Available"}
                                                            </div>

                                                        </div>

                                                        <div className="mt-2">
                                                            <RatingStar
                                                                rating={vehicle?.vehicleRatings}
                                                                totalRating={vehicle?.numOfReviews}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </div>
                                </ul>
                            </div>

                            <div className=" bg-white drop-shadow mb-4 px-4 py-4">
                                <div className="flex items-center gap-2">
                                <BadgeIndianRupee color="green" /> Excess Hourly Charges 100/hr
                                </div>
                            </div>

                            <div className=" bg-white drop-shadow mb-4 px-4 py-4">
                                <div className="">
                              <p className=" app-font text-justify mb-1 text-red-600">"Vehicle book करने के बाद अगर आप 1 घंटे के अंदर Shop पर नहीं पहुँचते हैं, तो आपकी ride अपने आप cancel हो जाएगी और आपके amount का 50% refund कर दिया जाएगा।"</p>
                              <p className=" app-font text-justify text-red-600">"If you don't arrive at the shop within 1 hour after booking the vehicle, your ride will be automatically canceled, and 50% of your amount will be refunded."</p>
                                </div>
                            </div>
                            {/* <pre>{JSON.stringify(vehicle, null, 2)}</pre> */}


                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default CartPage;