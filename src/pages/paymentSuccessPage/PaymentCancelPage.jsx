import { Link } from 'react-router-dom';
import { CircleAlert } from 'lucide-react';

const PaymentCancelPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-gray-100 px-2">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fadeIn">
            <CircleAlert className="w-20 h-20 text-red-500 mx-auto" />
                <h1 className="mt-4 text-3xl font-bold text-red-600 app-font">
                    Payment Canceled
                </h1>
                <p className="mt-4 text-gray-700 text-lg app-font">
                    It seems you canceled the payment. Unfortunately, your booking has not been confirmed.
                </p>
                <p className="mt-1 text-gray-500 app-font">
                    Please try again or contact our support if you need assistance.
                </p>
                <Link
                    to="/"
                    className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all duration-300"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default PaymentCancelPage;
