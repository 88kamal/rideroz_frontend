// import { useGetVehiclesQuery } from "../../../redux/slices/vehicleApiSlice";

// const ViewVehicle = () => {
//   // Correct vehicleAvailability to true/false as per backend expectations
//   const { data, error, isLoading } = useGetVehiclesQuery({
//     search: '',
//     vehicleAvailability: true,  // Make sure it's boolean, not string
//     vehicalType: '',
//     shop: '',
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//       {/* {data?.vehicals?.length > 0 ? (
//         data.vehicals.map((vehicle) => (
//           <div key={vehicle._id}>
//             <h3>{vehicle.vehicleName}</h3>
//             <p>{vehicle.vehicleNumber}</p>
//           </div>
//         ))
//       ) : (
//         <p>No vehicles found.</p>
//       )} */}
//     </div>
//   );
// };

// export default ViewVehicle;

/* eslint-disable no-unused-vars */
import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Input,
    Typography,
    Button,
    Spinner,
    Select,
    Option,
} from "@material-tailwind/react";
import { useState } from "react";
import { useGetVehiclesQuery } from "../../../redux/slices/vehicleApiSlice";
import { Eye, Trash2 } from "lucide-react";
import UpdateAvailabilityModal from "./modal/UpdateAvailabilityModal";
import ViewMoreVehicle from "./modal/ViewMoreVehicle";

const TABLE_HEAD = ["S.No", "Vehicle Image", "Vehicle Type", "Vehicle Number", "Vehicle Name", "vehiclePrice", "Change Availability", "Delete", "View More"];

export default function ViewVehicle() {
    const [search, setSearch] = useState('');
    const [vehicalType, setVehicalType] = useState('');

    // Pass the search, page, and limit as parameters to the query
    const { data: vehicals, error, isLoading, refetch } = useGetVehiclesQuery({
        search,
        vehicalType,
        shop: '',
    });

    const [selectedOption, setSelectedOption] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const options = ["bike", "scooty", "car"];

    const handleSelect = (option) => {
        setVehicalType(option);
        setIsOpen(false);

    };
    return (
        <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
            {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
            <div className="rounded-none px-5 pt-5">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Vehicle
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all vehicle
                        </Typography>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        {/* <pre>{JSON.stringify(vehicalType)}</pre> */}


                        <div className=" w-full md:w-72">
                            <Input
                                label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                color="green"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>

                        <div>
                            <div className="relative inline-block w-64">
                                <div
                                    className="border border-gray-400 rounded-md p-2 bg-white cursor-pointer"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <span className=" capitalize">{vehicalType || "Select an Vehicle Type"}</span>
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
                                            <>                                            <li
                                                key={index}
                                                className="p-2 hover:bg-gray-200 cursor-pointer capitalize"
                                                onClick={() => handleSelect(option)}
                                            >
                                                {option}
                                            </li>
                                            </>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        <Button
                            variant=""
                            color="green"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-green-200 bg-transparent border text-black"
                            onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            <p className=" hidden lg:block md:block sm:block">Refresh</p>
                        </Button>
                    </div>
                </div>

            </div>

            {/* <pre>{JSON.stringify(vehicals,null,2)}</pre> */}

            <div className="overflow-scroll p-2 ">
                {isLoading ? (
                    <div className="flex justify-center p-4">
                        <Spinner className="h-8 w-8 text-green-500" />
                    </div>
                ) : error ? (
                    <div className="p-4">
                        <div className=" flex justify-center items-center">
                            <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
                        </div>
                        <h1 className=" text-center" color="red">{error?.data?.error}</h1>
                    </div>
                )
                    :

                    (
                        <table className=" w-full min-w-max table-auto text-left ">
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
                                                className="font-bold leading-none text-green-700 "
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody >
                                {vehicals?.vehicals?.map(
                                    ({ _id, location, vehicleType, vehicleNumber, vehicleName, vehicleModel, vehiclePrice, bookingPrice, sittingCapacity, vehicleImage, vehicleAvailability, shop, numOfReviews, reviews, createdAt }, index) => {
                                        const isLast = index === vehicals?.vehicals?.length - 1;
                                        const classes = isLast
                                            ? "px-5 py-   border-l  border-r border-b border-green-300"
                                            : "px-5 py-  border-l  border-r border-b border-green-300";

                                        return (
                                            <tr key={index} className=" hover:bg-green-50/50 cursor-pointer"
                                                style={{
                                                    backgroundColor: vehicleAvailability === false ? '#ffedd5' : ""
                                                }}>
                                                <td className={classes}>
                                                    {/* <pre>{JSON.stringify(vehicleAvailability)}</pre> */}
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        {/* {index + 1 + (page - 1) * limit}. */}
                                                        {index + 1}.
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <div className="flex justify-center">
                                                        <img className=" w-10 h-10 py-2" src={vehicleImage[0]?.url} alt="vehicle image" />
                                                    </div>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font capitalize"
                                                    >
                                                        {vehicleType}
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font capitalize"
                                                    >
                                                        {vehicleNumber}
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font capitalize"
                                                    >
                                                        {vehicleName}
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font capitalize"
                                                    >
                                                        ₹ {vehiclePrice}
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        <UpdateAvailabilityModal id={_id} vehicleAvailability={vehicleAvailability} />
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        <ViewMoreVehicle
                                                            id={_id}
                                                            location={location}
                                                            vehicleType={vehicleType}
                                                            vehicleNumber={vehicleNumber}
                                                            vehicleName={vehicleName}
                                                            vehicleModel={vehicleModel}
                                                            vehiclePrice={vehiclePrice}
                                                            bookingPrice={bookingPrice}
                                                            sittingCapacity={sittingCapacity}
                                                            vehicleImage={vehicleImage}
                                                            vehicleAvailability={vehicleAvailability}
                                                            shop={shop}
                                                            numOfReviews={numOfReviews}
                                                            reviews={reviews}
                                                            createdAt={createdAt}
                                                        />
                                                    </Typography>
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    )

                }

            </div>

        </div>
    );
}