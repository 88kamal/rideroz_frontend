// // /* eslint-disable react/prop-types */
// // import { Button, Input } from '@material-tailwind/react'
// // import { Icon } from 'react-icons-kit';
// // import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// // import { eye } from 'react-icons-kit/feather/eye'
// // import { useEffect, useState } from 'react';
// // import { useLoginMutation } from '../../redux/slices/authApiSlice';
// // import toast from 'react-hot-toast';

// // const LoginForm = ({ switchToSignup }) => {
// //     const [loginState, setLoginState] = useState({
// //         email: "",
// //         password: "",
// //     });

// //     //* Type State 
// //     const [type, setType] = useState('password');

// //     //* Icons State 
// //     const [icon, setIcon] = useState(eyeOff);

// //     //* Handle Toggle Function (For Password Visible)
// //     const handleToggle = () => {
// //         if (type === 'password') {
// //             setIcon(eye);
// //             setType('text')
// //         } else {
// //             setIcon(eyeOff)
// //             setType('password')
// //         }
// //     }

// //     const [login, { isLoading, error, data, isSuccess, isError }] = useLoginMutation();

// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await login(loginState).unwrap();
// //             console.log(response.data); // Logged in user data, token etc.
// //         } catch (err) {
// //             console.error(err);
// //         }
// //     };


// //     useEffect(() => {
// //         if (isError) {
// //             toast.error(error?.data?.error || 'Failed to add role, please try again');
// //         }

// //         if (isSuccess) {
// //             toast.success(data?.message);
// //         }
// //     }, [isError, error, isSuccess, data]);
// //     return (
// //         <div>
// //             <div className="mb-6">
// //                 <Input
// //                     color="green"
// //                     label="Email"
// //                     type="email"
// //                     name="email"
// //                     className=' app-font'
// //                     value={loginState.email}
// //                     onChange={(e) => {
// //                         setLoginState({
// //                             ...loginState,
// //                             email: e.target.value
// //                         })
// //                     }}
// //                 />
// //             </div>
// //             <div className="mb-6">
// //                 <Input
// //                     color="green"
// //                     type={type}
// //                     label="Password"
// //                     className=' app-font'
// //                     value={loginState.password}
// //                     onChange={(e) => {
// //                         setLoginState({
// //                             ...loginState,
// //                             password: e.target.value
// //                         })
// //                     }}
// //                     icon={<span className="flex justify-around items-center cursor-pointer -mt-[3px]">
// //                         <Icon className=" text-green-200 " icon={icon} size={20} onClick={handleToggle} />
// //                     </span>}

// //                 />
// //             </div>
// //             <Button
// //                 variant=""
// //                 className="w-full bg-green-400 hover:shadow-none shadow-none"
// //                 onClick={handleLogin}>
// //                 Login
// //             </Button>
// //             <div className="pt-2 flex justify-between items-center">
// //                 <h1 className="text-sm text-black" onClick={switchToSignup}>
// //                     New to{" "}
// //                     <span className="font-bold text-green-400 cursor-pointer">
// //                         Rideroz
// //                     </span>
// //                     ? Signup
// //                 </h1>
// //                 <h1 className="text-sm text-black">Forgot Password?</h1>
// //             </div>
// //         </div>
// //     )
// // }

// // export default LoginForm


// /* eslint-disable react/prop-types */
// import { Button, Input } from '@material-tailwind/react';
// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';
// import { useEffect, useState } from 'react';
// import { useLoginMutation } from '../../redux/slices/authApiSlice';
// import toast from 'react-hot-toast';

// const LoginForm = ({ switchToSignup }) => {
//   const [loginState, setLoginState] = useState({
//     email: '',
//     password: '',
//   });

