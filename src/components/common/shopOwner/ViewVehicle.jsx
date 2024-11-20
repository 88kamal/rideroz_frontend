// // import { useGetVehiclesQuery } from "../../../redux/slices/vehicleApiSlice";

// // const ViewVehicle = () => {
// //   // Correct vehicleAvailability to true/false as per backend expectations
// //   const { data, error, isLoading } = useGetVehiclesQuery({
// //     search: '',
// //     vehicleAvailability: true,  // Make sure it's boolean, not string
// //     vehicalType: '',
// //     shop: '',
// //   });

// //   if (isLoading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error.message}</div>;

// //   return (
// //     <div>
// //       <pre>{JSON.stringify(data, null, 2)}</pre>
// //       {/* {data?.vehicals?.length > 0 ? (
// //         data.vehicals.map((vehicle) => (
// //           <div key={vehicle._id}>
// //             <h3>{vehicle.vehicleName}</h3>
// //             <p>{vehicle.vehicleNumber}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No vehicles found.</p>
// //       )} */}
// //     </div>
// //   );
// // };

// // export default ViewVehicle;

// /* eslint-disable no-unused-vars */
// import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import {
//     CardHeader,
//     Input,
//     Typography,
//     Button,
//     Spinner,
//     Select,
//     Option,
// } from "@material-tailwind/react";
// import { useState } from "react";
// import { useGetVehiclesQuery } from "../../../redux/slices/vehicleApiSlice";
// import { Eye, Trash2 } from "lucide-react";
// import UpdateAvailabilityModal from "./modal/UpdateAvailabilityModal";
// import ViewMoreVehicle from "./modal/ViewMoreVehicle";

// const TABLE_HEAD = ["S.No", "Vehicle Image", "Vehicle Number", "vehiclePrice", "Change Availability", "Delete", "View More"];

// export default function ViewVehicle() {
//     const [search, setSearch] = useState('');
//     const [vehicalType, setVehicalType] = useState('');

//     // Pass the search, page, and limit as parameters to the query
//     const { data: vehicals, error, isLoading, refetch } = useGetVehiclesQuery({
//         search,
//         vehicalType,
//         shop: '',
//     });

//     const [selectedOption, setSelectedOption] = useState("");
//     const [isOpen, setIsOpen] = useState(false);

//     const options = ["bike", "scooty", "car"];

//     const handleSelect = (option) => {
//         setVehicalType(option);
//         setIsOpen(false);

//     };
//     return (
//         <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
//             {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
//             <div className="rounded-none px-5 pt-5">
//                 <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
//                     <div>
//                         <Typography variant="h5" color="blue-gray">
//                             All Vehicle
//                         </Typography>
//                         <Typography color="gray" className="mt-1 font-normal">
//                             See information about all vehicle
//                         </Typography>
//                     </div>

//                     <div className="flex flex-wrap items-center gap-2">
//                         {/* <pre>{JSON.stringify(vehicalType)}</pre> */}


//                         <div className=" w-full md:w-72">
//                             <Input
//                                 label="Search"
//                                 value={search}
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 color="green"
//                                 icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//                             />
//                         </div>

//                         <div>
//                             <div className="relative inline-block w-64">
//                                 <div
//                                     className="border border-gray-400 rounded-md p-2 bg-white cursor-pointer"
//                                     onClick={() => setIsOpen(!isOpen)}
//                                 >
//                                     <span className=" capitalize">{vehicalType || "Select an Vehicle Type"}</span>
//                                     <svg
//                                         className={`w-5 h-5 inline-block float-right transition-transform duration-200 ${isOpen ? "rotate-180" : ""
//                                             }`}
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M19 9l-7 7-7-7"
//                                         />
//                                     </svg>
//                                 </div>

//                                 {isOpen && (
//                                     <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
//                                         <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect("")}>All Vehicles</li>

//                                         {options.map((option, index) => (
//                                             <>                                            <li
//                                                 key={index}
//                                                 className="p-2 hover:bg-gray-200 cursor-pointer capitalize"
//                                                 onClick={() => handleSelect(option)}
//                                             >
//                                                 {option}
//                                             </li>
//                                             </>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>
//                         </div>

