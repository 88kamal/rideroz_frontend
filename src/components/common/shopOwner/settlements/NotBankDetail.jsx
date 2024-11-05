/* eslint-disable no-unused-vars */
import { Button, Input } from '@material-tailwind/react';
import axios from 'axios';
import { useState } from 'react';

const NotBankDetail = () => {
    const [bankDetails, setBankDetails] = useState({
        accountHolder: '',
        accountNumber: '',
        ifscCode: '',
        bankName: '',
        branch: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBankDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
            ...(name === 'ifscCode' && value.length !== 11
                ? { bankName: '', branch: '' }
                : {}),
        }));

        if (name === 'ifscCode' && value.length === 11) {
            fetchBankDetails(value);
        }
    };

    const fetchBankDetails = async (ifscCode) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://ifsc.razorpay.com/${ifscCode}`);
            setBankDetails((prevDetails) => ({
                ...prevDetails,
                bankName: response.data.BANK,
                branch: response.data.BRANCH,
            }));
        } catch (error) {
            console.error("Error fetching bank details:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Bank Details:', bankDetails);
        // Add your form submission logic here
    };

    return (
        <div className="w-full mx-auto p-6 bg-white rounded-md drop-shadow">
            <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Add Bank Details</h2>
            <p className="text-center text-sm text-green-600 mb-6 app-font">
                Rideroz will Settlements payments twice a week.
            </p>
            <pre>
                {JSON.stringify(bankDetails,null,2)}
            </pre>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Input
                        label='Account Holder Name'
                        type="text"
                        id="accountHolder"
                        name="accountHolder"
                        value={bankDetails.accountHolder}
                        onChange={handleChange}
                        color='green'
                        className="block w-full rounded-md sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <Input
                        label='Account Number'
                        type="text"
                        id="accountNumber"
                        name="accountNumber"
                        value={bankDetails.accountNumber}
                        onChange={handleChange}
                        color='green'
                        className="block w-full rounded-md sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <Input
                        label='IFSC Code'
                        type="text"
                        id="ifscCode"
                        name="ifscCode"
                        value={bankDetails.ifscCode}
                        onChange={handleChange}
                        color='green'
                        className="block w-full rounded-md sm:text-sm uppercase"
                        required
                    />
                </div>
                {bankDetails.bankName && bankDetails.branch && (
                    <div className="text-sm flex items-center gap-1 mt-2">
                        <p className="text-gray-700 font-semibold">{bankDetails.bankName},</p>
                        <p className="text-gray-700">{bankDetails.branch}</p>
                    </div>
                )}
                <Button
                    type="submit"
                    className="w-full bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 py-3"
                >
                    {loading ? 'Loading...' : 'Submit'}
                </Button>
            </form>
        </div>
    );
};

export default NotBankDetail;
