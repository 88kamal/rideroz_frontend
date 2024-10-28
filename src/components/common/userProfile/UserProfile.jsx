// // import { useGetUserByIdQuery } from "../../../redux/slices/userApiSlice";
// // import authService from "../../../services/authService";

// // const UserProfile = () => {
// const user = authService.getCurrentUser();
// const userId = user?.id;
// const { data: getUserById, error, isLoading } = useGetUserByIdQuery(userId);
// //   return (
// //     <div>
// //         <pre>{JSON.stringify(getUserById,null,2)}</pre>
// //     </div>
// //   )
// // }

// // export default UserProfile

// import React from "react";
// import { FaUser, FaEnvelope, FaPhone, FaIdBadge, FaCalendarAlt } from "react-icons/fa";

// const UserProfile = () => {
//     const user = {
//         _id: "67095624d480a6569f58ad4f",
//         userName: "Kamal Nayan Upadhyay",
//         userEmail: "testuser@gmail.com",
//         role: 15,
//         userPhoneNumber: "8292417430",
//         adharcardImg: [
//             {
//                 public_id: "kb3qliwedy1dv8mcxgud",
//                 url: "https://res.cloudinary.com/dolajkbv5/image/upload/v1729930590/kb3qliwedy1dv8mcxgud.jpg",
//                 _id: "671ca55eb82ff71a422bfead",
//             },
//         ],
//         updatedAt: "2024-10-26T08:16:30.688Z",
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen">
//             <div className="bg-white p-6 rounded-2xl shadow-2xl w-full ">
//                 <div className="text-center mb-6">
//                     <div className="inline-block bg-blue-500 text-white rounded-full p-3 shadow-lg">
//                         <FaUser className="text-3xl" />
//                     </div>
//                     <h2 className="text-3xl font-semibold text-gray-800 mt-4">{user.userName}</h2>
//                     <p className="text-sm text-gray-500">Role ID: {user.role}</p>
//                 </div>

//                 <div className="space-y-4">
//                     <div className="flex  space-x-3 bg-gray-100 rounded-lg p-4 shadow-sm">
//                         <FaEnvelope className="text-blue-500 text-lg" />
//                         <div>
//                             <label className="text-gray-600">Email</label>
//                             <p className="text-gray-800">{user.userEmail}</p>
//                         </div>
//                     </div>

//                     <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 shadow-sm">
//                         <FaPhone className="text-blue-500 text-lg" />
//                         <div>
//                             <label className="text-gray-600">Phone Number</label>
//                             <p className="text-gray-800">{user.userPhoneNumber}</p>
//                         </div>
//                     </div>

//                     <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 shadow-sm">
//                         <FaIdBadge className="text-blue-500 text-lg" />
//                         <div>
//                             <label className="text-gray-600">Role</label>
//                             <p className="text-gray-800">{user.role}</p>
//                         </div>
//                     </div>

//                     <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4 shadow-sm">
//                         <FaCalendarAlt className="text-blue-500 text-lg" />
//                         <div>
//                             <label className="text-gray-600">Last Updated</label>
//                             <p className="text-gray-800">
//                                 {new Date(user.updatedAt).toLocaleString()}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="mt-6">
//                         <label className="block text-gray-600 mb-2">Aadhar Card</label>
//                         {user.adharcardImg && user.adharcardImg[0]?.url && (
//                             <img
//                                 src={user.adharcardImg[0].url}
//                                 alt="Aadhar Card"
//                                 className="rounded-xl shadow-lg w-full"
//                             />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserProfile;

import { useGetUserByIdQuery } from '../../../redux/slices/userApiSlice';
import authService from '../../../services/authService';

function UserProfile() {
    const user = authService.getCurrentUser();
    const userId = user?.id;
    const { data: getUserById, error, isLoading } = useGetUserByIdQuery(userId)

    const date = new Date(getUserById?.user?.updatedAt);

    // Formatting Options
    const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    };

    // Formatted Date String
    const formattedDate = date.toLocaleString('en-US', options);

    return (
        <div className="flex flex-col items-center min-h-screen">
            {/* Profile Card */}
            {[getUserById?.userType].includes('User') && <div className="bg-white drop-shadow border border-gray-300 rounded-md w-full p-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-6">
                    <div className=" w-16 h-16 lg:w-20 lg:h-20 bg-green-800 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
                        {getUserById?.user?.userName?.charAt(0).toUpperCase()}
                    </div>

                    <div>
                        <h1 className=" text-xl lg:text-2xl font-bold text-gray-800">{getUserById?.user?.userName}</h1>
                        <p className="text-gray-500">Phone: {getUserById?.user?.userPhoneNumber}</p>
                    </div>
                </div>

                {/* User Information */}
                <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font font-bold">Email</span>
                        <span className="text-gray-600 ">{getUserById?.user?.userEmail}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font font-bold">Updated At</span>
                        <span className="text-gray-600">{
                            formattedDate
                        }</span>
                    </div>
                </div>

                {/* Aadhaar Card Image */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Documents</h2>
                    <div className=" border border-gray-300 bg-white drop-shadow p-2 rounded-md flex justify-center items-center ">
                        {getUserById?.user?.adharcardImg ?

                            <>
                                {getUserById?.user?.adharcardImg?.map((doc) => (
                                    <div key={doc._id} className="w-full">
                                        <img
                                            src={doc.url}
                                            alt="Aadhaar Card"
                                            className="w-80 h-auto rounded-lg shadow-md object-cover"
                                        />
                                    </div>
                                ))}
                            </>

                            :
                            <div className=' flex justify-center items-center h-72 lg:h-52'>
                                <div className="">
                                    <div className="flex justify-center">
                                        <img
                                            className=' w-20 h-20'
                                            src="https://cdn-icons-png.flaticon.com/128/1074/1074220.png"
                                            alt="img"
                                        />
                                    </div>
                                    <p className=' app-font mt-3 text-center'>Your profile is incomplete.</p>
                                    <p className=' text-center mt-1 app-font'>"जब आप वाहन बुक करने जाएंगे, तो आपके कानूनी दस्तावेज़ लिए जाएंगे और उसके बाद आपका प्रोफाइल पूरा हो जाएगा।"</p>
                                    <p className=' text-center mt-1 app-font'>When you proceed to book a vehicle, legal documents will be collected, and then your profile will be completed.</p>
                                </div>
                            </div>

                        }
                    </div>
                </div>
            </div>}

            {/* <pre>{JSON.stringify(getUserById, null, 2)}</pre> */}

            {[getUserById?.userType].includes('Shop') && <div className="bg-white drop-shadow border border-gray-300 rounded-md w-full p-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-6">

                    <div className=" border border-gray-300 bg-white drop-shadow rounded-full">
                        <img
                            className=' w-20 h-20'
                            src={getUserById?.user?.shopImage?.url}
                            alt={getUserById?.user?.shopName}
                        />
                    </div>

                    <div>
                        <h1 className=" text-xl lg:text-2xl font-bold text-gray-800">{getUserById?.user?.shopName}</h1>
                        <p className="text-gray-500 app-font">Phone: {getUserById?.user?.ownerPhoneNumber}</p>
                    </div>
                </div>

                {/* User Information */}
                <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font font-bold">Shop Owner Name</span>
                        <span className="text-gray-600 ">{getUserById?.user?.ownerName}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font font-bold">Email</span>
                        <span className="text-gray-600 ">{getUserById?.user?.ownerEmail}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font font-bold">Gender</span>
                        <span className="text-gray-600 ">{getUserById?.user?.gender}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font font-bold">Updated At</span>
                        <span className="text-gray-600">{
                            formattedDate
                        }</span>
                    </div>
                </div>

                {/* Aadhaar Card Image */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Documents</h2>
                    <div className=" border border-gray-300 bg-white drop-shadow p-2 rounded-md flex justify-center items-center">

                                    <div className="w-full">
                                        <img
                                            src={getUserById?.user?.legalDoc?.url}
                                            alt="Aadhaar Card"
                                            className="w-80 h-auto rounded-lg shadow-md object-cover"
                                        />
                                    </div>

                    </div>
                </div>
            </div>}
        </div>
    );
}

export default UserProfile;