//                         <Button
//                             variant=""
//                             color="green"
//                             size="sm"
//                             className="flex hover:shadow-none shadow-none items-center gap-2 border-green-200 bg-transparent border text-black"
//                             onClick={refetch}
//                         >
//                             <ArrowPathIcon className="h-5 w-5" />
//                             <p className=" hidden lg:block md:block sm:block">Refresh</p>
//                         </Button>
//                     </div>
//                 </div>

//             </div>

//             {/* <pre>{JSON.stringify(vehicals,null,2)}</pre> */}

//             <div className="overflow-scroll p-2 ">
//                 {isLoading ? (
//                     <div className="flex justify-center p-4">
//                         <Spinner className="h-8 w-8 text-green-500" />
//                     </div>
//                 ) : error ? (
//                     <div className="p-4">
//                         <div className=" flex justify-center items-center">
//                             <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
//                         </div>
//                         <h1 className=" text-center" color="red">{error?.data?.error}</h1>
//                     </div>
//                 )
//                     :

//                     (
//                         <table className=" w-full min-w-max table-auto text-left ">
//                             <thead>
//                                 <tr>
//                                     {TABLE_HEAD.map((head) => (
//                                         <th
//                                             key={head}
//                                             className="border-y border-l border-r border-green-200 bg-green-50 p-4"
//                                         >
//                                             <Typography
//                                                 variant="small"
//                                                 color="blue-gray"
//                                                 className="font-bold leading-none text-green-700 "
//                                             >
//                                                 {head}
//                                             </Typography>
//                                         </th>
//                                     ))}
//                                 </tr>
//                             </thead>
//                             <tbody >
//                                 {vehicals?.vehicals?.map(
//                                     ({ _id, location, vehicleType, vehicleNumber, vehicleName, vehicleModel, vehiclePrice, bookingPrice, sittingCapacity, vehicleImage, vehicleAvailability, shop, numOfReviews, reviews, createdAt, bookedDates }, index) => {
//                                         const isLast = index === vehicals?.vehicals?.length - 1;
//                                         const classes = isLast
//                                             ? "px-5 py-   border-l  border-r border-b border-green-300"
//                                             : "px-5 py-  border-l  border-r border-b border-green-300";

//                                         return (
//                                             <tr key={index} className=" hover:bg-green-50/50 cursor-pointer"
//                                                 style={{
//                                                     backgroundColor: vehicleAvailability === false ? '#ffedd5' : ""
//                                                 }}>
//                                                 <td className={classes}>
//                                                     {/* <pre>{JSON.stringify(vehicleAvailability)}</pre> */}
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font"
//                                                     >
//                                                         {/* {index + 1 + (page - 1) * limit}. */}
//                                                         {index + 1}.
//                                                     </Typography>
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <div className="flex justify-center">
//                                                         <img className=" w-10 h-10 py-2" src={vehicleImage[0]?.url} alt="vehicle image" />
//                                                     </div>
//                                                 </td>



//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font capitalize"
//                                                     >
//                                                         {vehicleNumber}
//                                                     </Typography>
//                                                 </td>


//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font capitalize"
//                                                     >
//                                                         ₹ {vehiclePrice}
//                                                     </Typography>
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font"
//                                                     >
//                                                         <UpdateAvailabilityModal 
//                                                         id={_id} 
//                                                         vehicleAvailability={vehicleAvailability} 
//                                                         bookedDates={bookedDates}
//                                                         refetch={refetch}
//                                                         />
//                                                     </Typography>
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font"
//                                                     >
//                                                         <Trash2 className="w-4 h-4" />
//                                                     </Typography>
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font"
//                                                     >
//                                                         <ViewMoreVehicle
//                                                             id={_id}
//                                                             location={location}
//                                                             vehicleType={vehicleType}
//                                                             vehicleNumber={vehicleNumber}
//                                                             vehicleName={vehicleName}
//                                                             vehicleModel={vehicleModel}
//                                                             vehiclePrice={vehiclePrice}
//                                                             bookingPrice={bookingPrice}
//                                                             sittingCapacity={sittingCapacity}
//                                                             vehicleImage={vehicleImage}
//                                                             vehicleAvailability={vehicleAvailability}
//                                                             shop={shop}
//                                                             numOfReviews={numOfReviews}
//                                                             reviews={reviews}
//                                                             createdAt={createdAt}
//                                                         />
//                                                     </Typography>
//                                                 </td>
//                                             </tr>
//                                         );
//                                     },
//                                 )}
//                             </tbody>
//                         </table>
//                     )

