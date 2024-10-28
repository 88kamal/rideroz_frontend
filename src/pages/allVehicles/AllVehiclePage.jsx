import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
import { Button, CardBody, Spinner } from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import VehicleTypeDropdown from "./VehicleTypeDropdown";
import DatePickerModule from "../../components/vehicle/DatePickerModule";
import SelectCityOrLocationModal from "./modal/SelectCityOrLocationModal";
import FilterModal from "./modal/FilterModal";
import Pagination from "./pagination/Pagination";

const AllVehiclePage = () => {
    const navigate = useNavigate();
    const { lat, setLat, lng, setLng, vehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName } = useContext(myContext);

    const { data: vehicles, error, isLoading } = useGetVehiclesNearbyQuery({
        lat,
        lng,
        vehicleCity,
        vehicleType,
    });

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
            <section className=" px-4 py-4 lg:px-6 lg:py-6">
                {/* <pre>{JSON.stringify({
                    lat, setLat,
                    lng, setLng,
                    vehicleType, setVehicleType,
                    vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName
                },null,2)}</pre> */}

                <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
                    {/* Filter Section */}

                    <div className="">
                        <div className="flex items-center justify-between border px-3 py-1 bg-white drop-shadow rounded-md border-gray-300 lg:hidden md:hidden sm:hidden">
                            <h1 className="font-bold text-lg">Filter</h1>
                            
                           <FilterModal/>
                        </div>
                    </div>
                    <div className=" h-[60em] lg:w-1/4 bg-white rounded-lg border border-gray-300 drop-shadow hidden lg:block sm:block md:block">
                        <CardBody>
                            <div className="space-y-4 ">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                    </svg>

                                    <h1 className="font-bold">Filter</h1>
                                </div>
                                <SelectCityOrLocationModal />

                                {/* Custom Vehicle Type Dropdown */}
                                <div className="">
                                    <VehicleTypeDropdown />
                                </div>

                                <div className="border border-gray-300 px-2 py-2 rounded-md  w-full app-font ">
                                    <h1 className="text-black app-font">Current Location : <span className="text-blue-600">{currentLocationName || "N/A"}</span></h1>
                                </div>
                            </div>
                        </CardBody>
                    </div>

                    {/* Vehicles List Section */}
                    <div className="w-full lg:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                            {isLoading ? (
                                <div className="flex justify-center items-center col-span-full py-10">
                                    <Spinner className="h-10 w-10 text-green-500" />
                                </div>
                            ) : error ? (
                                <div className="flex flex-col justify-center items-center col-span-full py-10">
                                    <img className="w-16" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="error-icon" />
                                    <h1 className="text-red-500 text-lg mt-2">{error?.data?.error}</h1>
                                </div>
                            ) : (
                                vehicles?.vehicles?.map((item, index) => {
                                    const { _id, vehicleName, vehiclePrice, vehicleImage } = item;
                                    return (
                                        <div key={index} className="bg-white rounded-lg border border-gray-300 drop-shadow overflow-hidden">
                                            <div
                                                className="relative cursor-pointer flex justify-center"
                                                onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}
                                            >
                                                <img
                                                    className="w-[280px] h-[200px] rounded-xl"
                                                    src={vehicleImage[0]?.url}
                                                    alt={vehicleName}
                                                />
                                            </div>

                                            <div className="p-4">
                                                <h2 className="tracking-widest text-xs app-font text-gray-500 mb-1">Rideroz</h2>
                                                <h1 className="text-lg font-semibold text-gray-900 mb-3">{vehicleName}</h1>

                                                <p className="text-gray-600 font-medium">
                                                    ₹ <span className="font-bold text-black">{vehiclePrice}/-</span> per day
                                                </p>

                                                <div className="flex w-full gap-2 mt-4">
                                                    <DatePickerModule bookedDates={item?.bookedDates} />
                                                    <Button
                                                        onClick={() => navigate(`/checkout/${_id}`)}
                                                        className="bg-indigo-500 text-white w-full py-2 rounded shadow-none hover:bg-indigo-600 transition duration-300"
                                                    >
                                                        Book Now
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>

                                    );
                                })
                            )}
                        </div>

                        <div className="">
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default AllVehiclePage;
