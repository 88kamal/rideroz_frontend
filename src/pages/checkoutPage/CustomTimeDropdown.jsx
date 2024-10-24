/* eslint-disable react/prop-types */
import { useState } from 'react';

const CustomTimeDropdown = ({ value, onChange, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const times = generateTimeArray();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (time) => {
        onChange({ target: { name: name, value: time } });
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
            type='button'
                onClick={handleToggle}
                className="w-full text-sm border p-2 text-left bg-white border-gray-500 rounded app-font"
            >
                {name === "startTime"
                    ? (value ? value : "Select Pickup Time")
                    : (name === "endTime"
                        ? (value ? value : "Select Drop off Time")
                        : "Select Time")}
            </button>


            {isOpen && (
                <ul className="absolute mt-1 z-10 w-full border border-gray-500 bg-white rounded max-h-48 overflow-y-auto">
                    {times.map((timeObj, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(timeObj.time)}
                            className="p-2 cursor-pointer hover:bg-gray-100 app-font text-sm"
                        >
                            {timeObj.time}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

function generateTimeArray() {
    const times = [];
    let startTime = 8 * 60; // 8:00 AM in minutes
    const endTime = 23 * 60; // 11:00 PM in minutes

    while (startTime <= endTime) {
        const hours = Math.floor(startTime / 60);
        const minutes = startTime % 60;
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 === 0 ? 12 : hours % 12;
        const timeString = `${displayHours}:${minutes === 0 ? '00' : minutes} ${period}`;

        times.push({ time: timeString });
        startTime += 30;
    }

    return times;
}

export default CustomTimeDropdown;
