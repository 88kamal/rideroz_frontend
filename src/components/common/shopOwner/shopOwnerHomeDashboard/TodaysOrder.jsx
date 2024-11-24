/* eslint-disable react/no-unescaped-entities */
import { Eye, View } from "lucide-react";
import VerifyRideModal from "../../bookedVehicles/modal/VerifyRideModal";
import { Chip, IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion"; // Import Framer Motion
import { useGetShopStatsQuery } from "../../../../redux/slices/shopApiSlice";
import authService from "../../../../services/authService";
import { useNavigate } from "react-router-dom";

const orders = [
    { id: 1, customer: "1234", price: "345", status: "success" },
    { id: 2, customer: "1234", price: "345", status: "success" },
    { id: 3, customer: "1234", price: "345", status: "success" },
    { id: 4, customer: "1234", price: "345", status: "success" },
    { id: 5, customer: "1234", price: "345", status: "success" },
    { id: 6, customer: "1234", price: "345", status: "success" },
];

const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.1, // Stagger animation for each row
        },
    }),
};

const OrderDashboard = () => {
    const user = authService.getCurrentUser();
    const navigate = useNavigate();
    const shopId = user?.id
    const { data, error, isLoading, refetch } = useGetShopStatsQuery({ shopId, year: "2024", month: "11" });
    return (
        <div className="bg-green-50 p-2.5 border border-green-400 rounded-lg w-full">
            {/* <pre>{JSON.stringify(data?.todayOrders, null, 2)}</pre> */}
            <header className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Today's Orders</h1>
            </header>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="overflow-y-scroll h-64 bg-green-50 rounded-lg border border-green-400"
            >
                <table className="min-w-full border-collapse">
                    <thead className="bg-green-100 sticky top-0 lg:z-50 border-b border-green-400">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-r border-green-400">
                                S.No.
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-r border-green-400">
                                Number
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-r border-green-400">
                                Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-r border-green-400">
                                Payment Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-r border-green-400">
                                Pickup Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-r border-green-400">
                                Verify Otp
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-black uppercase tracking-wider">
                                Invoice
                            </th>
                        </tr>
                    </thead>

                    <motion.tbody
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {data?.todayOrders?.map((order, index) => (
                            <motion.tr
                                key={order.id}
                                className={`hover:bg-gray-100 cursor-pointer  transition-colors ${index > 0 ? "border-t border-green-400" : ""}`}
                                variants={rowVariants}
                                custom={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <td className="px-6 text-sm text-black border-r border-green-400">
                                    {index + 1}.
                                </td>
                                <td className="px-6 text-sm text-black border-r border-green-400">
                                    {order?.vehicleDetails?.vehicleNumber}
                                </td>
                                <td className="px-6 text-sm text-black border-r border-green-400">
                                    ₹ {order?.vehicleDetails?.vehiclePrice}
                                </td>
                                <td className="px-6 text-sm border-r border-green-400">
                                    <Chip
                                        size="sm"
                                        variant="ghost"
                                        value={order?.status}
                                        color={
                                            order?.status === "failed"
                                                ? "red"
                                                : order?.status === "pending"
                                                    ? "orange"
                                                    : "green"
                                        }
                                        className="px-3 text-center w-28"
                                    />
                                </td>
                                <td className="px-6 text-sm text-black border-r border-green-400">
                                    <Chip
                                        size="sm"
                                        variant="ghost"
                                        value={order?.rideConfirmed === false ? "pending" : "success"}
                                        color={order?.rideConfirmed === true ? "green" : "red"}
                                        className="px-3 text-center w-28"
                                    />
                                </td>
                                <td className="px-6 text-sm text-black border-r border-green-400">
                                    <VerifyRideModal orderId={order?._id} refetch={refetch} rideConfirmed={order?.rideConfirmed} />
                                </td>

                                <td className="px-6 text-right text-sm text-black">

                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >

                                        {[14].includes(user?.role) &&
                                            <IconButton
                                                onClick={() => navigate(`/shop-owner-dashboard/shop-owner-home-page/shop-owner-vehicle-book/vehicle-book-invoice/${order?._id}`)}
                                                variant="text"
                                                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                                            >
                                                <Eye className="h-5 w-5" />
                                            </IconButton>

                                        }



                                    </motion.div>
                                </td>
                            </motion.tr>
                        ))}
                    </motion.tbody>
                </table>
            </motion.div>
        </div>
    );
};

export default OrderDashboard;