//                 }

//             </div>

//         </div>
//     );
// }

/* eslint-disable no-unused-vars */
import { ArrowPathIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, ListBulletIcon, MagnifyingGlassIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Input,
    Typography,
    Button,
    Spinner,
    Select,
    Option,
    IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useGetVehiclesByShopIdQuery, useGetVehiclesQuery } from "../../../redux/slices/vehicleApiSlice";
import { Eye, Trash2, Table, List } from "lucide-react";
import UpdateAvailabilityModal from "./modal/UpdateAvailabilityModal";
import ViewMoreVehicle from "./modal/ViewMoreVehicle";
import RatingBadge from "../../vehicle/RatingBadge";
import authService from "../../../services/authService";

const TABLE_HEAD = ["S.No", "Vehicle Image", "Vehicle Number", "Vehicle Price", "Change Availability", "Delete", "View More"];

export default function ViewVehicle() {
    const [search, setSearch] = useState('');
    const [vehicalType, setVehicalType] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [viewType, setViewType] = useState(() => {
        // Initialize from localStorage or default to 'table'
        return localStorage.getItem("viewType") || "table";
    });

    const user = authService.getCurrentUser();
    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status



    // Pass the search, page, and limit as parameters to the query
    const { data: vehicals, error, isLoading, refetch } = useGetVehiclesByShopIdQuery({
        shopId: user?.id,
        search: search, // Optional search filter
        vehicleType: vehicalType, // Optional vehicle type filter
        page: page, // Pagination: page number
        limit: limit, // Pagination: items per page
    });

    const [selectedOption, setSelectedOption] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const options = ["bike", "scooty", "car"];

    const handleSelect = (option) => {
        setVehicalType(option);
        setIsOpen(false);
    };

    // Function to toggle view type
    const toggleViewType = () => {
        const newViewType = viewType === "table" ? "list" : "table";
        setViewType(newViewType);
        localStorage.setItem("viewType", newViewType); // Save to localStorage
    };

    useEffect(() => {
        // Sync state with localStorage in case of external changes (optional safeguard)
        const storedViewType = localStorage.getItem("viewType");
        if (storedViewType && storedViewType !== viewType) {
            setViewType(storedViewType);
        }
    }, []);

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullscreen(!isFullscreen);
    };

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        const totalPages = Math.ceil((vehicals?.totalVehicles ?? 0) / limit);
        if (page < totalPages) setPage(page + 1);
    };


    return (
        <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
            <div className="rounded-none  border-b border-green-300 px-2 py-1">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Vehicles
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all vehicles
                        </Typography>
                    </div>

                    {/* <pre>{JSON.stringify(vehicals,null,2)}</pre> */}

                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                color="green"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>

                        <div className="relative inline-block w-full lg:w-64">
                            <div
                                className="border border-gray-400 rounded-md p-2 bg-white cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className="capitalize">{vehicalType || "Select Vehicle Type"}</span>
                                <svg
                                    className={`w-5 h-5 inline-block float-right transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>

                            {isOpen && (
                                <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                                    <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect("")}>All Vehicles</li>

                                    {options.map((option, index) => (
                                        <li
                                            key={index}
                                            className="p-2 hover:bg-gray-200 cursor-pointer capitalize"
                                            onClick={() => handleSelect(option)}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <Button
                            variant=""
                            color="green"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-green-200 bg-transparent border text-black"
                            onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            {/* <p>Refresh</p> */}
                        </Button>


                        <Button
                            variant=""
                            size="sm"
                            className="flex items-center gap-2 border hover:shadow-none shadow-none text-black  bg-white border-green-200"
                            onClick={toggleViewType}
                        >
                            {viewType === "table" ? (
                                <ListBulletIcon className="h-5 w-5" />
                            ) : (
                                <TableCellsIcon className="h-5 w-5" />
                            )}
                            <span>{viewType === "table" ? "List View" : "Table View"}</span>
                        </Button>

                        <Button
                            variant=""
                            size="sm"
                            className="flex items-center gap-2 border hover:shadow-none shadow-none text-black bg-white border-green-200"
                            onClick={toggleFullscreen}
                        >
                            {isFullscreen ? (
                                <ArrowsPointingInIcon className="h-5 w-5" />
                            ) : (
                                <ArrowsPointingOutIcon className="h-5 w-5" />
                            )}
                            <span className=" hidden">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="overflow-scroll p-2">
                {isLoading ? (
                    <div className="flex justify-center p-4">
                        <Spinner className="h-8 w-8 text-green-500" />
                    </div>
                ) : error ? (
                    <div className="p-4">
                        <div className="flex justify-center items-center">
                            <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="error" />
                        </div>
                        <h1 className="text-center text-red-500">{error?.data?.error}</h1>
                    </div>
                ) : (
                    viewType === "table" ? (
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-y border-l border-r border-green-200 bg-green-50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-bold leading-none text-green-700"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {vehicals?.vehicles?.map((vehicle, index) => {
                                    const { _id, vehicleNumber, vehiclePrice, vehicleImage, vehicleAvailability, bookedDates } = vehicle;
                                    const isLast = index === vehicals?.vehicles?.length - 1;
                                    const classes = isLast
                                        ? "px-5 border-l border-r border-b border-green-300"
                                        : "px-5 border-l border-r border-b border-green-300";

                                    return (
                                        <tr
                                            key={index}
                                            className="hover:bg-green-50/50 cursor-pointer app-font"
                                            style={{
                                                backgroundColor: vehicleAvailability === false ? '#ffedd5' : ""
                                            }}
                                        >
                                            <td className={classes}>{index + 1}.</td>
                                            <td className={classes}>
                                                <div className="flex justify-center">
                                                    <img className="w-10 h-10 py-2" src={vehicleImage[0]?.url} alt="vehicle" />
                                                </div>
                                            </td>
                                            <td className={classes}>{vehicleNumber}</td>
                                            <td className={classes}>₹ {vehiclePrice}</td>
                                            <td className={classes}>
                                                {/* <pre>{JSON.stringify}</pre> */}
                                                <UpdateAvailabilityModal
                                                    id={_id}
                                                    vehicleAvailability={vehicleAvailability}
                                                    bookedDates={bookedDates}
                                                    refetch={refetch}
                                                />
                                            </td>
                                            <td className={classes}>
                                                <Trash2 className="w-4 h-4" />
                                            </td>
                                            <td className={classes}>
                                                <ViewMoreVehicle {...vehicle} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {vehicals?.vehicles?.map((vehicle, index) => (
                                <div
                                    key={index}
                                    className="border border-green-200 rounded-lg p-2 "
                                    style={{
                                        backgroundColor: vehicle.vehicleAvailability === false ? '#ffedd5' : ""
                                    }}
                                >
                                    <img className="w-full  h-44 object-cover rounded-md" src={vehicle.vehicleImage[0]?.url} alt="vehicle" />

                                    <Typography variant="h6" className="mt-2">{vehicle.vehicleNumber}</Typography>

                                    <div className="flex justify-between items-center">
                                        <Typography>₹ {vehicle.vehiclePrice}</Typography>

                                        <RatingBadge vehicleRatings={vehicle?.vehicleRatings} />

                                    </div>

                                    {/* <pre>{JSON.stringify(vehicle,null,2)}</pre> */}


                                    <div className="flex justify-between mt-2 bg-green-50 rounded-b-lg">
                                        <UpdateAvailabilityModal {...vehicle} />

                                        <IconButton
                                            variant="text"
                                            className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                                        >
                                            <Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
                                        </IconButton>
                                        <ViewMoreVehicle {...vehicle} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>

            <div className="flex items-center justify-between border-t border-green-300 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {page} of {Math.ceil((vehicals?.totalVehicles ?? 0) / limit)}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant=""
                        size="sm"
                        className="hover:bg-green-50 active:bg-green-50 focus:bg-green-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-green-200"
                        onClick={handlePrevious}
                        disabled={page === 1}
                    >
                        Previous
                    </Button>

                    <Button
                        variant=""
                        size="sm"
                        className="hover:shadow-none shadow-none bg-green-500"
                        onClick={handleNext}
                        disabled={page === Math.ceil((vehicals?.totalVehicles ?? 0) / limit)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
