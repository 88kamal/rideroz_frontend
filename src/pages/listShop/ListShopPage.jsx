/* eslint-disable react/no-unescaped-entities */
import { Button, Input, Spinner } from "@material-tailwind/react";
import { useContext, useEffect, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Eye, EyeOff, Locate, Mail, Phone, PlusCircleIcon } from "lucide-react";
import { useAddShopMutation } from "../../redux/slices/shopApiSlice";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import { useGetCitiesQuery } from "../../redux/slices/cityApiSlice";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { ClipboardDocumentListIcon, CurrencyRupeeIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import myContext from "../../context/myContext";
import CustomTimeDropdown from "./CustomTimeDropdown";


function ListShopPage() {
    const [formData, setFormData] = useState({
        shopImage: "",
        shopName: "",
        ownerName: "",
        ownerEmail: "",
        password: "",
        ownerPhoneNumber: "",
        gender: "",
        selectCity: "",
        lat: null,
        lng: null,
        // legalDoc: "",
        account_holder_name: "",
        ifsc: "",
        account_number: "",
        shop_OpeningTime : null,
        shop_ClosedTime : null
    });

    const [bankDetails, setBankDetails] = useState({
        ifsc: "",
        bankName: "",
        branch: ""
    });

    const {showAlert} = useContext(myContext);

    const navigate = useNavigate();

    const fileInputRef = useRef(null); // Create a ref for the file input
    const fileInputRefLegalDoc = useRef(null); // Create a ref for the file input

    // Fetching cities with the query hook
    const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

    // Mutation for adding a shop
    const [addShop, { isLoading: isAddingShop, error: addShopError, isSuccess }] = useAddShopMutation();

    const [searchTerm, setSearchTerm] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showGenderDropdown, setShowGenderDropdown] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
    // const [preview, setPreview] = useState(null); // Storing the image preview URL

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE", // Replace with your actual Google Maps API key
        libraries: ["places"],
    });

    const handleChangePhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData((prevState) => ({
                ...prevState,
                shopImage: file,
            }));
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         // Update the form data
    //         setFormData((prevState) => ({
    //             ...prevState,
    //             legalDoc: file,
    //         }));

    //         // Generate a preview URL for the image
    //         setPreview(URL.createObjectURL(file));
    //     }
    // };

    const handleCitySearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            // If the input is empty, close the dropdown
            setShowDropdown(false);
        } else {
            // Show the dropdown and filter cities based on input
            setShowDropdown(true);
        }
    };

    // Filter cities based on searchTerm (case-insensitive)
    const filteredCities = cities?.filter((city) =>
        city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleCitySelect = (cityName, cityState, _id) => {
        setFormData((prevState) => ({
            ...prevState,
            selectCity: _id,
        }));
        setSearchTerm(`${cityName}, ${cityState}`);
        setShowDropdown(false);
    };

    const handleGenderSelect = (selectedGender) => {
        setFormData((prevState) => ({
            ...prevState,
            gender: selectedGender,
        }));
        setShowGenderDropdown(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGetCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCoordinates({ lat: latitude, lng: longitude });
                    setFormData((prevState) => ({
                        ...prevState,
                        lat: latitude,
                        lng: longitude,
                    }));
                },
                (error) => {
                    console.error("Error getting location: ", error);
                    alert("Unable to retrieve your location");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();
        console.log("data", [...data]); // Log the FormData contents



        for (let key in formData) {
            data.append(key, formData[key]);
        }
        try {
            const response = await addShop(data).unwrap();

            // console.log("response", response)
            Swal.fire({
                title: response.message,
                // text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            // console.log('Shop added successfully', response.err);
            // Reset the form after successful submission
            setFormData({
                shopImage: '',
                shopName: '',
                ownerName: '',
                ownerEmail: '',
                password: '',
                ownerPhoneNumber: '',
                gender: '',
                selectCity: '',
                lat: '',
                lng: '',
                legalDoc: ""
            });

            setSearchTerm("")

            // Reset the file input manually
            if (fileInputRef.current) {
                fileInputRef.current.value = null; // This clears the file input field
            }

            if (fileInputRefLegalDoc.current) {
                fileInputRefLegalDoc.current.value = null
            }
        } catch (err) {
            console.log('Failed to add shop:', err);
        }
    };

    useEffect(() => {
        if (addShopError) {
            // toast.error(addShopError?.data?.error || 'Something went wrong!');
            showAlert(addShopError?.data?.error || 'Something went wrong!', "error")

        }

        if (isSuccess) {
            navigate('/list-shop-message')
        }
    }, [addShopError, isSuccess]);


    const handleChangeForBankDetail = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        setBankDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
            ...(name === 'ifsc' && value.length !== 11
                ? { bankName: '', branch: '' }
                : {}),
        }));

        if (name === 'ifsc' && value.length === 11) {
            fetchBankDetails(value);
        }
    };

    const fetchBankDetails = async (ifscCode) => {
        try {
            const response = await axios.get(`https://ifsc.razorpay.com/${ifscCode}`);
            setBankDetails((prevDetails) => ({
                ...prevDetails,
                bankName: response.data.BANK,
                branch: response.data.BRANCH,
            }));
        } catch (error) {
            console.error("Error fetching bank details:", error);
        }
    };

    // Validation function to check if all fields are filled
    const isFormValid = () => {
        return Object.values(formData).every(
            (value) => value !== null && value !== ""
        );
    };

    return (
        <Layout>
            <div className="">

                {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}
{/* <pre>{JSON.stringify(bankDetails,null,2)}</pre> */}

                <div className="main flex flex-wrap  justify-between bg-green-100 ">
                    <div className="left w-full md:w-1/2 p-5">
                        <div className="">
                            <img className=" h-72 lg:h-[30em] w-full mb-4 rounded-md"
                                src="../../../rideroz-images.png" alt="img" />
                        </div>
                        <div className=" bg-green-700 text-white p-4 mb-4 rounded-md">
                            <h2 className=" text-xl mb-2 font-bold">Become a Rideroz Partner
                            </h2>
                            <p className=" mb-2 app-font text-justify">Join hands with India's premier bike rental platform and start your own venture!</p>
                            <p className=" app-font text-justify">List your Bikes, Scooters, and Cars with Rideroz and reach a wide audience of travelers. </p>
                        </div>

                        <div className="mb-3">
                            <h2 className=" font-bold text-lg">Why List with Rideroz?</h2>
                            <ul>
                                <li className="flex item-center gap-2 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                    No Listing Fees
                                </li>
                                <li className="flex item-center gap-2 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>

                                    Reach More Customers
                                </li>
                                <li className="flex item-center gap-2 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>

                                    Steady Bookings
                                </li>
                                <li className="flex item-center gap-2 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>

                                    Easy Management
                                </li>
                                <li className="flex item-center gap-2 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>

                                    Timely payments
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center space-x-4 ">
                            <div className="call w-1/2 rounded-md border bg-white drop-shadow px-2 py-1">
                                <p className=" text-sm mb-2 app-font">Call Us Now</p>
                                <div className=" flex items-center lg:gap-2 ">
                                    <Phone className=" text-green-600" size={23} /> <p className=" text-green-600 text-sm lg:text-xl">7505847229</p>
                                </div>


                            </div>
                            <div className="mail w-1/2 rounded-md border bg-white drop-shadow px-2 py-1">
                                <p className=" text-sm mb-2 app-font">Mail</p>
                                <div className=" flex items-center lg:gap-2 ">
                                    <Mail className=" text-green-600" size={23} /> <p className=" text-green-600 text-sm lg:text-xl">
                                        riderozofficial@gmail.com

                                    </p>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="right w-full md:w-1/2 bg-green-50 order-first lg:order-last">
                        <div className=" w-full">
                            {/* {isLoading && <p>Submitting...</p>}  Show this while loading */}


                            <div className="flex flex-col justify-center p-4 lg:p-8">
                                <div className="text-center mb-8">
                                    <div className="flex justify-center">
                                        <img
                                            src="../../logo/rideroz.png"
                                            alt="Rideroz Logo"
                                            className="h-20 mb-4 w-48"
                                        />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-gray-800">
                                        List your shop with Rideroz
                                    </h2>
                                </div>

                                <form className="space-y-4" onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="flex justify-center border p-2 border-green-400 rounded-md border-dashed">
                                        <label htmlFor="file-upload" className="custom-file-upload">
                                            {formData.shopImage ? (
                                                <img
                                                    className="w-24 h-24 border-2 rounded-full"
                                                    src={URL.createObjectURL(formData.shopImage)}
                                                    alt=""
                                                />
                                            ) : (
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/128/13434/13434878.png"
                                                    className="h-20 w-20"
                                                    alt="Upload"
                                                />
                                            )}
                                        </label>
                                        <input id="file-upload" ref={fileInputRef} name="shopImage" type="file" onChange={handleChangePhoto} />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="w-full sm:w-1/2">
                                            <input
                                                type="text"
                                                name="shopName"
                                                placeholder="Enter Shop Name"
                                                value={formData.shopName}
                                                onChange={handleChange}
                                                className="bg-green-50 outline-none w-full py-2 px-3 border border-green-400 rounded-md placeholder-gray-700"
                                            />
                                        </div>

                                        <div className="w-full sm:w-1/2">
                                            <input
                                                type="text"
                                                name="ownerName"
                                                placeholder="Enter Owner Full Name"
                                                value={formData.ownerName}
                                                onChange={handleChange}
                                                className="bg-green-50 outline-none w-full py-2 px-3 border border-green-400 rounded-md placeholder-gray-700"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="w-full sm:w-1/2">
                                            <input
                                                type="email"
                                                name="ownerEmail"
                                                placeholder="Email"
                                                value={formData.ownerEmail}
                                                onChange={handleChange}
                                                 className="bg-green-50 outline-none w-full py-2 px-3 border border-green-400 rounded-md placeholder-gray-700"
                                            />
                                        </div>

                                        <div className="w-full sm:w-1/2 relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="bg-green-50 outline-none w-full py-2 px-3 border border-green-400 rounded-md placeholder-gray-700"
                                            />
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? (
                                                    <Eye className="text-gray-500 h-5 w-5" />
                                                ) : (
                                                    <EyeOff className="text-gray-500 h-5 w-5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="w-full sm:w-1/2">
                                            <input
                                                type="text"
                                                name="ownerPhoneNumber"
                                                placeholder="Phone Number"
                                                value={formData.ownerPhoneNumber}
                                                onChange={handleChange}
                                                className="bg-green-50 outline-none w-full py-2 px-3 border border-green-400 rounded-md placeholder-gray-700"
                                            />
                                        </div>

                                        <div className="w-full sm:w-1/2 relative">
                                            <input
                                                type="text"
                                                name="gender"
                                                placeholder="Select Gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                onClick={() => setShowGenderDropdown(!showGenderDropdown)}
                                                 className="bg-green-50 outline-none w-full py-2 px-3 border border-green-400 rounded-md placeholder-gray-700"
                                                readOnly
                                            />
                                            {showGenderDropdown && (
                                                <div className="absolute mt-1 bg-white z-50 border border-gray-400 rounded-md w-full">
                                                    <div
                                                        onClick={() => handleGenderSelect("male")}
                                                        className="cursor-pointer p-2 hover:bg-gray-200 rounded-t-lg"
                                                    >
                                                        Male
                                                    </div>
                                                    <div
                                                        onClick={() => handleGenderSelect("female")}
                                                        className="cursor-pointer p-2  hover:bg-gray-200"
                                                    >
                                                        Female
                                                    </div>
                                                    <div
                                                        onClick={() => handleGenderSelect("other")}
                                                        className="cursor-pointer rounded-b-lg p-2 hover:bg-gray-200"
                                                    >
                                                        Other
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="w-full relative">
                                        <input
                                            type="text"
                                            name="selectCity"
                                            placeholder="Search for your city"
                                            value={searchTerm}
                                            onChange={handleCitySearch}
                                            className="bg-green-50 outline-none w-full py-2 px-3 border border-green-400 rounded-md placeholder-gray-700"
                                        />

                                        {isCitiesLoading && (
                                            <div className=" mt-1 bg-white  border border-gray-400 rounded-md w-full p-2">
                                                <p className=" text-center">Loading cities...</p>
                                            </div>
                                        )}

                                        {/* <pre>{JSON.stringify({data: cities, error: citiesError, isLoading: isCitiesLoading},null,2)}</pre> */}
                                        {citiesError && (
                                            <div className=" mt-1 bg-white  border border-red-400 rounded-md w-full p-2">
                                                <p className="text-red-500 text-center">{citiesError?.data?.error}</p>
                                            </div>
                                        )}

                                        {showDropdown && !isCitiesLoading && !citiesError && filteredCities?.length > 0 && (
                                            <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full max-h-40 overflow-y-auto">
                                                {filteredCities.map((city) => (
                                                    <div
                                                        key={city.id}
                                                        onClick={() => handleCitySelect(city.cityName, city.cityState, city._id)}
                                                        className="cursor-pointer p-2 hover:bg-gray-200"
                                                    >
                                                        {city.cityName}, {city.cityState}
                                                    </div>
                                                ))}
                                            </div>
                                        )}


                                        {!isCitiesLoading && !citiesError && showDropdown && filteredCities.length === 0 && (
                                            <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
                                                <p className=" text-center">No cities found.</p>
                                            </div>
                                        )}
                                    </div>


                                    {/* <div className="w-full">
                                        <div className=" border p-1 border-green-300 rounded-md">
                                            <input
                                                ref={fileInputRefLegalDoc}
                                                type="file"
                                                name="legalDoc"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
                                            />
                                        </div>

                                        {preview && (
                                            <div className="mt-4">
                                                <img
                                                    src={preview}
                                                    alt="Preview"
                                                    className="w-full h-auto max-h-64 object-contain border border-gray-400 rounded-md"
                                                />
                                            </div>
                                        )}
                                    </div> */}

                                    <div className="">
                                        <CustomTimeDropdown  
                                        name="shop_OpeningTime"
                                        value={formData.shop_OpeningTime}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className="">
                                        <CustomTimeDropdown 
                                          name="shop_ClosedTime"
                                          value={formData.shop_ClosedTime}
                                          onChange={handleChange}
                                          />
                                    </div>

                                    <div className="">
                                        <div className=" mb-3">
                                            <input
                                                placeholder='Account Holder Name'
                                                type="text"
                                                id="account_holder_name"
                                                name="account_holder_name"
                                                value={bankDetails.account_holder_name}
                                                onChange={handleChangeForBankDetail}
                                                color='green'
                                              className="bg-green-50 outline-none w-full py-2 px-3 border border-green-400 rounded-md placeholder-gray-700"
                                            />
                                        </div>
                                        <div className=" mb-3">
                                            <input
                                                placeholder='Account Number'
                                                type="text"
                                                id="account_number"
                                                name="account_number"
                                                value={bankDetails.account_number}
                                                onChange={handleChangeForBankDetail}
                                                color='green'
                                                className="bg-green-50 outline-none w-full py-2 px-3 border border-green-400 rounded-md placeholder-gray-700"
                                            />
                                        </div>
                                        <div className=" mb-3">
                                            <input
                                                placeholder='IFSC Code'
                                                type="text"
                                                id="ifsc"
                                                name="ifsc"
                                                value={bankDetails.ifsc}
                                                onChange={handleChangeForBankDetail}
                                                color='green'
                                               className="bg-green-50 outline-none w-full py-2 px-3 border border-green-400 rounded-md placeholder-gray-700"
                                            />
                                        </div>
                                        {bankDetails.bankName && bankDetails.branch && (
                                            <div className="text-sm flex items-center gap-1 mt-2">
                                                <p className="text-gray-700 font-semibold">{bankDetails.bankName},</p>
                                                <p className="text-gray-700">{bankDetails.branch}</p>
                                            </div>
                                        )}
                                    </div>


                                    <div className="flex justify-between items-center border border-gray-400 p-1 rounded-lg">

                                        <div className=" hidden lg:block md:block sm:block">
                                            <Button
                                                variant=""
                                                onClick={handleGetCurrentLocation}
                                                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md shadow-none hover:shadow-none items-center gap-2 py-2 flex"
                                            >
                                                <Locate size={20} />
                                                Get Current Location
                                            </Button>
                                        </div>

                                        <Button
                                            variant=""
                                            onClick={handleGetCurrentLocation}
                                            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md shadow-none hover:shadow-none items-center gap-2 py-2 flex w-full  lg:hidden md:hidden sm:hidden "
                                        >
                                            <Locate size={20} />
                                            Get Current Location
                                        </Button>

                                        {coordinates.lat && coordinates.lng && (
                                            <div className="text-sm hidden lg:block sm:block md:block">
                                                Lat: {coordinates.lat}, Lng: {coordinates.lng}
                                            </div>
                                        )}
                                    </div>

                                    <>
                                        {isLoaded && coordinates.lat && coordinates.lng && (
                                            <div className="w-full h-64">
                                                <GoogleMap
                                                    center={{
                                                        lat: coordinates.lat || 20.5937, // Default center is India
                                                        lng: coordinates.lng || 78.9629,
                                                    }}
                                                    zoom={coordinates.lat && coordinates.lng ? 14 : 4}
                                                    mapContainerStyle={{ width: "100%", height: "100%" }}
                                                >
                                                    {coordinates.lat && coordinates.lng && (
                                                        <Marker position={{ lat: coordinates.lat, lng: coordinates.lng }} />
                                                    )}
                                                </GoogleMap>
                                            </div>

                                        )}
                                    </>

                                    {/* <div className="flex gap-2 items-center app-font">
                                        <input type="checkbox" className="w-4 h-4 checked:bg-green-500 checked:border-transparent rounded cursor-pointer" />
                                        <p>
                                            I accept the
                                            <Link>
                                                <span className=" text-green-700">Terms & Conditions</span>
                                            </Link> and
                                            <Link>
                                                <span className=" text-green-700">Privacy Policy</span>
                                            </Link>
                                        </p>
                                    </div> */}

                                    <div className="text-center">
                                        <Button
                                            variant=""
                                            type="submit"
                                            className="bg-green-500 hover:bg-green-600 text-white outline-none py-3 px-4 rounded-md w-full shadow-none hover:shadow-none flex justify-center"
                                            disabled={isAddingShop || !isFormValid()}
                                        >
                                            {isAddingShop ? <Spinner /> : "Register for a FREE account"}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="">
                    <HowItWorks />
                </div>

                <div className="">
                    <DealerFeaturesTable />
                </div>
            </div>
        </Layout>
    );
}

export default ListShopPage;


const HowItWorks = () => {
    const steps = [
        {
            icon: <UserPlusIcon className="w-12 h-12 text-black hover:text-green-600 cursor-pointer" />,
            title: "Sign Up as Dealer",
            description: "Create an account and manage your store online."
        },
        {
            icon: <PlusCircleIcon className="w-12 h-12 text-black hover:text-green-600 cursor-pointer" />,
            title: "Add Your Vehicle",
            description: "Add self-drive bikes, cars, and Scooty."
        },
        {
            icon: <ClipboardDocumentListIcon className="w-12 h-12 text-black hover:text-green-600 cursor-pointer" />,
            title: "Manage Bookings",
            description: "Receive and track all your bookings."
        },
        {
            icon: <CurrencyRupeeIcon className="w-12 h-12 text-black hover:text-green-600 cursor-pointer" />,
            title: "Payment Done",
            description: "Receive your payment directly in your bank account."
        }
    ];

    return (
        <div className="py-12 bg-white text-center">
            <h2 className="text-2xl font-semibold mb-8">HOW IT WORKS?</h2>
            <div className="flex flex-wrap justify-center items-start gap-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center w-full lg:w-1/5">
                        {step.icon}
                        <h3 className="text-lg font-semibold mt-4 text-green-600">{step.title}</h3>
                        <p className="text-black app-font text-sm mt-2">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


const features = [
    { feature: 'Dashboard', description: 'Shows key info: total bikes, bookings, revenue, and reviews.' },
    { feature: 'Manage Vehicles', description: 'Add, edit, or remove bikes and cars, with images and pricing.' },
    { feature: 'Bookings', description: 'View, accept, or reject booking requests with customer details.' },
    { feature: 'Availability', description: 'Calendar to see when each vehicle is booked or available.' },
    { feature: 'Pricing', description: 'Set prices for vehicles.' },
    { feature: 'Earnings', description: 'Track revenue with downloadable reports.' },
    { feature: 'Settlement', description: 'Get payments twice a week.' },
    { feature: 'Payments', description: 'View payment details: received, pending, or refunded.' },
    { feature: 'Notifications', description: 'Get alerts for new bookings and other updates.' },
    { feature: '24 hrs Call Support', description: 'Call or Chat with Rideroz support or customers for help.' },
    { feature: 'Insights', description: 'View top rented vehicles and customer data for better planning.' },
];

const DealerFeaturesTable = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Dealer Panel Features</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg app-font text-sm">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-r border-gray-200 bg-gray-100 font-semibold text-left">Feature</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 font-semibold text-left">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((item, index) => (
                            <tr key={index} className="hover:bg-green-50 cursor-pointer">
                                <td className="py-3 px-4 border-b border-r border-gray-200">{item.feature}</td>
                                <td className="py-3 px-4 border-b border-gray-200">{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


