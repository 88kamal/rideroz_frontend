
// /* eslint-disable no-unused-vars */
// import { ArrowPathIcon } from "@heroicons/react/24/outline";
// import {
//     CardHeader,
//     Typography,
//     Button,
//     Spinner,
// } from "@material-tailwind/react";
// import { useState } from "react";
// import { useGetDepartmentsQuery } from "../../../redux/slices/departmentApiSlice";
// import EditDepartmentModal from "./modal/department/EditDepartmentModal";
// import DeleteDepartmentModal from "./modal/department/DeleteDepartmentModal";

// const TABLE_HEAD = ["S.No", "Department Name", "Edit", "Delete"];

// export default function ViewCity() {
//     const [search, setSearch] = useState('');

//     const { data: departments, error, isLoading, refetch } = useGetDepartmentsQuery();

//     return (
//         <div className=" h-full w-full overflow-scroll  border border-green-300 bg-white pt-1 rounded-md">
//             {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
//             <CardHeader floated={false} shadow={false} className="rounded-none">
//                 <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
//                     <div>
//                         <Typography variant="h5" color="blue-gray">
//                             All Depatment
//                         </Typography>
//                         <Typography color="gray" className="mt-1 font-normal">
//                             See information about all departments
//                         </Typography>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         {/* <div className=" w-64 md:w-72">
//                             <Input
//                                 label="Search"
//                                 value={search}
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 color="green"
//                                 icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//                             />
//                         </div> */}
//                         <Button
//                             variant=""
//                             color="green"
//                             size="sm"
//                             className="flex hover:shadow-none shadow-none items-center gap-2 border-green-300 bg-transparent border text-black"
//                             onClick={refetch}
//                         >
//                             <ArrowPathIcon className="h-5 w-5" />
//                             <p className=" hidden lg:block md:block sm:block">Refresh</p>
//                         </Button>
//                     </div>
//                 </div>

//             </CardHeader>

//             <div className="overflow-y-auto p-2">
//                 {isLoading ? (
//                     <div className="flex justify-center p-4">
//                         <Spinner className="h-8 w-8 text-green-500" />
//                     </div>
//                 ) : error ? (
//                     <div className="p-4">
//                         <div className=" flex justify-center items-center">
//                             <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
//                         </div>
//                         <h1 className=" text-center" color="red">{error?.data?.error}</h1>
//                     </div>
//                 )
//                     : departments?.length === 0 ? (
//                         <div className="p-4">
//                             <div className=" flex justify-center items-center">
//                                 <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
//                             </div>
//                             <h1 className=" text-center app-font" color="red">Department Not Found</h1>
//                         </div>)
//                         :

//                         (
//                             <table className=" w-full min-w-max table-auto text-left ">
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
//                                                     className="font-bold leading-none text-green-700 "
//                                                 >
//                                                     {head}
//                                                 </Typography>
//                                             </th>
//                                         ))}
//                                     </tr>
//                                 </thead>
//                                 <tbody >
//                                     {departments?.map(
//                                         ({ _id, departmentName }, index) => {
//                                             const isLast = index === departments?.length - 1;
//                                             const classes = isLast
//                                                 ? "px-5   border-l  border-r border-b border-green-300"
//                                                 : "px-5  border-l  border-r border-b border-green-300";

//                                             return (
//                                                 <tr key={index} className=" hover:bg-green-50/50 cursor-pointer">
//                                                     <td className={classes}>
//                                                         <Typography
//                                                             variant="small"
//                                                             color="blue-gray"
//                                                             className="font-normal app-font"
//                                                         >
//                                                             {index + 1}.
//                                                         </Typography>
//                                                     </td>

//                                                     <td className={classes}>
//                                                         <Typography
//                                                             variant="small"
//                                                             color="blue-gray"
//                                                             className="font-normal app-font capitalize"
//                                                         >
//                                                             {departmentName}
//                                                         </Typography>
//                                                     </td>

//                                                     <td className={classes}>
//                                                         <EditDepartmentModal
//                                                             id={_id}
//                                                             departmentName={departmentName} />
//                                                     </td>

//                                                     <td className={classes}>
//                                                         <DeleteDepartmentModal id={_id} />
//                                                     </td>


