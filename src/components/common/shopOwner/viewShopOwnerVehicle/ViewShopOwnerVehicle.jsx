// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useGetVehiclesByShopIdQuery } from '../../../../redux/slices/vehicleApiSlice';

// const VehicleList = () => {
//     const {shopId} = useParams()
//     const { data, error, isLoading, isFetching } = useGetVehiclesByShopIdQuery(shopId);

//     // if (isLoading) return <p>Loading...</p>;
//     // if (error) return <p>Error: {error.message}</p>;

//     return (
//         <div>
//             <h2>Vehicles for Shop {shopId}</h2>
//             <pre>{JSON.stringify(data,null,2)}</pre>
//             {/* {isFetching && <p>Updating...</p>}
//             <p>Total Vehicles: {data.totalVehicles}</p>
//             <ul>
//                 {data.vehicles.map((vehicle) => (
//                     <li key={vehicle.id}>{vehicle.name}</li> // Replace `id` and `name` with actual fields
//                 ))}
//             </ul> */}
//         </div>
//     );
// };

// export default VehicleList;



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
    Chip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Eye, Trash2, Table, List, Store } from "lucide-react";
import { useGetVehiclesByShopIdQuery } from "../../../../redux/slices/vehicleApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import RatingBadge from "../../../vehicle/RatingBadge";
import ViewMoreVehicleModal from "./modal/ViewMoreVehicleModal";

const TABLE_HEAD = ["S.No", "Vehicle Image", "Vehicle Number", "Vehicle Price", "Delete", "View More"];

export default function ViewVehicle() {
    const [search, setSearch] = useState('');
    const [vehicalType, setVehicalType] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [viewType, setViewType] = useState(() => {
        // Initialize from localStorage or default to 'table'
        return localStorage.getItem("viewType") || "table";
    });

    const navigate = useNavigate()
    const { shopId } = useParams()

    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status


    // Pass the search, page, and limit as parameters to the query
    const { data: vehicals, error, isLoading, refetch } = useGetVehiclesByShopIdQuery({
        shopId,
        vehicleType: vehicalType, // Optional vehicle type filter
        search,
        page,
        limit
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
            {/* <pre>{JSON.stringify(vehicalType, null, 2)}</pre> */}
            <div className="rounded-none  border-b border-green-300 px-2 py-1">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Shop Owner All Vehicles
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about shop owner all vehicles
                        </Typography>
                    </div>

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
                            color="green"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-green-200 bg-transparent border text-black"
                            onClick={() => navigate('/super-admin-dashboard/view-user-and-shop-owner')}
                        >
                            <Store className="h-5 w-5" />
                            <p className=" ">
                                View Shop Owner
                            </p>
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
                {/* <pre>{JSON.stringify(vehicals,null,2)}</pre> */}

                {error?.data
                    ? "" : <div className=" mb-2 ">
                        <div className="flex flex-wrap items-center justify-between border border-green-300 p-2 w-full bg-green-50/50 mb-1">
                            <div className="flex items-center gap-1">
                                <h1 className="font-bold">Shop Name:</h1>
                                <h1>{vehicals?.shop?.shopName || "N/A"}</h1>
                            </div>

                            {/* <div className=" border-r h-10 border-green-300"></div> */}

                            <div className="flex items-center gap-1">
                                <h1 className="font-bold">Owner Name:</h1>
                                <h1>{vehicals?.shop?.ownerName || "N/A"}</h1>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between border border-green-300 p-2 w-full bg-green-50/50 mb-1">
                            <div className="flex items-center gap-1">
                                <h1 className="font-bold">Account holder name:</h1>
                                <h1>{vehicals?.shop?.account_holder_name || "N/A"}</h1>
                            </div>

                            {/* <div className=" border-r h-10 border-green-300"></div> */}

                            <div className="flex items-center gap-1">
                                <h1 className="font-bold">Account Number:</h1>
                                <h1>{vehicals?.shop?.account_number || "N/A"}</h1>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between border border-green-300 p-2 w-full bg-green-50/50">
                            <div className="flex items-center gap-1">
                                <h1 className="font-bold">IFSC Code:</h1>
                                <h1>{vehicals?.shop?.ifsc || "N/A"}</h1>
                            </div>

                            {/* <div className=" border-r h-10 border-green-300"></div> */}

                            <div className="flex items-center gap-1">
                                <h1 className="font-bold">Account verified:</h1>
                                {error?.data ? "N/A" : <Chip
                                    size="sm"
                                    variant="ghost"
                                    value={vehicals?.shop?.account_verified === false ? "Not Verified" : "Verified"}
                                    color={vehicals?.shop?.account_verified === false ? "red" : "green"}
                                    className="px-3 text-center w-28"
                                />}

                            </div>
                        </div>
                    </div>}

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
                                                <Trash2 className="w-4 h-4" />
                                            </td>
                                            <td className={classes}>
                                                <ViewMoreVehicleModal {...vehicle} />
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

                                    <div className="flex justify-between items-center mt-2 bg-green-50 rounded-b-lg">
                                        <td>
                                            <IconButton
                                                variant="text"
                                                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </IconButton>
                                        </td>
                                        <td >
                                            <ViewMoreVehicleModal {...vehicle} />
                                        </td>
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
