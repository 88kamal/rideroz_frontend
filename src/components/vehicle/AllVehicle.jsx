import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
import { Button, Spinner } from "@material-tailwind/react";
import { useContext } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";
import DatePickerModule from "./DatePickerModule";

const AllVehicle = () => {
    const navigate = useNavigate();
    const { lat, lng, vehicleType, vehicleCity, selectedCity, currentLocationName } = useContext(myContext);
    const { data: vehicles, error, isLoading } = useGetVehiclesNearbyQuery({
        lat,
        lng,
        vehicleCity,
        vehicleType,
    });
    return (
        <section className="py-5">
            {/* <pre>{JSON.stringify({
                    lat,
                    lng,
                    vehicleType,
                    vehicleCity, selectedCity, currentLocationName
                },null,2)}</pre> */}

            {/* <pre>{JSON.stringify(vehicles,null,2)}</pre> */}

            <div className="container mx-auto px-">
                <div className="flex flex-wrap -m-4 justify-center">
                    {isLoading ? (
                        <div className="flex justify-center p-4">
                            <Spinner className="h-8 w-8 text-green-500" />
                        </div>
                    ) : error ? (
                        <div className="p-4">
                            <div className="flex justify-center items-center">
                                <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="Error" />
                            </div>
                            <h1 className="text-center text-red-500 mt-2">{error?.data?.error}</h1>
                        </div>
                    ) : (
                        vehicles?.vehicles?.map((item, index) => {
                            const { _id, vehicleName, vehiclePrice, vehicleImage } = item;

                            return (
                                <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <div className="bg-white rounded-lg border border-gray-300 drop-shadow ">
                                        <div className="relative cursor-pointer" onClick={() => navigate(`/vehicle-info/${selectedCity}/${_id}`)}>
                                            <img
                                                className="w-full h-48 object-cover rounded-t-xl"
                                                src={vehicleImage[0]?.url}
                                                alt="Vehicle"
                                            />

                                        </div>
                                        <div className="p-4">
                                            <h2 className=" tracking-widest text-sm app-font text-gray-600 mb-1">
                                                Rideroz
                                            </h2>

                                            <h1 className="text-xl font-bold text-gray-900 mb-2">
                                                {vehicleName}
                                            </h1>

                                            <p className="text-gray-600 font-medium">
                                                ₹ <span className="font-bold text-black ">{vehiclePrice} /-</span>
                                                <span className=" app-font"> per day</span>
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
                                </div>
                            );
                        })
                    )}
                </div>
                <div className="flex justify-center mt-8">
                    <Button
                        variant=""
                        onClick={() => navigate(`/all-vehicles/${selectedCity}/${currentLocationName}`)}
                        className="bg-green-500 text-white px-8 py-3 rounded-full hover:shadow-none shadow-none hover:bg-green-600  "
                    >
                        Show More
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AllVehicle;
