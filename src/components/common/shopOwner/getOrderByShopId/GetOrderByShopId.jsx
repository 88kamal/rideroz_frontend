// import { useParams } from "react-router-dom"
// import { useGetOrdersByShopQuery } from "../../../../redux/slices/orderApiSlice";

// const GetOrderByShopId = () => {
//     const {shopId} = useParams()
//     // Trigger the query with the shop ID
//   const { data, error, isLoading } = useGetOrdersByShopQuery(shopId);

//   return (
//     <div>
//         GetOrderByShopId
//         {shopId}

//         <pre>{JSON.stringify(data,null,2)}</pre>
//     </div>
//   )
// }

// export default GetOrderByShopId

/* eslint-disable no-unused-vars */
import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Input,
    Typography,
    Button,
    Spinner,
    IconButton,
    Chip,
} from "@material-tailwind/react";
import { useState } from "react";
import { Logs } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOrdersByShopQuery } from "../../../../redux/slices/orderApiSlice";
import SettelementModal from "./modal/SettelementModal";
import ViewMoreOrderByShopIdModal from "./modal/ViewMoreOrderByShopIdModal";


const TABLE_HEAD = ["S.No", "Image", "Name", "Vehicle Number", "Price", "Settlement Status", "Settled", "View"];

export default function ViewShopOwnerTable() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [city, setCity] = useState('');

    const { shopId } = useParams()
    const navigate = useNavigate();

    // Pass the search, page, and limit as parameters to the query
    const { data: getOrderByShopId, error, isLoading, refetch } = useGetOrdersByShopQuery(shopId);

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        // const totalPages = Math.ceil((getOrderByShopId?.totalShops ?? 0) / limit);
        // if (page < totalPages) setPage(page + 1);
    };


    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success(`${text} copied!`);
    };
    return (
        <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
            {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Shop Order
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all Shop order
                        </Typography>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className=" w-64 md:w-72">
                            <Input
                                label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                color="green"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
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

            </CardHeader>

            {/* <pre>{JSON.stringify(shops, null, 2)}</pre> */}

            <div className="overflow-scroll p-2">
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
                            {/* <pre>{JSON.stringify(getOrderByShopId, null, 2)}</pre> */}
                            <tbody >
                                {getOrderByShopId?.orders?.map(
                                    (order, index) => {
                                        const isLast = index === getOrderByShopId?.orders?.length - 1;
                                        const classes = isLast
                                            ? "px-5 py-   border-l  border-r border-b border-green-300"
                                            : "px-5 py-  border-l  border-r border-b border-green-300";

                                        return (
                                            <tr key={index} className=" hover:bg-green-50/50 cursor-pointer">
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        {index + 1 + (page - 1) * limit}.
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <LazyLoadImage
                                                        alt={"img"}
                                                        src={order?.vehicle?.vehicleImage[0]?.url}
                                                        className=" w-10 h-10 rounded-full"
                                                        effect="opacity"
                                                        wrapperProps={{
                                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                                            style: { transitionDelay: "1s" },
                                                        }}
                                                    />
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        {order?.vehicle?.vehicleName}
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        {order?.vehicle?.vehicleNumber}
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        {order?.vehicle?.vehiclePrice}
                                                    </Typography>
                                                </td>


                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        <Chip
                                                            size="sm"
                                                            variant="ghost"
                                                            value={order?.settled === false ? "pending" : "confirm"}
                                                            color={
                                                                order?.settled === false ? "red" :
                                                                    "green"
                                                            }

                                                            className="px-3 text-center w-28"
                                                        />
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        <SettelementModal />
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        <ViewMoreOrderByShopIdModal order={order} />
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
            <div className="flex items-center justify-between border-t border-green-300 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {/* Page {page} of {Math.ceil((shops?.totalShops ?? 0) / limit)} */}
                    Page 1 Of  1
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant=""
                        size="sm"
                        className="hover:bg-green-50 active:bg-green-50 focus:bg-green-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-green-200 "
                    // onClick={handlePrevious} disabled={page === 1}
                    >
                        Previous
                    </Button>

                    <Button
                        variant=""
                        size="sm"
                        className=" hover:shadow-none shadow-none   bg-green-500 "
                        onClick={handleNext}
                    // disabled={page === Math.ceil((shops?.totalShops ?? 0) / limit)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}