// import { useEffect, useState } from "react";
// import {
//     Input,
//     Typography,
//     Button,
//     Spinner,
// } from "@material-tailwind/react";
// import { ArrowPathIcon, MagnifyingGlassIcon, TableCellsIcon, ListBulletIcon } from "@heroicons/react/24/outline";
// import ViewCityImageModal from "./modal/ViewCityImageModal";
// import DeleteCityModal from "./modal/DeleteCityModal";
// import EditCityModal from "./modal/EditCityModal";
// import { useGetCitiesForAdminQuery } from "../../../redux/slices/cityApiSlice";

// const TABLE_HEAD = ["S.No", "City Name", "City State", "City Image", "Edit", "Delete"];

// export default function ViewCity() {
//     const [search, setSearch] = useState('');
//     const [page, setPage] = useState(1);
//     const [limit, setLimit] = useState(10);
//     const [viewMode, setViewMode] = useState(() => {
//         // Initialize from localStorage or default to 'table'
//         return localStorage.getItem("viewMode") || "table";
//       }); // 'table' or 'list'

//     const { data: cities, error, isLoading, refetch } = useGetCitiesForAdminQuery({ search, page, limit });

//     const handlePrevious = () => {
//         if (page > 1) setPage(page - 1);
//     };

//     const handleNext = () => {
//         const totalPages = Math.ceil((cities?.totalCities ?? 0) / limit);
//         if (page < totalPages) setPage(page + 1);
//     };

    
//     // Function to toggle view type
//   const toggleViewMode = () => {
//     const newViewType = viewMode === "table" ? "list" : "table";
//     setViewMode(newViewType);
//     localStorage.setItem("viewType", newViewType); // Save to localStorage
//   };

//   useEffect(() => {
//     // Sync state with localStorage in case of external changes (optional safeguard)
//     const storedViewType = localStorage.getItem("viewType");
//     if (storedViewType && storedViewType !== viewMode) {
//       setViewMode(storedViewType);
//     }
//   }, []);

//     return (
//         <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
//             <div className="rounded-none  border-b border-green-300 px-2 py-1">
//                 <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
//                     <div>
//                         <Typography variant="h5" color="blue-gray">
//                             All City
//                         </Typography>
//                         <Typography color="gray" className="mt-1 font-normal">
//                             See information about all cities
//                         </Typography>
//                     </div>

//                     <div className="flex flex-wrap items-center gap-2">
//                         <div className="w-full md:w-72">
//                             <Input
//                                 label="Search"
//                                 value={search}
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 color="green"
//                                 icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//                             />
//                         </div>
//                         <Button
//                             variant=""
//                             color="green"
//                             size="sm"
//                             className="flex hover:shadow-none shadow-none items-center gap-2 border-green-200 bg-transparent border text-black"
//                             onClick={refetch}
//                         >
//                             <ArrowPathIcon className="h-5 w-5" />
//                             <p className="">Refresh</p>
//                         </Button>
//                         <Button
//                             variant=""
//                             size="sm"
//                             className="flex items-center gap-2 border hover:shadow-none shadow-none text-black  bg-white border-green-200"
//                             onClick={toggleViewMode}
//                         >
//                             {viewMode === "table" ? (
//                                 <ListBulletIcon className="h-5 w-5" />
//                             ) : (
//                                 <TableCellsIcon className="h-5 w-5" />
//                             )}
//                             <span>{viewMode === "table" ? "List View" : "Table View"}</span>
//                         </Button>
//                     </div>
//                 </div>
//             </div>