//   //* Type state for password visibility
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   //* Handle Toggle Function (For Password Visible)
//   const handleToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   //* Redux mutation for login
//   const [login, { isLoading, error, data, isSuccess, isError }] = useLoginMutation();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await login(loginState).unwrap();
//       console.log(response.data); // Logged in user data, token etc.
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     if (isError) {
//       toast.error(error?.data?.error || 'Login failed, please try again.');
//     }

//     // if (isSuccess) {
//     //   toast.success(data?.message);
//     // }
//   }, [isError, error, isSuccess, data]);

//   return (
//     <div>
//       <div className="mb-6">
//         <Input
//           color="green"
//           label="Email"
//           type="email"
//           name="email"
//           className="app-font"
//           value={loginState.email}
//           onChange={(e) =>
//             setLoginState({ ...loginState, email: e.target.value })
//           }
//         />
//       </div>
//       <div className="mb-6">
//         <Input
//           color="green"
//           type={passwordVisible ? 'text' : 'password'}
//           label="Password"
//           className="app-font"
//           value={loginState.password}
//           onChange={(e) =>
//             setLoginState({ ...loginState, password: e.target.value })
//           }
//           icon={
//             <span className="flex justify-around items-center cursor-pointer -mt-[3px]">
//               <Icon
//                 className="text-green-200"
//                 icon={passwordVisible ? eye : eyeOff}
//                 size={20}
//                 onClick={handleToggle}
//               />
//             </span>
//           }
//         />
//       </div>
//       <Button
//         variant=""
//         className="w-full bg-green-400 hover:shadow-none shadow-none"
//         onClick={handleLogin}
//         disabled={isLoading}
//       >
//         {isLoading ? 'Logging in...' : 'Login'}
//       </Button>
//       <div className="pt-2 flex justify-between items-center">
//         <h1 className="text-sm text-black" onClick={switchToSignup}>
//           New to{' '}
//           <span className="font-bold text-green-400 cursor-pointer">
//             Rideroz
//           </span>
//           ? Signup
//         </h1>
//         <h1 className="text-sm text-black cursor-pointer">Forgot Password?</h1>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;



/* eslint-disable react/prop-types */
import { Button, Input } from '@material-tailwind/react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useEffect, useState } from 'react';
import { useLoginMutation } from '../../redux/slices/authApiSlice';
import authService from '../../services/authService';
import NeedChangePassword from './NeedChangePassword';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const LoginForm = ({ switchToSignup, switchToLogin }) => {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
    });

    const [needPassword, setNeedPassword] = useState(false); // Track if the user needs a password


    const toggleNeedPassword = () => {
        if (user?.requiredPasswordChange) {
            setNeedPassword(true)
        }
    }


    const user = authService.getCurrentUser();

    //* State for managing messages
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    //* Type state for password visibility
    const [passwordVisible, setPasswordVisible] = useState(false);

    //* Handle Toggle Function (For Password Visible)
    const handleToggle = async () => {
        setPasswordVisible(!passwordVisible);
    };

    //* Redux mutation for login
    const [login, { isLoading, error, data, isSuccess, isError }] = useLoginMutation();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(loginState).unwrap();
            console.log(response); // Logged in user data, token etc

            toggleNeedPassword()
        } catch (err) {
            console.error(err);
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
            if (user?.requiredPasswordChange) {
                setNeedPassword(true)
            }
            else {
                setSuccessMessage(data?.message || 'Login successful!');
                const rolePaths = {
                    2: '/super-admin-dashboard/super-admin-home-page',
                    14: '/shop-owner-dashboard/shop-owner-home-page',
                    15: '/'
                };

                navigate(rolePaths[user?.role]);

                if(rolePaths[15]){
                    toast.success(data?.message)
                }
                // Hide the success message after 5 seconds
                setTimeout(() => {
                    setSuccessMessage('');
                }, 1000);
            }




        }
    }, [isError, error, isSuccess, data]);

    return (
        <>
            {needPassword ?
                <>
                    <NeedChangePassword switchToLogin={switchToLogin} setNeedPassword={setNeedPassword}  needPassword={needPassword}/>
                </>
                :

                <>
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

                    {/* <pre>{JSON.stringify(roles, null, 2)}</pre> */}
                    {/* <pre>{JSON.stringify(user,null,2)}</pre> */}

                    <div className="mb-6">
                        <Input
                            color="green"
                            label="Email"
                            type="email"
                            name="email"
                            className="app-font"
                            value={loginState.email}
                            onChange={(e) =>
                                setLoginState({ ...loginState, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="mb-6">
                        <Input
                            color="green"
                            type={passwordVisible ? 'text' : 'password'}
                            label="Password"
                            className="app-font"
                            value={loginState.password}
                            onChange={(e) =>
                                setLoginState({ ...loginState, password: e.target.value })
                            }
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
                    <Button
                        variant=""
                        className="w-full bg-green-400 hover:shadow-none shadow-none"
                        onClick={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </Button>
                    <div className="pt-2 flex justify-between items-center">
                        <h1 className="text-sm text-black" onClick={switchToSignup}>
                            New to{' '}
                            <span className="font-bold text-green-400 cursor-pointer">
                                Rideroz
                            </span>
                            ? Signup
                        </h1>
                        <h1 className="text-sm text-black cursor-pointer">Forgot Password?</h1>
                    </div>
                </>}
        </>




    );
};

export default LoginForm;
