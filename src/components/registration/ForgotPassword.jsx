import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useForgotPasswordMutation } from "../../redux/slices/passwordApiSlice";

const ForgotPassword = ({switchToLogin}) => {
    const [email, setemail] = useState();
    const [forgotPassword, { isLoading, isSuccess, isError, error, data }] = useForgotPasswordMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await forgotPassword(email).unwrap();
            console.log('Password reset email sent:', result.message);
        } catch (err) {
            console.error('Failed to send password reset email:', err);
        }
    };
    return (
        <div>
            <Input
                color="green"
                label="Email"
                type="email"
                name="email"
                className="app-font"
                value={email}
                onChange={(e) => setemail(e.target.value)}

            />

            <Button
                variant=""
                className="w-full bg-green-400 hover:shadow-none shadow-none mt-3"
                onClick={handleSubmit}
                disabled={isLoading}
            >
                Send
                {isLoading ? 'Sending...' : 'Send Reset Email'}
            </Button>

            <div className="pt-2 text-center">
                <h1 className="text-sm text-black" onClick={switchToLogin}>
                    Already have an account?{" "}
                    <span className="font-bold text-green-400 cursor-pointer">
                        Log in
                    </span>
                </h1>
            </div>

            <div className="mt-1">
                {isSuccess && <p>Email sent successfully!</p>}
                {isError && <p>Error: {error?.data?.error || 'Something went wrong'}</p>}
            </div>
        </div>
    )
}

export default ForgotPassword