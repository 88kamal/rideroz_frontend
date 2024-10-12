/* eslint-disable react/prop-types */
import { useState } from "react";

const CustomDropdown = ({ options, label, selectedValue, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleOptionClick = (value) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={toggleDropdown}
                className="w-full bg-transparent border border-gray-500 rounded-md p-2 text-left"
            >
                {selectedValue || label}
            </button>
            {isOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="p-2 hover:bg-green-100 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
