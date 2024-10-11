/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button, Input } from '@material-tailwind/react'
import { useEffect, useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { useSignUpUserMutation } from '../../redux/slices/userApiSlice';

const UserSignupForm = ({ switchToLogin }) => {
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userPhoneNumber: "",
        password: ""
    });


    //* Type State 
    const [type, setType] = useState('password');

    //* Icons State 
    const [icon, setIcon] = useState(eyeOff);

    //* Handle Toggle Function (For Password Visible)
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    const [signUpUser, { isLoading, isError, isSuccess, error, data }] = useSignUpUserMutation();


    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUpUser(formData);
    };

    //* State for managing messages
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');



    useEffect(() => {
        if (isError) {
            setErrorMessage(error?.data?.error || 'Login failed, please try again.');
            // Hide the error message after 5 seconds
            setTimeout(() => {
                setErrorMessage('');
            }, 2000);
        }

        if (isSuccess) {
            setSuccessMessage(data?.message || 'Login successful!');
            switchToLogin()
            // Hide the success message after 5 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 2000);
        }
    }, [isError, error, isSuccess, data]);
    return (
        <div>
            {errorMessage && (
                <div className=" text-red-800 text-center text-md app-font absolute top-3 right-20 lg:top-[9.5em] lg:right-[7.5em]">
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div className=" text-green-800 text-center app-font">
                    {successMessage}
                </div>
            )}


            <div className="mb-5">
                <Input
                    color="green"
                    label="Full Name"
                    type="email"
                    name="email"
                    className=' app-font'
                    value={formData.userName}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            userName: e.target.value
                        })
                    }}
                />
            </div>
            <div className="mb-5">
                <Input
                    color="green"
                    label="Email"
                    type="email"
                    name="email"
                    className=' app-font'
                    value={formData.userEmail}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            userEmail: e.target.value
                        })
                    }}
                />
            </div>
            <div className="mb-5">
                <Input
                    color="green"
                    label="Mobile Number"
                    type="number"
                    name="email"
                    className=' app-font'
                    value={formData.userPhoneNumber}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            userPhoneNumber: e.target.value
                        })
                    }}
                />
            </div>
            <div className="mb-5">
                <Input
                    color="green"
                    type={type}
                    label="Password"
                    className=' app-font'
                    value={formData.password}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            password: e.target.value
                        })
                    }}
                    icon={<span className="flex justify-around items-center cursor-pointer -mt-[3px]">
                        <Icon className=" text-green-200 " icon={icon} size={20} onClick={handleToggle} />
                    </span>}

                />
            </div>
            <Button variant="" onClick={handleSubmit} className="w-full bg-green-400 hover:shadow-none shadow-none">
                {isLoading ? 'Signing Up...' : 'Sign Up'}
            </Button>
            <div className="pt-2 text-center">
                <h1 className="text-sm text-black" onClick={switchToLogin}>
                    Already have an account?{" "}
                    <span className="font-bold text-green-400 cursor-pointer">
                        Log in
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default UserSignupForm
