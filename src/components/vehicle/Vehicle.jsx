// import React, { useContext } from "react";
// import {
//     Tabs,
//     TabsHeader,
//     TabsBody,
//     Tab,
//     TabPanel,
// } from "@material-tailwind/react";
// import AllVehicle from "./AllVehicle";
// import myContext from "../../context/myContext";

// export default function Vehicle() {
//     const [activeTab, setActiveTab] = React.useState("");

//     const { vehicleType, setVehicleType} = useContext(myContext);

//     const vihicleData = [
//         {
//             label: "All",
//             value: "",
//         },
//         {
//             label: "Scooty",
//             value: "scooty",
//         },
//         {
//             label: "Bike",
//             value: "bike",
//         },
//         {
//             label: "Car",
//             value: "car",
//         },
//     ];
//     return (
//         <div className=" px-4 mt-5">

//             <div className="mb-8">
//                 <h1 className=" text-center app-font text-2xl font-bold">Our Vehicle</h1>
//             </div>
//             <Tabs value={activeTab}>
//                 <TabsHeader
//                     className="rounded-none border-b  border-blue-gray-50 bg-transparent p-0 container mx-auto max-w-2xl z-0 "
//                     indicatorProps={{
//                         className:
//                             "bg-transparent border-b-4 border-[#82BE23] shadow-none rounded-none",
//                     }}
//                 >
//                     {vihicleData.map(({ label, value }) => (
//                         <Tab
//                             key={value}
//                             value={value}
//                             onClick={() => {
//                                 setActiveTab(value)
//                                 setVehicleType(value)
//                             }}
//                             className={activeTab === value ? "text-gray-900" : ""}
//                         >
//                             {label}
//                         </Tab>
//                     ))}
//                 </TabsHeader>

//                 {/* <pre>{JSON.stringify(vehicles, null, 2)}</pre> */}

//                 <TabsBody className="container mx-auto">
//                     {vihicleData?.map(({ value, data, index }) => (
//                         <div className="" key={value}>
//                             <TabPanel key={value} value={value}>
//                                 <AllVehicle vehicleType={vehicleType}/>
//                             </TabPanel>


//                         </div>
//                     ))}
//                 </TabsBody>
//             </Tabs>
//         </div>
//     );
// }


import React, { useContext } from "react";
import AllVehicle from "./AllVehicle";
import myContext from "../../context/myContext";

export default function Vehicle() {
    const [activeTab, setActiveTab] = React.useState("");

    const { vehicleType, setVehicleType } = useContext(myContext);

    const vehicleData = [
        { label: "All", value: "" },
        { label: "Scooty", value: "scooty" },
        { label: "Bike", value: "bike" },
        { label: "Car", value: "car" },
    ];

    return (
        <div className="px-4 mt-5">
            <div className="mb-8">
                <h1 className="text-center app-font text-2xl font-bold">
                    Our Vehicle
                </h1>
            </div>
            <div className="container mx-auto max-w-2xl">
                {/* Tab Headers */}
                <div className="flex border-b border-blue-gray-50">
                    {vehicleData.map(({ label, value }) => (
                        <button
                            key={value}
                            className={`flex-1 py-2 text-center ${
                                activeTab === value
                                    ? "border-b-4 border-[#82BE23] text-gray-900 font-bold"
                                    : "text-gray-600"
                            }`}
                            onClick={() => {
                                setActiveTab(value);
                                setVehicleType(value);
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
              {/* Tab Panels */}
              <div className="mt-4">
                    {vehicleData.map(({ value }) => (
                        activeTab === value && (
                            <div key={value}>
                                <AllVehicle vehicleType={vehicleType} />
                            </div>
                        )
                    ))}
                </div>
        </div>
    );
}
