/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const SettleCustomDropDown = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state

  const statusOptions = [
    { value: "true", label: "Settled" },
    { value: "false", label: "Unsettled" },
  ];

  // Load the saved 'settled' filter from localStorage on component mount
  useEffect(() => {
    const savedSettled = localStorage.getItem("settledStatus");
    if (savedSettled !== null) {
      const booleanValue = savedSettled === "true"; // Convert string to boolean
      setFilters((prevFilters) => ({
        ...prevFilters,
        settled: booleanValue,
      }));
    }
  }, [setFilters]);

  // Function to update 'settled' filter and save it in localStorage
  const handleSettledChange = (value) => {
    const booleanValue = value === "true"; // Convert string to boolean
    setFilters((prevFilters) => ({
      ...prevFilters,
      settled: booleanValue, // Update the settled value
    }));
    localStorage.setItem("settledStatus", value); // Save the selection to localStorage
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-green-300 rounded shadow-sm"
      >
        {filters.settled !== undefined
          ? statusOptions.find((option) => option.value === String(filters.settled))?.label
          : "Select Status"}
        <svg
          className={`w-5 h-5 ml-2 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 right-0 w-40 mt-2 bg-white border border-gray-300 rounded shadow-lg">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSettledChange(option.value)}
              className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 ${
                filters.settled === (option.value === "true") ? "bg-gray-100" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SettleCustomDropDown;
