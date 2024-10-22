// // // // // // // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // //     Button,
// // // // // // // // // // // // // // //     Dialog,
// // // // // // // // // // // // // // //     DialogHeader,
// // // // // // // // // // // // // // //     DialogBody,
// // // // // // // // // // // // // // //     DialogFooter,
// // // // // // // // // // // // // // //     IconButton,
// // // // // // // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // // // // // // import { SquarePen } from "lucide-react";
// // // // // // // // // // // // // // // import { useUpdateVehicleAvailabilityMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // // // // // // // // // // // // import toast from "react-hot-toast";

// // // // // // // // // // // // // // // export default function UpdateAvailabilityModal({ id, vehicleAvailability }) {
// // // // // // // // // // // // // // //     const [open, setOpen] = useState(false);

// // // // // // // // // // // // // // //     const handleOpen = () => setOpen(!open);


// // // // // // // // // // // // // // //     const [updateAvailability, { isLoading, isError, isSuccess, data, error }] = useUpdateVehicleAvailabilityMutation();

// // // // // // // // // // // // // // //     const handleUpdate = async () => {
// // // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // // //             await updateAvailability({ id, vehicleAvailability: vehicleAvailability === false ? true : false }).unwrap();
// // // // // // // // // // // // // // //         } catch (error) {
// // // // // // // // // // // // // // //             console.log('Failed to update availability:', error);
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // useEffect(() => {
// // // // // // // // // // // // // // //     if (isError) {
// // // // // // // // // // // // // // //         toast.error(error?.data?.error || 'Failed to update availability , please try again');
// // // // // // // // // // // // // // //         handleOpen()
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     if (isSuccess) {
// // // // // // // // // // // // // // //         toast.success(data?.message);

// // // // // // // // // // // // // // //         handleOpen()

// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // }, [isError, error, isSuccess, data]);

// // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // //         <>
// // // // // // // // // // <IconButton
// // // // // // // // // //     onClick={handleOpen}
// // // // // // // // // //     variant="text"
// // // // // // // // // //     className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // // // // // // // // // >
// // // // // // // // // //     <SquarePen className="h-4 w-4" />
// // // // // // // // // // </IconButton>

// // // // // // // // // // // // // // //             <Dialog open={open} className="shadow-none hover:shadow-none rounded-none bg-green-100 rounded-md">
// // // // // // // // // // // // // // //                 <DialogHeader>Are you sure?</DialogHeader>
// // // // // // // // // // // // // // //                 <DialogBody>
// // // // // // // // // // // // // // //                     <p className="app-font text-black">
// // // // // // // // // // // // // // //                         Do you really want to Change this Availability?
// // // // // // // // // // // // // // //                     </p>

// // // // // // // // // // // // // // //                 </DialogBody>
// // // // // // // // // // // // // // //                 <DialogFooter>
// // // // // // // // // // // // // // //                     <Button
// // // // // // // // // // // // // // //                         variant="text"
// // // // // // // // // // // // // // //                         color="red"
// // // // // // // // // // // // // // //                         onClick={handleOpen}
// // // // // // // // // // // // // // //                         className="mr-1"
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                         <span>Cancel</span>
// // // // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // // // //                     <Button
// // // // // // // // // // // // // // //                         variant="gradient"
// // // // // // // // // // // // // // //                         color="green"
// // // // // // // // // // // // // // //                         onClick={handleUpdate}
// // // // // // // // // // // // // // //                         disabled={isLoading} // Disable the button if text doesn't match
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                         <span>Confirm</span>
// // // // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // // // //                 </DialogFooter>
// // // // // // // // // // // // // // //             </Dialog>
// // // // // // // // // // // // // // //         </>
// // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // // // // import {
// // // // // // // // // // // // // //     Button,
// // // // // // // // // // // // // //     Dialog,
// // // // // // // // // // // // // //     DialogHeader,
// // // // // // // // // // // // // //     DialogBody,
// // // // // // // // // // // // // //     DialogFooter,
// // // // // // // // // // // // // //     IconButton,
// // // // // // // // // // // // // //     Input,
// // // // // // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // // // // // import { SquarePen } from "lucide-react";
// // // // // // // // // // // // // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // // // // // // // // // // // import toast from "react-hot-toast";

// // // // // // // // // // // // // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // // // // // // // // // // // // //     const [open, setOpen] = useState(false);

// // // // // // // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // // // // // // //     const [formData, setFormData] = useState({
// // // // // // // // // // // // // //         startDate: '',
// // // // // // // // // // // // // //         endDate: '',
// // // // // // // // // // // // // //         startTime: '',
// // // // // // // // // // // // // //         endTime: '',
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // // // // // // // // // // // // //     const handleChange = (e) => {
// // // // // // // // // // // // // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     const handleSubmit = async (e) => {
// // // // // // // // // // // // // //         e.preventDefault();
// // // // // // // // // // // // // //         try {
// // // // // // // // // // // // // //             await bookWalkin({ vehicleId: id, ...formData }).unwrap();
// // // // // // // // // // // // // //         } catch (error) {

// // // // // // // // // // // // // //             console.log(error)
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //     };


// // // // // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // // // // //         if (isError) {
// // // // // // // // // // // // // //             toast.error(error?.data?.error || 'Failed to update availability , please try again');
// // // // // // // // // // // // // //             handleOpen()
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         if (isSuccess) {
// // // // // // // // // // // // // //             toast.success(data?.message);
// // // // // // // // // // // // // //             refetch()
// // // // // // // // // // // // // //             handleOpen()

// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //     }, [isError, error, isSuccess, data]);

// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //         <>
// // // // // // // // // // // // // //             <IconButton
// // // // // // // // // // // // // //                 onClick={handleOpen}
// // // // // // // // // // // // // //                 variant="text"
// // // // // // // // // // // // // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //                 <SquarePen className="h-4 w-4" />
// // // // // // // // // // // // // //             </IconButton>

// // // // // // // // // // // // // //             <Dialog open={open} className="shadow-none hover:shadow-none rounded-none bg-green-100 rounded-md">
// // // // // // // // // // // // // //                 <DialogHeader>Are you sure?</DialogHeader>
// // // // // // // // // // // // // //                 <DialogBody>
// // // // // // // // // // // // // //                     <form>
// // // // // // // // // // // // // //                         <div className="mb-3">
// // // // // // // // // // // // // //                             <Input
// // // // // // // // // // // // // //                                 label="Pickup Date"
// // // // // // // // // // // // // //                                 type="date"
// // // // // // // // // // // // // //                                 name="startDate"
// // // // // // // // // // // // // //                                 value={formData.startDate}
// // // // // // // // // // // // // //                                 onChange={handleChange}
// // // // // // // // // // // // // //                                 required
// // // // // // // // // // // // // //                             />
// // // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // // //                         <div className="mb-3">
// // // // // // // // // // // // // //                             <Input
// // // // // // // // // // // // // //                                 label="Drop off Date"
// // // // // // // // // // // // // //                                 type="date"
// // // // // // // // // // // // // //                                 name="endDate"
// // // // // // // // // // // // // //                                 value={formData.endDate}
// // // // // // // // // // // // // //                                 onChange={handleChange}
// // // // // // // // // // // // // //                                 required
// // // // // // // // // // // // // //                             />
// // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // //                         <div className="mb-3">
// // // // // // // // // // // // // //                             <Input
// // // // // // // // // // // // // //                                 label="Pickup Time"
// // // // // // // // // // // // // //                                 type="time"
// // // // // // // // // // // // // //                                 name="startTime"
// // // // // // // // // // // // // //                                 value={formData.startTime}
// // // // // // // // // // // // // //                                 onChange={handleChange}
// // // // // // // // // // // // // //                                 required
// // // // // // // // // // // // // //                             />
// // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // //                         <div className="">
// // // // // // // // // // // // // //                             <Input
// // // // // // // // // // // // // //                                 label="Drop Off Time"
// // // // // // // // // // // // // //                                 type="time"
// // // // // // // // // // // // // //                                 name="endTime"
// // // // // // // // // // // // // //                                 value={formData.endTime}
// // // // // // // // // // // // // //                                 onChange={handleChange}
// // // // // // // // // // // // // //                                 required
// // // // // // // // // // // // // //                             />
// // // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // // //                     </form>
// // // // // // // // // // // // // //                 </DialogBody>
// // // // // // // // // // // // // //                 <DialogFooter>
// // // // // // // // // // // // // //                     <Button
// // // // // // // // // // // // // //                         variant="text"
// // // // // // // // // // // // // //                         color="red"
// // // // // // // // // // // // // //                         onClick={handleOpen}
// // // // // // // // // // // // // //                         className="mr-1"
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                         <span>Cancel</span>
// // // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // // //                     <Button
// // // // // // // // // // // // // //                         variant="gradient"
// // // // // // // // // // // // // //                         color="green"
// // // // // // // // // // // // // //                         onClick={handleSubmit}
// // // // // // // // // // // // // //                         disabled={isLoading} // Disable the button if text doesn't match
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // // //                 </DialogFooter>
// // // // // // // // // // // // // //             </Dialog>
// // // // // // // // // // // // // //         </>
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // }


// // // // // // // /* eslint-disable react/prop-types */
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import {
// // // // // // //     Button,
// // // // // // //     Dialog,

// // // // // // //     DialogFooter,
// // // // // // //     IconButton,
// // // // // // //     Input,
// // // // // // // } from "@material-tailwind/react";
// // // // // // // import { SquarePen } from "lucide-react";
// // // // // // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // // // // import toast from "react-hot-toast";
// // // // // // // import dayjs from "dayjs";

// // // // // // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // // // // // //     const [open, setOpen] = useState(false);

// // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // //     const [formData, setFormData] = useState({
// // // // // // //         startDate: '',
// // // // // // //         endDate: '',
// // // // // // //         startTime: '',
// // // // // // //         endTime: '',
// // // // // // //     });
// // // // // // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // // // // // //     const handleChange = (e) => {
// // // // // // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // // // //     };

// // // // // // //     const handleSubmit = async (e) => {
// // // // // // //         e.preventDefault();
// // // // // // //         try {
// // // // // // //             await bookWalkin({ vehicleId: id, ...formData }).unwrap();
// // // // // // //         } catch (error) {
// // // // // // //             console.log(error)
// // // // // // //         }
// // // // // // //     };

// // // // // // //     useEffect(() => {
// // // // // // //         if (isError) {
// // // // // // //             toast.error(error?.data?.error || 'Failed to update availability , please try again');
// // // // // // //             handleOpen()
// // // // // // //         }

// // // // // // //         if (isSuccess) {
// // // // // // //             toast.success(data?.message);
// // // // // // //             refetch()
// // // // // // //             handleOpen()

// // // // // // //         }
// // // // // // //     }, [isError, error, isSuccess, data]);

// // // // // // //     return (
// // // // // // //         <>
// // // // // // //             <IconButton
// // // // // // //                 onClick={handleOpen}
// // // // // // //                 variant="text"
// // // // // // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // // // // // //             >
// // // // // // //                 <SquarePen className="h-4 w-4" />
// // // // // // //             </IconButton>

// // // // // // //             <Dialog open={open} className="shadow-none hover:shadow-none rounded-none bg-green-100 rounded-md">

// // // // // // //                 <div>
// // // // // // //                     {/* <pre>{JSON.stringify(,null,2)}</pre> */}
// // // // // // //                     {/* Section for displaying booked dates */}
// // // // // // //                     <div className="mb-4">
// // // // // // //                         <h3 className="font-bold mb-2">Booked Dates</h3>
// // // // // // //                         <div className="space-y-2">
// // // // // // //                             {bookedDates.map((date) => (
// // // // // // //                                 <div
// // // // // // //                                     key={date._id}
// // // // // // //                                     className="flex justify-between items-center p-2 rounded-md app-font"
// // // // // // //                                     style={{
// // // // // // //                                         backgroundColor: 'red', // Red for booked
// // // // // // //                                         color: "white"
// // // // // // //                                     }}
// // // // // // //                                 >
// // // // // // //                                     <div>
// // // // // // //                                         <span className="font-semibold">From: </span>
// // // // // // //                                         {dayjs(date.startDate).format('DD/MM/YYYY, hh:mm A')}
// // // // // // //                                     </div>
// // // // // // //                                     <div>
// // // // // // //                                         <span className="font-semibold">To: </span>
// // // // // // //                                         {dayjs(date.endDate).format('DD/MM/YYYY, hh:mm A')}
// // // // // // //                                     </div>
// // // // // // //                                 </div>
// // // // // // //                             ))}
// // // // // // //                         </div>

// // // // // // //                         {/* Color hint for user */}
// // // // // // //                         <div className="mt-2 text-sm">
// // // // // // //                             <p className="text-red-500">Red: Date is booked</p>
// // // // // // //                             {/* You can add more hints here for other statuses */}
// // // // // // //                         </div>
// // // // // // //                     </div>

// // // // // // //                     {/* Form for adding new booking */}
// // // // // // //                     <form>
// // // // // // //                         <div className="mb-3">
// // // // // // //                             <Input
// // // // // // //                                 label="Pickup Date"
// // // // // // //                                 type="date"
// // // // // // //                                 name="startDate"
// // // // // // //                                 value={formData.startDate}
// // // // // // //                                 onChange={handleChange}
// // // // // // //                                 required
// // // // // // //                             />
// // // // // // //                         </div>

// // // // // // //                         <div className="mb-3">
// // // // // // //                             <Input
// // // // // // //                                 label="Drop off Date"
// // // // // // //                                 type="date"
// // // // // // //                                 name="endDate"
// // // // // // //                                 value={formData.endDate}
// // // // // // //                                 onChange={handleChange}
// // // // // // //                                 required
// // // // // // //                             />
// // // // // // //                         </div>
// // // // // // //                         <div className="mb-3">
// // // // // // //                             <Input
// // // // // // //                                 label="Pickup Time"
// // // // // // //                                 type="time"
// // // // // // //                                 name="startTime"
// // // // // // //                                 value={formData.startTime}
// // // // // // //                                 onChange={handleChange}
// // // // // // //                                 required
// // // // // // //                             />
// // // // // // //                         </div>
// // // // // // //                         <div className="">
// // // // // // //                             <Input
// // // // // // //                                 label="Drop Off Time"
// // // // // // //                                 type="time"
// // // // // // //                                 name="endTime"
// // // // // // //                                 value={formData.endTime}
// // // // // // //                                 onChange={handleChange}
// // // // // // //                                 required
// // // // // // //                             />
// // // // // // //                         </div>
// // // // // // //                     </form>
// // // // // // //                 </div>
// // // // // // //                 <DialogFooter>
// // // // // // //                     <Button
// // // // // // //                         variant="text"
// // // // // // //                         color="red"
// // // // // // //                         onClick={handleOpen}
// // // // // // //                         className="mr-1"
// // // // // // //                     >
// // // // // // //                         <span>Cancel</span>
// // // // // // //                     </Button>
// // // // // // //                     <Button
// // // // // // //                         variant="gradient"
// // // // // // //                         color="green"
// // // // // // //                         onClick={handleSubmit}
// // // // // // //                         disabled={isLoading}
// // // // // // //                     >
// // // // // // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // // // // // //                     </Button>
// // // // // // //                 </DialogFooter>
// // // // // // //             </Dialog>
// // // // // // //         </>
// // // // // // //     );
// // // // // // // }

// // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import {
// // // // // // // //     Button,
// // // // // // // //     Dialog,
// // // // // // // //     DialogHeader,
// // // // // // // //     DialogBody,
// // // // // // // //     DialogFooter,
// // // // // // // //     IconButton,
// // // // // // // // } from "@material-tailwind/react";
// // // // // // // // import { SquarePen } from "lucide-react";
// // // // // // // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // // // // // import toast from "react-hot-toast";
// // // // // // // // import dayjs from "dayjs";
// // // // // // // // import DatePicker from "react-datepicker";
// // // // // // // // import "react-datepicker/dist/react-datepicker.css";

// // // // // // // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // // // // // // //     const [open, setOpen] = useState(false);

// // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // //     const [formData, setFormData] = useState({
// // // // // // // //         startDate: null,
// // // // // // // //         endDate: null,
// // // // // // // //     });
// // // // // // // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // // // // // // //     const handleSubmit = async (e) => {
// // // // // // // //         e.preventDefault();
// // // // // // // //         try {
// // // // // // // //             await bookWalkin({ 
// // // // // // // //                 vehicleId: id, 
// // // // // // // //                 startDate: formData.startDate.toISOString(), 
// // // // // // // //                 endDate: formData.endDate.toISOString()
// // // // // // // //             }).unwrap();
// // // // // // // //         } catch (error) {
// // // // // // // //             console.log(error);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     useEffect(() => {
// // // // // // // //         if (isError) {
// // // // // // // //             toast.error(error?.data?.error || 'Failed to update availability, please try again');
// // // // // // // //             handleOpen();
// // // // // // // //         }

// // // // // // // //         if (isSuccess) {
// // // // // // // //             toast.success(data?.message);
// // // // // // // //             refetch();
// // // // // // // //             handleOpen();
// // // // // // // //         }
// // // // // // // //     }, [isError, error, isSuccess, data]);

// // // // // // // //     return (
// // // // // // // //         <>
// // // // // // // //             <IconButton
// // // // // // // //                 onClick={handleOpen}
// // // // // // // //                 variant="gradient"
// // // // // // // //                 className="hover:bg-blue-500 text-blue-600 rounded-full p-2 transition-all duration-300"
// // // // // // // //             >
// // // // // // // //                 <SquarePen className="h-4 w-4" />
// // // // // // // //             </IconButton>

// // // // // // // //             <Dialog open={open} className="shadow-lg hover:shadow-2xl rounded-lg bg-white">
// // // // // // // //                 <DialogHeader className="text-xl text-gray-900 font-bold">
// // // // // // // //                     Update Availability
// // // // // // // //                 </DialogHeader>

// // // // // // // //                 <DialogBody className="p-6">
// // // // // // // //                     {/* Section for displaying booked dates */}
// // // // // // // //                     <div className="mb-4">
// // // // // // // //                         <h3 className="font-semibold mb-2 text-gray-700">Booked Dates</h3>
// // // // // // // //                         <div className="space-y-2">
// // // // // // // //                             {bookedDates.map((date) => (
// // // // // // // //                                 <div
// // // // // // // //                                     key={date._id}
// // // // // // // //                                     className="flex justify-between items-center p-3 rounded-lg shadow-md bg-red-500 text-white"
// // // // // // // //                                 >
// // // // // // // //                                     <div>
// // // // // // // //                                         <span className="font-semibold">From: </span>
// // // // // // // //                                         {dayjs(date.startDate).format('DD/MM/YYYY, hh:mm A')}
// // // // // // // //                                     </div>
// // // // // // // //                                     <div>
// // // // // // // //                                         <span className="font-semibold">To: </span>
// // // // // // // //                                         {dayjs(date.endDate).format('DD/MM/YYYY, hh:mm A')}
// // // // // // // //                                     </div>
// // // // // // // //                                 </div>
// // // // // // // //                             ))}
// // // // // // // //                         </div>

// // // // // // // //                         {/* Color hint for user */}
// // // // // // // //                         <div className="mt-2 text-sm">
// // // // // // // //                             <p className="text-red-500">Red: Date is booked</p>
// // // // // // // //                             {/* You can add more hints here for other statuses */}
// // // // // // // //                         </div>
// // // // // // // //                     </div>

// // // // // // // //                     {/* Form for adding new booking */}
// // // // // // // //                     <form className="space-y-4">
// // // // // // // //                         <div>
// // // // // // // //                             <label className="block text-gray-700 mb-2">Pickup Date & Time</label>
// // // // // // // //                             <DatePicker
// // // // // // // //                                 selected={formData.startDate}
// // // // // // // //                                 onChange={(date) => setFormData({ ...formData, startDate: date })}
// // // // // // // //                                 showTimeSelect
// // // // // // // //                                 dateFormat="Pp"
// // // // // // // //                                 placeholderText="Select pickup date & time"
// // // // // // // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // //                             />
// // // // // // // //                         </div>

// // // // // // // //                         <div>
// // // // // // // //                             <label className="block text-gray-700 mb-2">Drop off Date & Time</label>
// // // // // // // //                             <DatePicker
// // // // // // // //                                 selected={formData.endDate}
// // // // // // // //                                 onChange={(date) => setFormData({ ...formData, endDate: date })}
// // // // // // // //                                 showTimeSelect
// // // // // // // //                                 dateFormat="Pp"
// // // // // // // //                                 placeholderText="Select drop off date & time"
// // // // // // // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // //                             />
// // // // // // // //                         </div>
// // // // // // // //                     </form>
// // // // // // // //                 </DialogBody>

// // // // // // // //                 <DialogFooter className="p-4 flex justify-end">
// // // // // // // //                     <Button
// // // // // // // //                         variant="text"
// // // // // // // //                         color="red"
// // // // // // // //                         onClick={handleOpen}
// // // // // // // //                         className="mr-3 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-200 transition duration-300"
// // // // // // // //                     >
// // // // // // // //                         Cancel
// // // // // // // //                     </Button>
// // // // // // // //                     <Button
// // // // // // // //                         variant="gradient"
// // // // // // // //                         color="blue"
// // // // // // // //                         onClick={handleSubmit}
// // // // // // // //                         disabled={isLoading}
// // // // // // // //                         className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300"
// // // // // // // //                     >
// // // // // // // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // // // // // // //                     </Button>
// // // // // // // //                 </DialogFooter>
// // // // // // // //             </Dialog>
// // // // // // // //         </>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // import {
// // // // // // // // // // //     Button,
// // // // // // // // // // //     Dialog,
// // // // // // // // // // //     DialogHeader,
// // // // // // // // // // //     DialogBody,
// // // // // // // // // // //     DialogFooter,
// // // // // // // // // // //     IconButton,
// // // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // // import { SquarePen } from "lucide-react";
// // // // // // // // // // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // // // // // // // // import toast from "react-hot-toast";
// // // // // // // // // // // import dayjs from "dayjs";
// // // // // // // // // // // import DatePicker from "react-datepicker";
// // // // // // // // // // // import "react-datepicker/dist/react-datepicker.css";

// // // // // // // // // // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // // // // // // // // // //     const [open, setOpen] = useState(false);

// // // // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // // // //     const [formData, setFormData] = useState({
// // // // // // // // // // //         startDate: null,
// // // // // // // // // // //         endDate: null,
// // // // // // // // // // //     });
// // // // // // // // // // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // // // // // // // // // //     const handleSubmit = async (e) => {
// // // // // // // // // // //         e.preventDefault();
// // // // // // // // // // //         try {
// // // // // // // // // // //             await bookWalkin({ 
// // // // // // // // // // //                 vehicleId: id, 
// // // // // // // // // // //                 startDate: formData.startDate.toISOString(), 
// // // // // // // // // // //                 endDate: formData.endDate.toISOString()
// // // // // // // // // // //             }).unwrap();
// // // // // // // // // // //         } catch (error) {
// // // // // // // // // // //             console.log(error);
// // // // // // // // // // //         }
// // // // // // // // // // //     };

// // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // //         if (isError) {
// // // // // // // // // // //             toast.error(error?.data?.error || 'Failed to update availability, please try again');
// // // // // // // // // // //             handleOpen();
// // // // // // // // // // //         }

// // // // // // // // // // //         if (isSuccess) {
// // // // // // // // // // //             toast.success(data?.message);
// // // // // // // // // // //             refetch();
// // // // // // // // // // //             handleOpen();
// // // // // // // // // // //         }
// // // // // // // // // // //     }, [isError, error, isSuccess, data]);

// // // // // // // // // // //     // Convert bookedDates to an array of ranges for react-datepicker's highlightDates
// // // // // // // // // // //     const bookedRanges = bookedDates.map((date) => ({
// // // // // // // // // // //         start: new Date(date.startDate),
// // // // // // // // // // //         end: new Date(date.endDate),
// // // // // // // // // // //     }));

// // // // // // // // // // //     return (
// // // // // // // // // // //         <>
// // // // // // // // // // <IconButton
// // // // // // // // // //     onClick={handleOpen}
// // // // // // // // // //     variant="gradient"
// // // // // // // // // //     className="hover:bg-blue-500 text-blue-600 rounded-full p-2 transition-all duration-300"
// // // // // // // // // // >
// // // // // // // // // //     <SquarePen className="h-4 w-4" />
// // // // // // // // // // </IconButton>

// // // // // // // // // // //             <Dialog open={open} className="shadow-lg hover:shadow-2xl rounded-lg bg-white">
// // // // // // // // // // //                 <DialogHeader className="text-xl text-gray-900 font-bold">
// // // // // // // // // // //                     Update Availability
// // // // // // // // // // //                 </DialogHeader>

// // // // // // // // // // //                 <DialogBody className="p-6">
// // // // // // // // // // //                     {/* Section for displaying booked dates */}
// // // // // // // // // // //                     <div className="mb-4">
// // // // // // // // // // //                         <h3 className="font-semibold mb-2 text-gray-700">Booked Dates</h3>
// // // // // // // // // // //                         <DatePicker
// // // // // // // // // // //                             inline
// // // // // // // // // // //                             selected={formData.startDate}
// // // // // // // // // // //                             onChange={(date) => setFormData({ ...formData, startDate: date })}
// // // // // // // // // // //                             highlightDates={bookedRanges}
// // // // // // // // // // //                             dayClassName={(date) => 
// // // // // // // // // // //                                 bookedRanges.some(
// // // // // // // // // // //                                     (range) => date >= range.start && date <= range.end
// // // // // // // // // // //                                 )
// // // // // // // // // // //                                     ? "bg-red-500 text-white rounded-full"
// // // // // // // // // // //                                     : undefined
// // // // // // // // // // //                             }
// // // // // // // // // // //                         />
// // // // // // // // // // //                         <div className="mt-2 text-sm">
// // // // // // // // // // //                             <p className="text-red-500">Red: Date is booked</p>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                     </div>

// // // // // // // // // // //                     {/* Form for adding new booking */}
// // // // // // // // // // //                     <form className="space-y-4">
// // // // // // // // // // //                         <div>
// // // // // // // // // // //                             <label className="block text-gray-700 mb-2">Pickup Date & Time</label>
// // // // // // // // // // //                             <DatePicker
// // // // // // // // // // //                                 selected={formData.startDate}
// // // // // // // // // // //                                 onChange={(date) => setFormData({ ...formData, startDate: date })}
// // // // // // // // // // //                                 showTimeSelect
// // // // // // // // // // //                                 dateFormat="Pp"
// // // // // // // // // // //                                 placeholderText="Select pickup date & time"
// // // // // // // // // // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // // // // //                                 highlightDates={bookedRanges}
// // // // // // // // // // //                                 filterDate={(date) =>
// // // // // // // // // // //                                     !bookedRanges.some(
// // // // // // // // // // //                                         (range) => date >= range.start && date <= range.end
// // // // // // // // // // //                                     )
// // // // // // // // // // //                                 }
// // // // // // // // // // //                             />
// // // // // // // // // // //                         </div>

// // // // // // // // // // //                         <div>
// // // // // // // // // // //                             <label className="block text-gray-700 mb-2">Drop off Date & Time</label>
// // // // // // // // // // //                             <DatePicker
// // // // // // // // // // //                                 selected={formData.endDate}
// // // // // // // // // // //                                 onChange={(date) => setFormData({ ...formData, endDate: date })}
// // // // // // // // // // //                                 showTimeSelect
// // // // // // // // // // //                                 dateFormat="Pp"
// // // // // // // // // // //                                 placeholderText="Select drop off date & time"
// // // // // // // // // // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // // // // //                                 highlightDates={bookedRanges}
// // // // // // // // // // //                                 filterDate={(date) =>
// // // // // // // // // // //                                     !bookedRanges.some(
// // // // // // // // // // //                                         (range) => date >= range.start && date <= range.end
// // // // // // // // // // //                                     )
// // // // // // // // // // //                                 }
// // // // // // // // // // //                             />
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                     </form>
// // // // // // // // // // //                 </DialogBody>

// // // // // // // // // // //                 <DialogFooter className="p-4 flex justify-end">
// // // // // // // // // // //                     <Button
// // // // // // // // // // //                         variant="text"
// // // // // // // // // // //                         color="red"
// // // // // // // // // // //                         onClick={handleOpen}
// // // // // // // // // // //                         className="mr-3 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-200 transition duration-300"
// // // // // // // // // // //                     >
// // // // // // // // // // //                         Cancel
// // // // // // // // // // //                     </Button>
// // // // // // // // // // //                     <Button
// // // // // // // // // // //                         variant="gradient"
// // // // // // // // // // //                         color="blue"
// // // // // // // // // // //                         onClick={handleSubmit}
// // // // // // // // // // //                         disabled={isLoading}
// // // // // // // // // // //                         className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300"
// // // // // // // // // // //                     >
// // // // // // // // // // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // // // // // // // // // //                     </Button>
// // // // // // // // // // //                 </DialogFooter>
// // // // // // // // // // //             </Dialog>
// // // // // // // // // // //         </>
// // // // // // // // // // //     );
// // // // // // // // // // // }

// // // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // import {
// // // // // // // // // //     Button,
// // // // // // // // // //     Dialog,
// // // // // // // // // //     DialogHeader,
// // // // // // // // // //     DialogBody,
// // // // // // // // // //     DialogFooter,
// // // // // // // // // //     IconButton,
// // // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // // import { SquarePen } from "lucide-react";
// // // // // // // // // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // // // // // // // import toast from "react-hot-toast";
// // // // // // // // // // import dayjs from "dayjs";
// // // // // // // // // // import DatePicker from "react-datepicker";
// // // // // // // // // // import "react-datepicker/dist/react-datepicker.css";

// // // // // // // // // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // // // // // // // // //     const [open, setOpen] = useState(false);

// // // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // // //     const [formData, setFormData] = useState({
// // // // // // // // // //         startDate: '',
// // // // // // // // // //         endDate: '',
// // // // // // // // // //         startTime: '',
// // // // // // // // // //         endTime: '',
// // // // // // // // // //     });
// // // // // // // // // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // // // // // // // // //     const handleSubmit = async (e) => {
// // // // // // // // // //         e.preventDefault();
// // // // // // // // // //         try {
// // // // // // // // // //             await bookWalkin({
// // // // // // // // // //                 vehicleId: id,
// // // // // // // // // //                 startDate: dayjs(formData.startDate).format('YYYY-MM-DD'),
// // // // // // // // // //                 endDate: dayjs(formData.endDate).format('YYYY-MM-DD'),
// // // // // // // // // //                 startTime: dayjs(formData.startTime).format('HH:mm'),
// // // // // // // // // //                 endTime: dayjs(formData.endTime).format('HH:mm'),
// // // // // // // // // //             }).unwrap();
// // // // // // // // // //         } catch (error) {
// // // // // // // // // //             console.log(error);
// // // // // // // // // //         }
// // // // // // // // // //     };

// // // // // // // // // //     useEffect(() => {
// // // // // // // // // //         if (isError) {
// // // // // // // // // //             toast.error(error?.data?.error || 'Failed to update availability, please try again');
// // // // // // // // // //             handleOpen();
// // // // // // // // // //         }

// // // // // // // // // //         if (isSuccess) {
// // // // // // // // // //             toast.success(data?.message);
// // // // // // // // // //             refetch();
// // // // // // // // // //             handleOpen();
// // // // // // // // // //         }
// // // // // // // // // //     }, [isError, error, isSuccess, data]);

// // // // // // // // // //     // Convert bookedDates to an array of ranges for react-datepicker's highlightDates
// // // // // // // // // //     const bookedRanges = bookedDates.map((date) => ({
// // // // // // // // // //         start: new Date(date.startDate),
// // // // // // // // // //         end: new Date(date.endDate),
// // // // // // // // // //     }));

// // // // // // // // // //     return (
// // // // // // // // // //         <>
// // // // // // // // // //             <IconButton
// // // // // // // // // //                 onClick={handleOpen}
// // // // // // // // // //                 variant="gradient"
// // // // // // // // // //                 className="hover:bg-blue-500 text-blue-600 rounded-full p-2 transition-all duration-300"
// // // // // // // // // //             >
// // // // // // // // // //                 <SquarePen className="h-4 w-4" />
// // // // // // // // // //             </IconButton>

// // // // // // // // // //             <Dialog open={open} size="xxl" className="shadow-lg hover:shadow-2xl rounded-lg bg-white">
// // // // // // // // // //                 <DialogHeader className="text-xl text-gray-900 font-bold">
// // // // // // // // // //                     Update Availability
// // // // // // // // // //                 </DialogHeader>

// // // // // // // // // //                 <DialogBody className="p-6">
// // // // // // // // // //                     {/* Section for displaying booked dates */}
// // // // // // // // // //                     <div className="mb-4">
// // // // // // // // // //                         <h3 className="font-semibold mb-2 text-gray-700">Booked Dates</h3>
// // // // // // // // // //                         <DatePicker
// // // // // // // // // //                             inline
// // // // // // // // // //                             selected={formData.startDate}
// // // // // // // // // //                             onChange={(date) => setFormData({ ...formData, startDate: date })}
// // // // // // // // // //                             highlightDates={bookedRanges}
// // // // // // // // // //                             dayClassName={(date) =>
// // // // // // // // // //                                 bookedRanges.some(
// // // // // // // // // //                                     (range) => date >= range.start && date <= range.end
// // // // // // // // // //                                 )
// // // // // // // // // //                                     ? "bg-red-500 text-white rounded-full"
// // // // // // // // // //                                     : undefined
// // // // // // // // // //                             }
// // // // // // // // // //                         />
// // // // // // // // // //                         <div className="mt-2 text-sm">
// // // // // // // // // //                             <p className="text-red-500">Red: Date is booked</p>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>

// // // // // // // // // //                     {/* Form for adding new booking */}
// // // // // // // // // //                     <form className="space-y-4">
// // // // // // // // // //                         <div>
// // // // // // // // // //                             <label className="block text-gray-700 mb-2">Pickup Date</label>
// // // // // // // // // //                             <DatePicker
// // // // // // // // // //                                 selected={formData.startDate}
// // // // // // // // // //                                 onChange={(date) => setFormData({ ...formData, startDate: date })}
// // // // // // // // // //                                 dateFormat="yyyy-MM-dd"
// // // // // // // // // //                                 placeholderText="Select pickup date"
// // // // // // // // // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // // // //                                 highlightDates={bookedRanges}
// // // // // // // // // //                                 filterDate={(date) =>
// // // // // // // // // //                                     !bookedRanges.some(
// // // // // // // // // //                                         (range) => date >= range.start && date <= range.end
// // // // // // // // // //                                     )
// // // // // // // // // //                                 }
// // // // // // // // // //                             />
// // // // // // // // // //                         </div>

// // // // // // // // // //                         <div>
// // // // // // // // // //                             <label className="block text-gray-700 mb-2">Pickup Time</label>
// // // // // // // // // //                             <DatePicker
// // // // // // // // // //                                 selected={formData.startTime}
// // // // // // // // // //                                 onChange={(time) => setFormData({ ...formData, startTime: time })}
// // // // // // // // // //                                 showTimeSelect
// // // // // // // // // //                                 showTimeSelectOnly
// // // // // // // // // //                                 timeIntervals={15}
// // // // // // // // // //                                 timeCaption="Time"
// // // // // // // // // //                                 dateFormat="hh:mm aa"
// // // // // // // // // //                                 placeholderText="Select pickup time"
// // // // // // // // // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // // // //                             />
// // // // // // // // // //                         </div>

// // // // // // // // // //                         <div>
// // // // // // // // // //                             <label className="block text-gray-700 mb-2">Drop off Date</label>
// // // // // // // // // //                             <DatePicker
// // // // // // // // // //                                 selected={formData.endDate}
// // // // // // // // // //                                 onChange={(date) => setFormData({ ...formData, endDate: date })}
// // // // // // // // // //                                 dateFormat="yyyy-MM-dd"
// // // // // // // // // //                                 placeholderText="Select drop off date"
// // // // // // // // // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // // // //                                 highlightDates={bookedRanges}
// // // // // // // // // //                                 filterDate={(date) =>
// // // // // // // // // //                                     !bookedRanges.some(
// // // // // // // // // //                                         (range) => date >= range.start && date <= range.end
// // // // // // // // // //                                     )
// // // // // // // // // //                                 }
// // // // // // // // // //                             />
// // // // // // // // // //                         </div>

// // // // // // // // // //                         <div>
// // // // // // // // // //                             <label className="block text-gray-700 mb-2">Drop off Time</label>
// // // // // // // // // //                             <DatePicker
// // // // // // // // // //                                 selected={formData.endTime}
// // // // // // // // // //                                 onChange={(time) => setFormData({ ...formData, endTime: time })}
// // // // // // // // // //                                 showTimeSelect
// // // // // // // // // //                                 showTimeSelectOnly
// // // // // // // // // //                                 timeIntervals={15}
// // // // // // // // // //                                 timeCaption="Time"
// // // // // // // // // //                                 dateFormat="hh:mm aa"
// // // // // // // // // //                                 placeholderText="Select drop off time"
// // // // // // // // // //                                 className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // // // //                             />
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </form>
// // // // // // // // // //                 </DialogBody>

// // // // // // // // // //                 <DialogFooter className="p-4 flex justify-end">
// // // // // // // // // //                     <Button
// // // // // // // // // //                         variant="text"
// // // // // // // // // //                         color="red"
// // // // // // // // // //                         onClick={handleOpen}
// // // // // // // // // //                         className="mr-3 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-200 transition duration-300"
// // // // // // // // // //                     >
// // // // // // // // // //                         Cancel
// // // // // // // // // //                     </Button>
// // // // // // // // // //                     <Button
// // // // // // // // // //                         variant="gradient"
// // // // // // // // // //                         color="blue"
// // // // // // // // // //                         onClick={handleSubmit}
// // // // // // // // // //                         disabled={isLoading}
// // // // // // // // // //                         className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300"
// // // // // // // // // //                     >
// // // // // // // // // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // // // // // // // // //                     </Button>
// // // // // // // // // //                 </DialogFooter>
// // // // // // // // // //             </Dialog>
// // // // // // // // // //         </>
// // // // // // // // // //     );
// // // // // // // // // // }


// // // // // // // // // /* eslint-disable react/prop-types */
// // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import {
// // // // // // // // //     Button,
// // // // // // // // //     Dialog,
// // // // // // // // //     DialogHeader,
// // // // // // // // //     DialogBody,
// // // // // // // // //     DialogFooter,
// // // // // // // // //     IconButton,
// // // // // // // // // } from "@material-tailwind/react";
// // // // // // // // // import { SquarePen } from "lucide-react";
// // // // // // // // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // // // // // // import toast from "react-hot-toast";
// // // // // // // // // import dayjs from "dayjs";
// // // // // // // // // import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
// // // // // // // // // import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
// // // // // // // // // import DatePicker from "react-datepicker";
// // // // // // // // // import "react-datepicker/dist/react-datepicker.css";

// // // // // // // // // // Extend dayjs with the plugins
// // // // // // // // // dayjs.extend(isSameOrAfter);
// // // // // // // // // dayjs.extend(isSameOrBefore);

// // // // // // // // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // // // // // // // //     const [open, setOpen] = useState(false);

// // // // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // // // //     const [formData, setFormData] = useState({
// // // // // // // // //         startDate: '',
// // // // // // // // //         endDate: '',
// // // // // // // // //         startTime: '',
// // // // // // // // //         endTime: '',
// // // // // // // // //     });
// // // // // // // // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // // // // // // // //     const handleSubmit = async (e) => {
// // // // // // // // //         e.preventDefault();
// // // // // // // // //         try {
// // // // // // // // //             await bookWalkin({
// // // // // // // // //                 vehicleId: id,
// // // // // // // // //                 startDate: dayjs(formData.startDate).format('YYYY-MM-DD'),
// // // // // // // // //                 endDate: dayjs(formData.endDate).format('YYYY-MM-DD'),
// // // // // // // // //                 startTime: dayjs(formData.startTime).format('HH:mm'),
// // // // // // // // //                 endTime: dayjs(formData.endTime).format('HH:mm'),
// // // // // // // // //             }).unwrap();
// // // // // // // // //         } catch (error) {
// // // // // // // // //             console.log(error);
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     useEffect(() => {
// // // // // // // // //         if (isError) {
// // // // // // // // //             toast.error(error?.data?.error || 'Failed to update availability, please try again');
// // // // // // // // //             handleOpen();
// // // // // // // // //         }

// // // // // // // // //         if (isSuccess) {
// // // // // // // // //             toast.success(data?.message);
// // // // // // // // //             refetch();
// // // // // // // // //             handleOpen();
// // // // // // // // //         }
// // // // // // // // //     }, [isError, error, isSuccess, data]);

// // // // // // // // //     // Convert bookedDates to an array of ranges for react-datepicker's highlightDates
// // // // // // // // //     const bookedRanges = bookedDates.map((date) => ({
// // // // // // // // //         start: dayjs(date.startDate).toDate(),
// // // // // // // // //         end: dayjs(date.endDate).toDate(),
// // // // // // // // //     }));

// // // // // // // // //     // Function to determine if a date is booked
// // // // // // // // //     const isDateBooked = (date) =>
// // // // // // // // //         bookedRanges.some(
// // // // // // // // //             (range) =>
// // // // // // // // //                 dayjs(date).isSameOrAfter(dayjs(range.start), 'day') &&
// // // // // // // // //                 dayjs(date).isSameOrBefore(dayjs(range.end), 'day')
// // // // // // // // //         );

// // // // // // // // //     return (
// // // // // // // // //         <>
// // // // // // // // //             <IconButton
// // // // // // // // //                 onClick={handleOpen}
// // // // // // // // //                 variant="text"
// // // // // // // // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // // // // // // // //             >
// // // // // // // // //                 <SquarePen className="h-4 w-4" />
// // // // // // // // //             </IconButton>

// // // // // // // // //             <Dialog open={open} className="shadow-lg hover:shadow-2xl rounded-lg bg-white">

// // // // // // // // //                 <div className="p-6">
// // // // // // // // //                     {/* Section for displaying booked dates */}
// // // // // // // // //                     <div className="mb-4">
// // // // // // // // //                         <h3 className="font-semibold mb-2 text-gray-700">Booked Dates</h3>
// // // // // // // // //                         <DatePicker
// // // // // // // // //                             inline
// // // // // // // // //                             selected={formData.startDate}
// // // // // // // // //                             onChange={(date) => setFormData({ ...formData, startDate: date })}
// // // // // // // // //                             highlightDates={bookedRanges}
// // // // // // // // //                             dayClassName={(date) =>
// // // // // // // // //                                 isDateBooked(date) ? "bg-red-500 text-white rounded-full" : undefined
// // // // // // // // //                             }
// // // // // // // // //                         />
// // // // // // // // //                         <div className="mt-2 text-sm">
// // // // // // // // //                             <p className="text-red-500">Red: Date is booked</p>
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>

// // // // // // // // //                     {/* Form for adding new booking */}
// // // // // // // // //                     <form className="space-y-2">
// // // // // // // // //                         <div className="flex flex-wrap items-center justify-between">
// // // // // // // // //                             <div className="mb-2">
// // // // // // // // //                                 <DatePicker
// // // // // // // // //                                     selected={formData.startDate}
// // // // // // // // //                                     onChange={(date) => setFormData({ ...formData, startDate: date })}
// // // // // // // // //                                     dateFormat="yyyy-MM-dd"
// // // // // // // // //                                     placeholderText="Select pickup date"
// // // // // // // // //                                     className="w-72 px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // // //                                     highlightDates={bookedRanges}
// // // // // // // // //                                     filterDate={(date) => !isDateBooked(date)}
// // // // // // // // //                                 />
// // // // // // // // //                             </div>

// // // // // // // // //                             <div>
// // // // // // // // //                                 <DatePicker
// // // // // // // // //                                     selected={formData.startTime}
// // // // // // // // //                                     onChange={(time) => setFormData({ ...formData, startTime: time })}
// // // // // // // // //                                     showTimeSelect
// // // // // // // // //                                     showTimeSelectOnly
// // // // // // // // //                                     timeIntervals={15}
// // // // // // // // //                                     timeCaption="Time"
// // // // // // // // //                                     dateFormat="hh:mm aa"
// // // // // // // // //                                     placeholderText="Select pickup time"
// // // // // // // // //                                     className="w-64 px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // // //                                 />
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>

// // // // // // // // //                         <div className="flex flex-wrap justify-between items-center">
// // // // // // // // //                             <div className="mb-2">
// // // // // // // // //                                 <DatePicker
// // // // // // // // //                                     selected={formData.endDate}
// // // // // // // // //                                     onChange={(date) => setFormData({ ...formData, endDate: date })}
// // // // // // // // //                                     dateFormat="yyyy-MM-dd"
// // // // // // // // //                                     placeholderText="Select drop off date"
// // // // // // // // //                                     className=" w-64 px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // // //                                     highlightDates={bookedRanges}
// // // // // // // // //                                     filterDate={(date) => !isDateBooked(date)}
// // // // // // // // //                                 />
// // // // // // // // //                             </div>

// // // // // // // // //                             <div>
// // // // // // // // //                                 <DatePicker
// // // // // // // // //                                     selected={formData.endTime}
// // // // // // // // //                                     onChange={(time) => setFormData({ ...formData, endTime: time })}
// // // // // // // // //                                     showTimeSelect
// // // // // // // // //                                     showTimeSelectOnly
// // // // // // // // //                                     timeIntervals={15}
// // // // // // // // //                                     timeCaption="Time"
// // // // // // // // //                                     dateFormat="hh:mm aa"
// // // // // // // // //                                     placeholderText="Select drop off time"
// // // // // // // // //                                     className="w-64 px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // // // //                                 />
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>
// // // // // // // // //                     </form>
// // // // // // // // //                 </div>

// // // // // // // // //                 <DialogFooter className="p-4 flex justify-end">
// // // // // // // // //                     <Button
// // // // // // // // //                         variant="text"
// // // // // // // // //                         color="red"
// // // // // // // // //                         onClick={handleOpen}
// // // // // // // // //                         className="mr-3 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-200 transition duration-300"
// // // // // // // // //                     >
// // // // // // // // //                         Cancel
// // // // // // // // //                     </Button>
// // // // // // // // //                     <Button
// // // // // // // // //                         variant="gradient"
// // // // // // // // //                         color="blue"
// // // // // // // // //                         onClick={handleSubmit}
// // // // // // // // //                         disabled={isLoading}
// // // // // // // // //                         className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300"
// // // // // // // // //                     >
// // // // // // // // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // // // // // // // //                     </Button>
// // // // // // // // //                 </DialogFooter>
// // // // // // // // //             </Dialog>
// // // // // // // // //         </>
// // // // // // // // //     );
// // // // // // // // // }


// // // // // // // /* eslint-disable react/prop-types */
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import {
// // // // // // //     Button,
// // // // // // //     Dialog,
// // // // // // //     DialogFooter,
// // // // // // //     IconButton,
// // // // // // // } from "@material-tailwind/react";
// // // // // // // import { SquarePen } from "lucide-react";
// // // // // // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // // // // import toast from "react-hot-toast";
// // // // // // // import dayjs from "dayjs";
// // // // // // // import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
// // // // // // // import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
// // // // // // // import DatePicker from "react-datepicker";
// // // // // // // import "react-datepicker/dist/react-datepicker.css";

// // // // // // // // Extend dayjs with the plugins
// // // // // // // dayjs.extend(isSameOrAfter);
// // // // // // // dayjs.extend(isSameOrBefore);

// // // // // // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // // // // // //     const [open, setOpen] = useState(false);

// // // // // // //     const handleOpen = () => setOpen(!open);

// // // // // // //     const [formData, setFormData] = useState({
// // // // // // //         startDate: '',
// // // // // // //         endDate: '',
// // // // // // //         startTime: '',
// // // // // // //         endTime: '',
// // // // // // //     });
// // // // // // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // // // // // //     const handleSubmit = async (e) => {
// // // // // // //         e.preventDefault();
// // // // // // //         try {
// // // // // // //             await bookWalkin({
// // // // // // //                 vehicleId: id,
// // // // // // //                 startDate: dayjs(formData.startDate).format('YYYY-MM-DD'),
// // // // // // //                 endDate: dayjs(formData.endDate).format('YYYY-MM-DD'),
// // // // // // //                 startTime: dayjs(formData.startTime).format('HH:mm'),
// // // // // // //                 endTime: dayjs(formData.endTime).format('HH:mm'),
// // // // // // //             }).unwrap();
// // // // // // //         } catch (error) {
// // // // // // //             console.log(error);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     useEffect(() => {
// // // // // // //         if (isError) {
// // // // // // //             toast.error(error?.data?.error || 'Failed to update availability, please try again');
// // // // // // //             handleOpen();
// // // // // // //         }

// // // // // // //         if (isSuccess) {
// // // // // // //             toast.success(data?.message);
// // // // // // //             refetch();
// // // // // // //             handleOpen();
// // // // // // //         }
// // // // // // //     }, [isError, error, isSuccess, data]);

// // // // // // //     // Convert bookedDates to an array of ranges for react-datepicker's highlightDates
// // // // // // //  // Convert bookedDates to an array of ranges with both date and time for highlighting
// // // // // // // const bookedRanges = bookedDates.map((date) => ({
// // // // // // //     start: dayjs(date.startDate).toDate(),
// // // // // // //     end: dayjs(date.endDate).toDate(),
// // // // // // //     startTime: dayjs(date.startTime).format('HH:mm'),
// // // // // // //     endTime: dayjs(date.endTime).format('HH:mm'),
// // // // // // // }));


// // // // // // //     // Function to determine if a date is booked
// // // // // // //     const isDateBooked = (date) =>
// // // // // // //         bookedRanges.some(
// // // // // // //             (range) =>
// // // // // // //                 dayjs(date).isSameOrAfter(dayjs(range.start), 'day') &&
// // // // // // //                 dayjs(date).isSameOrBefore(dayjs(range.end), 'day')
// // // // // // //         );

// // // // // // //     return (
// // // // // // //         <>
// // // // // // //             <IconButton
// // // // // // //                 onClick={handleOpen}
// // // // // // //                 variant="text"
// // // // // // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // // // // // //             >
// // // // // // //                 <SquarePen className="h-4 w-4" />
// // // // // // //             </IconButton>

// // // // // // //             <Dialog open={open} className="shadow-lg hover:shadow-2xl rounded-lg bg-white">

// // // // // // //                 {/* <pre>{JSON.stringify(bookedDates,null,2)}</pre> */}

// // // // // // //                 <div className="p-6">
// // // // // // //                     {/* Section for displaying booked dates */}
// // // // // // //                     <div className="mb-4">
// // // // // // //     <h3 className="font-semibold mb-2 text-gray-700">Booked Dates</h3>
// // // // // // //     <div className="space-y-2">
// // // // // // //         {bookedRanges.length > 0 ? (
// // // // // // //             bookedRanges.map((range, index) => (
// // // // // // //                 <div key={index} className="bg-red-100 p-3 rounded-md">
// // // // // // //                     <p className="text-gray-700">
// // // // // // //                         <span className="font-semibold">Start Date:</span> {dayjs(range.start).format('YYYY-MM-DD')}
// // // // // // //                     </p>
// // // // // // //                     <p className="text-gray-700">
// // // // // // //                         <span className="font-semibold">End Date:</span> {dayjs(range.end).format('YYYY-MM-DD')}
// // // // // // //                     </p>
// // // // // // //                     <p className="text-gray-700">
// // // // // // //                         <span className="font-semibold">Start Time:</span> {range.startTime}
// // // // // // //                     </p>
// // // // // // //                     <p className="text-gray-700">
// // // // // // //                         <span className="font-semibold">End Time:</span> {range.endTime}
// // // // // // //                     </p>
// // // // // // //                 </div>
// // // // // // //             ))
// // // // // // //         ) : (
// // // // // // //             <p className="text-gray-500">No booked dates available.</p>
// // // // // // //         )}
// // // // // // //     </div>
// // // // // // // </div>

// // // // // // //                     {/* Form for adding new booking */}
// // // // // // //                     <form className="space-y-2 lg:space-y-4">
// // // // // // //                         <div className="flex flex-wrap items-center justify-between">
// // // // // // //                             <div className="mb-2 lg:mb-0">
// // // // // // //                                 <DatePicker
// // // // // // //                                     selected={formData.startDate}
// // // // // // //                                     onChange={(date) => setFormData({ ...formData, startDate: date })}
// // // // // // //                                     dateFormat="yyyy-MM-dd"
// // // // // // //                                     placeholderText="Select pickup date"
// // // // // // //                                     className="w-[155%] lg:w-64 px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // //                                     highlightDates={bookedRanges}
// // // // // // //                                     filterDate={(date) => !isDateBooked(date)}
// // // // // // //                                 />
// // // // // // //                             </div>

// // // // // // //                             <div>
// // // // // // //                                 <DatePicker
// // // // // // //                                     selected={formData.startTime ? new Date(formData.startTime) : null}
// // // // // // //                                     onChange={(time) => setFormData({ ...formData, startTime: time })}
// // // // // // //                                     showTimeSelect
// // // // // // //                                     showTimeSelectOnly
// // // // // // //                                     timeIntervals={15}
// // // // // // //                                     timeCaption="Time"
// // // // // // //                                     dateFormat="HH:mm"
// // // // // // //                                     placeholderText="Select pickup time"
// // // // // // //                                     className="w-[155%] lg:w-64 px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // //                                 />
// // // // // // //                             </div>
// // // // // // //                         </div>

// // // // // // //                         <div className="flex flex-wrap justify-between items-center">
// // // // // // //                             <div className="mb-2 lg:mb-0">
// // // // // // //                                 <DatePicker
// // // // // // //                                     selected={formData.endDate}
// // // // // // //                                     onChange={(date) => setFormData({ ...formData, endDate: date })}
// // // // // // //                                     dateFormat="yyyy-MM-dd"
// // // // // // //                                     placeholderText="Select drop off date"
// // // // // // //                                     className="w-[155%] lg:w-64 px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // //                                     highlightDates={bookedRanges}
// // // // // // //                                     filterDate={(date) => !isDateBooked(date)}
// // // // // // //                                 />
// // // // // // //                             </div>

// // // // // // //                             <div>
// // // // // // //                                 <DatePicker
// // // // // // //                                     selected={formData.endTime}
// // // // // // //                                     onChange={(time) => setFormData({ ...formData, endTime: time })}
// // // // // // //                                     showTimeSelect
// // // // // // //                                     showTimeSelectOnly
// // // // // // //                                     timeIntervals={15}
// // // // // // //                                     timeCaption="Time"
// // // // // // //                                     dateFormat="hh:mm aa"
// // // // // // //                                     placeholderText="Select drop off time"
// // // // // // //                                     className="w-[155%] lg:w-64 px-4 py-2 border border-gray-300 rounded-md outline-none"
// // // // // // //                                 />
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                     </form>
// // // // // // //                 </div>

// // // // // // //                 <DialogFooter className="p-4 flex justify-end">
// // // // // // //                     <Button
// // // // // // //                         variant="text"
// // // // // // //                         color="red"
// // // // // // //                         onClick={handleOpen}
// // // // // // //                         className="mr-3 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-200 transition duration-300"
// // // // // // //                     >
// // // // // // //                         Cancel
// // // // // // //                     </Button>
// // // // // // //                     <Button
// // // // // // //                         variant="gradient"
// // // // // // //                         color="blue"
// // // // // // //                         onClick={handleSubmit}
// // // // // // //                         disabled={isLoading}
// // // // // // //                         className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300"
// // // // // // //                     >
// // // // // // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // // // // // //                     </Button>
// // // // // // //                 </DialogFooter>
// // // // // // //             </Dialog>
// // // // // // //         </>
// // // // // // //     );
// // // // // // // }




// // // // // // /* eslint-disable react/prop-types */
// // // // // // import { useEffect, useState } from "react";
// // // // // // import {
// // // // // //     Button,
// // // // // //     Dialog,

// // // // // //     DialogFooter,
// // // // // //     IconButton,
// // // // // //     Input,
// // // // // // } from "@material-tailwind/react";
// // // // // // import { SquarePen } from "lucide-react";
// // // // // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // // // import toast from "react-hot-toast";
// // // // // // import dayjs from "dayjs";

// // // // // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // // // // //     const [open, setOpen] = useState(false);

// // // // // //     const handleOpen = () => setOpen(!open);

// // // // // //     const [formData, setFormData] = useState({
// // // // // //         startDate: '',
// // // // // //         endDate: '',
// // // // // //         startTime: '',
// // // // // //         endTime: '',
// // // // // //     });
// // // // // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // // // // //     const handleChange = (e) => {
// // // // // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // // //     };

// // // // // //     const handleSubmit = async (e) => {
// // // // // //         e.preventDefault();
// // // // // //         try {
// // // // // //             await bookWalkin({ vehicleId: id, ...formData }).unwrap();
// // // // // //         } catch (error) {
// // // // // //             console.log(error)
// // // // // //         }
// // // // // //     };

// // // // // //     useEffect(() => {
// // // // // //         if (isError) {
// // // // // //             toast.error(error?.data?.error || 'Failed to update availability , please try again');
// // // // // //             handleOpen()
// // // // // //         }

// // // // // //         if (isSuccess) {
// // // // // //             toast.success(data?.message);
// // // // // //             refetch()
// // // // // //             handleOpen()

// // // // // //         }
// // // // // //     }, [isError, error, isSuccess, data]);

// // // // // //     return (
// // // // // //         <>
// // // // // //             <IconButton
// // // // // //                 onClick={handleOpen}
// // // // // //                 variant="text"
// // // // // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // // // // //             >
// // // // // //                 <SquarePen className="h-4 w-4" />
// // // // // //             </IconButton>

// // // // // //             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-green-100 rounded-md">

// // // // // //                 <div>
// // // // // //                     {/* <pre>{JSON.stringify(,null,2)}</pre> */}
// // // // // //                     {/* Section for displaying booked dates */}
// // // // // //                     <div className="mb-4">
// // // // // //                         <h3 className="font-bold mb-4 text-xl text-gray-800">Booked Dates</h3>
// // // // // //                         <div className="grid grid-cols-1 gap-4">
// // // // // //                             {bookedDates.map((date) => (
// // // // // //                                 <div
// // // // // //                                     key={date._id}
// // // // // //                                     className="group relative p-4 rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
// // // // // //                                 >
// // // // // //                                     {/* Date Badge */}
// // // // // //                                     <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
// // // // // //                                         Booked
// // // // // //                                     </div>

// // // // // //                                     {/* Flip Card Effect */}
// // // // // //                                     <div className="relative flex items-center justify-between text-gray-700 text-base">
// // // // // //                                         <div className="flex flex-col items-start">
// // // // // //                                             <div className="text-sm text-gray-500 mb-1">From:</div>
// // // // // //                                             <div className="font-semibold">
// // // // // //                                                 {dayjs(date.startDate).format('DD/MM/YYYY, hh:mm A')}
// // // // // //                                             </div>
// // // // // //                                         </div>
// // // // // //                                         <div className="flex flex-col items-end">
// // // // // //                                             <div className="text-sm text-gray-500 mb-1">To:</div>
// // // // // //                                             <div className="font-semibold">
// // // // // //                                                 {dayjs(date.endDate).format('DD/MM/YYYY, hh:mm A')}
// // // // // //                                             </div>
// // // // // //                                         </div>
// // // // // //                                     </div>

// // // // // //                                     {/* Divider */}
// // // // // //                                     <div className="mt-3 mb-3 border-t border-gray-200"></div>

// // // // // //                                     {/* Hover Details */}
// // // // // //                                     <div className="absolute inset-0 bg-green-100 text-green-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:p-6 group-hover:text-base transition-all duration-300">
// // // // // //                                         <div className="flex flex-col items-center justify-center h-full">
// // // // // //                                             <svg
// // // // // //                                                 className="w-10 h-10 text-green-600 mb-2"
// // // // // //                                                 fill="none"
// // // // // //                                                 xmlns="http://www.w3.org/2000/svg"
// // // // // //                                                 viewBox="0 0 24 24"
// // // // // //                                                 stroke="currentColor"
// // // // // //                                             >
// // // // // //                                                 <path
// // // // // //                                                     strokeLinecap="round"
// // // // // //                                                     strokeLinejoin="round"
// // // // // //                                                     strokeWidth="2"
// // // // // //                                                     d="M3 11h18M3 21h18M3 3h18m-2 10h2M3 21h2m1-7h14"
// // // // // //                                                 />
// // // // // //                                             </svg>
// // // // // //                                             <div className="font-bold">Details:</div>
// // // // // //                                             <p className="text-sm text-center mt-1">This vehicle is booked from <br />
// // // // // //                                                 {dayjs(date.startDate).format('DD/MM/YYYY, hh:mm A')} to <br />
// // // // // //                                                 {dayjs(date.endDate).format('DD/MM/YYYY, hh:mm A')}
// // // // // //                                             </p>
// // // // // //                                         </div>
// // // // // //                                     </div>
// // // // // //                                 </div>
// // // // // //                             ))}
// // // // // //                         </div>

// // // // // //                         {/* Color hint for user */}
// // // // // //                         <div className="mt-4 text-sm">
// // // // // //                             <p className="text-red-500">Red Badge: Date is booked</p>
// // // // // //                         </div>
// // // // // //                     </div>


// // // // // //                     {/* Form for adding new booking */}
// // // // // //                     <form>
// // // // // //                         <div className="mb-3">
// // // // // //                             <Input
// // // // // //                                 label="Pickup Date"
// // // // // //                                 type="date"
// // // // // //                                 name="startDate"
// // // // // //                                 value={formData.startDate}
// // // // // //                                 onChange={handleChange}
// // // // // //                                 required
// // // // // //                             />
// // // // // //                         </div>

// // // // // //                         <div className="mb-3">
// // // // // //                             <Input
// // // // // //                                 label="Drop off Date"
// // // // // //                                 type="date"
// // // // // //                                 name="endDate"
// // // // // //                                 value={formData.endDate}
// // // // // //                                 onChange={handleChange}
// // // // // //                                 required
// // // // // //                             />
// // // // // //                         </div>
// // // // // //                         <div className="mb-3">
// // // // // //                             <Input
// // // // // //                                 label="Pickup Time"
// // // // // //                                 type="time"
// // // // // //                                 name="startTime"
// // // // // //                                 value={formData.startTime}
// // // // // //                                 onChange={handleChange}
// // // // // //                                 required
// // // // // //                             />
// // // // // //                         </div>
// // // // // //                         <div className="">
// // // // // //                             <Input
// // // // // //                                 label="Drop Off Time"
// // // // // //                                 type="time"
// // // // // //                                 name="endTime"
// // // // // //                                 value={formData.endTime}
// // // // // //                                 onChange={handleChange}
// // // // // //                                 required
// // // // // //                             />
// // // // // //                         </div>
// // // // // //                     </form>
// // // // // //                 </div>
// // // // // //                 <DialogFooter>
// // // // // //                     <Button
// // // // // //                         variant="text"
// // // // // //                         color="red"
// // // // // //                         onClick={handleOpen}
// // // // // //                         className="mr-1"
// // // // // //                     >
// // // // // //                         <span>Cancel</span>
// // // // // //                     </Button>
// // // // // //                     <Button
// // // // // //                         variant="gradient"
// // // // // //                         color="green"
// // // // // //                         onClick={handleSubmit}
// // // // // //                         disabled={isLoading}
// // // // // //                     >
// // // // // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // // // // //                     </Button>
// // // // // //                 </DialogFooter>
// // // // // //             </Dialog>
// // // // // //         </>
// // // // // //     );
// // // // // // }

// // // // // import { useEffect, useState } from "react";
// // // // // import { Button, Dialog, DialogFooter, IconButton, Input } from "@material-tailwind/react";
// // // // // import { SquarePen } from "lucide-react";
// // // // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // // import toast from "react-hot-toast";
// // // // // import dayjs from "dayjs";
// // // // // import isBetween from 'dayjs/plugin/isBetween';  // Import the plugin

// // // // // // Extend dayjs with the isBetween plugin
// // // // // dayjs.extend(isBetween);

// // // // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // // // //     const [open, setOpen] = useState(false);
// // // // //     const [formData, setFormData] = useState({
// // // // //         startDate: '',
// // // // //         endDate: '',
// // // // //         startTime: '',
// // // // //         endTime: '',
// // // // //     });

// // // // //     const handleOpen = () => setOpen(!open);
// // // // //     const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // // // //     const handleSubmit = async (e) => {
// // // // //         e.preventDefault();
// // // // //         try {
// // // // //             await bookWalkin({ vehicleId: id, ...formData }).unwrap();
// // // // //         } catch (error) {
// // // // //             console.log(error);
// // // // //         }
// // // // //     };

// // // // //     useEffect(() => {
// // // // //         if (isError) {
// // // // //             toast.error(error?.data?.error || 'Failed to update availability, please try again');
// // // // //             handleOpen();
// // // // //         }
// // // // //         if (isSuccess) {
// // // // //             toast.success(data?.message);
// // // // //             refetch();
// // // // //             handleOpen();
// // // // //         }
// // // // //     }, [isError, error, isSuccess, data]);

// // // // //     // Helper function to check if a date is booked
// // // // //     const isDateBooked = (date) => {
// // // // //         return bookedDates.some((bookedDate) =>
// // // // //             dayjs(date).isBetween(bookedDate.startDate, bookedDate.endDate, null, '[]')
// // // // //         );
// // // // //     };

// // // // //     // Generate days for the current month
// // // // //     const daysInMonth = Array.from({ length: dayjs().daysInMonth() }, (_, i) => dayjs().startOf('month').add(i, 'day'));

// // // // //     return (
// // // // //         <>
// // // // //             <IconButton
// // // // //                 onClick={handleOpen}
// // // // //                 variant="text"
// // // // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // // // //             >
// // // // //                 <SquarePen className="h-4 w-4" />
// // // // //             </IconButton>

// // // // //             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-green-100 rounded-md">
// // // // //                 <div>
// // // // //                     {/* Calendar view */}
// // // // //                     <div className="grid grid-cols-7 gap-4 mb-4">
// // // // //                         {daysInMonth.map((day) => (
// // // // //                             <div key={day} className={`p-4 rounded-lg border ${isDateBooked(day) ? 'bg-red-100' : 'bg-white'}`}>
// // // // //                                 <div className="text-sm font-semibold text-gray-700">
// // // // //                                     {day.format('DD')}
// // // // //                                 </div>
// // // // //                                 <div className="text-xs text-gray-500">
// // // // //                                     {isDateBooked(day) ? (
// // // // //                                         <>
// // // // //                                             <div className="font-bold text-red-500">Booked</div>
// // // // //                                             {/* <div className="text-xs">No Slots Left</div> */}
// // // // //                                         </>
// // // // //                                     ) : (
// // // // //                                         <>
// // // // //                                             <div className="font-bold text-green-500">Available</div>
// // // // //                                             {/* <div className="text-xs">18 Slots Left</div> */}
// // // // //                                         </>
// // // // //                                     )}
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         ))}
// // // // //                     </div>

// // // // //                     {/* Form for adding new booking */}
// // // // //                     <form>
// // // // //                         <div className="mb-3">
// // // // //                             <Input
// // // // //                                 label="Pickup Date"
// // // // //                                 type="date"
// // // // //                                 name="startDate"
// // // // //                                 value={formData.startDate}
// // // // //                                 onChange={handleChange}
// // // // //                                 required
// // // // //                             />
// // // // //                         </div>
// // // // //                         <div className="mb-3">
// // // // //                             <Input
// // // // //                                 label="Drop off Date"
// // // // //                                 type="date"
// // // // //                                 name="endDate"
// // // // //                                 value={formData.endDate}
// // // // //                                 onChange={handleChange}
// // // // //                                 required
// // // // //                             />
// // // // //                         </div>
// // // // //                         <div className="mb-3">
// // // // //                             <Input
// // // // //                                 label="Pickup Time"
// // // // //                                 type="time"
// // // // //                                 name="startTime"
// // // // //                                 value={formData.startTime}
// // // // //                                 onChange={handleChange}
// // // // //                                 required
// // // // //                             />
// // // // //                         </div>
// // // // //                         <div className="">
// // // // //                             <Input
// // // // //                                 label="Drop Off Time"
// // // // //                                 type="time"
// // // // //                                 name="endTime"
// // // // //                                 value={formData.endTime}
// // // // //                                 onChange={handleChange}
// // // // //                                 required
// // // // //                             />
// // // // //                         </div>
// // // // //                     </form>
// // // // //                 </div>
// // // // //                 <DialogFooter>
// // // // //                     <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
// // // // //                         <span>Cancel</span>
// // // // //                     </Button>
// // // // //                     <Button variant="gradient" color="green" onClick={handleSubmit} disabled={isLoading}>
// // // // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // // // //                     </Button>
// // // // //                 </DialogFooter>
// // // // //             </Dialog>
// // // // //         </>
// // // // //     );
// // // // // }


// // // // import { useEffect, useState } from "react";
// // // // import { Button, Dialog, DialogFooter, IconButton, Input } from "@material-tailwind/react";
// // // // import { SquarePen } from "lucide-react";
// // // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // // import toast from "react-hot-toast";
// // // // import dayjs from "dayjs";
// // // // import isBetween from 'dayjs/plugin/isBetween';

// // // // dayjs.extend(isBetween);

// // // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // // //     const [open, setOpen] = useState(false);
// // // //     const [formData, setFormData] = useState({
// // // //         startDate: '',
// // // //         endDate: '',
// // // //         startTime: '',
// // // //         endTime: '',
// // // //     });

// // // //     const handleOpen = () => setOpen(!open);
// // // //     const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // // //     const handleSubmit = async (e) => {
// // // //         e.preventDefault();
// // // //         try {
// // // //             await bookWalkin({ vehicleId: id, ...formData }).unwrap();
// // // //         } catch (error) {
// // // //             console.log(error);
// // // //         }
// // // //     };

// // // //     useEffect(() => {
// // // //         if (isError) {
// // // //             toast.error(error?.data?.error || 'Failed to update availability, please try again');
// // // //             handleOpen();
// // // //         }
// // // //         if (isSuccess) {
// // // //             toast.success(data?.message);
// // // //             refetch();
// // // //             handleOpen();
// // // //         }
// // // //     }, [isError, error, isSuccess, data]);

// // // //     const isDateBooked = (date) => {
// // // //         return bookedDates.some((bookedDate) =>
// // // //             dayjs(date).isBetween(bookedDate.startDate, bookedDate.endDate, null, '[]')
// // // //         );
// // // //     };

// // // //     const daysInMonth = Array.from({ length: dayjs().daysInMonth() }, (_, i) => dayjs().startOf('month').add(i, 'day'));
// // // //     const currentMonth = dayjs().format('MMMM YYYY');

// // // //     return (
// // // //         <>
// // // //             <IconButton
// // // //                 onClick={handleOpen}
// // // //                 variant="text"
// // // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // // //             >
// // // //                 <SquarePen className="h-4 w-4" />
// // // //             </IconButton>

// // // //             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-green-100 rounded-md">
// // // //                 <div className="p-6">
// // // //                     {/* Current month title */}
// // // //                     <div className="text-center text-2xl font-bold text-gray-800 mb-6">
// // // //                         {currentMonth}
// // // //                     </div>

// // // //                     {/* Calendar view */}
// // // //                     <div className="grid grid-cols-7 gap-4 mb-4">
// // // //                         {daysInMonth.map((day) => (
// // // //                             <div
// // // //                                 key={day}
// // // //                                 className={`p-4 rounded-lg border transition-transform transform hover:scale-105 ${
// // // //                                     isDateBooked(day) ? 'bg-red-200 border-red-300' : 'bg-green-100 border-green-300'
// // // //                                 }`}
// // // //                             >
// // // //                                 <div className="text-sm font-semibold text-gray-700 text-center">
// // // //                                     {day.format('DD')}
// // // //                                 </div>
// // // //                                 <div className="text-xs text-gray-500 text-center">
// // // //                                     {isDateBooked(day) ? (
// // // //                                         <div className="font-bold text-red-500">Booked</div>
// // // //                                     ) : (
// // // //                                         <div className="font-bold text-green-500">Available</div>
// // // //                                     )}
// // // //                                 </div>
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>

// // // //                     {/* Form for adding new booking */}
// // // //                     {/* <form className="space-y-4">
// // // //                         <div className="mb-3">
// // // //                             <Input
// // // //                                 label="Pickup Date"
// // // //                                 type="date"
// // // //                                 name="startDate"
// // // //                                 value={formData.startDate}
// // // //                                 onChange={handleChange}
// // // //                                 required
// // // //                             />
// // // //                         </div>
// // // //                         <div className="mb-3">
// // // //                             <Input
// // // //                                 label="Drop off Date"
// // // //                                 type="date"
// // // //                                 name="endDate"
// // // //                                 value={formData.endDate}
// // // //                                 onChange={handleChange}
// // // //                                 required
// // // //                             />
// // // //                         </div>
// // // //                         <div className="mb-3">
// // // //                             <Input
// // // //                                 label="Pickup Time"
// // // //                                 type="time"
// // // //                                 name="startTime"
// // // //                                 value={formData.startTime}
// // // //                                 onChange={handleChange}
// // // //                                 required
// // // //                             />
// // // //                         </div>
// // // //                         <div className="">
// // // //                             <Input
// // // //                                 label="Drop Off Time"
// // // //                                 type="time"
// // // //                                 name="endTime"
// // // //                                 value={formData.endTime}
// // // //                                 onChange={handleChange}
// // // //                                 required
// // // //                             />
// // // //                         </div>
// // // //                     </form> */}
// // // //                 </div>
// // // //                 {/* <DialogFooter>
// // // //                     <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
// // // //                         <span>Cancel</span>
// // // //                     </Button>
// // // //                     <Button variant="gradient" color="green" onClick={handleSubmit} disabled={isLoading}>
// // // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // // //                     </Button>
// // // //                 </DialogFooter> */}
// // // //             </Dialog>
// // // //         </>
// // // //     );
// // // // }


// // // import { useEffect, useState } from "react";
// // // import { Button, Dialog, DialogFooter, IconButton, Input } from "@material-tailwind/react";
// // // import { SquarePen } from "lucide-react";
// // // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // // import toast from "react-hot-toast";
// // // import dayjs from "dayjs";
// // // import isBetween from 'dayjs/plugin/isBetween';

// // // dayjs.extend(isBetween);

// // // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// // //     const [open, setOpen] = useState(false);
// // //     const [formData, setFormData] = useState({
// // //         startDate: '',
// // //         endDate: '',
// // //         startTime: '',
// // //         endTime: '',
// // //     });

// // //     const handleOpen = () => setOpen(!open);
// // //     const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
// // //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             await bookWalkin({ vehicleId: id, ...formData }).unwrap();
// // //         } catch (error) {
// // //             console.log(error);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         if (isError) {
// // //             toast.error(error?.data?.error || 'Failed to update availability, please try again');
// // //             handleOpen();
// // //         }
// // //         if (isSuccess) {
// // //             toast.success(data?.message);
// // //             refetch();
// // //             handleOpen();
// // //         }
// // //     }, [isError, error, isSuccess, data]);

// // //     const isDateBooked = (date) => {
// // //         return bookedDates.some((bookedDate) =>
// // //             dayjs(date).isBetween(bookedDate.startDate, bookedDate.endDate, null, '[]')
// // //         );
// // //     };

// // //     const daysInMonth = Array.from({ length: dayjs().daysInMonth() }, (_, i) => dayjs().startOf('month').add(i, 'day'));
// // //     const currentMonth = dayjs().format('MMMM YYYY');

// // //     return (
// // //         <>
// // //             <IconButton
// // //                 onClick={handleOpen}
// // //                 variant="text"
// // //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// // //             >
// // //                 <SquarePen className="h-4 w-4" />
// // //             </IconButton>

// // //             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-white rounded-md">
// // //             <div className="p-6">
// // //     {/* Current month title */}
// // //     <div className="text-center text-2xl font-bold text-gray-800 mb-6">
// // //         {currentMonth}
// // //     </div>

// // //     {/* Calendar view */}
// // //     <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-4 mb-4">
// // //         {daysInMonth.map((day) => (
// // //             <div
// // //                 key={day}
// // //                 className={`p-2 sm:p-4 rounded-lg border transition-transform transform hover:scale-105 ${
// // //                     isDateBooked(day) ? 'bg-red-200 border-red-300' : 'bg-green-100 border-green-300'
// // //                 }`}
// // //             >
// // //                 <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
// // //                     {day.format('DD')}
// // //                 </div>
// // //                 <div className="text-xs text-gray-500 text-center">
// // //                     {isDateBooked(day) ? (
// // //                         <div className="font-bold text-red-500">Booked</div>
// // //                     ) : (
// // //                         <div className="font-bold text-green-500">Available</div>
// // //                     )}
// // //                 </div>
// // //             </div>
// // //         ))}
// // //     </div>

// // //     {/* Form for adding new booking */}
// // //     <form className="space-y-4">
// // //         <div className="mb-3">
// // //             <Input
// // //                 label="Pickup Date"
// // //                 type="date"
// // //                 name="startDate"
// // //                 value={formData.startDate}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="text-xs sm:text-sm"
// // //             />
// // //         </div>
// // //         <div className="mb-3">
// // //             <Input
// // //                 label="Drop off Date"
// // //                 type="date"
// // //                 name="endDate"
// // //                 value={formData.endDate}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="text-xs sm:text-sm"
// // //             />
// // //         </div>
// // //         <div className="mb-3">
// // //             <Input
// // //                 label="Pickup Time"
// // //                 type="time"
// // //                 name="startTime"
// // //                 value={formData.startTime}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="text-xs sm:text-sm"
// // //             />
// // //         </div>
// // //         <div className="mb-3">
// // //             <Input
// // //                 label="Drop Off Time"
// // //                 type="time"
// // //                 name="endTime"
// // //                 value={formData.endTime}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="text-xs sm:text-sm"
// // //             />
// // //         </div>
// // //     </form>

// // //     <div className="flex justify-between mt-6">
// // //         <Button variant="text" color="red" onClick={handleOpen} className="mr-1 text-sm sm:text-base">
// // //             <span>Cancel</span>
// // //         </Button>
// // //         <Button variant="gradient" color="green" onClick={handleSubmit} disabled={isLoading} className="text-sm sm:text-base">
// // //             {isLoading ? 'Booking...' : 'Book Now'}
// // //         </Button>
// // //     </div>
// // // </div>

// // //                 <DialogFooter>
// // //                     <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
// // //                         <span>Cancel</span>
// // //                     </Button>
// // //                     <Button variant="gradient" color="green" onClick={handleSubmit} disabled={isLoading}>
// // //                         {isLoading ? 'Booking...' : 'Book Now'}
// // //                     </Button>
// // //                 </DialogFooter>
// // //             </Dialog>
// // //         </>
// // //     );
// // // }


// // import { useEffect, useState } from "react";
// // import { Button, Dialog, DialogFooter, IconButton, Input } from "@material-tailwind/react";
// // import { SquarePen } from "lucide-react";
// // import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// // import toast from "react-hot-toast";
// // import dayjs from "dayjs";
// // import isBetween from 'dayjs/plugin/isBetween';

// // dayjs.extend(isBetween);

// // export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
// //     const [open, setOpen] = useState(false);
// //     const [formData, setFormData] = useState({
// //         startDate: '',
// //         endDate: '',
// //         startTime: '',
// //         endTime: '',
// //     });

// //     const handleOpen = () => setOpen(!open);
// //     const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
// //     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await bookWalkin({ vehicleId: id, ...formData }).unwrap();
// //         } catch (error) {
// //             console.log(error);
// //         }
// //     };

// //     useEffect(() => {
// //         if (isError) {
// //             toast.error(error?.data?.error || 'Failed to update availability, please try again');
// //             handleOpen();
// //         }
// //         if (isSuccess) {
// //             toast.success(data?.message);
// //             refetch();
// //             handleOpen();
// //         }
// //     }, [isError, error, isSuccess, data]);

// //     // Check if a date is booked and return the booking time
// //     // Check if a date is booked and return the booking time
// //     const isDateBooked = (date) => {
// //         const bookedDate = bookedDates.find((bookedDate) =>
// //             dayjs(date).isSame(dayjs(bookedDate.startDate), 'day') ||
// //             dayjs(date).isBetween(dayjs(bookedDate.startDate), dayjs(bookedDate.endDate), null, '[]')
// //         );

// //         if (bookedDate) {
// //             const startTime = dayjs(bookedDate.startDate).format('HH:mm'); // Format as time (e.g., 17:14)
// //             const endTime = dayjs(bookedDate.endDate).format('HH:mm');     // Format as time (e.g., 05:14)
// //             const startDateFormatted = dayjs(bookedDate.startDate).format('YYYY-MM-DD'); // Format as date
// //             const endDateFormatted = dayjs(bookedDate.endDate).format('YYYY-MM-DD');     // Format as date
// //             return {
// //                 isBooked: true,
// //                 startTime,
// //                 endTime,
// //                 startDateFormatted,
// //                 endDateFormatted
// //             };
// //         }
// //         return { isBooked: false };
// //     };


// //     // Get today's date
// //     const today = dayjs();

// //     // Get all days in the current month
// //     const daysInMonth = Array.from({ length: dayjs().daysInMonth() }, (_, i) => dayjs().startOf('month').add(i, 'day'));
// //     const currentMonth = dayjs().format('MMMM YYYY');

// //     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// //     return (
// //         <>
// //             <IconButton
// //                 onClick={handleOpen}
// //                 variant="text"
// //                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// //             >
// //                 <SquarePen className="h-4 w-4" />
// //             </IconButton>

// //             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-green-100 rounded-md">
// //                 <div className="p-6">
// //                     {/* Current month title */}
// //                     <div className="text-center text-2xl font-bold text-gray-800 mb-6">
// //                         {currentMonth}
// //                     </div>

// //                     <pre>{JSON.stringify(bookedDates, null, 2)}</pre>

// //                   {/* Calendar view */}
// // <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-4 mb-4">
// //     {daysInMonth.map((day) => {
// //         const { isBooked, startTime, endTime, startDateFormatted, endDateFormatted } = isDateBooked(day);
// //         const isPast = day.isBefore(today, 'day'); // Check if the date is in the past
// //         const dayOfWeek = day.format('ddd'); // Get day of the week like 'Mon', 'Tue'

// //         return (
// //             <div
// //                 key={day}
// //                 className={`p-2 sm:p-4 rounded-lg border transition-transform transform ${isPast ? 'bg-gray-200 border-gray-300 cursor-not-allowed' :
// //                         isBooked ? 'bg-red-50 border-red-300' : 'bg-green-100 border-green-300 hover:scale-105'
// //                     }`}
// //             >
// //                 <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
// //                     {dayOfWeek}, {day.format('DD')}
// //                 </div>
// //                 <div className="text-xs text-gray-500 text-center">
// //                     {isPast ? (
// //                         <div className="font-bold text-gray-500">Not Available</div>
// //                     ) : isBooked ? (
// //                         <div className="text-red-800">
// //                             <h1 className="app-font">
// //                                 <span>From {startDateFormatted}, {startTime}</span> -
// //                                 <span> To {endDateFormatted} {endTime}</span>
// //                             </h1>
// //                         </div>
// //                     ) : (
// //                         <div className="font-bold text-green-500">Available</div>
// //                     )}
// //                 </div>
// //             </div>
// //         );
// //     })}
// // </div>


// //                     {/* Form for adding new booking */}
// //                     <form className="space-y-4">
// //                         <div className="mb-3">
// //                             <Input
// //                                 label="Pickup Date"
// //                                 type="date"
// //                                 name="startDate"
// //                                 value={formData.startDate}
// //                                 onChange={handleChange}
// //                                 required
// //                                 className="text-xs sm:text-sm"
// //                             />
// //                         </div>
// //                         <div className="mb-3">
// //                             <Input
// //                                 label="Drop off Date"
// //                                 type="date"
// //                                 name="endDate"
// //                                 value={formData.endDate}
// //                                 onChange={handleChange}
// //                                 required
// //                                 className="text-xs sm:text-sm"
// //                             />
// //                         </div>
// //                         <div className="mb-3">
// //                             <Input
// //                                 label="Pickup Time"
// //                                 type="time"
// //                                 name="startTime"
// //                                 value={formData.startTime}
// //                                 onChange={handleChange}
// //                                 required
// //                                 className="text-xs sm:text-sm"
// //                             />
// //                         </div>
// //                         <div className="mb-3">
// //                             <Input
// //                                 label="Drop Off Time"
// //                                 type="time"
// //                                 name="endTime"
// //                                 value={formData.endTime}
// //                                 onChange={handleChange}
// //                                 required
// //                                 className="text-xs sm:text-sm"
// //                             />
// //                         </div>
// //                     </form>

// //                     <div className="flex justify-between mt-6">
// //                         <Button variant="text" color="red" onClick={handleOpen} className="mr-1 text-sm sm:text-base">
// //                             <span>Cancel</span>
// //                         </Button>
// //                         <Button variant="gradient" color="green" onClick={handleSubmit} disabled={isLoading} className="text-sm sm:text-base">
// //                             {isLoading ? 'Booking...' : 'Book Now'}
// //                         </Button>
// //                     </div>
// //                 </div>

// //                 <DialogFooter>
// //                     <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
// //                         <span>Cancel</span>
// //                     </Button>
// //                     <Button variant="gradient" color="green" onClick={handleSubmit} disabled={isLoading}>
// //                         {isLoading ? 'Booking...' : 'Book Now'}
// //                     </Button>
// //                 </DialogFooter>
// //             </Dialog>
// //         </>
// //     );
// // }


// import { useEffect, useState } from "react";
// import { Button, Dialog, DialogFooter, IconButton, Input } from "@material-tailwind/react";
// import { SquarePen } from "lucide-react";
// import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
// import toast from "react-hot-toast";
// import dayjs from "dayjs";
// import isBetween from 'dayjs/plugin/isBetween';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// dayjs.extend(isBetween);

// export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
//     const [open, setOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         startDate: '',
//         endDate: '',
//         startTime: '',
//         endTime: '',
//     });

//     const [selectedMonth, setSelectedMonth] = useState(dayjs()); // Initial month is the current month

//     const handleOpen = () => setOpen(!open);
//     const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
//     const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await bookWalkin({ vehicleId: id, ...formData }).unwrap();
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (isError) {
//             toast.error(error?.data?.error || 'Failed to update availability, please try again');
//             handleOpen();
//         }
//         if (isSuccess) {
//             toast.success(data?.message);
//             refetch();
//             handleOpen();
//         }
//     }, [isError, error, isSuccess, data]);

//     const isDateBooked = (date) => {
//         const bookedDate = bookedDates.find((bookedDate) => {
//             const startDate = dayjs(bookedDate.startDate);
//             const endDate = dayjs(bookedDate.endDate);

//             // Ignore bookings with invalid date ranges
//             if (endDate.isBefore(startDate)) {
//                 console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
//                 return false;
//             }

//             // Check if the selected date falls within the booking range
//             return dayjs(date).isBetween(startDate, endDate, 'day', '[]');
//         });

//         if (bookedDate) {
//             const startTime = dayjs(bookedDate.startDate).format('HH:mm');
//             const endTime = dayjs(bookedDate.endDate).format('HH:mm');
//             const startDateFormatted = dayjs(bookedDate.startDate).format('YYYY-MM-DD');
//             const endDateFormatted = dayjs(bookedDate.endDate).format('YYYY-MM-DD');
//             return {
//                 isBooked: true,
//                 startTime,
//                 endTime,
//                 startDateFormatted,
//                 endDateFormatted
//             };
//         }
//         return { isBooked: false };
//     };



//     const today = dayjs();

//     // Get all days in the selected month
//     const daysInMonth = Array.from(
//         { length: selectedMonth.daysInMonth() },
//         (_, i) => selectedMonth.startOf('month').add(i, 'day')
//     );
//     const currentMonth = selectedMonth.format('MMMM YYYY');

//     const handlePrevMonth = () => {
//         setSelectedMonth(selectedMonth.subtract(1, 'month'));
//     };

//     const handleNextMonth = () => {
//         setSelectedMonth(selectedMonth.add(1, 'month'));
//     };

//      // Disable past and booked dates
//      const filterPassedDates = (date) => {
//         return dayjs(date).isAfter(dayjs()) && !isDateBooked(date);
//     };

//     return (
//         <>
//             <IconButton
//                 onClick={handleOpen}
//                 variant="text"
//                 className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
//             >
//                 <SquarePen className="h-4 w-4" />
//             </IconButton>

//             <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-green-100 rounded-md">
//                 <div className=" overflow-y-scroll">
//                     {/* Current month title with navigation */}
//                     <div className="flex justify-between items-center mb-2 bg-green-200">
//                         <Button variant="text"
//                             onClick={handlePrevMonth}
//                             className="text-xs hover:shadow-none shadow-none rounded-none">
//                             Previous
//                         </Button>
//                         <div className="text-center text-lg lg:text-xl font-bold text-gray-800">
//                             {currentMonth}
//                         </div>
//                         <Button variant="text"
//                             onClick={handleNextMonth}
//                             className="text-xs hover:shadow-none shadow-none rounded-none">
//                             Next
//                         </Button>
//                     </div>

//                     {/* <pre>{JSON.stringify(bookedDates,null,2)}</pre> */}

//                     <div className="p-3">
//                         {/* Calendar view */}
//                         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-4 mb-4">
//                             {daysInMonth.map((day) => {
//                                 const { isBooked, startTime, endTime, startDateFormatted, endDateFormatted } = isDateBooked(day);
//                                 const isPast = day.isBefore(today, 'day') && day.isSame(selectedMonth, 'month');

//                                 return (
//                                     <div
//                                         key={day}
//                                         className={`p-2 sm:p-4 rounded-lg border transition-transform transform ${isPast ? 'bg-gray-200 border-gray-300 cursor-not-allowed' :
//                                             isBooked ? 'bg-red-50 border-red-300' : 'bg-green-100 border-green-300 hover:scale-105'
//                                             }`}
//                                     >
//                                         <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
//                                             {day.format('ddd')}, {day.format('DD')}
//                                         </div>
//                                         <div className="text-xs text-gray-500 text-center">
//                                             {isPast ? (
//                                                 <div className="font-bold text-gray-500">Not Available</div>
//                                             ) : isBooked ? (
//                                                 <div className="text-red-800">
//                                                     Booked
//                                                     <h1 className="app-font">
//                                                         <span>From {startDateFormatted}, {startTime}</span> -
//                                                         <span> To {endDateFormatted} {endTime}</span>
//                                                     </h1>
//                                                 </div>
//                                             ) : (
//                                                 <div className="font-bold text-green-500">Available</div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>


//                         {/* Form for adding new booking */}
//                         <form className="space-y-4">
//                             <div className="mb-3">
//                                 {/* <Input
//                                     label="Pickup Date"
//                                     type="date"
//                                     name="startDate"
//                                     value={formData.startDate}
//                                     onChange={handleChange}
//                                     min={dayjs().format('YYYY-MM-DD')} // Disable past dates
//                                     disabled={bookedDates.some((bookedDate) => isDateBooked(dayjs(formData.startDate)).isBooked)} // Disable booked dates
//                                     required
//                                     className="text-xs sm:text-sm"
//                                 /> */}
//                                  <DatePicker
//                     selected={formData.startDate}
//                     onChange={handleChange}
//                     filterDate={filterPassedDates} // Disable past and booked dates
//                     dateFormat="yyyy-MM-dd"
//                     className="text-xs sm:text-sm border p-2 w-full"
//                     placeholderText="Select Pickup Date"
//                     required
//                 />
//                             </div>
//                             <div className="mb-3">
//                                 <Input
//                                     label="Drop off Date"
//                                     type="date"
//                                     name="endDate"
//                                     value={formData.endDate}
//                                     onChange={handleChange}
//                                     required
//                                     className="text-xs sm:text-sm"
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <Input
//                                     label="Pickup Time"
//                                     type="time"
//                                     name="startTime"
//                                     value={formData.startTime}
//                                     onChange={handleChange}
//                                     required
//                                     className="text-xs sm:text-sm"
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <Input
//                                     label="Drop Off Time"
//                                     type="time"
//                                     name="endTime"
//                                     value={formData.endTime}
//                                     onChange={handleChange}
//                                     required
//                                     className="text-xs sm:text-sm"
//                                 />
//                             </div>
//                         </form>
//                     </div>

//                     {/* <div className="flex justify-between mt-6">
//                         <Button variant="text" color="red" onClick={handleOpen} className="mr-1 text-sm sm:text-base">
//                             <span>Cancel</span>
//                         </Button>
//                         <Button variant="gradient" color="green" onClick={handleSubmit} disabled={isLoading} className="text-sm sm:text-base">
//                             {isLoading ? 'Booking...' : 'Book Now'}
//                         </Button>
//                     </div> */}
//                 </div>

//                 <DialogFooter>
//                     <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
//                         <span>Cancel</span>
//                     </Button>
//                     <Button variant="gradient" color="green" onClick={handleSubmit} disabled={isLoading}>
//                         {isLoading ? 'Booking...' : 'Book Now'}
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </>
//     );
// }


import { useEffect, useState } from "react";
import { Button, Dialog, DialogFooter, IconButton, Input } from "@material-tailwind/react";
import { SquarePen } from "lucide-react";
import { useBookWalkinMutation } from "../../../../redux/slices/vehicleApiSlice";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import isBetween from 'dayjs/plugin/isBetween';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);


export default function UpdateAvailabilityModal({ id, bookedDates, refetch }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        startDate: null,
        endDate: null,
        startTime: '',
        endTime: '',
    });

    const [selectedMonth, setSelectedMonth] = useState(dayjs()); // Initial month is the current month
    const today = dayjs();
    const [bookWalkin, { isLoading, isError, isSuccess, data, error }] = useBookWalkinMutation();

    const handleOpen = () => setOpen(!open);

    // Handle DatePicker changes separately
    const handleDateChange = (date, fieldName) => {
        const localDate = dayjs(date).startOf('day').format('YYYY-MM-DD'); // Format to store only the date
        setFormData({ ...formData, [fieldName]: localDate });
    };
    
    // Handle regular input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.startDate || !formData.endDate || !formData.startTime || !formData.endTime) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            await bookWalkin({ vehicleId: id, ...formData }).unwrap();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to update availability, please try again');
            handleOpen();
        }
        if (isSuccess) {
            toast.success(data?.message);
            refetch();
            handleOpen();
        }
    }, [isError, error, isSuccess, data]);

    // Function to check if a date is booked
    // const isDateBooked = (date) => {
    //     const bookedDate = bookedDates.find((bookedDate) => {
    //         const startDate = dayjs(bookedDate.startDate);
    //         const endDate = dayjs(bookedDate.endDate);

    //         // Ignore bookings with invalid date ranges
    //         if (endDate.isBefore(startDate)) {
    //             console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
    //             return false;
    //         }

    //         // Check if the selected date falls within the booking range
    //         return dayjs(date).isBetween(startDate, endDate, 'day', '[]');
    //     });

    //     if (bookedDate) {
    //         const startTime = dayjs(bookedDate.startDate).format('HH:mm');
    //         const endTime = dayjs(bookedDate.endDate).format('HH:mm');
    //         const startDateFormatted = dayjs(bookedDate.startDate).format('YYYY-MM-DD');
    //         const endDateFormatted = dayjs(bookedDate.endDate).format('YYYY-MM-DD');
    //         return {
    //             isBooked: true,
    //             startTime,
    //             endTime,
    //             startDateFormatted,
    //             endDateFormatted,
    //         };
    //     }
    //     return { isBooked: false };
    // };

    // const isDateBooked = (date) => {
    //     const bookedDate = bookedDates.find((bookedDate) => {
    //         const startDate = dayjs(bookedDate.startDate);
    //         const endDate = dayjs(bookedDate.endDate);
    
    //         // Ignore bookings with invalid date ranges
    //         if (endDate.isBefore(startDate)) {
    //             console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
    //             return false;
    //         }
    
    //         // Check if the selected date falls within the booking range
    //         return dayjs(date).isBetween(startDate, endDate, 'day', '[]');
    //     });
    
    //     if (bookedDate) {
    //         // Format date as DD-MM-YYYY and time in 12-hour format with AM/PM
    //         const startTime = dayjs(bookedDate.startDate).format('hh:mm A'); 
    //         const endTime = dayjs(bookedDate.endDate).format('hh:mm A');
    //         const startDateFormatted = dayjs(bookedDate.startDate).format('DD-MM-YYYY');
    //         const endDateFormatted = dayjs(bookedDate.endDate).format('DD-MM-YYYY');
            
    //         return {
    //             isBooked: true,
    //             startTime,
    //             endTime,
    //             startDateFormatted,
    //             endDateFormatted,
    //         };
    //     }
    //     return { isBooked: false };
    // };
    

  const isDateBooked = (date) => {
    const bookedDate = bookedDates.find((bookedDate) => {
      const startDate = dayjs(bookedDate.startDate);
      const endDate = dayjs(bookedDate.endDate);

      // Ignore bookings with invalid date ranges
      if (endDate.isBefore(startDate)) {
        console.warn(`Invalid booking range for booking ID: ${bookedDate._id}`);
        return false;
      }

      // Check if the selected date falls within the booking range
      return dayjs(date).isBetween(startDate, endDate, 'day', '[]');
    });

    if (bookedDate) {
      const startTime = dayjs(bookedDate.startDate).format('hh:mm A');
      const endTime = dayjs(bookedDate.endDate).format('hh:mm A');
      const startDateFormatted = dayjs(bookedDate.startDate).format('DD-MM-YYYY');
      const endDateFormatted = dayjs(bookedDate.endDate).format('DD-MM-YYYY');

      // Check if the selected date is the end date of the booking
      const isPartialBooking = dayjs(date).isSame(dayjs(bookedDate.endDate), 'day');

      return {
        isBooked: true,
        startTime,
        endTime,
        startDateFormatted,
        endDateFormatted,
        isPartialBooking,
      };
    }

    return { isBooked: false, isPartialBooking: false };
  };

    // Disable past and booked dates
    // const filterPassedDates = (date) => {
    //     return dayjs(date).isAfter(today) && !isDateBooked(date).isBooked;
    // };
    const filterPassedDates = (date) => {
        return dayjs(date).isSameOrAfter(today, 'day') && !isDateBooked(date).isBooked;
    };
    

    const handlePrevMonth = () => {
        setSelectedMonth(selectedMonth.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setSelectedMonth(selectedMonth.add(1, 'month'));
    };

    const daysInMonth = Array.from(
        { length: selectedMonth.daysInMonth() },
        (_, i) => selectedMonth.startOf('month').add(i, 'day')
    );
    const currentMonth = selectedMonth.format('MMMM YYYY');

    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <SquarePen className="h-4 w-4" />
            </IconButton>

            <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-white">
                <div className="overflow-y-scroll">
                    {/* Current month title with navigation */}
                    <div className="flex justify-between items-center mb-2 bg-blue-500">
                        <Button variant="text"
                            onClick={handlePrevMonth}
                            className="text-xs hover:shadow-none shadow-none rounded-none text-white">
                            Previous
                        </Button>
                        <div className="text-center text-lg lg:text-xl font-bold text-white">
                            {currentMonth}
                        </div>
                        <Button variant="text"
                            onClick={handleNextMonth}
                            className="text-xs hover:shadow-none shadow-none rounded-none text-white">
                            Next
                        </Button>
                    </div>

{/* <pre>{JSON.stringify(formData,null,2)}</pre> */}
                    <div className="p-3">
                        {/* Calendar view */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-4 mb-4">
                        {daysInMonth.map((day) => {
                  const {
                    isBooked,
                    startTime,
                    endTime,
                    startDateFormatted,
                    endDateFormatted,
                    isPartialBooking,
                  } = isDateBooked(day);
                  const isPast = day.isBefore(today, 'day') && day.isSame(selectedMonth, 'month');

                  return (
                    <div
                      key={day}
                      className={`p-2 sm:p-4 rounded-lg border transition-transform transform ${isPast
                        ? 'bg-gray-100 border-gray-300 cursor-not-allowed' // Light gray background for past dates
                        : isBooked && isPartialBooking
                          ? 'bg-indigo-100 border-indigo-300' // Yellow background for partially booked days
                          : isBooked
                            ? 'bg-red-200 border-red-400' // Red background for fully booked days
                            : 'bg-green-200 border-green-400 hover:scale-105' // Green background for available days
                        }`}
                    >
                      <div className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
                        {day.format('ddd')}, {day.format('DD')}
                      </div>
                      <div className="text-xs text-gray-500 text-center">
                        {isPast ? (
                          <div className="font-bold text-gray-500">Not Available</div>
                        ) : isBooked ? (
                          isPartialBooking ? (
                            <div className="text-indigo-800">
                              <p className="font-bold mt-1 mb-1">Partially Booked</p>
                              <div>Available after {endTime}</div>
                              <div className="text-xs">From {endDateFormatted}</div>
                            </div>
                          ) : (
                            <div className="text-red-800">
                              <p className="font-bold mt-1 mb-1">Booked</p>
                              <h1 className="app-font">
                                From <span className="font-semibold text-[10px]">{startDateFormatted}, {startTime}</span> -
                                <br className="hidden lg:block md:block sm:block" />
                                {" "}To <span className="font-semibold text-[10px]">{endDateFormatted} {endTime}</span>
                              </h1>
                            </div>
                          )
                        ) : (
                          <div className="font-bold text-green-500">Available</div>
                        )}
                      </div>
                    </div>
                  );
                })}
                        </div>

                        {/* Form for adding new booking */}
                        <form onSubmit={handleSubmit} className="space-y-4 flex justify-end">
                            <div className=" bg-gray-200 border border-gray-400 p-5 w-full lg:w-80">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="">
                                        <DatePicker
                                            selected={formData.startDate}
                                            onChange={(date) => handleDateChange(date, 'startDate')}
                                            filterDate={filterPassedDates} // Disable past and booked dates
                                            dateFormat="yyyy-MM-dd"
                                            className="text-xs sm:text-sm border p-2 w-full outline-none"
                                            placeholderText="Select Pickup Date"
                                            required
                                        />
                                    </div>

                                    <div className="">
                                        <input
                                            label="Pickup Time"
                                            type="time"
                                            name="startTime"
                                            value={formData.startTime}
                                            onChange={handleChange}
                                            required
                                            className="text-xs sm:text-sm border p-1.5 w-full outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="">
                                        <DatePicker
                                            selected={formData.endDate}
                                            onChange={(date) => handleDateChange(date, 'endDate')}
                                            filterDate={filterPassedDates} // Disable past and booked dates
                                            dateFormat="yyyy-MM-dd"
                                            className="text-xs sm:text-sm border p-2 w-full outline-none"
                                            placeholderText="Select Drop off Date"
                                            required
                                        />
                                    </div>

                                    <div className="">
                                        <input
                                            placeholder="Drop Off Time"
                                            type="time"
                                            name="endTime"
                                            value={formData.endTime}
                                            onChange={handleChange}
                                            required
                                            className="text-xs sm:text-sm border p-1.5 w-full outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? 'Booking...' : 'Book Now'}
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
