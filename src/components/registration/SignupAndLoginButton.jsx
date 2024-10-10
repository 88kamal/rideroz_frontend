/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

const SignupAndLoginButton = ({ switchToSignupUser, switchToLogin }) => {
    return (
        <div>
            <Button
                variant=""
                onClick={switchToSignupUser}
                className="hover:shadow-none shadow-none w-full bg-transparent rounded-sm border capitalize font-medium p-2 border-green-400 mb-5 text-green-600 app-font text-sm"
            >
                Signup For User
            </Button>

            <Link to={'/list-shop'} target="_blank">
                <Button
                    variant=""
                    className="hover:shadow-none shadow-none w-full bg-transparent rounded-sm border capitalize font-medium p-2 border-green-400 mb-5 text-green-600 app-font text-sm"
                >
                    Signup For Shop Owner
                </Button>
            </Link>

            <Button
                onClick={switchToLogin}
                variant=""
                className="hover:shadow-none shadow-none w-full bg-transparent rounded-sm border capitalize font-medium p-2 border-green-400 mb-5 text-green-600 app-font text-sm"
            >
                Login Now
            </Button>
        </div>
    )
}

export default SignupAndLoginButton