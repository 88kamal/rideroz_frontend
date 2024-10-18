import { Button, Spinner } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Eye, EyeOff, Locate } from "lucide-react";
import { useAddShopMutation } from "../../redux/slices/shopApiSlice";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import { useGetCitiesQuery } from "../../redux/slices/cityApiSlice";
import { useNavigate } from "react-router-dom";


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
        legalDoc: ""
    });

    const navigate = useNavigate();

    const fileInputRef = useRef(null); // Create a ref for the file input
    const fileInputRefLegalDoc = useRef(null); // Create a ref for the file input

    // Fetching cities with the query hook
    const { data: cities, error: citiesError, isLoading: isCitiesLoading } = useGetCitiesQuery();

    // Mutation for adding a shop
    const [addShop, { isLoading: isAddingShop, error: addShopError, isSuccess, data }] = useAddShopMutation();

    const [searchTerm, setSearchTerm] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showGenderDropdown, setShowGenderDropdown] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
    const [preview, setPreview] = useState(null); // Storing the image preview URL

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

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Update the form data
            setFormData((prevState) => ({
                ...prevState,
                legalDoc: file,
            }));

            // Generate a preview URL for the image
            setPreview(URL.createObjectURL(file));
        }
    };

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
            toast.error(addShopError?.data?.error || 'Something went wrong!');
        }

        if(isSuccess){
            navigate('/list-shop-message')
        }
    }, [addShopError, isSuccess]);


    return (
        <div className="min-h-screen flex justify-center items-center bg-white p-2">


            <div className="max-w-2xl w-full bg-white rounded-lg drop-shadow">
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
                        <div className="flex justify-center border p-2 border-gray-400 rounded-md border-dashed">
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
                                    className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
                                />
                            </div>

                            <div className="w-full sm:w-1/2">
                                <input
                                    type="text"
                                    name="ownerName"
                                    placeholder="Enter Owner Full Name"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                    className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
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
                                    className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
                                />
                            </div>

                            <div className="w-full sm:w-1/2 relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
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
                                    className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
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
                                    className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
                                    readOnly
                                />
                                {showGenderDropdown && (
                                    <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full">
                                        <div
                                            onClick={() => handleGenderSelect("male")}
                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                        >
                                            Male
                                        </div>
                                        <div
                                            onClick={() => handleGenderSelect("female")}
                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                        >
                                            Female
                                        </div>
                                        <div
                                            onClick={() => handleGenderSelect("other")}
                                            className="cursor-pointer p-2 hover:bg-gray-200"
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
                                className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
                            />

                            {isCitiesLoading && (
                                <div className="absolute mt-1 bg-white z-10 border border-gray-400 rounded-md w-full p-2">
                                    <p className=" text-center">Loading cities...</p>
                                </div>
                            )}

                            {/* <pre>{JSON.stringify({data: cities, error: citiesError, isLoading: isCitiesLoading},null,2)}</pre> */}
                            {citiesError && (
                                <div className="absolute mt-1 bg-white z-10 border border-red-400 rounded-md w-full p-2">
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


                        <div className="w-full">
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

                            {/* Conditionally render the image preview */}
                            {preview && (
                                <div className="mt-4">
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-full h-auto max-h-64 object-contain border border-gray-400 rounded-md"
                                    />
                                </div>
                            )}
                        </div>


                        <div className="flex justify-between items-center border border-gray-400 p-1 rounded-lg">

                            <div className=" hidden lg:block md:block sm:block">
                                <Button
                                    variant=""
                                    onClick={handleGetCurrentLocation}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md shadow-none hover:shadow-none items-center gap-2 flex"
                                >
                                    <Locate size={20} />
                                    Get Current Location
                                </Button>
                            </div>

                            <Button
                                variant=""
                                onClick={handleGetCurrentLocation}
                                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md shadow-none hover:shadow-none items-center gap-2 flex w-full  lg:hidden md:hidden sm:hidden "
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

                        <div className="text-center">
                            <Button
                                variant=""
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 text-white outline-none py-3 px-4 rounded-md w-full shadow-none hover:shadow-none flex justify-center"
                            >
                                {isAddingShop ? <Spinner /> : "Register for a FREE account"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ListShopPage;
