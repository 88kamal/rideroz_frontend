// // import { Button } from "@material-tailwind/react";
// // import { useState } from "react";
// // import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// // function ListShopPage() {
// //     const [formData, setFormData] = useState({
// //         photo: "",
// //         shopName: "",
// //         ownerName: "",
// //         email: "",
// //         password: "",
// //         phoneNumber: "",
// //         gender: "",
// //         city: "",
// //         location: "",
// //         coordinates: { lat: null, lng: null }
// //     });

// //     const { isLoaded } = useJsApiLoader({
// //         googleMapsApiKey: "AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE" // Replace with your actual Google Maps API key
// //     });

// //     const handleChangePhoto = (event) => {
// //         const file = event.target.files[0];
// //         if (file) {
// //             setFormData((prevState) => ({
// //                 ...prevState,
// //                 photo: file,
// //             }));
// //         }
// //     };

// //     const handleChange = (event) => {
// //         const { name, value } = event.target;
// //         setFormData((prevState) => ({
// //             ...prevState,
// //             [name]: value,
// //         }));
// //     };

// //     const handleGetCurrentLocation = () => {
// //         if (navigator.geolocation) {
// //             navigator.geolocation.getCurrentPosition(
// //                 (position) => {
// //                     setFormData((prevState) => ({
// //                         ...prevState,
// //                         coordinates: {
// //                             lat: position.coords.latitude,
// //                             lng: position.coords.longitude,
// //                         },
// //                         location: `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`
// //                     }));
// //                 },
// //                 (error) => {
// //                     console.error("Error getting location: ", error);
// //                     alert("Unable to retrieve your location");
// //                 }
// //             );
// //         } else {
// //             alert("Geolocation is not supported by this browser");
// //         }
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();

// //         // Validate the form
// //         if (!formData.shopName || !formData.ownerName || !formData.email || !formData.password || !formData.phoneNumber || !formData.gender || !formData.city || !formData.location) {
// //             alert("Please fill in all fields");
// //             return;
// //         }

// //         // Print form data (Here you can also send it to a backend server)
// //         console.log("Form Data:", formData);
// //         alert("Form submitted successfully!");
// //     };

// //     return (
// //         <div className="min-h-screen flex justify-center items-center bg-white p-2">
// //             <div className="max-w-2xl w-full bg-white rounded-lg drop-shadow">
// //                 {/* Form */}
// //                 <div className="flex flex-col justify-center p-8">
// //                     <div className="text-center mb-8">
// //                         <div className="flex justify-center">
// //                             <img
// //                                 src="../../logo/rideroz.png" // Replace with your actual logo URL
// //                                 alt="Rideroz Logo"
// //                                 className="h-20 mb-4 w-48"
// //                             />
// //                         </div>
// //                         <h2 className="text-2xl font-semibold text-gray-800">
// //                             List your shop with Rideroz
// //                         </h2>
// //                     </div>

// //                     <form className="space-y-6" onSubmit={handleSubmit}>
// //                         {/* Photo Upload */}
// //                         <div className="flex justify-center border p-2 border-gray-400 rounded-md border-dashed">
// //                             <label htmlFor="file-upload" className="custom-file-upload">
// //                                 {formData.photo && formData.photo instanceof Blob ? (
// //                                     <img className="w-24 h-24 border-2 rounded-full" src={URL.createObjectURL(formData.photo)} alt="" />
// //                                 ) : (
// //                                     <img src="https://cdn-icons-png.flaticon.com/128/1771/1771013.png" className="h-24 w-24" alt="Upload" />
// //                                 )}
// //                             </label>
// //                             <input id="file-upload" name="photo" type="file" onChange={handleChangePhoto} />
// //                         </div>

// //                         <div className="">
// //                             <input type="text"
// //                                 placeholder="Enter Shop Name"
// //                                 className=" bg-white outline-none w-full py-2 px-3 border 
// //                         border-gray-400 rounded-md"
// //                             />
// //                         </div>

// //                         <div className="">
// //                             <input type="text"
// //                                 placeholder="Enter Owner Full Name"
// //                                 className=" bg-white outline-none w-full py-2 px-3 border 
// //                         border-gray-400 rounded-md"
// //                             />
// //                         </div>

