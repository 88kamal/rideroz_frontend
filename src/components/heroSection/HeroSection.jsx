// import { Button } from "@material-tailwind/react";
// import { AiOutlineSearch } from "react-icons/ai";
// import SelectCityOrLocationModal from "../modal/selectCityOrLocation/SelectCityOrLocationModal";
// import { useState } from "react";
// import Swal from 'sweetalert2';

// const SearchSection = () => {
  // const [selectedCity, setSelectedCity] = useState('');

//   const handleSearch = () => {
//     Swal.fire({
//       title: 'Success!',
//       text: 'Bike, Scooty, and Car Searching',
//       icon: 'success',
//       confirmButtonText: 'OK'
//     });
//   }
//   return (
//     <div className="w-full flex flex-col items-center bg-gray-100 h-[23em] lg:h-[23em] md:h-[30em] sm:h-[30em] lg:mb-20 mb-32" style={{
//       backgroundImage: 'url("https://bike.rent/_next/image?url=%2Fimage.jpeg&w=3840&q=75")',
//       backgroundSize: 'cover', // Adjust as needed ('contain', 'cover', etc.)
//       backgroundPosition: 'center', // Adjust the position of the image
//       backgroundRepeat: 'no-repeat', // Prevent the background from repeating
//       backgroundColor: '#f0f0f0', // Optional: set a fallback background color
//       width: '100%', // Optional: set width
//       height: '40vh' // Optional: set height (adjust as needed)
//     }}>
//       {/* Bikes Image Section */}
//       {/* <div className="w-full max-w-2xl mt-8 p-3 lg:p-0">
//         <img
//           src="./banner.png"
//           alt="Bikes"
//           className="w-full object-contain"
//         />
//       </div> */}

//       {/* Search Bar Section */}
//       <div className="px-4 lg:px-0">
//         <div className=" border bg-[#ffffff75] drop-shadow rounded-md p-4 mt-[14em] w-full max-w-4xl">
//           {/* <h2 className="text-center text-xl font-semibold mb-4">
//             Search The Bike/Scooty/Car!
//           </h2> */}
//           <div className="flex justify-center items-center mb-3">
//             <img className="w-32 h-16" src="../../logo/rideroz.png" alt="" />
//           </div>

//           <div className="flex justify-evenly items-center mb-2 border border-green-200 rounded-md p-">
//             <h1 className=" app-font">Bike</h1>
//             <div className=" border-r h-5 border-green-200"></div>
//             <h2 className=" app-font">Scooty</h2>
//             <div className=" border-r h-5 border-green-200"></div>
//             <h2 className=" app-font">Car</h2>
//           </div>
//           <div className="flex flex-wrap justify-between items-center lg:space-x-4">
//             {/* Select City */}
//            <SelectCityOrLocationModal 
          //  selectedCity={selectedCity}
          //  setSelectedCity={setSelectedCity}/>

//             {/* Search Button */}
//             <div className=" hidden lg:block">
//               <Button variant="" onClick={()=> handleSearch()} className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 flex items-center justify-center hover:shadow-none shadow-none">
//                 {/* <AiOutlineSearch size={20} /> */}

//                 Search Vehicle

//               </Button>
//             </div>

//             <div className=" lg:hidden block w-full">
//               <Button variant="" onClick={()=> handleSearch()} className="bg-green-500 text-white px-4 py-2.5 rounded-md hover:bg-green-600 w-full">
//                 {/* <AiOutlineSearch size={20} /> */}
//                 <p>Search</p>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchSection;



// // import React from "react";
// // import { AiOutlineSearch, AiOutlineEnvironment } from "react-icons/ai";
// // import { FaRegCalendarAlt } from "react-icons/fa";

// // const SearchSection = () => {
// //   return (
// //     <div className="w-full flex flex-col items-center bg-gray-100 h-[25em]">
// //       {/* Bikes Image Section */}
// //       <div className="w-full max-w-2xl mt-8">
// //         <img
// //           src="./banner.png"
// //           alt="Bikes"
// //           className="w-full object-contain"
// //         />
// //       </div>

// //       {/* Search Bar Section */}
// //       <div className="bg-white shadow-md rounded-md p-4 mt-4 w-full max-w-4xl">
// //         <h2 className="text-center text-xl font-semibold mb-4">
// //           Search The Bike/Scooty/Car!
// //         </h2>
// //         <div className="flex flex-wrap justify-between items-center lg:space-x-4">
// //           {/* Select City */}
// //           <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[12em] mb-2 lg:mb-0">
// //             <AiOutlineEnvironment className="mr-2 text-gray-500" size={20} />
// //             <select className="w-full bg-transparent focus:outline-none">
// //               <option>Select City</option>
// //               <option>City 1</option>
// //               <option>City 2</option>
// //               <option>City 3</option>
// //             </select>
// //           </div>

// //           {/* Select Date */}
// //           <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full  lg:w-[12em] mb-2 lg:mb-0">
// //             <FaRegCalendarAlt className="mr-2 text-gray-500" size={20} />
// //             <input
// //               type="date"
// //               className="w-full bg-transparent focus:outline-none"
// //             />
// //           </div>

// //           {/* Select Booking Time */}
// //           <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full  lg:w-[12em] mb-2 lg:mb-0">
// //             <FaRegCalendarAlt className="mr-2 text-gray-500" size={20} />
// //             <input
// //               type="time"
// //               className="w-full bg-transparent focus:outline-none"
// //             />
// //           </div>

// //           {/* Search Button */}
// //           <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center justify-center w-full lg:w-[12em]">
// //             <AiOutlineSearch size={20} />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SearchSection;


import { useState } from 'react'
import SelectCityOrLocationModal from '../modal/selectCityOrLocation/SelectCityOrLocationModal'

const HeroSection = () => {
  const [selectedCity, setSelectedCity] = useState('');
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16  lg:py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center lg:order-first">
            <h1 className=' text-black text-lg font-bold mb-2'>Affordable Rides, Unlimited Freedom!</h1>
            <h1 className=" sm:text-6xl text-3xl mb-4 font-bold text-gray-900">
              Explore Freely, Anytime, Anywhere
            </h1>
            <p className="mb-8 leading-relaxed">
              Rideroz brings you the most reliable, hassle-free, and affordable mobility solutions across India.
            </p>
            <div className="">
              {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
              {/* <div className="">
                <input
                  readOnly
                  type="text"
                  placeholder='Dehradun'
                  className=' border-green-300 border bg-white py-2 px-2 outline-none rounded-l-md' />
                <button className=' py-2 bg-green-400 text-white rounded-none px-5 lg:px-8 border border-green-600 rounded-r-md mx-1'>Serach Vehicle</button>
              </div> */}
              <SelectCityOrLocationModal
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}/>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-first">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="../../bike.png"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection