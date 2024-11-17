// /* eslint-disable no-unused-vars */
// import { ArrowPathIcon } from "@heroicons/react/24/outline";
// import {
//     CardHeader,
//     Typography,
//     Button,
//     Spinner,
// } from "@material-tailwind/react";
// import { useState } from "react";
// import { useGetRolesQuery } from "../../../redux/slices/roleApiSlice";
// import DeleteRoleModal from "./modal/role/DeleteRoleModal";
// import EditRoleModal from "./modal/role/EditRoleModal";

// const TABLE_HEAD = ["S.No", "Role Name", "Role Code", "Department Name", "Edit", "Delete"];

// export default function ViewCity() {
//     const [search, setSearch] = useState('');

//     const { data: roles, error, isLoading, refetch } = useGetRolesQuery();
//     return (
//         <div className="h-full w-full bg-white pt-1 border border-green-300 rounded-md">
//             {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
//             <CardHeader floated={false} shadow={false} className="rounded-none">
//                 <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
//                     <div>
//                         <Typography variant="h5" color="blue-gray">
//                             All Role
//                         </Typography>
//                         <Typography color="gray" className="mt-1 font-normal">
//                             See information about all role
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

//             <div className="overflow-scroll p-2">
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
//                     :

//                     roles?.length === 0 ? (
//                         <div className="p-4">
//                             <div className=" flex justify-center items-center">
//                                 <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
//                             </div>
//                             <h1 className=" text-center app-font" color="red">Role Not Found</h1>
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
//                                     {roles?.map(
//                                         ({ _id, roleName, roleCode, departmentName }, index) => {
//                                             const isLast = index === roles?.length - 1;
//                                             const classes = isLast
//                                                 ? "px-5  border-l  border-r border-b border-green-300"
//                                                 : "px-5 border-l  border-r border-b border-green-300";

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
//                                                             {roleName}
//                                                         </Typography>
//                                                     </td>

//                                                     <td className={classes}>
//                                                         <Typography
//                                                             variant="small"
//                                                             color="blue-gray"
//                                                             className="font-normal app-font capitalize"
//                                                         >
//                                                             {roleCode}
//                                                         </Typography>
//                                                     </td>

//                                                     <td className={classes}>
//                                                         <Typography
//                                                             variant="small"
//                                                             color="blue-gray"
//                                                             className="font-normal app-font capitalize"
//                                                         >
//                                                             {departmentName?.departmentName}
//                                                         </Typography>
//                                                     </td>

//                                                     <td className={classes}>
//                                                         <EditRoleModal
//                                                             id={_id}
//                                                             roleName={roleName}
//                                                             roleCode={roleCode}
//                                                             departmentName={departmentName}
//                                                         />
//                                                     </td>

//                                                     <td className={classes}>
//                                                         <DeleteRoleModal id={_id} />
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
import { ArrowPathIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, Squares2X2Icon, TableCellsIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Typography,
    Button,
    Spinner,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useGetRolesQuery } from "../../../redux/slices/roleApiSlice";
import DeleteRoleModal from "./modal/role/DeleteRoleModal";
import EditRoleModal from "./modal/role/EditRoleModal";

const TABLE_HEAD = ["S.No", "Role Name", "Role Code", "Department Name", "Edit", "Delete"];

export default function ViewCity() {
    const [search, setSearch] = useState('');
    const [viewType, setViewType] = useState(() => {
        // Initialize from localStorage or default to 'table'
        return localStorage.getItem("viewType") || "table";
    });

    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status


    const { data: roles, error, isLoading, refetch } = useGetRolesQuery();

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
        <div className="h-full w-full bg-white pt-1 border border-green-300 rounded-md">
            <div className="rounded-none  border-b border-green-300 px-2 py-1">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Role
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all roles
                        </Typography>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Button
                            variant=""
                            color="green"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-green-300 bg-transparent border text-black"
                            onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            <p>Refresh</p>
                        </Button>
                        <Button
                            variant=""
                            color="green"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-green-300 bg-transparent border text-black"
                            onClick={toggleViewType}
                        >
                            {viewType === "table" ? (
                                <>
                                    <Squares2X2Icon className="h-5 w-5" />
                                    <p>List View</p>
                                </>
                            ) : (
                                <>
                                    <TableCellsIcon className="h-5 w-5" />
                                    <p>Table View</p>
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

            <div className="overflow-scroll p-2">
                {isLoading ? (
                    <div className="flex justify-center p-4">
                        <Spinner className="h-8 w-8 text-green-500" />
                    </div>
                ) : error ? (
                    <div className="p-4">
                        <div className="flex justify-center items-center">
                            <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
                        </div>
                        <h1 className="text-center" color="red">{error?.data?.error}</h1>
                    </div>
                ) : roles?.length === 0 ? (
                    <div className="p-4">
                        <div className="flex justify-center items-center">
                            <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
                        </div>
                        <h1 className="text-center app-font" color="red">Role Not Found</h1>
                    </div>
                ) : viewType === "table" ? (
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
                            {roles?.map(
                                ({ _id, roleName, roleCode, departmentName }, index) => {
                                    const isLast = index === roles?.length - 1;
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
                                                    {roleName}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal app-font capitalize"
                                                >
                                                    {roleCode}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal app-font capitalize"
                                                >
                                                    {departmentName?.departmentName}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <EditRoleModal
                                                    id={_id}
                                                    roleName={roleName}
                                                    roleCode={roleCode}
                                                    departmentName={departmentName}
                                                />
                                            </td>
                                            <td className={classes}>
                                                <DeleteRoleModal id={_id} />
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
                        {roles?.map(({ _id, roleName, roleCode, departmentName }, index) => (
                            <div
                                key={index}
                                className="p-2 border border-green-300 rounded-lg "
                            >
                                <div className="">
                                    <h1 className="mb-2 app-font capitalize text-green-800">
                                        {roleName}
                                    </h1>
                                    <div className="flex items-center justify-between">
                                        <div className="">
                                            <p className="text-sm mb-1 text-black">
                                                <b>Role Code:</b> {roleCode}
                                            </p>
                                            <p className="text-sm mb-1 text-black capitalize ">
                                                <b>Department:</b> {departmentName?.departmentName}
                                            </p>
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <EditRoleModal
                                                id={_id}
                                                roleName={roleName}
                                                roleCode={roleCode}
                                                departmentName={departmentName}
                                            />
                                            <DeleteRoleModal id={_id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
