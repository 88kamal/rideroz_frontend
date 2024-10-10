// import React from 'react';
// import { useGetRolesQuery } from '../../../redux/slices/roleApiSlice';

// const ViewRole = () => {
//   // Fetch roles
//   const { data: roles, error, isLoading } = useGetRolesQuery();



//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading roles</div>;

//   return (
//     <div>
//       <h1>Roles</h1>

//       <pre>{JSON.stringify(roles,null,2)}</pre>
//       <ul>
//         {roles?.map((role) => (
//           <li key={role._id}>{role?.departmentName?.departmentName}</li>
//         ))}
//       </ul>


//     </div>
//   );
// };

// export default ViewRole;


/* eslint-disable no-unused-vars */
import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Input,
    Typography,
    Button,
    Spinner,
    IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { useGetRolesQuery } from "../../../redux/slices/roleApiSlice";
import { Trash } from "lucide-react";

const TABLE_HEAD = ["S.No", "Role Name", "Role Code", "Department Name", "Delete"];

export default function ViewCity() {
    const [search, setSearch] = useState('');

    const { data: roles, error, isLoading, refetch } = useGetRolesQuery();
    return (
        <div className="h-full w-full bg-white pt-1 border border-green-300 rounded-md">
            {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Role
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all role
                        </Typography>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* <div className=" w-64 md:w-72">
                            <Input
                                label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                color="green"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div> */}
                        <Button
                            variant=""
                            color="green"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-green-300 bg-transparent border text-black"
                        onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            <p className=" hidden lg:block md:block sm:block">Refresh</p>
                        </Button>
                    </div>
                </div>

            </CardHeader>

            <div className="overflow-scroll p-2">
                {isLoading ? (
                    <div className="flex justify-center p-4">
                        <Spinner className="h-8 w-8 text-green-500" />
                    </div>
                ) : error ? (
                    <div className="p-4">
                        <div className=" flex justify-center items-center">
                            <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
                        </div>
                        <h1 className=" text-center" color="red">{error?.data?.error}</h1>
                    </div>
                )
                    :

                    (
                        <table className=" w-full min-w-max table-auto text-left ">
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
                                                className="font-bold leading-none text-green-700 "
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody >
                                {roles?.map(
                                    ({ _id, roleName, roleCode, departmentName }, index) => {
                                        const isLast = index === roles?.length - 1;
                                        const classes = isLast
                                            ? "px-5  border-l  border-r border-b border-green-300"
                                            : "px-5 border-l  border-r border-b border-green-300";

                                        return (
                                            <tr key={index} className=" hover:bg-green-50/50 cursor-pointer">
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
                                                <IconButton variant="text"
                                                        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300">
                                                        <Trash color="red" size={20}/>
                                                    </IconButton>
                                                </td>


                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    )

                }

            </div>
        </div>
    );
}