// //                         <div className="">
// //                             <input type="email"
// //                                 placeholder="Email"
// //                                 className=" bg-white outline-none w-full py-2 px-3 border 
// //                         border-gray-400 rounded-md"
// //                             />
// //                         </div>

// //                         <div className="">
// //                             <input type="password"
// //                                 placeholder="Password"
// //                                 className=" bg-white outline-none w-full py-2 px-3 border 
// //                         border-gray-400 rounded-md"
// //                             />
// //                         </div>

// //                         <div className="">
// //                             <input type="number"
// //                                 placeholder="Mobile Number"
// //                                 className=" bg-white outline-none w-full py-2 px-3 border 
// //                         border-gray-400 rounded-md"
// //                             />
// //                         </div>


// //                         <div className="">
// //                             <input type="email"
// //                                 placeholder="Email"
// //                                 className=" bg-white outline-none w-full py-2 px-3 border 
// //                         border-gray-400 rounded-md"
// //                             />
// //                         </div>

// //                         <select name="" id=""  className=" bg-white outline-none w-full py-2 px-3 border 
// //                         border-gray-400 rounded-md">
// //                             <option value="">Select Gender</option>
// //                             <option value="">Male</option>
// //                             <option value="">female</option>
// //                         </select>

// //                         <select name="" id=""  className=" bg-white outline-none w-full py-2 px-3 border 
// //                         border-gray-400 rounded-md">
// //                              <option value="">Select City</option>
// //                             <option value="">Noida</option>
// //                             <option value="">Dehradun</option>
// //                         </select>

// //                         {/* Get Current Location */}
// //                         <div>
// //                             <Button
// //                                 onClick={handleGetCurrentLocation}
// //                                 className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-none hover:shadow-none"
// //                             >
// //                                 Use Current Location
// //                             </Button>
// //                             {formData.coordinates.lat && (
// //                                 <p className="text-center mt-2 text-gray-700">
// //                                     Location: {formData.location}
// //                                 </p>
// //                             )}
// //                         </div>

// //                         {/* Google Map */}
// //                         {isLoaded && formData.coordinates.lat && (
// //                             <div className="mt-4">
// //                                 <GoogleMap
// //                                     mapContainerStyle={{ width: "100%", height: "300px" }}
// //                                     center={formData.coordinates}
// //                                     zoom={15}
// //                                 >
// //                                     <Marker position={formData.coordinates} />
// //                                 </GoogleMap>
// //                             </div>
// //                         )}

// //                         {/* Submit Button */}
// //                         <div>
// //                             <Button
// //                                 type="submit"
// //                                 className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 shadow-none hover:shadow-none"
// //                             >
// //                                 Submit
// //                             </Button>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default ListShopPage;


// import { Button } from "@material-tailwind/react";
// import { useState } from "react";
// import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api";

// function ListShopPage() {
//     const [formData, setFormData] = useState({
//         photo: "",
//         shopName: "",
//         ownerName: "",
//         email: "",
//         password: "",
//         phoneNumber: "",
//         gender: "",
//         city: "",
//         location: "",
//         coordinates: { lat: null, lng: null },
//     });

//     const [autocomplete, setAutocomplete] = useState(null);

//     const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: "AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE", // Replace with your actual Google Maps API key
//         libraries: ["places"],
//     });

