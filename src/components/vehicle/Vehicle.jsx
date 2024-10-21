import React, { useContext } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import AllVehicle from "./AllVehicle";
import myContext from "../../context/myContext";

export default function Vehicle() {
    const [activeTab, setActiveTab] = React.useState("");

    const { vehicleType, setVehicleType} = useContext(myContext);

    const vihicleData = [
        {
            label: "All",
            value: "",
        },
        {
            label: "Scooty",
            value: "scooty",
        },
        {
            label: "Bike",
            value: "bike",
        },
        {
            label: "Car",
            value: "car",
        },
    ];
    return (
        <div className=" px-4 mt-5">

            <div className="mb-8">
                <h1 className=" text-center app-font text-2xl font-bold">Our Vehicle</h1>
            </div>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none border-b  border-blue-gray-50 bg-transparent p-0 container mx-auto max-w-2xl z-0 "
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-4 border-[#82BE23] shadow-none rounded-none",
                    }}
                >
                    {vihicleData.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => {
                                setActiveTab(value)
                                setVehicleType(value)
                            }}
                            className={activeTab === value ? "text-gray-900" : ""}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>

                {/* <pre>{JSON.stringify(vehicles, null, 2)}</pre> */}

                <TabsBody className="container mx-auto">
                    {vihicleData?.map(({ value, data, index }) => (
                        <div className="" key={value}>
                            <TabPanel key={value} value={value}>
                                <AllVehicle vehicleType={vehicleType}/>
                            </TabPanel>


                        </div>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
}

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useGetVehiclesNearbyQuery } from '../../redux/slices/vehicleApiSlice';

// const Vehicle = () => {
//     const { lat, lng } = useSelector((state) => state.location);


//     const { data: vehicles, error: vehiclesError, isLoading: isVehiclesLoading } = useGetVehiclesNearbyQuery({
//         lat,
//         lng,
//     }, { skip: !lat || !lng }); // Skip fetching if lat or lng is not available

//     return (
//         <div>
//             <pre>{JSON.stringify({lat, lng} ,null,2)}</pre>
//             <pre>{JSON.stringify(vehicles)}</pre>
//             {isVehiclesLoading ? <p>Loading vehicles...</p> : vehicles?.vehicles?.length > 0 ? (
//                 <div className="flex flex-wrap gap-4">
//                     {vehicles?.vehicles?.map(vehicle => (
//                         <div key={vehicle.id} className="p-2 border border-gray-300 rounded-md">
//                             <img className="w-20 h-10" src={vehicle?.vehicleImage[0]?.url} alt="" />
//                             <p>{vehicle.vehicleName}</p>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p>No vehicles found nearby.</p>
//             )}
//         </div>
//     );
// };

// export default Vehicle;
