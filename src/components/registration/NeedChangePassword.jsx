import { Button, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import authService from "../../services/authService";

const NeedChangePassword = () => {
    const [passwordState, setPasswordState] = useState({
        password: '',
        confirmPassword: '',
    });

    const user = authService.getCurrentUser();

    //* State for managing messages
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    //* Type state for password visibility
    const [passwordVisible, setPasswordVisible] = useState(false);

    //* Handle Toggle Function (For Password Visible)
    const handleToggle = () => {
        setPasswordVisible(!passwordVisible);
    };


    useEffect(() => {
        // if (isError) {
        //     setErrorMessage(error?.data?.error || 'Login failed, please try again.');
        //     // Hide the error message after 5 seconds
        //     setTimeout(() => {
        //         setErrorMessage('');
        //     }, 1000);
        // }

        // if (isSuccess) {
        //     setSuccessMessage(data?.message || 'Login successful!');
        //     // Hide the success message after 5 seconds
        //     setTimeout(() => {
        //         setSuccessMessage('');
        //     }, 1000);
        // }
    }, []);

    return (
        <div>
            <h1 className=" mb-3 text-center text-lg app-font">Password Change</h1>

            {/* <pre>{JSON.stringify(user,null,2)}</pre> */}

            <div className="mb-6">
                <Input
                    color="green"
                    type={passwordVisible ? 'text' : 'password'}
                    label="Password"
                    className="app-font"
                    value={passwordState.password}
                    onChange={(e) => {
                        setPasswordState({
                            ...passwordState,
                            password: e.target.value
                        })
                    }}
                    icon={
                        <span className="flex justify-around items-center cursor-pointer -mt-[3px]">
                            <Icon
                                className="text-green-200"
                                icon={passwordVisible ? eye : eyeOff}
                                size={20}
                                onClick={handleToggle}
                            />
                        </span>
                    }
                />
            </div>

            <div className="mb-6">
                <Input
                    color="green"
                    type={passwordVisible ? 'text' : 'password'}
                    label="Password"
                    className="app-font"
                    value={passwordState.password}
                    onChange={(e) => {
                        setPasswordState({
                            ...passwordState,
                            password: e.target.value
                        })
                    }}
                    icon={
                        <span className="flex justify-around items-center cursor-pointer -mt-[3px]">
                            <Icon
                                className="text-green-200"
                                icon={passwordVisible ? eye : eyeOff}
                                size={20}
                                onClick={handleToggle}
                            />
                        </span>
                    }
                />
            </div>

            <div className="">
            <Button
                        variant=""
                        className="w-full bg-green-400 hover:shadow-none shadow-none"
                        // onClick={handleLogin}
                        // disabled={isLoading}
                    >
                        {/* {isLoading ? 'Logging in...' : 'Login'} */}
                        Change Password
                    </Button>
            </div>



        </div>
    )
}

export default NeedChangePassword