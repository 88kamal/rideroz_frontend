import { Button, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import authService from "../../services/authService";
import { useFirstPasswordChangeMutation } from "../../redux/slices/authApiSlice";

// eslint-disable-next-line react/prop-types
const NeedChangePassword = ({switchToLogin,setNeedPassword, needPassword}) => {
    const [passwordState, setPasswordState] = useState({
        password: '',
        confirmPassword: '',
    });


    const [firstPasswordChange, { isLoading, isError, isSuccess, error, data }] = useFirstPasswordChangeMutation();

    const user = authService.getCurrentUser();

    const userId = user?.id

    //* State for managing messages
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    //* Type state for password visibility
    const [passwordVisible, setPasswordVisible] = useState(false);

    //* Handle Toggle Function (For Password Visible)
    const handleToggle = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await firstPasswordChange({ id: userId, passwordState }).unwrap();
        //   switchToLogin()
          // Handle success, e.g., show a success message or redirect
        } catch (err) {
          // Handle error
          console.error('Failed to change password', err);
        }
      };


    useEffect(() => {
        if (isError) {
            setErrorMessage(error?.data?.error || 'Login failed, please try again.');
            // Hide the error message after 5 seconds
            setTimeout(() => {
                setErrorMessage('');
            }, 1000);
        }

        if (isSuccess) {
            switchToLogin()
            setNeedPassword(false)
            setSuccessMessage(data?.message);            // setNeedPassword(false)
            // Hide the success message after 5 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 1000);
        }
    }, [isSuccess, isError, error, data, needPassword, switchToLogin, setNeedPassword]);

    return (
        <div>
            <h1 className=" mb-3 text-center text-lg app-font">Password Change</h1>

            {/* <pre>{JSON.stringify({isSuccess,isError,isLoading,error,data},null,2)}</pre> */}

            {errorMessage && (
                        <div className=" text-red-800 p-2 mb-4 rounded text-center app-font">
                            {errorMessage}
                        </div>
                    )}
                    {successMessage && (
                        <div className=" text-green-800 p-2 mb-4 rounded text-center app-font">
                            {successMessage}
                        </div>
                    )}

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
                    label="Confirm Password"
                    className="app-font"
                    value={passwordState.confirmPassword}
                    onChange={(e) => {
                        setPasswordState({
                            ...passwordState,
                            confirmPassword: e.target.value
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
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Changed Password' : 'Change Password'}
                    </Button>
            </div>



        </div>
    )
}

export default NeedChangePassword