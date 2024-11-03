// src/CouponCard.js
/* eslint-disable react/prop-types */

import { useContext } from "react";
import myContext from "../../../context/myContext";

const CouponCard = ({ title, description, discountCode, expiryDate, image }) => {

    const {showAlert} = useContext(myContext);
  
  const handleRedeem = () => {
    navigator.clipboard.writeText(discountCode)
      .then(() => {
        showAlert("Coupon code copied to clipboard!","success", 1000);
      })
      .catch(() => {
        showAlert("Failed to copy coupon code.", "error");
      });
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div>
        <img src={image} alt="Coupon" />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-gray-800">{title}</h2>
        <p className="text-gray-600 text-base mt-2">{description}</p>
        <p className="text-2xl font-semibold text-green-500 my-4">{discountCode}</p>
        <p className="text-sm text-gray-500">Expires on: {expiryDate}</p>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <button
          onClick={handleRedeem}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
        >
          Redeem Coupon
        </button>
      </div>
    </div>
  );
};

export default CouponCard;
