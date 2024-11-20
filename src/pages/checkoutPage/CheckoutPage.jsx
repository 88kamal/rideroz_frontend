/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Layout from "../../components/layout/Layout";
import { BadgeIndianRupee } from 'lucide-react';
import { useGetVehicleByIdQuery } from "../../redux/slices/vehicleApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import RatingStar from "../../components/review/RatingStar";
import { Button, Input } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import dayjs from "dayjs";
import { useCreateOrderMutation, useVerifyPaymentMutation } from "../../redux/slices/orderApiSlice";
import toast from "react-hot-toast";
import CustomTimeDropdown from "./CustomTimeDropdown";
import VehicleAvailbilityModal from "../../components/modal/vehicleBookAvaibilityModal/VehicleAvailbilityModal";
import UploadAdharImage from "./UploadAdharImage";
import LoginModal from "../../components/registration/LoginModal";
import authService from "../../services/authService";


const CartPage = () => {
    const user = authService.getCurrentUser();
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: vehicle } = useGetVehicleByIdQuery(id);
    const { lat, setLat, lng, setLng, vehicleType, setVehicleType, vehicleCity, setVehicleCity, selectedCity, setSelectedCity, currentLocationName, setCurrentLocationName, showAlert, autoOpenLogin, setAutoOpenLogin } = useContext(myContext);
    const [originalShopAmount, setOriginalShopAmount] = useState(null);

    const [bookedDates, setBookedDates] = useState([]);
    const [rentDuration, setRentDuration] = useState(0); // State to store rent duration in days
    const [discountedAmount, setDiscountedAmount] = useState(0); // Discounted total amount after coupon
    const [discountAmount, setDiscountAmount] = useState(0); // Discount value


    const [formData, setFormData] = useState({
        startDate: null,
        endDate: null,
        startTime: '',
        endTime: '',
        shopAmount: 0,
        platformAmount: 0,
        miscAmount: 0,
        couponCode: '',
        discountAmount: discountAmount,
        extraHours: 0,
        extraHourCharge: 0,
        rentDuration: "",
        adharcardImg: null
    });

    const [isCouponApplied, setIsCouponApplied] = useState(false); // New state to track coupon application

    useEffect(() => {
        const storedCity = localStorage.getItem('selectedCity');
        const storedVehicleCity = localStorage.getItem('vehicleCity');
        const storedLat = localStorage.getItem('lat');
        const storedLng = localStorage.getItem('lng');
        const storedLocationName = localStorage.getItem('currentLocationName');

        if (storedCity && storedVehicleCity && storedLat && storedLng) {
            setSelectedCity(storedCity);
            setVehicleCity(storedVehicleCity);
            setLat(Number(storedLat));
            setLng(Number(storedLng));
            setCurrentLocationName(storedLocationName);
        }

        if (vehicle?.bookedDates) {
            setBookedDates(vehicle.bookedDates);
        }
    }, [setSelectedCity, setVehicleCity, setLat, setLng, setCurrentLocationName, vehicle]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date, fieldName) => {
        setFormData({ ...formData, [fieldName]: dayjs(date).startOf('day').format('YYYY-MM-DD') });
    };

    const vehiclePricePerDay = vehicle?.vehiclePrice || 0;

    // const calculateShopAmount = () => {
    //     const { startDate, endDate, startTime, endTime } = formData;

    //     // Ensure both dates and times are selected
    //     // if (!startDate || !endDate || !startTime || !endTime) {
    //     //     showAlert('Please select both start and end dates and times.', 'error');
    //     // }

    //     // Validate that endDate is greater than startDate
    //     if (dayjs(endDate).isBefore(dayjs(startDate))) {
    //         showAlert('End date must be greater than start date.', 'error');
    //     }

    //     if (startDate && endDate && startTime && endTime) {
    //         // Parse the start and end times with dates
    //         const start = dayjs(`${startDate} ${startTime}`);
    //         const end = dayjs(`${endDate} ${endTime}`);

    //         // Calculate the total difference in hours
    //         const totalHours = end.diff(start, 'hour', true); // Use true for floating point precision

    //         // Base price calculation
    //         const baseDays = Math.floor(totalHours / 24); // Full days
    //         const extraHours = totalHours % 24; // Extra hours beyond full days (this includes fractional hours)

    //         const basePrice = baseDays * vehiclePricePerDay; // Full day price

    //         // Calculate additional charges for extra hours
    //         let extraCharge = 0;
    //         let extraHourRounded = Math.floor(extraHours); // Number of full extra hours

    //         if (extraHours >= 1) {
    //             // Charge ₹100 per full hour
    //             extraCharge = extraHourRounded * 100;
    //         }

    //         if (extraHours % 1 >= 0.5) {
    //             // Add ₹50 for half-hour increments
    //             extraCharge += 50;
    //         }

    //         // Calculate platform and misc charges
    //         const platformAmount = (10 / 100) * (basePrice + extraCharge); // 10% platform charge
    //         const miscAmount = (5 / 100) * (basePrice + extraCharge);      // 5% miscellaneous charge

    //         // Calculate the total amount (base price + extra hours + platform + misc)
    //         const totalAmount = basePrice + extraCharge + platformAmount + miscAmount;

    //         // Update the formData and rent duration with calculated values
    //         setFormData(prevState => ({
    //             ...prevState,
    //             platformAmount: platformAmount,
    //             miscAmount: miscAmount,
    //             shopAmount: totalAmount,
    //             extraHours: extraHours.toFixed(2), // Store the exact extra hours (including fractional part)
    //             extraHourCharge: extraCharge,        // Store the extra hour charge
    //             rentDuration: `${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`
    //         }));

    //         // Update rent duration in days and exact extra hours (including fractional)
    //         setRentDuration(`${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`);
    //         setDiscountedAmount(null); // Reset discountedAmount when dates change
    //         setDiscountAmount(0); // Reset discount amount when dates change
    //     }
    // };

    // *** second code 5 hour added ***
    //     const calculateShopAmount = () => {
    //     const { startDate, endDate, startTime, endTime } = formData;

    //     // Validate that endDate is greater than startDate
    //     if (dayjs(endDate).isBefore(dayjs(startDate))) {
    //         showAlert('End date must be greater than start date.', 'error');
    //         return; // Exit the function if validation fails
    //     }

    //     if (startDate && endDate && startTime && endTime) {
    //         // Parse the start and end times with dates
    //         const start = dayjs(`${startDate} ${startTime}`);
    //         const end = dayjs(`${endDate} ${endTime}`);

    //         // Calculate the total difference in hours
    //         const totalHours = end.diff(start, 'hour', true); // Use true for floating-point precision

    //         // Base price calculation
    //         let baseDays = Math.floor(totalHours / 24); // Full days
    //         let extraHours = totalHours % 24; // Extra hours beyond full days

    //         let extraCharge = 0;
    //         let basePrice = baseDays * vehiclePricePerDay; // Full day price

    //         if (extraHours <= 5) {
    //             // Charge ₹100 per hour for up to 5 hours
    //             extraCharge = Math.floor(extraHours) * 100;

    //             if (extraHours % 1 >= 0.5) {
    //                 // Add ₹50 for half-hour increments
    //                 extraCharge += 50;
    //             }
    //         } else {
    //             // If extra hours exceed 5, count them as another full day
    //             baseDays += 1;
    //             basePrice = baseDays * vehiclePricePerDay; // Update base price with the new full day
    //             extraCharge = 0; // No extra hourly charge beyond 5 hours
    //         }

    //         // Calculate platform and miscellaneous charges
    //         const platformAmount = (10 / 100) * (basePrice + extraCharge); // 10% platform charge
    //         const miscAmount = (5 / 100) * (basePrice + extraCharge);      // 5% miscellaneous charge

    //         // Calculate the total amount
    //         const totalAmount = basePrice + extraCharge + platformAmount + miscAmount;

    //         // Update the formData and rent duration with calculated values
    //         setFormData(prevState => ({
    //             ...prevState,
    //             platformAmount: platformAmount,
    //             miscAmount: miscAmount,
    //             shopAmount: totalAmount,
    //             extraHours: extraHours.toFixed(2), // Store the exact extra hours (including fractional part)
    //             extraHourCharge: extraCharge,        // Store the extra hour charge
    //             rentDuration: `${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`
    //         }));

    //         setRentDuration(`${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`);
    //         setDiscountedAmount(null); // Reset discountedAmount when dates change
    //         setDiscountAmount(0); // Reset discount amount when dates change
    //     }
    // };

    // after coupon code 
    // const calculateShopAmount = () => {
    //     const { startDate, endDate, startTime, endTime } = formData;

    //     // Validate that endDate is greater than startDate
    //     if (dayjs(endDate).isBefore(dayjs(startDate))) {
    //         showAlert('End date must be greater than start date.', 'error');
    //         return; // Exit the function if validation fails
    //     }

    //     if (startDate && endDate && startTime && endTime) {
    //         // Parse the start and end times with dates
    //         const start = dayjs(`${startDate} ${startTime}`);
    //         const end = dayjs(`${endDate} ${endTime}`);

    //         // Calculate the total difference in hours
    //         const totalHours = end.diff(start, 'hour', true); // Use true for floating-point precision

    //         // Base price calculation
    //         let baseDays = Math.floor(totalHours / 24); // Full days
    //         let extraHours = totalHours % 24; // Extra hours beyond full days

    //         let extraCharge = 0;
    //         let basePrice = baseDays * vehiclePricePerDay; // Full day price

    //         if (extraHours <= 5) {
    //             // Charge ₹100 per hour for up to 5 hours
    //             extraCharge = Math.floor(extraHours) * 100;

    //             if (extraHours % 1 >= 0.5) {
    //                 // Add ₹50 for half-hour increments
    //                 extraCharge += 50;
    //             }
    //         } else {
    //             // If extra hours exceed 5, count them as another full day
    //             baseDays += 1;
    //             basePrice = baseDays * vehiclePricePerDay; // Update base price with the new full day
    //             extraCharge = 0; // No extra hourly charge beyond 5 hours
    //         }

    //         // Calculate platform and miscellaneous charges
    //         const platformAmount = (10 / 100) * (basePrice + extraCharge); // 10% platform charge
    //         const miscAmount = (5 / 100) * (basePrice + extraCharge);      // 5% miscellaneous charge

    //         // Calculate the total amount
    //         const totalAmount = basePrice + extraCharge + platformAmount + miscAmount;

    //         // Adjust the total amount if a discount is already applied
    //         let adjustedAmount = totalAmount;
    //         if (isCouponApplied && discountAmount > 0) {
    //             adjustedAmount -= discountAmount; // Apply the previously calculated discount
    //         }

    //         // Update the formData and rent duration with calculated values
    //         setFormData(prevState => ({
    //             ...prevState,
    //             platformAmount: platformAmount,
    //             miscAmount: miscAmount,
    //             shopAmount: adjustedAmount,
    //             extraHours: extraHours.toFixed(2), // Store the exact extra hours (including fractional part)
    //             extraHourCharge: extraCharge,        // Store the extra hour charge
    //             rentDuration: `${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`,
    //         }));

    //         setRentDuration(`${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`);
    //     }
    // };

    // done but minor change 
    // const calculateShopAmount = () => {
    //     const { startDate, endDate, startTime, endTime } = formData;

    //     // Validate that endDate is greater than startDate
    //     if (dayjs(endDate).isBefore(dayjs(startDate))) {
    //         showAlert('End date must be greater than start date.', 'error');
    //         return; // Exit the function if validation fails
    //     }

    //     if (startDate && endDate && startTime && endTime) {
    //         // Parse the start and end times with dates
    //         const start = dayjs(`${startDate} ${startTime}`);
    //         const end = dayjs(`${endDate} ${endTime}`);

    //         // Calculate the total difference in hours
    //         const totalHours = end.diff(start, 'hour', true); // Use true for floating-point precision

    //         // Base price calculation
    //         let baseDays = Math.floor(totalHours / 24); // Full days
    //         let extraHours = totalHours % 24; // Extra hours beyond full days

    //         let extraCharge = 0;
    //         let basePrice = baseDays * vehiclePricePerDay; // Full day price

    //         if (extraHours <= 5) {
    //             // Charge ₹100 per hour for up to 5 hours
    //             extraCharge = Math.floor(extraHours) * 100;

    //             if (extraHours % 1 >= 0.5) {
    //                 // Add ₹50 for half-hour increments
    //                 extraCharge += 50;
    //             }
    //         } else {
    //             // If extra hours exceed 5, count them as another full day
    //             baseDays += 1;
    //             basePrice = baseDays * vehiclePricePerDay; // Update base price with the new full day
    //             extraCharge = 0; // No extra hourly charge beyond 5 hours
    //         }

    //         // Calculate platform and miscellaneous charges
    //         const platformAmount = (10 / 100) * (basePrice + extraCharge); // 10% platform charge
    //         const miscAmount = (5 / 100) * (basePrice + extraCharge);      // 5% miscellaneous charge

    //         // Calculate the total amount
    //         const totalAmount = basePrice + extraCharge + platformAmount + miscAmount;

    //         // Update both originalShopAmount and shopAmount in formData
    //         setOriginalShopAmount(totalAmount); // Store the full amount for reference
    //         setFormData(prevState => ({
    //             ...prevState,
    //             platformAmount: platformAmount,
    //             miscAmount: miscAmount,
    //             shopAmount: totalAmount,
    //             extraHours: extraHours.toFixed(2), // Store the exact extra hours (including fractional part)
    //             extraHourCharge: extraCharge,        // Store the extra hour charge
    //             rentDuration: `${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`,
    //         }));

    //         setRentDuration(`${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`);
    //     }
    // };


    // const calculateShopAmount = () => {
    //     const { startDate, endDate, startTime, endTime } = formData;

    //     // Validate that endDate is greater than startDate
    //     if (dayjs(endDate).isBefore(dayjs(startDate))) {
    //         showAlert('End date must be greater than start date.', 'error');
    //         return; // Exit the function if validation fails
    //     }

    //     if (startDate && endDate && startTime && endTime) {
    //         // Parse the start and end times with dates
    //         const start = dayjs(`${startDate} ${startTime}`);
    //         const end = dayjs(`${endDate} ${endTime}`);

    //         // Calculate the total difference in hours
    //         const totalHours = end.diff(start, 'hour', true); // Use true for floating-point precision

    //         // Base price calculation
    //         let baseDays = Math.floor(totalHours / 24); // Full days
    //         let extraHours = totalHours % 24; // Extra hours beyond full days

    //         let extraCharge = 0;
    //         let basePrice = baseDays * vehiclePricePerDay; // Full day price

    //         if (extraHours <= 5) {
    //             // Charge ₹100 per hour for up to 5 hours
    //             extraCharge = Math.floor(extraHours) * 100;

    //             if (extraHours % 1 >= 0.5) {
    //                 // Add ₹50 for half-hour increments
    //                 extraCharge += 50;
    //             }
    //         } else {
    //             // If extra hours exceed 5, count them as another full day
    //             baseDays += 1;
    //             basePrice = baseDays * vehiclePricePerDay; // Update base price with the new full day
    //             extraCharge = 0; // No extra hourly charge beyond 5 hours
    //         }

    //         // Calculate platform and miscellaneous charges
    //         const platformAmount = (10 / 100) * (basePrice + extraCharge); // 10% platform charge
    //         const miscAmount = (5 / 100) * (basePrice + extraCharge);      // 5% miscellaneous charge

    //         // Calculate the total amount
    //         const totalAmount = basePrice + extraCharge + platformAmount + miscAmount;

    //         // Apply discount if coupon is already applied
    //         let adjustedAmount = totalAmount;
    //         if (isCouponApplied && discountAmount > 0) {
    //             adjustedAmount -= discountAmount; // Apply the previously calculated discount
    //         }

    //         // Update formData with the calculated values
    //         setOriginalShopAmount(totalAmount); // Store the full amount for reference
    //         setFormData(prevState => ({
    //             ...prevState,
    //             platformAmount: platformAmount,
    //             miscAmount: miscAmount,
    //             shopAmount: adjustedAmount, // Update shopAmount with the adjusted value
    //             extraHours: extraHours.toFixed(2), // Store the exact extra hours (including fractional part)
    //             extraHourCharge: extraCharge,        // Store the extra hour charge
    //             rentDuration: `${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`,
    //         }));

    //         setRentDuration(`${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`);
    //     }
    // };




    // const applyCoupon = () => {
    //     if (isCouponApplied) {
    //         toast.error('Coupon already applied!');
    //         return;
    //     }

    //     if (formData.couponCode === 'Rideroz234') {
    //         const discount = (5 / 100) * formData.shopAmount;
    //         const discountedValue = formData.shopAmount - discount;

    //         setDiscountedAmount(Math.round(discountedValue));
    //         setDiscountAmount(Math.round(discount));
    //         setFormData(prevState => ({
    //             ...prevState,
    //             shopAmount: Math.round(discountedValue),
    //             discountAmount: Math.round(discount),
    //         }));

    //         setIsCouponApplied(true);
    //         // toast.success('Coupon applied successfully!');
    //         showAlert('Coupon applied successfully!', 'success')
    //     } else {
    //         // toast.error('Invalid Coupon Code');
    //         showAlert('Invalid Coupon Code', 'error')
    //         setDiscountedAmount(null);
    //         setDiscountAmount(0);
    //     }
    // };


    // const applyCoupon = () => {
    //     if (isCouponApplied) {
    //         toast.error('Coupon already applied!');
    //         return;
    //     }

    //     if (formData.couponCode === 'Rideroz234') {
    //         const discount = (5 / 100) * originalShopAmount; // Calculate discount on original amount
    //         const discountedValue = originalShopAmount - discount;

    //         setDiscountedAmount(Math.round(discountedValue));
    //         setDiscountAmount(Math.round(discount));
    //         setFormData(prevState => ({
    //             ...prevState,
    //             shopAmount: Math.round(discountedValue), // Update shopAmount with discounted value
    //             discountAmount: Math.round(discount),
    //         }));

    //         setIsCouponApplied(true);
    //         showAlert('Coupon applied successfully!', 'success');
    //     } else {
    //         showAlert('Invalid Coupon Code', 'error');
    //         setDiscountedAmount(null);
    //         setDiscountAmount(0);
    //     }
    // };

    // const calculateShopAmount = () => {
    //     const { startDate, endDate, startTime, endTime } = formData;

    //     // Validate that endDate is greater than startDate
    //     if (dayjs(endDate).isBefore(dayjs(startDate))) {
    //         showAlert('End date must be greater than start date.', 'error');
    //         return; // Exit the function if validation fails
    //     }

    //     if (startDate && endDate && startTime && endTime) {
    //         // Parse the start and end times with dates
    //         const start = dayjs(`${startDate} ${startTime}`);
    //         const end = dayjs(`${endDate} ${endTime}`);

    //         // Calculate the total difference in hours
    //         const totalHours = end.diff(start, 'hour', true); // Use true for floating-point precision

    //         // Base price calculation
    //         let baseDays = Math.floor(totalHours / 24); // Full days
    //         let extraHours = totalHours % 24; // Extra hours beyond full days

    //         let extraCharge = 0;
    //         let basePrice = baseDays * vehiclePricePerDay; // Full day price

    //         if (extraHours <= 5) {
    //             // Charge ₹100 per hour for up to 5 hours
    //             extraCharge = Math.floor(extraHours) * 100;

    //             if (extraHours % 1 >= 0.5) {
    //                 // Add ₹50 for half-hour increments
    //                 extraCharge += 50;
    //             }
    //         } else {
    //             // If extra hours exceed 5, count them as another full day
    //             baseDays += 1;
    //             basePrice = baseDays * vehiclePricePerDay; // Update base price with the new full day
    //             extraCharge = 0; // No extra hourly charge beyond 5 hours
    //         }

    //         // Calculate platform and miscellaneous charges
    //         const platformAmount = (10 / 100) * (basePrice + extraCharge); // 10% platform charge
    //         const miscAmount = (5 / 100) * (basePrice + extraCharge);      // 5% miscellaneous charge

    //         // Calculate the total amount
    //         const totalAmount = basePrice + extraCharge + platformAmount + miscAmount;

    //         // Reapply the discount if the coupon is already applied
    //         let adjustedAmount = totalAmount;
    //         if (isCouponApplied && discountAmount > 0) {
    //             const discount = (5 / 100) * totalAmount; // Recalculate discount based on the new total
    //             adjustedAmount -= discount;
    //             setDiscountAmount(Math.round(discount)); // Update the discount amount state
    //             setDiscountedAmount(Math.round(adjustedAmount)); // Update the discounted amount state
    //         }

    //         // Update formData with the recalculated values
    //         setOriginalShopAmount(totalAmount); // Store the full amount for reference
    //         setFormData(prevState => ({
    //             ...prevState,
    //             platformAmount: platformAmount,
    //             miscAmount: miscAmount,
    //             shopAmount: Math.round(adjustedAmount), // Update shopAmount with adjusted value
    //             extraHours: extraHours.toFixed(2), // Store the exact extra hours (including fractional part)
    //             extraHourCharge: extraCharge,        // Store the extra hour charge
    //             rentDuration: `${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`,
    //         }));

    //         setRentDuration(`${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`);
    //     }
    // };


    // const applyCoupon = () => {
    //     if (isCouponApplied) {
    //         toast.error('Coupon already applied!');
    //         return;
    //     }

    //     if (formData.couponCode === 'Rideroz234') {
    //         const discount = (5 / 100) * originalShopAmount; // Calculate discount on the original amount
    //         const discountedValue = originalShopAmount - discount;

    //         setDiscountedAmount(Math.round(discountedValue));
    //         setDiscountAmount(Math.round(discount));
    //         setFormData(prevState => ({
    //             ...prevState,
    //             shopAmount: Math.round(discountedValue), // Update shopAmount with discounted value
    //         }));

    //         setIsCouponApplied(true);
    //         showAlert('Coupon applied successfully!', 'success');
    //     } else {
    //         showAlert('Invalid Coupon Code', 'error');
    //         setDiscountedAmount(null);
    //         setDiscountAmount(0);
    //     }
    // };

    // const calculateShopAmount = () => {
    //     const { startDate, endDate, startTime, endTime } = formData;

    //     console.log({
    //         startDate, endDate, startTime, endTime
    //     })

    //     // Validate that endDate is greater than startDate
    //     if (dayjs(endDate).isBefore(dayjs(startDate))) {
    //         showAlert('End date must be greater than start date.', 'error');
    //         return; // Exit the function if validation fails
    //     }

    //     if (startDate && endDate && startTime && endTime) {
    //         // Parse the start and end times with dates
    //         const start = dayjs(`${startDate} ${startTime}`);
    //         const end = dayjs(`${endDate} ${endTime}`);

    //         // Calculate the total difference in hours
    //         const totalHours = end.diff(start, 'hour', true); // Use true for floating-point precision

    //         // Base price calculation
    //         let baseDays = Math.floor(totalHours / 24); // Full days
    //         let extraHours = totalHours % 24; // Extra hours beyond full days

    //         let extraCharge = 0;
    //         let basePrice = baseDays * vehiclePricePerDay; // Full day price

    //         if (extraHours <= 5) {
    //             // Charge ₹100 per hour for up to 5 hours
    //             extraCharge = Math.floor(extraHours) * 100;

    //             if (extraHours % 1 >= 0.5) {
    //                 // Add ₹50 for half-hour increments
    //                 extraCharge += 50;
    //             }
    //         } else {
    //             // If extra hours exceed 5, count them as another full day
    //             baseDays += 1;
    //             basePrice = baseDays * vehiclePricePerDay; // Update base price with the new full day
    //             extraCharge = 0; // No extra hourly charge beyond 5 hours
    //         }

    //         // Calculate platform and miscellaneous charges
    //         const platformAmount = (10 / 100) * (basePrice + extraCharge); // 10% platform charge
    //         const miscAmount = (5 / 100) * (basePrice + extraCharge);      // 5% miscellaneous charge

    //         // Calculate the total amount
    //         const totalAmount = basePrice + extraCharge + platformAmount + miscAmount;

    //         // Adjust the amount if a coupon is applied
    //         let adjustedAmount = totalAmount;
    //         if (isCouponApplied && formData.couponCode === 'Rideroz234') {
    //             const discount = (5 / 100) * totalAmount; // Recalculate discount based on the new total
    //             adjustedAmount -= discount;
    //             setDiscountAmount(Math.round(discount)); // Update the discount amount state
    //             setDiscountedAmount(Math.round(adjustedAmount)); // Update the discounted amount state
    //         } else {
    //             setDiscountAmount(0); // Reset discount amount if coupon is not applied
    //             setDiscountedAmount(null); // Reset discounted amount if coupon is not applied
    //         }

    //         // Update formData with the recalculated values
    //         setOriginalShopAmount(totalAmount); // Store the full amount for reference
    //         setFormData(prevState => ({
    //             ...prevState,
    //             platformAmount: platformAmount,
    //             miscAmount: miscAmount,
    //             shopAmount: Math.round(adjustedAmount), // Update shopAmount with adjusted value
    //             extraHours: extraHours.toFixed(2), // Store the exact extra hours (including fractional part)
    //             extraHourCharge: extraCharge,        // Store the extra hour charge
    //             rentDuration: `${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`,
    //         }));

    //         setRentDuration(`${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`);
    //     }
    // };

    // const calculateShopAmount = () => {
    //     const { startDate, endDate, startTime, endTime } = formData;

    //     console.log({ startDate, endDate, startTime, endTime });

    //     // Validate that endDate is greater than startDate
    //     if (dayjs(endDate).isBefore(dayjs(startDate))) {
    //         showAlert('End date must be greater than start date.', 'error');
    //         return; // Exit the function if validation fails
    //     }

    //     if (startDate && endDate && startTime && endTime) {
    //         // Normalize time strings to 24-hour format for consistent parsing
    //         const parseTimeTo24Hour = (time) => {
    //             const [timePart, meridian] = time.split(' ');
    //             let [hours, minutes] = timePart.split(':').map(Number);
    //             if (meridian === 'PM' && hours !== 12) hours += 12;
    //             if (meridian === 'AM' && hours === 12) hours = 0;
    //             return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    //         };

    //         const formattedStartTime = parseTimeTo24Hour(startTime);
    //         const formattedEndTime = parseTimeTo24Hour(endTime);

    //         // Parse the start and end times with dates
    //         const start = dayjs(`${startDate}T${formattedStartTime}`);
    //         const end = dayjs(`${endDate}T${formattedEndTime}`);

    //         if (!start.isValid() || !end.isValid()) {
    //             showAlert('Invalid date or time format.', 'error');
    //             return;
    //         }

    //         // Calculate the total difference in hours
    //         const totalHours = end.diff(start, 'hour', true); // Use true for floating-point precision

    //         // Base price calculation
    //         let baseDays = Math.floor(totalHours / 24); // Full days
    //         let extraHours = totalHours % 24; // Extra hours beyond full days

    //         let extraCharge = 0;
    //         let basePrice = baseDays * vehiclePricePerDay; // Full day price

    //         if (extraHours <= 5) {
    //             // Charge ₹100 per hour for up to 5 hours
    //             extraCharge = Math.floor(extraHours) * 100;

    //             if (extraHours % 1 >= 0.5) {
    //                 // Add ₹50 for half-hour increments
    //                 extraCharge += 50;
    //             }
    //         } else {
    //             // If extra hours exceed 5, count them as another full day
    //             baseDays += 1;
    //             basePrice = baseDays * vehiclePricePerDay; // Update base price with the new full day
    //             extraCharge = 0; // No extra hourly charge beyond 5 hours
    //         }

    //         // Calculate platform and miscellaneous charges
    //         const platformAmount = (10 / 100) * (basePrice + extraCharge); // 10% platform charge
    //         const miscAmount = (5 / 100) * (basePrice + extraCharge);      // 5% miscellaneous charge

    //         // Calculate the total amount
    //         const totalAmount = basePrice + extraCharge + platformAmount + miscAmount;

    //         // Adjust the amount if a coupon is applied
    //         let adjustedAmount = totalAmount;
    //         if (isCouponApplied && formData.couponCode === 'Rideroz234') {
    //             const discount = (5 / 100) * totalAmount; // Recalculate discount based on the new total
    //             adjustedAmount -= discount;
    //             setDiscountAmount(Math.round(discount)); // Update the discount amount state
    //             setDiscountedAmount(Math.round(adjustedAmount)); // Update the discounted amount state
    //         } else {
    //             setDiscountAmount(0); // Reset discount amount if coupon is not applied
    //             setDiscountedAmount(null); // Reset discounted amount if coupon is not applied
    //         }

    //         // Update formData with the recalculated values
    //         setOriginalShopAmount(totalAmount); // Store the full amount for reference
    //         setFormData((prevState) => ({
    //             ...prevState,
    //             platformAmount: platformAmount,
    //             miscAmount: miscAmount,
    //             shopAmount: Math.round(adjustedAmount), // Update shopAmount with adjusted value
    //             extraHours: extraHours.toFixed(2), // Store the exact extra hours (including fractional part)
    //             extraHourCharge: extraCharge,        // Store the extra hour charge
    //             rentDuration: `${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`,
    //         }));

    //         setRentDuration(`${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`);
    //     }
    // };

    // const calculateShopAmount = () => {
    //     const { startDate, endDate, startTime, endTime, couponCode } = formData;

    //     console.log({ startDate, endDate, startTime, endTime });

    //     if (dayjs(endDate).isBefore(dayjs(startDate))) {
    //         showAlert('End date must be greater than start date.', 'error');
    //         return;
    //     }

    //     if (startDate && endDate && startTime && endTime) {
    //         const parseTimeTo24Hour = (time) => {
    //             const [timePart, meridian] = time.split(' ');
    //             let [hours, minutes] = timePart.split(':').map(Number);
    //             if (meridian === 'PM' && hours !== 12) hours += 12;
    //             if (meridian === 'AM' && hours === 12) hours = 0;
    //             return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    //         };

    //         const formattedStartTime = parseTimeTo24Hour(startTime);
    //         const formattedEndTime = parseTimeTo24Hour(endTime);

    //         const start = dayjs(`${startDate}T${formattedStartTime}`);
    //         const end = dayjs(`${endDate}T${formattedEndTime}`);

    //         if (!start.isValid() || !end.isValid()) {
    //             showAlert('Invalid date or time format.', 'error');
    //             return;
    //         }

    //         const totalHours = end.diff(start, 'hour', true);

    //         let baseDays = Math.floor(totalHours / 24);
    //         let extraHours = totalHours % 24;

    //         let extraCharge = 0;
    //         let basePrice = baseDays * vehiclePricePerDay;

    //         if (extraHours <= 5) {
    //             extraCharge = Math.floor(extraHours) * 100;
    //             if (extraHours % 1 >= 0.5) {
    //                 extraCharge += 50;
    //             }
    //         } else {
    //             baseDays += 1;
    //             basePrice = baseDays * vehiclePricePerDay;
    //             extraCharge = 0;
    //         }

    //         const platformAmount = (10 / 100) * (basePrice + extraCharge);
    //         const miscAmount = (5 / 100) * (basePrice + extraCharge);
    //         const totalAmount = basePrice + extraCharge + platformAmount + miscAmount;

    //         let adjustedAmount = totalAmount;
    //         let discount = 0;

    //         if (isCouponApplied && couponCode === 'Rideroz234') {
    //             discount = (5 / 100) * totalAmount;
    //             adjustedAmount -= discount;
    //         }

    //         setOriginalShopAmount(totalAmount);
    //         setDiscountAmount(Math.round(discount)); // Update the discount amount
    //         setDiscountedAmount(Math.round(adjustedAmount)); // Update the discounted amount
    //         setFormData((prevState) => ({
    //             ...prevState,
    //             platformAmount,
    //             miscAmount,
    //             shopAmount: Math.round(adjustedAmount),
    //             extraHours: extraHours.toFixed(2),
    //             extraHourCharge: extraCharge,
    //             rentDuration: `${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`,
    //         }));

    //         setRentDuration(`${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`);
    //     }
    // };



    // const applyCoupon = () => {
    //     if (isCouponApplied) {
    //         showAlert('Coupon already applied!', 'error');
    //         return;
    //     }

    //     if (formData.couponCode === 'Rideroz234') {
    //         const discount = (5 / 100) * originalShopAmount; // Calculate discount on the original amount
    //         const discountedValue = originalShopAmount - discount;

    //         setDiscountedAmount(Math.round(discountedValue));
    //         setDiscountAmount(Math.round(discount));
    //         setFormData(prevState => ({
    //             ...prevState,
    //             shopAmount: Math.round(discountedValue), // Update shopAmount with discounted value
    //         }));

    //         setIsCouponApplied(true); // Mark the coupon as applied
    //         showAlert('Coupon applied successfully!', 'success');
    //     } else {
    //         showAlert('Invalid Coupon Code', 'error');
    //         setDiscountedAmount(null);
    //         setDiscountAmount(0);
    //     }
    // };


    const calculateShopAmount = () => {
        const { startDate, endDate, startTime, endTime, couponCode } = formData;

        console.log({ startDate, endDate, startTime, endTime });

        if (dayjs(endDate).isBefore(dayjs(startDate))) {
            showAlert('End date must be greater than start date.', 'error');
            return;
        }

        if (startDate && endDate && startTime && endTime) {
            const parseTimeTo24Hour = (time) => {
                const [timePart, meridian] = time.split(' ');
                let [hours, minutes] = timePart.split(':').map(Number);
                if (meridian === 'PM' && hours !== 12) hours += 12;
                if (meridian === 'AM' && hours === 12) hours = 0;
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            };

            const formattedStartTime = parseTimeTo24Hour(startTime);
            const formattedEndTime = parseTimeTo24Hour(endTime);

            const start = dayjs(`${startDate}T${formattedStartTime}`);
            const end = dayjs(`${endDate}T${formattedEndTime}`);

            if (!start.isValid() || !end.isValid()) {
                showAlert('Invalid date or time format.', 'error');
                return;
            }

            const totalHours = end.diff(start, 'hour', true);

            let baseDays = Math.floor(totalHours / 24);
            let extraHours = totalHours % 24;

            let extraCharge = 0;
            let basePrice = baseDays * vehiclePricePerDay;

            if (extraHours <= 5) {
                extraCharge = Math.floor(extraHours) * 100;
                if (extraHours % 1 >= 0.5) {
                    extraCharge += 50;
                }
            } else {
                baseDays += 1;
                basePrice = baseDays * vehiclePricePerDay;
                extraCharge = 0;
            }

            const platformAmount = (10 / 100) * (basePrice + extraCharge);
            const miscAmount = (5 / 100) * (basePrice + extraCharge);
            const totalAmount = basePrice + extraCharge + platformAmount + miscAmount;

            let adjustedAmount = totalAmount;
            let discount = 0;

            if (isCouponApplied && couponCode === 'Rideroz234') {
                discount = (5 / 100) * totalAmount;
                adjustedAmount -= discount;
            }

            setOriginalShopAmount(totalAmount);
            setDiscountAmount(Math.round(discount)); // Update the discount amount
            setDiscountedAmount(Math.round(adjustedAmount)); // Update the discounted amount
            setFormData((prevState) => ({
                ...prevState,
                platformAmount,
                miscAmount,
                shopAmount: Math.round(adjustedAmount),
                discountAmount: Math.round(discount), // Synchronize discountAmount with formData
                extraHours: extraHours.toFixed(2),
                extraHourCharge: extraCharge,
                rentDuration: `${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`,
            }));

            setRentDuration(`${baseDays} day(s) and ${extraHours.toFixed(1)} hour(s)`);
        }
    };




    const applyCoupon = () => {
        if (isCouponApplied) {
            showAlert('Coupon already applied!', 'error');
            return;
        }

        if (formData.couponCode === 'Rideroz234') {
            const discount = (5 / 100) * originalShopAmount; // Calculate discount on the original amount
            const discountedValue = originalShopAmount - discount;

            setDiscountAmount(Math.round(discount)); // Update discount amount in state
            setDiscountedAmount(Math.round(discountedValue)); // Update discounted total
            setFormData((prevState) => ({
                ...prevState,
                shopAmount: Math.round(discountedValue), // Update shopAmount with discounted value
                discountAmount: Math.round(discount), // Synchronize discountAmount with formData
            }));

            setIsCouponApplied(true); // Mark the coupon as applied
            showAlert('Coupon applied successfully!', 'success');
        } else {
            showAlert('Invalid Coupon Code', 'error');
            setDiscountedAmount(null);
            setDiscountAmount(0);
            setFormData((prevState) => ({
                ...prevState,
                discountAmount: 0,
            }));
        }
    };



    // Recalculate shop amount whenever startDate or endDate changes
    useEffect(() => {
        calculateShopAmount();
    }, [formData.startDate, formData.endDate, formData.startTime, formData.endTime]);


    const [createOrder, { isLoading, isError, error, data }] = useCreateOrderMutation();
    const [verifyPayment, { isLoading: verifyPaymentLoading, isError: isVerifyPaymentError, error: verifyPaymentError, isSuccess }] = useVerifyPaymentMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const vehicleId = id;

        // const data = new FormData();
        // Object.keys(formData).forEach((key) => {
        //   // Append only if the value is not null or undefined
        //   if (formData[key]) {
        //     data.append(key, formData[key]);
        //   }
        // });

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            // Append key-value pairs to FormData
            if (formData[key]) {
                data.append(key, formData[key]);
            }
        });

        // Append Aadhaar card images explicitly
        if (formData.adharcardImg && formData.adharcardImg.length > 0) {
            for (let i = 0; i < formData.adharcardImg.length; i++) {
                data.append("adharcardImg", formData.adharcardImg[i]);
            }
        }

        try {
            const orderResponse = await createOrder({ vehicleId, body: data }).unwrap();

            if (orderResponse.success) {
                handlePaymentVerify(orderResponse);
            }
        } catch (error) {
            console.log('Failed to create order:', error);

            // setFormData({
            //     startDate: "",
            //     endDate: "",
            //     startTime: '',
            //     endTime: '',
            //     shopAmount: 0,
            //     platformAmount: 0,
            //     miscAmount: 0,
            //     couponCode: '',
            //     discountAmount: 0,
            //     extraHours: 0,
            //     extraHourCharge: 0,
            //     rentDuration: "",
            // })

            // Check for user not found error and show login modal
            if (error.status === 500 && error.data?.error === "Access denied. Re-login") {
                setAutoOpenLogin(true);
            }

            if (error.status === 404 && error.data?.error === "User not found") {
                setAutoOpenLogin(true);
            }


        }
    };

    const handleLoginModalClose = () => setAutoOpenLogin(false);

    const handlePaymentVerify = (order) => {
        // Set a flag indicating that payment has started
        sessionStorage.setItem('paymentInProgress', 'true');

        const options = {
            key: 'rzp_test_4saMdxYboIyJ2n',
            amount: order.amount,
            currency: order.currency,
            name: 'Rideroz',
            order_id: order.razorpayOrderId,
            handler: async (response) => {
                try {
                    const paymentDetails = {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    };

                    console.log("paymentDetails", paymentDetails)

                    const verifyResponse = await verifyPayment(paymentDetails).unwrap();

                    if (verifyResponse) {
                        // Clear the flag when payment is successful
                        sessionStorage.removeItem('paymentInProgress');
                        // toast.success('Payment successful! Booking confirmed.');
                        showAlert('Payment successful! Booking confirmed.', 'success')
                        setFormData({
                            startDate: null,
                            endDate: null,
                            startTime: '',
                            endTime: '',
                            shopAmount: 0,
                            platformAmount: 0,
                            miscAmount: 0,
                            couponCode: '',
                            discountAmount: 0,
                            extraHours: 0,
                            extraHourCharge: 0,
                            rentDuration: "",
                        })
                        navigate(`/success-payment/${order.razorpayOrderId}`);
                    } else {
                        // toast.error('Payment verification failed. Please try again.');
                        showAlert('Payment verification failed. Please try again.', 'error')
                    }
                } catch (error) {
                    console.log('Error verifying payment:', error);
                    // toast.error('Payment verification failed. Please try again.');
                    showAlert('Payment verification failed. Please try again.', 'error')
                }
            },
            theme: {
                color: '#5f63b8',
            },
            modal: {
                ondismiss: () => {
                    // Clear the flag when payment is canceled
                    sessionStorage.removeItem('paymentInProgress');
                    // toast.info('Payment canceled by user.');
                    // Redirect to the payment cancel page
                    navigate('/payment-cancel-by-user');
                },
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    // Check for payment status on page load or refresh
    window.addEventListener('load', () => {
        const paymentInProgress = sessionStorage.getItem('paymentInProgress');
        if (paymentInProgress) {
            // Show a message if the user refreshed the page during payment
            // Redirect to the payment cancel page
            // toast.error('It seems the payment process was interrupted. Please try again.');
            // Optionally, you can also clear the session storage here if needed
            sessionStorage.removeItem('paymentInProgress');
        }
    });

    useEffect(() => {
        const paymentInProgress = sessionStorage.getItem('paymentInProgress');
        if (paymentInProgress) {
            // Redirect to the payment cancel page
            navigate('/payment-cancel');
            // Optionally, clear the session storage here
            sessionStorage.removeItem('paymentInProgress');
        }
    }, [navigate]);


    useEffect(() => {
        if (isError) {
            // toast.error(error?.data?.error || 'Failed to confirm payment, please try again');
            showAlert(error?.data?.error || 'Failed to confirm payment, please try again', 'error')
        }

        if (isVerifyPaymentError) {
            toast.error(verifyPaymentError?.data?.error || 'Failed to confirm payment, please try again');
        }

    }, [isError, error, isSuccess, data, isVerifyPaymentError, verifyPaymentError]);



    return (
        <Layout>
            <div className="container mx-auto max-w-7xl px-2 lg:px-0">
                {/* <pre>{JSON.stringify(vehicle, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(error?.data, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(discountAmount,null,2)}</pre> */}

                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <form className="lg:mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-12">

                        <section
                            aria-labelledby="summary-heading"
                            className="mt-2.5 mb-5 lg:mt-0 lg:mb-0 rounded-md lg:col-span-4 bg-white drop-shadow p-5 order-first lg:order-last"
                        >

                            <div className=" lg:hidden sm:hidden md:hidden">
                                <div className="flex justify-between items-center mb-4">
                                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                        Checkout
                                    </h1>



                                    <VehicleAvailbilityModal vehicleId={vehicle?._id} initialMonth={""} />
                                </div>
                            </div>
                            {/* Pickup/Dropoff Date and Time */}
                            <div>
                                <div className="mb-2">
                                    {/* <DatePicker
                                        selected={formData.startDate}
                                        onChange={(date) => handleDateChange(date, 'startDate')}
                                        filterDate={filterPassedDates}
                                        dateFormat="yyyy-MM-dd"
                                        className="text-xs sm:text-sm p-2 w-[241%] md:w-[200%] lg:w-[216.4%] outline-none border-gray-500 border"
                                        placeholderText="Select Pickup Date"
                                        required
                                    /> */}

                                    <label htmlFor="" className=" text-xs">Pickup Date</label>
                                    <input
                                        label="Enter Start Date"
                                        type="date"
                                        value={formData.startDate}
                                        onChange={(e) => handleDateChange(e.target.value, 'startDate')}
                                        min={new Date().toISOString().split('T')[0]} // This will prevent selecting past dates
                                        className="text-xs sm:text-sm p-2 w-full outline-none rounded border-gray-500 border"
                                        placeholder="Select Pickup Date"
                                    />

                                </div>

                                <div className="mb-2">
                                    {/* <input
                                        label="Pickup Time"
                                        type="time"
                                        name="startTime"
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        required
                                        className="text-xs sm:text-sm border p-1.5 w-full outline-none border-gray-500"
                                    /> */}


                                    <CustomTimeDropdown
                                        name="startTime"
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        shop_OpeningTime={vehicle?.shop?.shop_OpeningTime}
                                    />

                                </div>

                                <div className="mb-2">
                                    {/* <DatePicker
                                        selected={formData.endDate}
                                        onChange={(date) => handleDateChange(date, 'endDate')}
                                        filterDate={filterPassedDates}
                                        dateFormat="yyyy-MM-dd"
                                        className="text-xs sm:text-sm border p-2 w-[241%] md:w-[200%] lg:w-[216.4%] outline-none border-gray-500"
                                        placeholderText="Select Drop off Date"
                                        required
                                    /> */}

                                    <label htmlFor="" className=" text-xs">Select Drop off Date</label>
                                    <input
                                        label="Enter End Date"
                                        type="date"
                                        value={formData.endDate}
                                        onChange={(e) => handleDateChange(e.target.value, 'endDate')}
                                        min={new Date().toISOString().split('T')[0]} // This will prevent selecting past dates
                                        className="text-xs sm:text-sm border p-2 w-full outline-none rounded border-gray-500"
                                        placeholder="Select Drop off Date"
                                    />


                                </div>

                                <div>
                                    {/* <input
                                        placeholder="Drop Off Time"
                                        type="time"
                                        name="endTime"
                                        value={formData.endTime}
                                        onChange={handleChange}
                                        required
                                        className="text-xs sm:text-sm border p-1.5 w-full outline-none border-gray-500"
                                    /> */}

                                    <CustomTimeDropdown
                                        name={"endTime"}
                                        value={formData.endTime}
                                        onChange={handleChange}
                                        shop_ClosedTime={vehicle?.shop?.shop_ClosedTime}

                                    />
                                </div>

                                <div className="">
                                    <UploadAdharImage
                                        formData={formData}
                                        setFormData={setFormData}

                                    />
                                </div>
                            </div>


                            <div className=" bg-green-50 p-2 mt-4 border border-green-100 rounded">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-black app-font">Coupons</p>
                                    <p className="app-font text-green-700">5% OFF</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <img className="w-8 h-8"
                                            src="https://cdn-icons-png.flaticon.com/128/1041/1041885.png" alt="coupon" />
                                        <h1 className="text-green-500 app-font">Apply Coupon</h1>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={applyCoupon}
                                        disabled={isCouponApplied || !formData.startDate || !formData.endDate || !formData.startTime || !formData.endTime} // Disable button if coupon is applied or dates/times are missing
                                        className="bg-green-600 px-2 text-white text-sm py-[2px] app-font rounded-md">
                                        Apply Now
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        value={formData.couponCode}
                                        onChange={e => setFormData({ ...formData, couponCode: e.target.value })}
                                        placeholder="Apply Coupon Code"
                                        label="Apply Coupon Code"
                                        disabled={isCouponApplied || !formData.startDate || !formData.endDate || !formData.startTime || !formData.endTime} // Disable input if coupon is applied or dates/times are missing
                                        className=""
                                        color="green"
                                    />
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <h1 className="text-sm app-font text-green-900">Coupon Code :</h1>
                                    <h1 className="text-sm text-green-600 animate-pulse app-font">Rideroz234</h1>
                                </div>
                            </div>

                            {/* Display the total shopAmount */}
                            <div className="border mt-4 p-2 px-4 rounded-md drop-shadow border-green-400 text-black">
                                <h1 className="app-font">
                                    <span className="font-bold">Price Breakdown:</span>
                                </h1>
                                <p className="text-xs mt-1 mb-1 app-font">
                                    Base Price: ₹ {vehiclePricePerDay}
                                </p>

                                <p className="text-xs mb-1 app-font">
                                    Misc Charge : ₹ {formData?.miscAmount.toFixed(2) || 0}
                                </p>

                                <p className="text-xs mb-1 app-font">
                                    Platform Charge : ₹ {formData?.platformAmount.toFixed(2) || 0}
                                </p>

                                <p className="text-xs mb-1 app-font">
                                    Rent Duration: {rentDuration}
                                </p>

                                {formData.extraHours > 0 && (
                                    <>
                                        <p className="text-xs mb-1 app-font">
                                            {/* Extra Hours: {formData.extraHours} hour(s) Display exact extra hours */}
                                            Extra Hours: {formData.extraHours === "0.50" ? formData.extraHours : parseInt(formData.extraHours)} hour(s) {/* Display exact extra hours */}

                                        </p>
                                        <p className="text-xs mb-1 app-font">
                                            Extra Hour Charge: ₹ {formData.extraHourCharge} {/* Display extra hour charge */}
                                        </p>
                                    </>
                                )}

                                {/* {discountedAmount ? <p className="text-green-500 text-sm">
                                    Discount Amount: ₹ {discountAmount} 
                                </p> : ""} */}

                                {discountAmount > 0 && (
                                    <p className="text-green-500 text-sm">
                                        Discount Amount: ₹ {discountAmount}
                                    </p>
                                )}


                                {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}

                                {/* <p>
                                    <span className="font-bold">Total Shop Amount</span> :
                                    <span className="app-font"> ₹ {
                                        discountedAmount !== null
                                            ? discountedAmount  // Show discounted amount if coupon applied
                                            : formData.shopAmount  // Show original amount if no coupon applied
                                    }</span>
                                </p> */}
                                <p>
                                    <span className="font-bold">Total Shop Amount</span> :
                                    <span className="app-font"> ₹ {
                                        isCouponApplied && discountedAmount !== null
                                            ? discountedAmount // Show discounted amount if coupon is applied
                                            : originalShopAmount // Show original amount if no coupon applied
                                    }</span>
                                </p>

                            </div>


                            <div className="mt-4">


                                <Button
                                    variant=""
                                    size="small"
                                    className="hover:shadow-none shadow-none w-full bg-green-500"

                                    onClick={handleSubmit}
                                    disabled={
                                        isLoading ||
                                        verifyPaymentLoading ||
                                        !formData.startDate ||
                                        !formData.endDate ||
                                        !formData.startTime ||
                                        !formData.endTime
                                    }
                                >
                                    {verifyPaymentLoading ? "Processing..." : "Confirm"}
                                </Button>

                            </div>
                        </section>

                        <section aria-labelledby="cart-heading"
                            className=" drop-shadow bg-white py-4 border px-4 lg:col-span-8 rounded ">
                            <div className=" hidden lg:block md:block sm:block">
                                <div className="flex justify-between items-center mb-4">
                                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                        Checkout
                                    </h1>

                                    <VehicleAvailbilityModal vehicleId={vehicle?._id} />
                                </div>
                            </div>

                            <div className=" bg-white drop-shadow mb-4 px-4 py-4">
                                <div className="">
                                    <h1 className=" mb-2 app-font">
                                        <span className=" font-bold">City : </span>
                                        <span>{selectedCity}</span>
                                    </h1>

                                    <h1 className=" mb-2 app-font">
                                        <span className=" font-bold">Current Location : </span>
                                        <span>{currentLocationName || "N/A"}</span>
                                    </h1>
                                </div>
                            </div>
                            <div className=" bg-white drop-shadow mb-2">
                                <ul role="list" className="divide-y divide-gray-200">
                                    <div className="">
                                        <li className="flex py-6 sm:py-6 ">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={vehicle?.vehicleImage[0]?.url}
                                                    alt={vehicle?.vehicleName}
                                                    className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <a className="font-semibold text-black app-font">
                                                                    {vehicle?.vehicleName}
                                                                </a>
                                                            </h3>
                                                        </div>

                                                        <div className="mt-1 flex items-center space-x-2">

                                                            <p className="text-sm app-font font-medium text-gray-900">
                                                                ₹ {vehicle?.vehiclePrice}
                                                            </p>
                                                            <div className={` bg-green-600 px-2 app-font text-white  animate-pulse text-[10px]`}>
                                                                {vehicle?.vehicleAvailability && "Available"}
                                                            </div>

                                                        </div>

                                                        <div className="mt-2">
                                                            <RatingStar
                                                                rating={vehicle?.vehicleRatings}
                                                                totalRating={vehicle?.numOfReviews}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </div>
                                </ul>
                            </div>

                            <div className="">
                                <div className="">
                                    <h1>Shop Times : </h1> <span>{vehicle?.shop?.shop_OpeningTime} - {vehicle?.shop?.shop_ClosedTime}</span>
                                </div>
                            </div>

                            <div className=" bg-white drop-shadow mb-4 px-4 py-4">
                                <div className="flex items-center gap-2">
                                    <BadgeIndianRupee color="green" /> Excess Hourly Charges 100/hr
                                </div>
                            </div>

                            <div className=" bg-white drop-shadow mb-4 px-4 py-4">
                                <div className="">
                                    <p className=" app-font text-justify mb-1 text-red-600">"Vehicle book करने के बाद अगर आप 1 घंटे के अंदर Shop पर नहीं पहुँचते हैं, तो आपकी ride अपने आप cancel हो जाएगी और आपके amount का 50% refund कर दिया जाएगा।"</p>
                                    <p className=" app-font text-justify text-red-600">"If you don't arrive at the shop within 1 hour after booking the vehicle, your ride will be automatically canceled, and 50% of your amount will be refunded."</p>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
                {!user && <LoginModal showLoginButton={false} autoOpen={autoOpenLogin} onClose={handleLoginModalClose} />}
            </div>
        </Layout>
    );
};

export default CartPage;