//                                                 </tr>
//                                             );
//                                         },
//                                     )}
//                                 </tbody>
//                             </table>
//                         )

//                 }

//             </div>
//         </div>
//     );
// }


/* eslint-disable no-unused-vars */
import { Squares2X2Icon, TableCellsIcon, ArrowPathIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { CardHeader, Typography, Button, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useGetDepartmentsQuery } from "../../../redux/slices/departmentApiSlice";
import EditDepartmentModal from "./modal/department/EditDepartmentModal";
import DeleteDepartmentModal from "./modal/department/DeleteDepartmentModal";

const TABLE_HEAD = ["S.No", "Department Name", "Edit", "Delete"];

export default function ViewDepartment() {
    const [viewType, setViewType] = useState(() => {
        // Initialize from localStorage or default to 'table'
        return localStorage.getItem("viewType") || "table";
    });
    const { data: departments, error, isLoading, refetch } = useGetDepartmentsQuery();

    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status


    // Function to toggle view type
    const toggleViewType = () => {
        const newViewType = viewType === "table" ? "list" : "table";
        setViewType(newViewType);
        localStorage.setItem("viewType", newViewType); // Save to localStorage
    };

    useEffect(() => {
        // Sync state with localStorage in case of external changes (optional safeguard)
        const storedViewType = localStorage.getItem("viewType");
        if (storedViewType && storedViewType !== viewType) {
            setViewType(storedViewType);
        }
    }, []);

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullscreen(!isFullscreen);
    };


    return (
        <div className="h-full w-full overflow-scroll border border-green-300 bg-white pt-1 rounded-md">
            <div className="rounded-none  border-b border-green-300 px-2 py-1">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Departments
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all departments
                        </Typography>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <Button
                            variant=""
                            color="green"
                            size="sm"
                            className="flex items-center hover:shadow-none shadow-none gap-2 border-green-300 bg-transparent border text-black"
                            onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            <p className="">Refresh</p>
                        </Button>

                        {/* Toggle Button */}
                        <Button
                            variant=""
                            color="green"
                            size="sm"
                            className="flex items-center gap-2 hover:shadow-none shadow-none border-green-300 bg-transparent border text-black"
                            onClick={toggleViewType}
                        >
                            {viewType === "table" ? (
                                <>
                                    <Squares2X2Icon className="h-5 w-5" />
                                    <p className="">List View</p>
                                </>
                            ) : (
                                <>
                                    <TableCellsIcon className="h-5 w-5" />
                                    <p className="">Table View</p>
                                </>
                            )}
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

            <div className="overflow-y-auto p-2">
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
                ) : departments?.length === 0 ? (
                    <div className="p-4">
                        <div className="flex justify-center items-center">
                            <img
                                className="w-20"
                                src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png"
                                alt="No Data"
                            />
                        </div>
                        <h1 className="text-center app-font" color="red">Department Not Found</h1>
                    </div>
                ) : (
                    viewType === "table" ? (
                        <table className="w-full min-w-max table-auto text-left">
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
                                {departments?.map(({ _id, departmentName }, index) => {
                                    const isLast = index === departments?.length - 1;
                                    const classes = isLast
                                        ? "px-5 border-l border-r border-b border-green-300"
                                        : "px-5 border-l border-r border-b border-green-300";

                                    return (
                                        <tr key={index} className="hover:bg-green-50/50 cursor-pointer">
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal app-font"
                                                >
                                                    {index + 1}.
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal app-font capitalize"
                                                >
                                                    {departmentName}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <EditDepartmentModal id={_id} departmentName={departmentName} />
                                            </td>
                                            <td className={classes}>
                                                <DeleteDepartmentModal id={_id} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            {departments?.map(({ _id, departmentName }, index) => (
                                <div
                                    key={_id}
                                    className="p-2 border border-green-300 rounded-md"
                                >
                                    <div className="flex items-center justify-between">
                                        <h1 className=" capitalize app-font">
                                            {departmentName}
                                        </h1>
                                        <div className="flex gap-2">
                                            <EditDepartmentModal id={_id} departmentName={departmentName} />
                                            <DeleteDepartmentModal id={_id} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
