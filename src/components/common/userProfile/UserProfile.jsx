import { Button, Chip, Spinner } from '@material-tailwind/react';
import { useGetUserByIdQuery } from '../../../redux/slices/userApiSlice';
import authService from '../../../services/authService';
import ShopOwnerActiveAndDeActiveButton from '../shopOwner/activeAndDeactive/ShopOwnerActiveAndDeActiveButton';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../../redux/slices/authApiSlice';
import { useNavigate } from 'react-router-dom';
import apiSlice from '../../../redux/slices/apiSlice';
import { LogOut } from 'lucide-react';

function UserProfile() {
    const user = authService.getCurrentUser();
    const userId = user?.id;
    const { data: getUserById, error, isLoading, refetch } = useGetUserByIdQuery(userId)

    const date = new Date(getUserById?.user?.createdAt);

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

    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout(); // Call the logout mutation to remove token
        navigate('/');  // Redirect to the home page after logout
        dispatch(apiSlice.util.resetApiState());
    };

    return (
        <div className="flex flex-col items-center min-h-screen">

            {isLoading && 
            <div className=' flex justify-center '>
                <Spinner/>
            </div>
            }
            {/* For USER  */}
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
                        <span className="text-gray-700  app-font">Email</span>
                        <span className="text-gray-600 ">{getUserById?.user?.userEmail}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font">Updated At</span>
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

            {/* <pre>{JSON.stringify(getUserById?.user, null, 2)}</pre> */}

            {/* For SHOP OWNER  */}
            {[getUserById?.userType].includes('Shop') && <div className="bg-white drop-shadow border border-gray-300 rounded-md w-full p-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-6">

                    <div className=" border border-gray-300 bg-white drop-shadow rounded-full">
                        <img
                            className=' w-20 h-20 rounded-full'
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
                        <span className="text-gray-700  app-font ">Shop Owner Name</span>
                        <span className="text-gray-600 ">{getUserById?.user?.ownerName}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font ">Email</span>
                        <span className="text-gray-600 ">{getUserById?.user?.ownerEmail}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Gender</span>
                        <span className="text-gray-600 ">{getUserById?.user?.gender}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Updated At</span>
                        <span className="text-gray-600">{
                            formattedDate
                        }</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Account Verification</span>
                        <span className="text-gray-600">{
                            <Chip
                                size="sm"
                                variant="ghost"
                                value={getUserById?.user?.account_verified === false ? "Account Not Verified" : "Account Verified"}
                                color={
                                    getUserById?.user?.account_verified === false ? "red" :
                                        "green"
                                }

                                className="px-3 text-center w-44"
                            />
                        }</span>
                    </div>


                </div>

                <div className="border-t pt-4 space-y-3">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Bank Account Details</h2>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font">Account Holder Name</span>
                        <span className="text-gray-600 ">{getUserById?.user?.account_holder_name}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font">Account Number</span>
                        <span className="text-gray-600 blur  hover:blur-0 cursor-pointer">{getUserById?.user?.account_number}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font">IFSC Code</span>
                        <span className="text-gray-600 blur  hover:blur-0 cursor-pointer ">{getUserById?.user?.ifsc}</span>
                    </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Shop Opening And Closing Time</h2>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font">Shop Opening Time</span>
                        <span className="text-gray-600 ">{getUserById?.user?.shop_OpeningTime || "N/A"}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font">Shop Closing Time</span>
                        <span className="text-gray-600 ">{getUserById?.user?.shop_ClosedTime || "N/A"}</span>
                    </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Shop Activation</h2>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font">Shop Activation</span>
                        <span className="text-gray-600 ">{
                            getUserById?.user?.ownerActivation === false ? "Deactive" : "Active"}</span>
                    </div>

                </div>

                {/* <pre>{JSON.stringify(getUserById?.user, null, 2)}</pre> */}

                <div className="">
                    <ShopOwnerActiveAndDeActiveButton
                        shopId={getUserById?.user?._id}
                        ownerActivation={getUserById?.user?.ownerActivation}
                        refetch={refetch}
                    />
                </div>

                {/* Aadhaar Card Image */}
                {/* <div className="mt-6">
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
                </div> */}

               
            </div>}

            {/* FOR EMPLOYEE  */}
            {[getUserById?.userType].includes('Employee') && <div className="bg-white drop-shadow border border-gray-300 rounded-md w-full p-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-6">

                    <div className=" border border-gray-300 bg-white drop-shadow rounded-full">
                        <img
                            className=' w-20 h-20 rounded-full'
                            src={getUserById?.user?.employeePhoto?.url}
                            alt={getUserById?.user?.employeeName}
                        />
                    </div>

                    <div>
                        <h1 className=" text-xl lg:text-2xl font-bold text-gray-800">{getUserById?.user?.employeeName}</h1>
                        <p className="text-gray-500 app-font">Phone: {getUserById?.user?.employeeMobileNumber}</p>
                    </div>
                </div>

                {/* User Information */}
                <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font ">father/Husband Name</span>
                        <span className="text-gray-600 ">{getUserById?.user?.fatherOrHusbandName || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font ">Email</span>
                        <span className="text-gray-600 ">{getUserById?.user?.employeeEmail || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font ">Department</span>
                        <span className="text-gray-600 ">{getUserById?.user?.department || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font ">Role</span>
                        <span className="text-gray-600 ">{getUserById?.user?.role?.roleName || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Gender</span>
                        <span className="text-gray-600 ">{getUserById?.user?.sex || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Marital Status</span>
                        <span className="text-gray-600 ">{getUserById?.user?.maritalStatus || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Blood Group</span>
                        <span className="text-gray-600 ">{getUserById?.user?.bloodGroup || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Present Address</span>
                        <span className="text-gray-600 ">{getUserById?.user?.presentAddress || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Permanent Address</span>
                        <span className="text-gray-600 ">{getUserById?.user?.permanentAddress || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Date Of Birth</span>
                        <span className="text-gray-600 ">{getUserById?.user?.dateOfBirth || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Date Of Birth</span>
                        <span className="text-gray-600 ">{getUserById?.user?.dateOfJoining || "N/A"}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Updated At</span>
                        <span className="text-gray-600">{
                            formattedDate
                        }</span>
                    </div>
                </div>


                {/* Aadhaar Card Image */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Documents</h2>
                    <div className="flex flex-wrap space-y-2 lg:space-y-0 justify-between items-center">

                        <div className=" w-full lg:w-1/3 border border-gray-300 bg-white drop-shadow p-2 ">
                            <div className="w-full">
                                <a href={getUserById?.user?.employeeAdharCard?.url} target="_blank">
                                    <p className=" text-center app-font text-black">View Aadhar Card </p>
                                </a>
                            </div>

                        </div>

                        <div className=" w-full lg:w-1/3 border border-gray-300 bg-white drop-shadow p-2 ">
                            <div className="w-full">
                                <a href={getUserById?.user?.employeePanCard?.url} target="_blank">
                                    <p className=" text-center app-font text-black">View Pan Card </p>
                                </a>
                            </div>

                        </div>
                        <div className=" w-full lg:w-1/3 border border-gray-300 bg-white drop-shadow p-2 ">
                            <div className="w-full">
                                <a href={getUserById?.user?.employeeAgreement?.url} target="_blank">
                                    <p className=" text-center app-font text-black">View Employee Agreement </p>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>}

            <div className=" mt-3 lg:hidden md:hidden sm:hidden w-full">
                    <Button onClick={handleLogout} className=' w-full flex items-center justify-center gap-2 bg-red-500 shadow-none hover:shadow-none text-white border'>
                        <LogOut className='w-4 h-4' /> Logout
                    </Button>
                </div>
        </div>
    );
}

export default UserProfile;
