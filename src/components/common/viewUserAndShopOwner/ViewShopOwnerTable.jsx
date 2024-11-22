/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import {
//     CardHeader,
//     Input,
//     Typography,
//     Button,
//     Spinner,
//     IconButton,
// } from "@material-tailwind/react";
// import { useState } from "react";
// import { Eye, Logs } from "lucide-react";
// import { useGetShopsQuery } from "../../../redux/slices/shopApiSlice";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import DeleteShopOwnerModal from "./modal/shopOwner/DeleteShopOwnerModal";
// import ViewShopOwnerDetailModal from "./modal/shopOwner/ViewShopOwnerDetailModal";
// import EditShopOwnerModal from "./modal/shopOwner/EditShopOwnerModal";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import VerifyAccountModal from "./modal/shopOwner/VerifyAccountModal";


// const TABLE_HEAD = ["S.No", "Shop Image", "Shop Name", "Owner Name", "Verify Account", "Order", "Edit", "Delete", "View"];

// export default function ViewShopOwnerTable() {
//     const [search, setSearch] = useState('');
//     const [page, setPage] = useState(1);
//     const [limit, setLimit] = useState(10);
//     const [city, setCity] = useState('');

//     const navigate = useNavigate();

//     // Pass the search, page, and limit as parameters to the query
//     const { data: shops, error, isLoading, refetch } = useGetShopsQuery({ search, page, limit, city });

//     const handlePrevious = () => {
//         if (page > 1) setPage(page - 1);
//     };

//     const handleNext = () => {
//         const totalPages = Math.ceil((shops?.totalShops ?? 0) / limit);
//         if (page < totalPages) setPage(page + 1);
//     };


//     const handleCopy = (text) => {
//         navigator.clipboard.writeText(text);
//         toast.success(`${text} copied!`);
//     };
//     return (
//         <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
//             {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
//             <CardHeader floated={false} shadow={false} className="rounded-none">
//                 <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
//                     <div>
//                         <Typography variant="h5" color="blue-gray">
//                             All Shop
//                         </Typography>
//                         <Typography color="gray" className="mt-1 font-normal">
//                             See information about all shops
//                         </Typography>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <div className=" w-64 md:w-72">
//                             <Input
//                                 label="Search"
//                                 value={search}
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 color="green"
//                                 icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//                             />
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

//             </CardHeader>

//             {/* <pre>{JSON.stringify(shops, null, 2)}</pre> */}

//             <div className="overflow-scroll p-2">
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
//                             {/* <pre>{JSON.stringify(shops, null, 2)}</pre> */}
//                             <tbody >
//                                 {shops?.shops?.map(
//                                     ({ _id, shopImage, legalDoc, shopName, ownerName, ownerEmail, ownerPhoneNumber, gender, selectCity, lat, lng, account_holder_name, ifsc, account_number }, index) => {
//                                         const isLast = index === shops?.shops?.length - 1;
//                                         const classes = isLast
//                                             ? "px-5 py-   border-l  border-r border-b border-green-300"
//                                             : "px-5 py-  border-l  border-r border-b border-green-300";

//                                         return (
//                                             <tr key={index} className=" hover:bg-green-50/50 cursor-pointer">
//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font"
//                                                     >
//                                                         {index + 1 + (page - 1) * limit}.
//                                                     </Typography>
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <LazyLoadImage
//                                                         alt={"img"}
//                                                         src={shopImage?.url}
//                                                         className=" w-10 h-10 rounded-full"
//                                                         effect="opacity"
//                                                         wrapperProps={{
//                                                             // If you need to, you can tweak the effect transition using the wrapper style.
//                                                             style: { transitionDelay: "1s" },
//                                                         }}
//                                                     />
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font"
//                                                     >
//                                                         {shopName}
//                                                     </Typography>
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font capitalize"
//                                                     >
//                                                         {ownerName}
//                                                     </Typography>
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font hovertext-green-700 "
//                                                     >
//                                                         <VerifyAccountModal
//                                                             id={_id}
//                                                             account_holder_name={account_holder_name}
//                                                             ifsc={ifsc}
//                                                             account_number={account_number} />
//                                                     </Typography>
//                                                 </td>

//                                                 {/* /super-admin-dashboard/super-admin-home-page/super-admin-vehicle-book */}
// <td className={classes} onClick={() => {
//     navigate(`/super-admin-dashboard/view-user-and-shop-owner/super-admin-get-order-by-shop-owner/${_id}`)
// }}>
//                                                     {/* <Link 
//                                                     to={`/super-admin-dashboard/super-admin-home-page/view-user-and-shop-owner/super-admin-get-order-by-shop-owner/${_id}`}> */}

//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font capitalize hover:text-green-700"
//                                                     >
//                                                         <Logs className=" h-5" />
//                                                     </Typography>
//                                                     {/* </Link> */}
//                                                 </td>


//                                                 <td className={classes}>
//                                                     <EditShopOwnerModal
// id={_id}
// shopImage={shopImage}
// legalDoc={legalDoc}
// shopName={shopName}
// ownerName={ownerName}
// ownerEmail={ownerEmail}
// ownerPhoneNumber={ownerPhoneNumber}
// gender={gender}
// selectCity={selectCity}
// lat={lat}
// lng={lng}
//                                                     />
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <DeleteShopOwnerModal
//                                                         id={_id}
//                                                     />
//                                                 </td>


//                                                 <td className={classes}>
//                                                     <ViewShopOwnerDetailModal
//                                                         id={_id}
//                                                         shopImage={shopImage}
//                                                         legalDoc={legalDoc}
//                                                         shopName={shopName}
//                                                         ownerName={ownerName}
//                                                         ownerEmail={ownerEmail}
//                                                         ownerPhoneNumber={ownerPhoneNumber}
//                                                         gender={gender}
//                                                         selectCity={selectCity}
//                                                         lat={lat}
//                                                         lng={lng} />
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
// <div className="flex items-center justify-between border-t border-green-300 p-4">
//     <Typography variant="small" color="blue-gray" className="font-normal">
//         Page {page} of {Math.ceil((shops?.totalShops ?? 0) / limit)}
//     </Typography>
//     <div className="flex gap-2">
//         <Button
//             variant=""
//             size="sm"
//             className="hover:bg-green-50 active:bg-green-50 focus:bg-green-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-green-200 "
//             onClick={handlePrevious} disabled={page === 1}>
//             Previous
//         </Button>

//         <Button
//             variant=""
//             size="sm"
//             className=" hover:shadow-none shadow-none   bg-green-500 "
//             onClick={handleNext}
//             disabled={page === Math.ceil((shops?.totalShops ?? 0) / limit)}>
//             Next
//         </Button>
//     </div>
// </div>
//         </div>
//     );
// }




import { useEffect, useState } from "react";
import {
    Input,
    Typography,
    Button,
    Spinner,
    IconButton,
    Chip,
} from "@material-tailwind/react";
import { ArrowPathIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, ListBulletIcon, MagnifyingGlassIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import { Bike, Logs } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
    useGetShopsQuery,
} from "../../../redux/slices/shopApiSlice";
import VerifyAccountModal from "./modal/shopOwner/VerifyAccountModal";
import DeleteShopOwnerModal from "./modal/shopOwner/DeleteShopOwnerModal";
import ViewShopOwnerDetailModal from "./modal/shopOwner/ViewShopOwnerDetailModal";
import EditShopOwnerModal from "./modal/shopOwner/EditShopOwnerModal";
import RiderozAdminActiveAndDeActiveButton from "../shopOwner/activeAndDeactive/RiderozAdminActiveAndDeActiveButton";

const TABLE_HEAD = ["S.No", "Shop Image", "Shop Name", "Account Verified", "Verify Account", "View Vehicles", "Order", "Edit", "Block", "View"];

export default function ViewShopOwnerTable() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [city, setCity] = useState("");
    const [viewType, setViewType] = useState(() => {
        // Initialize from localStorage or default to 'table'
        return localStorage.getItem("viewType") || "table";
    });

    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status


    const navigate = useNavigate();
    const { data: shops, error, isLoading, refetch } = useGetShopsQuery({ search, page, limit, city });

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
        refetch()
    };

    const handleNext = () => {
        const totalPages = Math.ceil((shops?.totalShops ?? 0) / limit);
        if (page < totalPages) setPage(page + 1);
        refetch()
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success(`${text} copied!`);
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

    return (
        <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
            <div className="rounded-none  border-b border-green-300 px-2 py-1">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Shop
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all shops
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
                        <Button
                            variant=""
                            color="green"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-green-200 bg-transparent border text-black"
                            onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            <p >Refresh</p>
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
                            <span className=" hidden lg:block sm:block md:block">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
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
                            <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
                        </div>
                        <h1 className="text-center" color="red">{error?.data?.error}</h1>
                    </div>
                ) : viewType === "table" ? (
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
                            {shops?.shops?.map((shop, index) => {
                                const isLast = index === shops?.shops?.length - 1;
                                const classes = isLast
                                    ? "px-5 border-l border-r border-b border-green-300"
                                    : "px-5 border-l border-r border-b border-green-300";

                                return (
                                    <tr key={shop._id} className="hover:bg-green-50/50 cursor-pointer">
                                        <td className={classes}>{index + 1 + (page - 1) * limit}.</td>

                                        {/* <pre>{JSON.stringify(shop,null,2)}</pre> */}
                                        <td className={classes}>
                                            <LazyLoadImage
                                                alt={"img"}
                                                src={shop.shopImage?.url}
                                                className="w-10 h-10 rounded-full"
                                                effect="opacity"
                                            />
                                        </td>
                                        <td className={classes}>{shop.shopName}</td>

                                        <td className={classes}>
                                        <Chip
                                        size="sm"
                                        variant="ghost"
                                        value={shop.account_verified === false ? "Not Verified" : "Verified"}
                                        color={shop.account_verified === false ? "red" : "green"}
                                        className="px-3 text-center w-28"
                                    />
                                        </td>
                                        <td className={classes}>
                                            <VerifyAccountModal
                                                shopId={shop._id}
                                                account_holder_name={shop.account_holder_name}
                                                ifsc={shop.ifsc}
                                                account_number={shop.account_number}
                                            />
                                        </td>

                                        <td className={classes} onClick={() => {
                                            navigate(`/super-admin-dashboard/view-user-and-shop-owner/super-admin-view-shop-owner-vehicle/${shop._id}`)
                                        }}>
                                            <Bike className="h-5" />
                                        </td>

                                        <td className={classes} onClick={() => {
                                            navigate(`/super-admin-dashboard/view-user-and-shop-owner/super-admin-get-order-by-shop-owner/${shop._id}`)
                                        }}>
                                            <Logs className="h-5" />
                                        </td>

                                        <td className={classes}>
                                            <EditShopOwnerModal
                                                id={shop._id}
                                                shopImage={shop.shopImage}
                                                legalDoc={shop.legalDoc}
                                                shopName={shop.shopName}
                                                ownerName={shop.ownerName}
                                                ownerEmail={shop.ownerEmail}
                                                ownerPhoneNumber={shop.ownerPhoneNumber}
                                                gender={shop.gender}
                                                selectCity={shop.selectCity}
                                                lat={shop.lat}
                                                lng={shop.lng} />
                                        </td>
                                        <td className={classes}>
                                            {/* <DeleteShopOwnerModal id={shop._id} /> */}
                                            <RiderozAdminActiveAndDeActiveButton
                                            shopId={shop?._id}
                                            adminActivation={shop?.adminActivation}
                                            refetch={refetch}
                                            />
                                        </td>
                                        <td className={classes}>
                                            <ViewShopOwnerDetailModal {...shop} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {shops?.shops?.map((shop) => (
                            <div key={shop._id} className="border p-2 rounded-lg border-green-300">
                                <div className=" flex justify-center items-center">
                                    <LazyLoadImage
                                        alt={"img"}
                                        src={shop.shopImage?.url}
                                        className="w-20 h-20 rounded-full border object-cover mb-4 bg-white drop-shadow"
                                        effect="opacity"
                                    />
                                </div>
                                <Typography variant="h6" className=" text-center" color="blue-gray">{shop.shopName}</Typography>
                                <Typography variant="small" color="blue-gray" className=" text-center">
                                    <b> Owner: </b>{shop.ownerName}
                                </Typography>

                                {/* <pre>{JSON.stringify(shop.account_verified)}</pre> */}
                                <div className="flex justify-center mt-2">
                                    <Chip
                                        size="sm"
                                        variant="ghost"
                                        value={shop.account_verified === false ? "Not Verified" : "Verified"}
                                        color={shop.account_verified === false ? "red" : "green"}
                                        className="px-3 text-center w-28"
                                    />

                                </div>

                                <div className="flex justify-between mt-4 bg-green-50 rounded-b-lg">
                                    <div className="relative group z-50">
                                        <VerifyAccountModal
                                            shopId={shop._id}
                                            account_holder_name={shop.account_holder_name}
                                            ifsc={shop.ifsc}
                                            account_number={shop.account_number}
                                            refetch={refetch}
                                        />
                                        <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 left-1/2 transform -translate-x-1/2 -top-6">
                                            Verify Account
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <IconButton
                                            onClick={() => {
                                                navigate(`/super-admin-dashboard/view-user-and-shop-owner/super-admin-view-shop-owner-vehicle/${shop._id}`)
                                            }}
                                            variant="text"
                                            className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                                        >
                                            <Bike className="h-4 w-4" />
                                        </IconButton>
                                        <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 left-1/2 transform -translate-x-1/2 -top-6">
                                            View Vehicles
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <IconButton
                                            onClick={() => {
                                                navigate(`/super-admin-dashboard/view-user-and-shop-owner/super-admin-get-order-by-shop-owner/${shop._id}`)
                                            }}
                                            variant="text"
                                            className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                                        >
                                            <Logs className="h-4 w-4" />
                                        </IconButton>
                                        <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 left-1/2 transform -translate-x-1/2 -top-6">
                                            View Orders
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <EditShopOwnerModal
                                            id={shop._id}
                                            shopImage={shop.shopImage}
                                            legalDoc={shop.legalDoc}
                                            shopName={shop.shopName}
                                            ownerName={shop.ownerName}
                                            ownerEmail={shop.ownerEmail}
                                            ownerPhoneNumber={shop.ownerPhoneNumber}
                                            gender={shop.gender}
                                            selectCity={shop.selectCity}
                                            lat={shop.lat}
                                            lng={shop.lng}
                                        />
                                        <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 left-1/2 transform -translate-x-1/2 -top-6">
                                            Edit Shop Owner
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        {/* <DeleteShopOwnerModal id={shop._id} /> */}
                                        <RiderozAdminActiveAndDeActiveButton
                                            shopId={shop?._id}
                                            adminActivation={shop?.adminActivation}
                                            refetch={refetch}
                                            />
                                        <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 left-1/2 transform -translate-x-1/2 -top-6">
                                            Block Shop Owner
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <ViewShopOwnerDetailModal {...shop} />
                                        <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 left-1/2 transform -translate-x-1/2 -top-6">
                                            View Details
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between border-t border-green-300 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {page} of {Math.ceil((shops?.totalShops ?? 0) / limit)}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant=""
                        size="sm"
                        className="hover:bg-green-50 active:bg-green-50 focus:bg-green-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-green-200 "
                        onClick={handlePrevious} disabled={page === 1}>
                        Previous
                    </Button>

                    <Button
                        variant=""
                        size="sm"
                        className=" hover:shadow-none shadow-none   bg-green-500 "
                        onClick={handleNext}
                        disabled={page === Math.ceil((shops?.totalShops ?? 0) / limit)}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
