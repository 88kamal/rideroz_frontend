// import { Button } from "@material-tailwind/react";
// import SelectCityOrLocationModal from "../modal/selectCityOrLocation/SelectCityOrLocationModal";
// import Swal from 'sweetalert2';
// import { useContext } from "react";
// import myContext from "../../context/myContext";

// const SearchSection = () => {
//   const { currentLocationName } = useContext(myContext)
//   const handleSearch = () => {
//     Swal.fire({
//       title: 'Success!',
//       text: 'Bike, Scooty, and Car Searching',
//       icon: 'success',
//       confirmButtonText: 'OK'
//     });
//   }
//   return (
//     <div className="w-full flex flex-col items-center bg-gray-100 h-[23em] lg:h-[25em] md:h-[30em] sm:h-[30em] lg:mb-20 mb-32">
//       {/* Bikes Image Section */}
//       <div className="w-full max-w-2xl mt-8 p-3 lg:p-0">
//         <img
//           src="./banner.png"
//           alt="Bikes"
//           className="w-full object-contain"
//         />
//       </div>

//       {/* Search Bar Section */}
//       <div className="px-4 lg:px-0">
//         <div className="bg-white drop-shadow rounded-md p-4 mt-4 w-full max-w-4xl">
//           <h2 className="text-center text-xl font-semibold mb-4">
//             Search The Bike/Scooty/Car!
//           </h2>

//           <div className="flex flex-wrap justify-between items-center lg:space-x-4">
//             <SelectCityOrLocationModal />

//             {/* Select Date */}
//             <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0">
//               <input
//                 readOnly
//                 type="text"
//                 className="w-full bg-transparent focus:outline-none"
//                 placeholder="Your Current Location"
//                 value={currentLocationName}
//               />
//             </div>

//             {/* Search Button */}
//             <div className=" hidden lg:block ">
//               <Button variant="" onClick={() => handleSearch()} className="bg-green-500 text-white py-3 rounded-md hover:bg-green-600 flex items-center justify-center w-40 hover:shadow-none shadow-none">
//                 {/* <AiOutlineSearch size={20} /> */}
//                 Search Vehicle
//               </Button>
//             </div>

//             <div className=" lg:hidden block w-full">
//               <Button variant="" onClick={() => handleSearch()} className="bg-green-500 text-white px-4 py-2.5 rounded-md hover:bg-green-600 w-full">
//                 Search Vehicle
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchSection;


import { Button } from "@material-tailwind/react";
import SelectCityOrLocationModal from "../modal/selectCityOrLocation/SelectCityOrLocationModal";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";

const SearchSection = () => {
  const { currentLocationName } = useContext(myContext);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleSearch = () => {
    Swal.fire({
      title: "Success!",
      text: "Bike, Scooty, and Car Searching",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 h-[23em] lg:h-[25em] md:h-[30em] sm:h-[30em] lg:mb-20 mb-28">
      {/* Bikes Image Section */}
      <div className="w-full max-w-2xl mt-8 p-3 lg:p-0 relative">
        {/* Placeholder */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"></div>
        )}
        <img
          src="./banner.png"
          alt="Bikes"
          className={`w-full object-contain transition-all duration-500 ease-in-out ${
            isImageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>

      {/* Search Bar Section */}
      <div className="px-4 lg:px-0">
        <div className="bg-white drop-shadow rounded-md p-4 mt-4 w-full max-w-4xl">
          <h2 className="text-center text-xl font-semibold mb-4">
            Search The Bike/Scooty/Car!
          </h2>

          <div className="flex flex-wrap justify-between items-center lg:space-x-4">
            <SelectCityOrLocationModal />

            {/* Select Date */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full lg:w-[15.5em] mb-2 lg:mb-0">
              <input
                readOnly
                type="text"
                className="w-full bg-transparent focus:outline-none app-font"
                placeholder="Your Current Location"
                value={currentLocationName}
              />
            </div>

            {/* Search Button */}
            <div className="hidden lg:block">
              <Button
                variant=""
                onClick={() => handleSearch()}
                className="bg-green-500 text-white py-3 rounded-md hover:bg-green-600 flex items-center justify-center w-40 hover:shadow-none shadow-none app-font"
              >
                Search Vehicle
              </Button>
            </div>

            <div className="lg:hidden block w-full">
              <Button
                variant=""
                onClick={() => handleSearch()}
                className="bg-green-500 text-white px-4 py-2.5 rounded-md hover:bg-green-600 w-full"
              >
                Search Vehicle
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