//     const handleChangePhoto = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setFormData((prevState) => ({
//                 ...prevState,
//                 photo: file,
//             }));
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleGetCurrentLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     setFormData((prevState) => ({
//                         ...prevState,
//                         coordinates: {
//                             lat: position.coords.latitude,
//                             lng: position.coords.longitude,
//                         },
//                         location: `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`
//                     }));
//                 },
//                 (error) => {
//                     console.error("Error getting location: ", error);
//                     alert("Unable to retrieve your location");
//                 }
//             );
//         } else {
//             alert("Geolocation is not supported by this browser");
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Validate the form
//         if (!formData.shopName || !formData.ownerName || !formData.email || !formData.password || !formData.phoneNumber || !formData.gender || !formData.city || !formData.location) {
//             alert("Please fill in all fields");
//             return;
//         }

//         // Print form data (Here you can also send it to a backend server)
//         console.log("Form Data:", formData);
//         alert("Form submitted successfully!");
//     };

//     const onLoadAutocomplete = (autocompleteInstance) => {
//         setAutocomplete(autocompleteInstance);
//     };

//     const onPlaceChanged = () => {
//         if (autocomplete !== null) {
//             const place = autocomplete.getPlace();
//             setFormData((prevState) => ({
//                 ...prevState,
//                 city: place.formatted_address,
//             }));
//         } else {
//             console.error("Autocomplete is not loaded yet!");
//         }
//     };

//     return (
//         <div className="min-h-screen flex justify-center items-center bg-white p-2">
//             {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}
//             <div className="max-w-2xl w-full bg-white rounded-lg drop-shadow">
//                 {/* Form */}
//                 <div className="flex flex-col justify-center p-8">
//                     <div className="text-center mb-8">
//                         <div className="flex justify-center">
//                             <img
//                                 src="../../logo/rideroz.png" // Replace with your actual logo URL
//                                 alt="Rideroz Logo"
//                                 className="h-20 mb-4 w-48"
//                             />
//                         </div>
//                         <h2 className="text-2xl font-semibold text-gray-800">
//                             List your shop with Rideroz
//                         </h2>
//                     </div>

//                     <form className="space-y-6" onSubmit={handleSubmit}>
//                         {/* Photo Upload */}
//                         <div className="flex justify-center border p-2 border-gray-400 rounded-md border-dashed">
//                             <label htmlFor="file-upload" className="custom-file-upload">
//                                 {formData.photo && formData.photo instanceof Blob ? (
//                                     <img className="w-24 h-24 border-2 rounded-full" src={URL.createObjectURL(formData.photo)} alt="" />
//                                 ) : (
//                                     <img src="https://cdn-icons-png.flaticon.com/128/1771/1771013.png" className="h-24 w-24" alt="Upload" />
//                                 )}
//                             </label>
//                             <input id="file-upload" name="photo" type="file" onChange={handleChangePhoto} />
//                         </div>

//                         <div className="">
//                             <input
//                                 type="text"
//                                 name="shopName"
//                                 placeholder="Enter Shop Name"
//                                 value={formData.shopName}
//                                 onChange={handleChange}
//                                 className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
//                             />
//                         </div>

//                         <div className="">
//                             <input
//                                 type="text"
//                                 name="ownerName"
//                                 placeholder="Enter Owner Full Name"
//                                 value={formData.ownerName}
//                                 onChange={handleChange}
//                                 className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
//                             />
//                         </div>

//                         <div className="">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
//                             />
//                         </div>

//                         <div className="">
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
//                             />
//                         </div>

//                         <div className="">
//                             <input
//                                 type="number"
//                                 name="phoneNumber"
//                                 placeholder="Mobile Number"
//                                 value={formData.phoneNumber}
//                                 onChange={handleChange}
//                                 className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
//                             />
//                         </div>

//                         <select
//                             name="gender"
//                             value={formData.gender}
//                             onChange={handleChange}
//                             className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
//                         >
//                             <option value="">Select Gender</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>

//                         {/* Google Places Autocomplete for City */}
//                         {isLoaded && (
//                             <Autocomplete onLoad={onLoadAutocomplete} onPlaceChanged={onPlaceChanged}>
//                                 <input
//                                     type="text"
//                                     placeholder="Select City"
//                                     value={formData.city}
//                                     onChange={(e) => setFormData({
//                                         ...formData,
//                                         city: e.target.value
//                                     })}
//                                     className="bg-white outline-none w-full py-2 px-3 border border-gray-400 rounded-md"
//                                 />
//                             </Autocomplete>
//                         )}

//                         {/* Get Current Location */}
//                         <div>
//                             <Button
//                                 onClick={handleGetCurrentLocation}
//                                 className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-none hover:shadow-none"
//                             >
//                                 Use Current Location
//                             </Button>
//                             {formData.coordinates.lat && (
//                                 <p className="text-center mt-2 text-gray-700">
//                                     Location: {formData.location}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Google Map */}
//                         {isLoaded && formData.coordinates.lat && (
//                             <div className="mt-4">
//                                 <GoogleMap
//                                     mapContainerStyle={{ width: "100%", height: "300px" }}
//                                     center={formData.coordinates}
//                                     zoom={15}
//                                 >
//                                     <Marker position={formData.coordinates} />
//                                 </GoogleMap>
//                             </div>
//                         )}

//                         {/* Submit Button */}
//                         <div>
//                             <Button
//                                 type="submit"
//                                 className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 shadow-none hover:shadow-none"
//                             >
//                                 Submit
//                             </Button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ListShopPage;


import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api";

function ListShopPage() {
    const [formData, setFormData] = useState({
        photo: "",
        shopName: "",
        ownerName: "",
        email: "",
        password: "",
        phoneNumber: "",
        gender: "",
        city: "",
        location: "",
        coordinates: { lat: null, lng: null },
    });

    const [autocomplete, setAutocomplete] = useState(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDrROirhFaapbWyT1rusyEvBF0lpVxpUyE", // Replace with your actual Google Maps API key
        libraries: ["places"],
    });

    const handleChangePhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData((prevState) => ({
                ...prevState,
                photo: file,
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

    const handleGetCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setFormData((prevState) => ({
                        ...prevState,
                        coordinates: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                        location: `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`
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

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the form
        if (!formData.shopName || !formData.ownerName || !formData.email || !formData.password || !formData.phoneNumber || !formData.gender || !formData.city || !formData.location) {
            alert("Please fill in all fields");
            return;
        }

        // Print form data (Here you can also send it to a backend server)
        console.log("Form Data:", formData);
        alert("Form submitted successfully!");
    };

    const onLoadAutocomplete = (autocompleteInstance) => {
        setAutocomplete(autocompleteInstance);
    };

    const onPlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            setFormData((prevState) => ({
                ...prevState,
                city: place.formatted_address,
            }));
        } else {
            console.error("Autocomplete is not loaded yet!");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg overflow-hidden p-8">
                {/* Form Header */}
                <div className="text-center mb-8">
                    <img
                        src="../../logo/rideroz.png" // Replace with your actual logo URL
                        alt="Rideroz Logo"
                        className="h-20 mb-4 w-auto mx-auto"
                    />
                    <h2 className="text-3xl font-bold text-gray-800">
                        List your shop with Rideroz
                    </h2>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Photo Upload */}
                    <div className="flex flex-col items-center">
                        <label htmlFor="file-upload" className="cursor-pointer">
                            {formData.photo && formData.photo instanceof Blob ? (
                                <img className="w-32 h-32 object-cover rounded-full border-4 border-blue-500" src={URL.createObjectURL(formData.photo)} alt="Uploaded" />
                            ) : (
                                <img src="https://cdn-icons-png.flaticon.com/128/1771/1771013.png" className="w-32 h-32 object-cover" alt="Upload" />
                            )}
                        </label>
                        <input id="file-upload" name="photo" type="file" className="hidden" onChange={handleChangePhoto} />
                        <p className="text-gray-600 mt-2">Click to upload shop photo</p>
                    </div>

                    {/* Input Fields */}
                    {[
                        { name: "shopName", placeholder: "Enter Shop Name" },
                        { name: "ownerName", placeholder: "Enter Owner Full Name" },
                        { name: "email", placeholder: "Email", type: "email" },
                        { name: "password", placeholder: "Password", type: "password" },
                        { name: "phoneNumber", placeholder: "Mobile Number", type: "number" },
                    ].map((input, index) => (
                        <div key={index} className="relative">
                            <input
                                {...input}
                                value={formData[input.name]}
                                onChange={handleChange}
                                className="bg-gray-100 w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    ))}

                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="bg-gray-100 w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    {/* Google Places Autocomplete for City */}
                    {isLoaded && (
                        <Autocomplete onLoad={onLoadAutocomplete} onPlaceChanged={onPlaceChanged}>
                            <input
                                type="text"
                                placeholder="Select City"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                className="bg-gray-100 w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </Autocomplete>
                    )}

                    {/* Get Current Location Button */}
                    <div>
                        <Button
                            onClick={handleGetCurrentLocation}
                            className="w-full py-3 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                        >
                            Use Current Location
                        </Button>
                        {formData.coordinates.lat && (
                            <p className="text-center mt-2 text-gray-700">
                                Location: {formData.location}
                            </p>
                        )}
                    </div>

                    {/* Google Map */}
                    {isLoaded && formData.coordinates.lat && (
                        <div className="mt-4">
                            <GoogleMap
                                mapContainerStyle={{ width: "100%", height: "300px", borderRadius: '12px' }}
                                center={formData.coordinates}
                                zoom={15}
                            >
                                <Marker position={formData.coordinates} />
                            </GoogleMap>
                        </div>
                    )}

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full py-3 px-4 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ListShopPage;
