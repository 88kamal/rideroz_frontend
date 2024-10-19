import { useSelector } from "react-redux";
import { useGetVehiclesNearbyQuery } from "../../redux/slices/vehicleApiSlice";
import { Button, Card } from "@material-tailwind/react";
import { useContext } from "react";
import myContext from "../../context/myContext";

const AllVehicle = () => {
    const { lat, setLat,
        lng, setLng,
        vehicleType, setVehicleType,
        vehicleCity, setVehicleCity } = useContext(myContext);


    const { data: vehicles, error: vehiclesError, isLoading: isVehiclesLoading } = useGetVehiclesNearbyQuery({
        lat,
        lng,
        vehicleCity,
        vehicleType,
    }); // Skip fetching if lat or lng is not available

    
    return (
        <section className=" body-font">
                              <pre>{JSON.stringify({vehicleCity},null,2)}</pre>
                              <pre>{JSON.stringify({lat,lng},null,2)}</pre>
            <div className="container lg:px-5 py-10 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {vehicles?.vehicles?.map((item, index) => {
                        const { _id, location, vehicleType, vehicleNumber, vehicleName, vehicleModel, vehiclePrice, bookingPrice, sittingCapacity, vehicleImage, vehicleAvailability, shop, numOfReviews, reviews, createdAt } = item
                        return (
                            <div key={index} className="p-4 w-full md:w-1/4">
                                <Card className="h-full drop-shadow overflow-hidden">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-[280px] h-[200px] rounded-xl"
                                            src={vehicleImage[0]?.url}
                                            alt="blog"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium mb-1 app-font">
                                            Rideroz
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {vehicleName}
                                        </h1>

                                        <p className=" app-font ">₹ <span className=" font-bold text-black">{vehiclePrice}/-</span> per day</p>

                                        <Button variant="" className=" bg-[#82BE23] w-full mt-3 shadow-none hover:shadow-none">
                                            Book Now
                                        </Button>

                                    </div>
                                </Card>
                            </div>
                        )
                    })}


                </div>

            </div>
        </section>
    )
}

export default AllVehicle