//             <div className="overflow-scroll p-2">
//                 {isLoading ? (
//                     <div className="flex justify-center p-4">
//                         <Spinner className="h-8 w-8 text-green-500" />
//                     </div>
//                 ) : error ? (
//                     <div className="p-4">
//                         <div className="flex justify-center items-center">
//                             <img
//                                 className="w-20"
//                                 src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png"
//                                 alt="Error"
//                             />
//                         </div>
//                         <h1 className="text-center" color="red">{error?.data?.error}</h1>
//                     </div>
//                 ) : (
//                     <>
//                         {viewMode === "table" ? (
//                             <table className="w-full min-w-max table-auto text-left">
//                                 <thead>
//                                     <tr>
//                                         {TABLE_HEAD.map((head) => (
//                                             <th
//                                                 key={head}
//                                                 className="border-y border-l border-r border-green-200 bg-green-50 p-4"
//                                             >
//                                                 <Typography
//                                                     variant="small"
//                                                     color="blue-gray"
//                                                     className="font-bold leading-none text-green-700"
//                                                 >
//                                                     {head}
//                                                 </Typography>
//                                             </th>
//                                         ))}
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {cities?.cities?.map(({ _id, cityImage, cityName, cityState }, index) => {
//                                         const isLast = index === cities?.cities?.length - 1;
//                                         const classes = isLast
//                                             ? "px-5 border-l border-r border-b border-green-300"
//                                             : "px-5 border-l border-r border-b border-green-300";

//                                         return (
//                                             <tr key={index} className="hover:bg-green-50/50 cursor-pointer">
//                                                 <td className={classes}>{index + 1 + (page - 1) * limit}.</td>
//                                                 <td className={classes}>{cityName}</td>
//                                                 <td className={classes}>{cityState}</td>
//                                                 <td className={classes}>
//                                                     <ViewCityImageModal cityImage={cityImage} />
//                                                 </td>
//                                                 <td className={classes}>
//                                                     <EditCityModal id={_id} cityName={cityName} cityState={cityState} cityImage={cityImage} />
//                                                 </td>
//                                                 <td className={classes}>
//                                                     <DeleteCityModal id={_id} />
//                                                 </td>
//                                             </tr>
//                                         );
//                                     })}
//                                 </tbody>
//                             </table>
//                         ) : (
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                                 {cities?.cities?.map(({ _id, cityImage, cityName, cityState, }, index) => (
//                                     <div key={index} className=" bg-white rounded-md border border-green-200">
//                                         <div className=" p-2 flex justify-between">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="">
//                                                     <img src={cityImage?.url} alt="" className="w-10 h-10 rounded-md" />
//                                                 </div>
//                                                 <div className="">
//                                                     <h1 className=" app-font">
//                                                         {cityName}
//                                                     </h1>
//                                                     <h2 className=" app-font">
//                                                         {cityState}
//                                                     </h2>
//                                                 </div>
//                                             </div>
//                                             <div className="mt-2 flex gap-2">
//                                                 <ViewCityImageModal cityImage={cityImage} />
//                                                 <EditCityModal id={_id} cityName={cityName} cityState={cityState} cityImage={cityImage} />
//                                                 <DeleteCityModal id={_id} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </>
//                 )}
//             </div>

//             <div className="flex items-center justify-between border-t border-green-300 p-4">
//                 <Typography variant="small" color="blue-gray" className="font-normal">
//                     Page {page} of {Math.ceil((cities?.totalCities ?? 0) / limit)}
//                 </Typography>
//                 <div className="flex gap-2">
//                     <Button
//                         variant=""
//                         size="sm"
//                         className="hover:bg-green-50 hover:shadow-none shadow-none bg-transparent border text-black border-green-200"
//                         onClick={handlePrevious}
//                         disabled={page === 1}
//                     >
//                         Previous
//                     </Button>
//                     <Button
//                         variant=""
//                         size="sm"
//                         className="bg-green-500 text-white hover:shadow-none shadow-none"
//                         onClick={handleNext}
//                         disabled={page === Math.ceil((cities?.totalCities ?? 0) / limit)}
//                     >
//                         Next
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }



import { useEffect, useState } from "react";
import {
    Input,
    Typography,
    Button,
    Spinner,
} from "@material-tailwind/react";
import { 
    ArrowPathIcon, 
    MagnifyingGlassIcon, 
    TableCellsIcon, 
    ListBulletIcon, 
    ArrowsPointingOutIcon, 
    ArrowsPointingInIcon 
} from "@heroicons/react/24/outline";
import ViewCityImageModal from "./modal/ViewCityImageModal";
import DeleteCityModal from "./modal/DeleteCityModal";
import EditCityModal from "./modal/EditCityModal";
import { useGetCitiesForAdminQuery } from "../../../redux/slices/cityApiSlice";

const TABLE_HEAD = ["S.No", "City Name", "City State", "City Image", "Edit", "Delete"];

export default function ViewCity() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [viewMode, setViewMode] = useState(() => localStorage.getItem("viewMode") || "table"); 
    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status

    const { data: cities, error, isLoading, refetch } = useGetCitiesForAdminQuery({ search, page, limit });

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        const totalPages = Math.ceil((cities?.totalCities ?? 0) / limit);
        if (page < totalPages) setPage(page + 1);
    };

    const toggleViewMode = () => {
        const newViewType = viewMode === "table" ? "list" : "table";
        setViewMode(newViewType);
        localStorage.setItem("viewMode", newViewType);
    };

    useEffect(() => {
        const storedViewType = localStorage.getItem("viewMode");
        if (storedViewType && storedViewType !== viewMode) {
            setViewMode(storedViewType);
        }
    }, [viewMode]);

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullscreen(!isFullscreen);
    };

    return (
        <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
            <div className="rounded-none  border-b border-green-300 px-2 py-1">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All City
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all cities
                        </Typography>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                color="green"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                style={{ fontSize: '16px' }} // Add this to prevent zooming

                            />
                        </div>
                        <Button
                            variant=""
                            color="green"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-green-200 bg-transparent border text-black"
                            onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            <p>Refresh</p>
                        </Button>
                        <Button
                            variant=""
                            size="sm"
                            className="flex items-center gap-2 border hover:shadow-none shadow-none text-black bg-white border-green-200"
                            onClick={toggleViewMode}
                        >
                            {viewMode === "table" ? (
                                <ListBulletIcon className="h-5 w-5" />
                            ) : (
                                <TableCellsIcon className="h-5 w-5" />
                            )}
                            <span>{viewMode === "table" ? "List View" : "Table View"}</span>
                        </Button>
                        <Button
                            variant=""
                            size="sm"
                            className="flex items-center gap-2 border hover:shadow-none shadow-none text-black bg-white border-green-200"
                            onClick={toggleFullscreen}
                        >
                            {isFullscreen ? (
                                <ArrowsPointingInIcon className="h-5 w-5" />
                            ) : (
                                <ArrowsPointingOutIcon className="h-5 w-5" />
                            )}
                            <span className=" hidden lg:block sm:block md:block">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="overflow-scroll p-2">
                {isLoading ? (
                    <div className="flex justify-center p-4">
                        <Spinner className="h-8 w-8 text-green-500" />
                    </div>
                ) : error ? (
                    <div className="p-4">
                        <div className="flex justify-center items-center">
                            <img
                                className="w-20"
                                src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png"
                                alt="Error"
                            />
                        </div>
                        <h1 className="text-center" color="red">{error?.data?.error}</h1>
                    </div>
                ) : (
                    <>
                        {/* Render Table or List */}
                        {viewMode === "table" ? (
                            <table className="w-full min-w-max table-auto text-left text-black">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th
                                                key={head}
                                                className="border-y border-l border-r border-green-200 bg-green-50 p-4"
                                            >
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold leading-none text-green-700"
                                                >
                                                    {head}
                                                </Typography>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {cities?.cities?.map(({ _id, cityImage, cityName, cityState }, index) => {
                                        const isLast = index === cities?.cities?.length - 1;
                                        const classes = isLast
                                            ? "px-5 border-l border-r border-b border-green-300"
                                            : "px-5 border-l border-r border-b border-green-300";

                                        return (
                                            <tr key={index} className="hover:bg-green-50/50 cursor-pointer">
                                                <td className={classes}>{index + 1 + (page - 1) * limit}.</td>
                                                <td className={classes}>{cityName}</td>
                                                <td className={classes}>{cityState}</td>
                                                <td className={classes}>
                                                    <ViewCityImageModal cityImage={cityImage} />
                                                </td>
                                                <td className={classes}>
                                                    <EditCityModal id={_id} cityName={cityName} cityState={cityState} cityImage={cityImage} />
                                                </td>
                                                <td className={classes}>
                                                    <DeleteCityModal id={_id} />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {cities?.cities?.map(({ _id, cityImage, cityName, cityState }, index) => (
                                    <div key={index} className="bg-white text-black rounded-md border border-green-200">
                                        <div className="p-2 flex justify-between">
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <img src={cityImage?.url} alt="" className="w-10 h-10 rounded-md" />
                                                </div>
                                                <div>
                                                    <h1 className="app-font">{cityName}</h1>
                                                    <h2 className="app-font">{cityState}</h2>
                                                </div>
                                            </div>
                                            <div className="mt-2 flex gap-2">
                                                <ViewCityImageModal cityImage={cityImage} />
                                                <EditCityModal id={_id} cityName={cityName} cityState={cityState} cityImage={cityImage} />
                                                <DeleteCityModal id={_id} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-green-300 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {page} of {Math.ceil((cities?.totalCities ?? 0) / limit)}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant=""
                        size="sm"
                        className="hover:bg-green-50 hover:shadow-none shadow-none bg-transparent border text-black border-green-200"
                        onClick={handlePrevious}
                        disabled={page === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        variant=""
                        size="sm"
                        className="bg-green-500 text-white hover:shadow-none shadow-none"
                        onClick={handleNext}
                        disabled={page === Math.ceil((cities?.totalCities ?? 0) / limit)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
