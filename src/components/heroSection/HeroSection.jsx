import { Button } from "@material-tailwind/react";
import { AiOutlineSearch, AiOutlineEnvironment } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";

const SearchSection = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-100 h-[23em] lg:h-[25em] md:h-[30em] sm:h-[30em] lg:mb-20 mb-32">
      {/* Bikes Image Section */}
      <div className="w-full max-w-2xl mt-8 p-3 lg:p-0">
        <img
          src="./banner.png"
          alt="Bikes"
          className="w-full object-contain"
        />
      </div>

      {/* Search Bar Section */}
      <div className="px-4 lg:px-0">
        <div className="bg-white shadow-md rounded-md p-4 mt-4 w-full max-w-4xl">
          <h2 className="text-center text-xl font-semibold mb-4">
            Search The Bike/Scooty/Car!
          </h2>
          <div className="flex flex-wrap justify-between items-center lg:space-x-4">
            {/* Select City */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0">
              <AiOutlineEnvironment className="mr-2 text-gray-500" size={20} />
              <select className="w-full bg-transparent focus:outline-none">
                <option>Select City</option>
                <option>City 1</option>
                <option>City 2</option>
                <option>City 3</option>
              </select>
            </div>

            {/* Select Date */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0">
              <FaRegCalendarAlt className="mr-2 text-gray-500" size={20} />
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            {/* Select Booking Time */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0">
              <FaRegCalendarAlt className="mr-2 text-gray-500" size={20} />
              <input
                type="time"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            {/* Search Button */}
            <div className=" hidden lg:block">
              <Button variant="" className="bg-green-500 text-white px-4 py-2.5 rounded-md hover:bg-green-600 flex items-center justify-center">
                <AiOutlineSearch size={20} />
              </Button>
            </div>

            <div className=" lg:hidden block w-full">
              <Button variant="" className="bg-green-500 text-white px-4 py-2.5 rounded-md hover:bg-green-600 w-full">
                {/* <AiOutlineSearch size={20} /> */}
                <p>Search</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;



// import React from "react";
// import { AiOutlineSearch, AiOutlineEnvironment } from "react-icons/ai";
// import { FaRegCalendarAlt } from "react-icons/fa";

// const SearchSection = () => {
//   return (
//     <div className="w-full flex flex-col items-center bg-gray-100 h-[25em]">
//       {/* Bikes Image Section */}
//       <div className="w-full max-w-2xl mt-8">
//         <img
//           src="./banner.png"
//           alt="Bikes"
//           className="w-full object-contain"
//         />
//       </div>

//       {/* Search Bar Section */}
//       <div className="bg-white shadow-md rounded-md p-4 mt-4 w-full max-w-4xl">
//         <h2 className="text-center text-xl font-semibold mb-4">
//           Search The Bike/Scooty/Car!
//         </h2>
//         <div className="flex flex-wrap justify-between items-center lg:space-x-4">
//           {/* Select City */}
//           <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[12em] mb-2 lg:mb-0">
//             <AiOutlineEnvironment className="mr-2 text-gray-500" size={20} />
//             <select className="w-full bg-transparent focus:outline-none">
//               <option>Select City</option>
//               <option>City 1</option>
//               <option>City 2</option>
//               <option>City 3</option>
//             </select>
//           </div>

//           {/* Select Date */}
//           <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full  lg:w-[12em] mb-2 lg:mb-0">
//             <FaRegCalendarAlt className="mr-2 text-gray-500" size={20} />
//             <input
//               type="date"
//               className="w-full bg-transparent focus:outline-none"
//             />
//           </div>

//           {/* Select Booking Time */}
//           <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full  lg:w-[12em] mb-2 lg:mb-0">
//             <FaRegCalendarAlt className="mr-2 text-gray-500" size={20} />
//             <input
//               type="time"
//               className="w-full bg-transparent focus:outline-none"
//             />
//           </div>

//           {/* Search Button */}
//           <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center justify-center w-full lg:w-[12em]">
//             <AiOutlineSearch size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchSection;
