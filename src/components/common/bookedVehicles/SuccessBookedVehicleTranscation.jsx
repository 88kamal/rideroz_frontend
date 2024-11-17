// /* eslint-disable no-unused-vars */
// import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import {
//   CardHeader,
//   Input,
//   Typography,
//   Button,
//   Spinner,
//   Chip,
//   IconButton,
// } from "@material-tailwind/react";
// import { useState } from "react";
// import { useGetOrdersQuery } from "../../../redux/slices/orderApiSlice";
// import { useNavigate } from "react-router-dom";
// import { Eye, MapPinHouse } from "lucide-react";
// import CancelRideModal from "./modal/CancelRideModal";
// import ShowLocationModal from "./modal/ShowLocationModal";
// import authService from "../../../services/authService";
// import VerifyRideModal from "./modal/VerifyRideModal";


// export default function SuccessBookedVehicleTranscation() {
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);

//   const user = authService.getCurrentUser()

//   const navigate = useNavigate();

//   // Pass the search, page, and limit as parameters to the query
//   const { data, error, isLoading, refetch, isError } = useGetOrdersQuery();

//   const handlePrevious = () => {
//     // if (page > 1) setPage(page - 1);
//   };

//   const handleNext = () => {
//     // const totalPages = Math.ceil((cities?.totalCities ?? 0) / limit);
//     // if (page < totalPages) setPage(page + 1);
//   };


//   const TABLE_HEAD = [
//     "S.No",
//     "Vehicle Image",
//     "Vehicle Name",
//     "Vehicle Number",
//     "Status",
//     "View Location",
//     ...(user?.role === 15 ? ["Cancel Ride"] : []),
//     ...(user?.role === 14 ? ["Verify Otp"] : []),
//     "View Invoice",
//   ];

//   return (
//     <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
//       {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
//       <CardHeader floated={false} shadow={false} className="rounded-none">
//         <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
//           <div>
//             <Typography variant="h5" color="blue-gray">
//               All Vehicle Transcation
//             </Typography>
//             <Typography color="gray" className="mt-1 font-normal app-font">
//               See information about all vehicle transcation
//             </Typography>
//           </div>

//           <div className="flex items-center gap-2">
//             <div className=" w-64 md:w-72">
//               <Input
//                 label="Search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 color="green"
//                 icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//               />
//             </div>
//             <Button
//               variant=""
//               color="green"
//               size="sm"
//               className="flex hover:shadow-none shadow-none items-center gap-2 border-green-200 bg-transparent border text-black"
//               onClick={refetch}
//             >
//               <ArrowPathIcon className="h-5 w-5" />
//               <p className=" hidden lg:block md:block sm:block">Refresh</p>
//             </Button>
//           </div>
//         </div>

//       </CardHeader>

//       {/* <pre>{JSON.stringify(user,null,2)}</pre> */}

//       <div className="overflow-scroll p-2">
//         {isLoading ? (
//           <div className="flex justify-center p-4">
//             <Spinner className="h-8 w-8 text-green-500" />
//             {/* <img className="h-14 w-14 text-green-500"
//                             src="https://cdn-icons-gif.flaticon.com/17905/17905752.gif" alt="" /> */}
//           </div>
//         ) : error ? (
//           <div className="p-4">
//             <div className=" flex justify-center items-center">
//               <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
//             </div>
//             <h1 className=" text-center" color="red">{error?.data?.error}</h1>
//           </div>
//         )
//           :

//           (
//             <table className=" w-full min-w-max table-auto text-left ">
//               <thead>
//                 <tr>
//                   {TABLE_HEAD.map((head) => (
//                     <th
//                       key={head}
//                       className="border-y border-l border-r border-green-200 bg-green-50 p-4"
//                     >
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="font-bold leading-none text-green-700 "
//                       >
//                         {head}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody >
//                 {data?.orders?.map(
//                   ({ _id,
//                     extraHours, extraHourCharge, vehicle, shopAmount, startDate, endDate, platformAmount, miscAmount, discountAmount, totalAmount, status, razorpay_order_id, razorpay_payment_id, razorpay_signature,
//                   }, index) => {
//                     const { vehicleType, vehicleImage, vehicleNumber, vehicleName, vehicleModel, vehiclePrice, bookingPrice, sittingCapacity, } = vehicle || {}
//                     const isLast = index === data?.orders?.length - 1;
//                     const classes = isLast
//                       ? "px-5 py-   border-l  border-r border-b border-green-300"
//                       : "px-5 py-  border-l  border-r border-b border-green-300";

