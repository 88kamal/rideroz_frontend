// import { useContext, useState } from 'react';
// import myContext from '../../context/myContext';

// const VehicleTypeDropdown = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedType, setSelectedType] = useState('All');
//     const {vehicleType, setVehicleType,} = useContext(myContext);

//     const vehicleTypes = ['','bike', 'scooty', 'car']; // List of vehicle types

//     const handleSelectType = (type) => {
//         setSelectedType(type);
//         setIsOpen(false); // Close the dropdown after selecting
//     };

//     return (
//         <div className="relative">
//             {/* Dropdown Trigger */}
//             <div 
//                 className="border px-8 py-2 rounded-lg shadow-sm cursor-pointer"
//                 onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
//             >
//                 <h1 className="text-gray-700 font-semibold">
//                     Vehicle Type: <span className="text-green-600">{selectedType}</span>
//                 </h1>
//             </div>

//             {/* Dropdown Menu */}
//             {isOpen && (
//                 <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
//                     <ul className="py-2">
//                         {vehicleTypes.map((type, index) => (
//                             <li
//                                 key={index}
//                                 className={`px-4 py-2 hover:bg-green-100 cursor-pointer ${selectedType === type ? 'bg-green-100 font-bold' : ''}`}
//                                 onClick={() => {
//                                     handleSelectType(type)
//                                     setVehicleType(type)
//                                 }}
//                             >
//                                 {type}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default VehicleTypeDropdown;


import { useContext, useState } from 'react';
import myContext from '../../context/myContext';

const VehicleTypeDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedType, setSelectedType] = useState('All');
    const { setVehicleType } = useContext(myContext);

    // Updated vehicle types array with label and value
    const vehicleTypes = [
        { label: 'All', value: '' },
        { label: 'Bike', value: 'bike' },
        { label: 'Scooty', value: 'scooty' },
        { label: 'Car', value: 'car' }
    ];

    const handleSelectType = (type) => {
        setSelectedType(type.label);
        setVehicleType(type.value); // Set the vehicle type in context
        setIsOpen(false); // Close the dropdown after selecting
    };

    return (
        <div className="relative">
            {/* Dropdown Trigger */}
            <div
                className="border px-2 py-2 rounded-md cursor-pointer w-full border-gray-300 "
                onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
            >
                <h1 className="text-black app-font ">
                    Vehicle Type : <span className="text-green-600">{selectedType}</span>
                </h1>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute mt-2 w-full lg:w-[15.5em] bg-white border border-gray-300 rounded-lg 
                drop-shadow z-10">
                    <ul className="py-2">
                        {vehicleTypes.map((type, index) => (
                            <li
                                key={index}
                                className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${selectedType === type.label ? 'bg-gray-100 font-bold' : ''}`}
                                onClick={() => handleSelectType(type)}
                            >
                                {type.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default VehicleTypeDropdown;
