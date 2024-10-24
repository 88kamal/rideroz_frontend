// import React, { useState } from 'react';

// const TopAlert = ({ message, type = 'success', duration = 5000 }) => {
//   const [showAlert, setShowAlert] = useState(false);

//   const toggleAlert = () => {
//     setShowAlert(!showAlert);

//     // Automatically hide the alert after a certain duration (in milliseconds)
//     if (!showAlert) {
//       setTimeout(() => {
//         setShowAlert(false);
//       }, duration);
//     }
//   };

//   // Set alert color based on type
//   const alertColors = {
//     success: 'bg-green-500',
//     error: 'bg-red-500',
//     warning: 'bg-yellow-500',
//     info: 'bg-blue-500',
//   };

//   return (
//     <div>
//       {/* Button to trigger the alert */}
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={toggleAlert}
//       >
//         Toggle Alert
//       </button>

//       {/* Alert message */}
//       <div
//         className={`fixed top-0 left-0 right-0 ${alertColors[type]} text-white text-center py-3 transition-transform duration-500 ease-in-out z-50 ${
//           showAlert ? 'translate-y-0' : '-translate-y-full'
//         }`}
//       >
//         {message}
//         <button
//           className="ml-4 text-sm underline"
//           onClick={toggleAlert}
//         >
//           Dismiss
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopAlert;

import { useContext } from 'react';
import myContext from '../../context/myContext';

const TopAlert = () => {
  const { alert } = useContext(myContext);

  const alertColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 ${alertColors[alert.type]} text-white text-center py-3 transition-transform duration-500 ease-in-out app-font ${
        alert.show ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        zIndex : 100000
      }}
    >
      {alert.message}
    </div>
  );
};

export default TopAlert;
