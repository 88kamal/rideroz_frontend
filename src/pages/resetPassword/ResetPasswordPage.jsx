import { useEffect, useState } from 'react';
import { useResetPasswordMutation } from '../../redux/slices/passwordApiSlice';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button, Input } from '@material-tailwind/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const ResetPasswordPage = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [resetPassword, { isLoading, isSuccess, isError, error, data }] =
        useResetPasswordMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            await resetPassword({ token, newPassword }).unwrap();
        } catch (err) {
            console.error('Failed to reset password:', err);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to reset password, please try again');
        }

        if (isSuccess) {
            toast.success(data?.message || 'Password reset successfully');
        }
    }, [isError, error, isSuccess, data]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-6 bg-green-50 rounded-lg drop-shadow border border-green-200">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Reset Password
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                        <Input
                            id="newPassword"
                            type={showNewPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            label="Enter your new password"
                            color="green"
                        />
                        <button
                            type="button"
                            onClick={() => setShowNewPassword((prev) => !prev)}
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            {showNewPassword ? (
                                <EyeSlashIcon className="w-5 h-5" />
                            ) : (
                                <EyeIcon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                    <div className="relative mb-4">
                        <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            label="Confirm your new password"
                            color="green"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            {showConfirmPassword ? (
                                <EyeSlashIcon className="w-5 h-5" />
                            ) : (
                                <EyeIcon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full hover:shadow-none shadow-none px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                    >
                        {isLoading ? 'Resetting...' : 'Reset Password'}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