//                     return (
//                       <tr key={index} className=" hover:bg-green-50/50 cursor-pointer">
//                         <td className={classes}>
//                           <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="font-normal app-font"
//                           >
//                             {index + 1 + (page - 1) * limit}.
//                           </Typography>
//                         </td>

//                         <td className={classes}>
//                           <img className="w-10 h-10" src={vehicleImage?.[0]?.url} alt={vehicleName} />
//                         </td>

//                         <td className={classes}>
//                           <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="font-normal app-font capitalize"
//                           >
//                             {vehicleName}
//                           </Typography>
//                         </td>

//                         <td className={classes}>
//                           <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="font-normal app-font capitalize"
//                           >
//                             {vehicleNumber}
//                           </Typography>
//                         </td>

//                         <td className={classes}>
//                           <Chip
//                             size="sm"
//                             variant="ghost"
//                             value={status}
//                             color={
//                               status === "failed" ? "red" :
//                               status === "pending" ? "orange" : 
//                               "green"
//                             }

//                             className="px-3 text-center w-28"
//                           />
//                         </td>

//                         <td className={classes}>

//                           <ShowLocationModal vehicle={vehicle} />

//                         </td>

// <td className={classes} hidden={[2, 3, 14].includes(user?.role)}>
//   <CancelRideModal id={_id} vehicleBasePrice={vehiclePrice} />
// </td>

// <td className={classes} hidden={[2, 3, 15].includes(user?.role)}>

//   <VerifyRideModal vehicle={vehicle} />

// </td>



// {[15].includes(user?.role) && <td className={classes}>
//   <IconButton
//     onClick={() => navigate(`/user-dashboard/user-home-page/user-vehicle-book/vehicle-book-invoice/${_id}`)}
//     variant="text"
//     className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
//   >
//     <Eye className="h-5 w-5" />
//   </IconButton>

// </td>
// }

// {[14].includes(user?.role) &&
//   <td className={classes}>
//     <IconButton
//       onClick={() => navigate(`/shop-owner-dashboard/shop-owner-home-page/shop-owner-vehicle-book/vehicle-book-invoice/${_id}`)}
//       variant="text"
//       className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
//     >
//       <Eye className="h-5 w-5" />
//     </IconButton>

//   </td>}

// {[2].includes(user?.role) &&
//   <td className={classes}>
//     <IconButton
//       onClick={() => navigate(`/super-admin-dashboard/super-admin-home-page/super-admin-vehicle-book/vehicle-book-invoice/${_id}`)}
//       variant="text"
//       className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
//     >
//       <Eye className="h-5 w-5" />
//     </IconButton>

//   </td>
// }


//                       </tr>
//                     );
//                   },
//                 )}
//               </tbody>

//               {/* <pre>{JSON.stringify(data.orders, null, 2)}</pre> */}
//             </table>
//           )

//         }

//       </div>
//       <div className="flex items-center justify-between border-t border-green-300 p-4">
//         <Typography variant="small" color="blue-gray" className="font-normal">
//           {/* Page {page} of {Math.ceil((cities?.totalCities ?? 0) / limit)} */}
//           Page 1 of 2
//         </Typography>
//         <div className="flex gap-2">
//           <Button
//             variant=""
//             size="sm"
//             className="hover:bg-green-50 active:bg-green-50 focus:bg-green-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-green-200 "
//           // onClick={handlePrevious} 
//           // disabled={page === 1}
//           >
//             Previous
//           </Button>

//           <Button
//             variant=""
//             size="sm"
//             className=" hover:shadow-none shadow-none   bg-green-500 "
//           // onClick={handleNext}
//           // disabled={page === Math.ceil((cities?.totalCities ?? 0) / limit)}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { ArrowPathIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, ListBulletIcon, MagnifyingGlassIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import {
  Input,
  Typography,
  Button,
  Spinner,
  Chip,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useGetOrdersQuery } from "../../../redux/slices/orderApiSlice";
import { useNavigate } from "react-router-dom";
import { Eye, } from "lucide-react"; // Import icons for toggle button
import CancelRideModal from "./modal/CancelRideModal";
import ShowLocationModal from "./modal/ShowLocationModal";
import authService from "../../../services/authService";
import VerifyRideModal from "./modal/VerifyRideModal";
import RatingBadge from "../../vehicle/RatingBadge";
import ViewSettlementProofModal from "./modal/ViewSettlementProofModal";

