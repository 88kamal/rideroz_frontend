/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { useState } from 'react';

// const CustomTimeDropdown = ({ value, onChange, name, shop_OpeningTime, shop_ClosedTime }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const times = generateTimeArray();

//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleSelect = (time) => {
//         onChange({ target: { name: name, value: time } });
//         setIsOpen(false);
//     };

//     return (
//         <div className="relative">
//             <button
//             type='button'
//                 onClick={handleToggle}
//                 className="w-full text-sm border p-2 text-left bg-white border-gray-500 rounded app-font"
//             >
//                 {name === "startTime"
//                     ? (value ? value : "Select Pickup Time")
//                     : (name === "endTime"
//                         ? (value ? value : "Select Drop off Time")
//                         : "Select Time")}
//             </button>


//             {isOpen && (
//                 <ul className="absolute mt-1 z-10 w-full border border-gray-500 bg-white rounded max-h-48 overflow-y-auto">
//                     {times.map((timeObj, index) => (
//                         <li
//                             key={index}
//                             onClick={() => handleSelect(timeObj.time)}
//                             className="p-2 cursor-pointer hover:bg-gray-100 app-font text-sm"
//                         >
//                             {timeObj.time}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// function generateTimeArray() {
//     const times = [];
//     let startTime = 8 * 60; // 8:00 AM in minutes
//     const endTime = 23 * 60; // 11:00 PM in minutes

//     while (startTime <= endTime) {
//         const hours = Math.floor(startTime / 60);
//         const minutes = startTime % 60;
//         const period = hours >= 12 ? 'PM' : 'AM';
//         const displayHours = hours % 12 === 0 ? 12 : hours % 12;
//         const timeString = `${displayHours}:${minutes === 0 ? '00' : minutes} ${period}`;

//         times.push({ time: timeString });
//         startTime += 30;
//     }

//     return times;
// }

// export default CustomTimeDropdown;

import { useState } from 'react';

const CustomTimeDropdown = ({ value, onChange, name, shop_OpeningTime, shop_ClosedTime }) => {
    const [isOpen, setIsOpen] = useState(false);
    const times = generateTimeArray(shop_OpeningTime, shop_ClosedTime);

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
                type="button"
                onClick={handleToggle}
                className="w-full text-sm border p-2 text-left bg-white border-gray-500 rounded app-font"
            >
                {name === "startTime"
                    ? value || "Select Pickup Time"
                    : name === "endTime"
                    ? value || "Select Drop off Time"
                    : "Select Time"}
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

function generateTimeArray(shop_OpeningTime, shop_ClosedTime) {
    if (!shop_OpeningTime || !shop_ClosedTime) {
        console.error("Invalid opening or closing time:", shop_OpeningTime, shop_ClosedTime);
        return [];
    }

    const times = [];
    const startTime = parseTimeToMinutes(shop_OpeningTime);
    const endTime = parseTimeToMinutes(shop_ClosedTime);

    let currentTime = startTime;

    while (currentTime <= endTime) {
        const hours = Math.floor(currentTime / 60);
        const minutes = currentTime % 60;
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 === 0 ? 12 : hours % 12;
        const timeString = `${displayHours}:${minutes === 0 ? '00' : minutes} ${period}`;

        times.push({ time: timeString });
        currentTime += 30; // Increment by 30 minutes
    }

    return times;
}

function parseTimeToMinutes(timeString) {
    if (!timeString || typeof timeString !== "string") {
        console.error("Invalid timeString passed to parseTimeToMinutes:", timeString);
        return 0;
    }
    const [time, period] = timeString.split(' ');
    if (!time || !period) {
        console.error("Time or period is missing in timeString:", timeString);
        return 0;
    }
    const [hours, minutes] = time.split(':').map(Number);

    let totalMinutes = hours * 60 + (minutes || 0);
    if (period === 'PM' && hours !== 12) {
        totalMinutes += 12 * 60; // Convert PM hours to 24-hour format
    }
    if (period === 'AM' && hours === 12) {
        totalMinutes -= 12 * 60; // Adjust for midnight
    }

    return totalMinutes;
}



export default CustomTimeDropdown;
