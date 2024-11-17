/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const CustomDropdown = ({ filters, setFilters }) => {
    const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state

    const statusOptions = [
        { value: "", label: "All" },
        { value: "completed", label: "Completed" },
        { value: "pending", label: "Pending" },
        { value: "failed", label: "Failed" },
        { value: "cancelled", label: "Cancelled" },
    ];

    // Load the saved filter from localStorage on component mount
    useEffect(() => {
        const savedStatus = localStorage.getItem("selectedStatus");
        if (savedStatus !== null) {
            setFilters((prev) => ({ ...prev, status: savedStatus }));
        }
    }, [setFilters]);

    const handleFilterChange = (value) => {
        setFilters((prev) => ({ ...prev, status: value }));
        localStorage.setItem("selectedStatus", value); // Save selected value to localStorage
        setIsOpen(false); // Close dropdown on selection
    };

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-green-300 rounded shadow-sm"
            >
                {filters.status
                    ? statusOptions.find((option) => option.value === filters.status)?.label
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
                            onClick={() => handleFilterChange(option.value)}
                            className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 ${
                                filters.status === option.value ? "bg-gray-100" : ""
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

export default CustomDropdown;
