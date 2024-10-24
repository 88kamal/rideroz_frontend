import { CircleAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentCanceledByUser = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-50 to-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg text-center animate-fadeIn">
                <CircleAlert className="w-20 h-20 text-red-500 mx-auto" />
                <h1 className="mt-6 text-4xl font-bold text-red-600">
                    Payment Canceled
                </h1>
                <p className="mt-4 text-gray-700 text-lg app-font">
                    You have canceled the payment process. Your booking has not been confirmed.
                </p>
                <p className="mt-2 text-gray-500 app-font">
                    If you need help, feel free to contact our support team or try again.
                </p>
                <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                    <Link
                        to="/"
                        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all duration-300"
                    >
                        Back to Home
                    </Link>
                    <Link
                        to="/support"
                        className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 transition-all duration-300"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentCanceledByUser;