export default function SuccessBookedVehicleTranscation() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [viewType, setViewType] = useState(() => {
    // Initialize from localStorage or default to 'table'
    return localStorage.getItem("viewType") || "table";
  });

  const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status


  const user = authService.getCurrentUser();
  const navigate = useNavigate();

  const { data, error, isLoading, refetch, isError } = useGetOrdersQuery();

  const TABLE_HEAD = [
    "S.No",
    "Vehicle Image",
    "Vehicle Name",
    "Vehicle Number",
    "Payment Status",
    "View Location",
    ...(user?.role === 15 ? ["Cancel Ride"] : []),
    // ...(user?.role === 14 ? ["Verify Otp"] : []),
    ...(user?.role === 14 ? ["Settle Status"] : []),
    ...(user?.role === 14 ? ["Settlement"] : []),
    "View Invoice",
  ];

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

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="rounded-none  border-b border-green-300 px-2 py-1">
        <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              All Vehicle Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal app-font">
              See information about all vehicle transactions
            </Typography>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <div className=" w-full md:w-72">
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
                      <Typography variant="small" color="blue-gray" className="font-bold leading-none text-green-700">
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.orders?.map(({ _id, vehicle, status, settlementProofImage, settlementAmount, settlementDate, settlementPlatformUsed, settlementTransactionId }, index) => {
                  const { vehicleImage, vehicleNumber, vehicleName, vehiclePrice, settled } = vehicle || {};
                  const isLast = index === data?.orders?.length - 1;
                  const classes = isLast
                    ? "px-5 border-l border-r border-b border-green-300"
                    : "px-5 border-l border-r border-b border-green-300";

                  return (
                    <tr key={index} className="hover:bg-green-50/50 cursor-pointer">
                      <td className={classes}>
                        <Typography variant="small" className="font-normal app-font">
                          {index + 1 + (page - 1) * limit}.
                        </Typography>
                      </td>
                      <td className={classes}>
                        <img className="w-10 h-10" src={vehicleImage?.[0]?.url} alt={vehicleName} />
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="font-normal app-font capitalize text-black">
                          {vehicleName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal app-font capitalize text-black">
                          {vehicleNumber}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Chip size="sm" variant="ghost" value={status} color={status === "failed" ? "red" : status === "pending" ? "orange" : "green"} className="px-3 text-center w-28" />
                      </td>
                      <td className={classes}>
                        <ShowLocationModal vehicle={vehicle} />
                      </td>
                      {/* Add further cells based on the user role */}
                      <td className={classes} hidden={[2, 3, 14].includes(user?.role)}>
                        <CancelRideModal id={_id} vehicleBasePrice={vehiclePrice} />
                      </td>

                      {/* <td className={classes} hidden={[2, 3, 15].includes(user?.role)}>
                        <VerifyRideModal vehicle={vehicle} />
                      </td> */}

                      {[15].includes(user?.role) && <td className={classes}>
                        <IconButton
                          onClick={() => navigate(`/user-dashboard/user-home-page/user-vehicle-book/vehicle-book-invoice/${_id}`)}
                          variant="text"
                          className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                        >
                          <Eye className="h-5 w-5" />
                        </IconButton>

                      </td>
                      }


                      {[14].includes(user?.role) &&
                        <td className={classes}>

                          <Chip
                            size="sm"
                            variant="ghost"
                            value={settled === false ? "pending" : "fullfill"}
                            color={
                              settled === false ? "red" :
                                "green"
                            }

                            className="px-3 text-center w-28"
                          />

                        </td>}


                      {[14].includes(user?.role) &&
                        <td className={classes}>
                          <ViewSettlementProofModal
                            settlementProofImage={settlementProofImage}
                            settlementAmount={settlementAmount}
                            settlementDate={settlementDate}
                            settlementPlatformUsed={settlementPlatformUsed}
                            settlementTransactionId={settlementTransactionId}
                          />
                        </td>}

                      {[14].includes(user?.role) &&
                        <td className={classes}>
                          <IconButton
                            onClick={() => navigate(`/shop-owner-dashboard/shop-owner-home-page/shop-owner-vehicle-book/vehicle-book-invoice/${_id}`)}
                            variant="text"
                            className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                          >
                            <Eye className="h-5 w-5" />
                          </IconButton>

                        </td>}


                      {[2].includes(user?.role) &&
                        <td className={classes}>
                          <IconButton
                            onClick={() => navigate(`/super-admin-dashboard/super-admin-home-page/super-admin-vehicle-book/vehicle-book-invoice/${_id}`)}
                            variant="text"
                            className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                          >
                            <Eye className="h-5 w-5" />
                          </IconButton>
                        </td>
                      }
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data?.orders?.map(({ _id, vehicle, status, settlementProofImage, settlementAmount, settlementDate, settlementPlatformUsed, settlementTransactionId }, index) => {
                const { vehicleImage, vehicleNumber, vehicleName, vehiclePrice, settled } = vehicle || {};
                return (
                  <div key={index} className="p-4 border border-green-200 rounded-lg ">
                    <img className="w-full  h-44 object-cover rounded-md" src={vehicleImage?.[0]?.url} alt={vehicleName} />
                    <div className="mt-2">
                      <Typography variant="h6" className="capitalize font-bold text-green-700">
                        {vehicleName}
                      </Typography>

                      <Typography variant="body2" className="capitalize text-gray-900 app-font">
                        {vehicleNumber}
                      </Typography>



                      <div className="flex items-center justify-between mt-2">
                        <Typography variant="body2" className="capitalize text-gray-900 app-font">
                          ₹ {vehiclePrice}
                        </Typography>

                        <RatingBadge vehicleRatings={vehicle?.vehicleRatings} />

                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <h1 className=" font-bold">Payment Status: </h1>
                        <Chip size="sm" variant="ghost" value={status} color={status === "failed" ? "red" : status === "pending" ? "orange" : "green"} className="px-3 text-center w-28" />
                      </div>

                      {[14].includes(user?.role) &&

                        <div className="flex justify-between items-center mt-2">
                          <h1 className=" font-bold">Settlement Status: </h1>
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={settled === false ? "pending" : "fullfill"}
                            color={
                              settled === false ? "red" :
                                "green"
                            }

                            className="px-3 text-center w-28"
                          />
                        </div>
                      }


                      <div className="flex items-center bg-green-50 rounded-b-lg mt-3 justify-between">
                        <td>
                          <Tooltip text="Location">
                          <ShowLocationModal vehicle={vehicle} />
                          </Tooltip>
                        </td>

                        {/* Add further cells based on the user role */}
                        <td hidden={[2, 3, 14].includes(user?.role)}>
                          <Tooltip text="Cancel Ride">
                            <CancelRideModal id={_id} vehicleBasePrice={vehiclePrice} />
                          </Tooltip>
                        </td>

                        {/* <td hidden={[2, 3, 15].includes(user?.role)}>
                          <Tooltip text="Verify Ride">
                            <VerifyRideModal vehicle={vehicle} />
                          </Tooltip>
                        </td> */}

                        {[15].includes(user?.role) && (
                          <td>
                            <Tooltip text="View Invoice">
                              <IconButton
                                onClick={() =>
                                  navigate(
                                    `/user-dashboard/user-home-page/user-vehicle-book/vehicle-book-invoice/${_id}`
                                  )
                                }
                                variant="text"
                                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                              >
                                <Eye className="h-5 w-5" />
                              </IconButton>
                            </Tooltip>
                          </td>
                        )}

                        {[14].includes(user?.role) && (
                          <>
                            <td>
                              <Tooltip text="Settlement Proof">
                                <ViewSettlementProofModal
                                  settlementProofImage={settlementProofImage}
                                  settlementAmount={settlementAmount}
                                  settlementDate={settlementDate}
                                  settlementPlatformUsed={settlementPlatformUsed}
                                  settlementTransactionId={settlementTransactionId}
                                />
                              </Tooltip>
                            </td>
                            <td>
                              <Tooltip text="View Invoice">
                                <IconButton
                                  onClick={() =>
                                    navigate(
                                      `/shop-owner-dashboard/shop-owner-home-page/shop-owner-vehicle-book/vehicle-book-invoice/${_id}`
                                    )
                                  }
                                  variant="text"
                                  className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                                >
                                  <Eye className="h-5 w-5" />
                                </IconButton>
                              </Tooltip>
                            </td>
                          </>
                        )}

                        {[2].includes(user?.role) && (
                          <td>
                            <Tooltip text="View Invoice">
                              <IconButton
                                onClick={() =>
                                  navigate(
                                    `/super-admin-dashboard/super-admin-home-page/super-admin-vehicle-book/vehicle-book-invoice/${_id}`
                                  )
                                }
                                variant="text"
                                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                              >
                                <Eye className="h-5 w-5" />
                              </IconButton>
                            </Tooltip>
                          </td>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
}


const Tooltip = ({ children, text }) => (
  <div className="relative group">
    {children}
    <div className="absolute bottom-full w-[7em] text-center left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 shadow-lg">
      {text}
    </div>
  </div>
);
