// /* eslint-disable no-unused-vars */
// import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import {
//     CardHeader,
//     Input,
//     Typography,
//     Button,
//     Spinner,
// } from "@material-tailwind/react";
// import { useState } from "react";
// import { useGetEmployeesQuery } from "../../../redux/slices/employeeApiSlice";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import DeleteEmployeeModal from "./modal/DeleteEmployeeModal";
// import ViewEmployeeDetailModal from "./modal/ViewEmployeeDetailModal";
// import EditEmployeeModal from "./modal/EditEmployeeModal";
// import toast from "react-hot-toast";

// const TABLE_HEAD = ["S.No", "Photo", "Name", "Email", "Mobile Number", "Edit", "Delete", "View"];

// export default function ViewEmployee() {
//     const [search, setSearch] = useState('');
//     const [page, setPage] = useState(1);
//     const [limit, setLimit] = useState(10);
//     const [department, setDepartment] = useState('');
//     const [role, setRole] = useState('');

//     // Pass the search, page, and limit as parameters to the query
//     const { data: employeesData, error, isLoading, refetch } = useGetEmployeesQuery({ search, page, limit, department, role });

//     const handlePrevious = () => {
//         if (page > 1) setPage(page - 1);
//     };

//     const handleNext = () => {
//         const totalPages = Math.ceil((employeesData?.totalEmployee ?? 0) / limit);
//         if (page < totalPages) setPage(page + 1);
//     };

//     const handleCopy = (text) => {
//         navigator.clipboard.writeText(text);
//         toast.success(`${text} copied!`);
//     };

//     return (
//         <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
//             {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
//             <CardHeader floated={false} shadow={false} className="rounded-none">
//                 <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
//                     <div>
//                         <Typography variant="h5" color="blue-gray">
//                             All Employee
//                         </Typography>
//                         <Typography color="gray" className="mt-1 font-normal">
//                             See information about all employee
//                         </Typography>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <div className=" w-64 md:w-72">
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
//                             <p className=" hidden lg:block md:block sm:block">Refresh</p>
//                         </Button>
//                     </div>
//                 </div>

//             </CardHeader>

//             {/* <pre>{JSON.stringify(employeesData, null, 2)}</pre> */}

//             <div className="overflow-scroll p-2">
//                 {isLoading ? (
//                     <div className="flex justify-center p-4">
//                         <Spinner className="h-8 w-8 text-green-500" />
//                         {/* <img className="h-14 w-14 text-green-500"
//                             src="https://cdn-icons-gif.flaticon.com/17905/17905752.gif" alt="" /> */}
//                     </div>
//                 ) : error ? (
//                     <div className="p-4">
//                         <div className=" flex justify-center items-center">
//                             <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
//                         </div>
//                         <h1 className=" text-center" color="red">{error?.data?.error}</h1>
//                     </div>
//                 ) : !employeesData?.employees?.length ? (
//                     <div className="p-4 text-center text-gray-500">
//                         No employees found
//                     </div>
//                 )
//                     :

//                     (
//                         <table className=" w-full min-w-max table-auto text-left ">
//                             <thead>
//                                 <tr>
//                                     {TABLE_HEAD.map((head) => (
//                                         <th
//                                             key={head}
//                                             className="border-y border-l border-r border-green-200 bg-green-50 p-4"
//                                         >
//                                             <Typography
//                                                 variant="small"
//                                                 color="blue-gray"
//                                                 className="font-bold leading-none text-green-700 "
//                                             >
//                                                 {head}
//                                             </Typography>
//                                         </th>
//                                     ))}
//                                 </tr>
//                             </thead>

//                             {/* <pre>{JSON.stringify(employeesData,null,2)}</pre> */}
//                             <tbody >
//                                 {employeesData?.employees?.map(
//                                     ({ _id, employeeName, employeeEmail, employeeMobileNumber, department, role, employeeSalary, employeePhoto, employeeAdharCard, employeePanCard, employeeAgreement, createdAt, fatherOrHusbandName, sex, maritalStatus, bloodGroup, presentAddress, permanentAddress, dateOfBirth, dateOfJoining }, index) => {
//                                         const isLast = index === employeesData?.employees?.length - 1;
//                                         const classes = isLast
//                                             ? "px-5 py-   border-l  border-r border-b border-green-300"
//                                             : "px-5 py-  border-l  border-r border-b border-green-300";

//                                         return (
//                                             <tr key={index} className=" hover:bg-green-50/50 cursor-pointer">
//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font"
//                                                     >
//                                                         {index + 1 + (page - 1) * limit}.
//                                                     </Typography>
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <div className="p-1"
//                                                     >
//                                                         <LazyLoadImage
//                                                             alt={"img"}
//                                                             src={employeePhoto?.url}
//                                                             className=" w-9 h-9 rounded-full"
//                                                             effect="opacity"
//                                                             wrapperProps={{
//                                                                 // If you need to, you can tweak the effect transition using the wrapper style.
//                                                                 style: { transitionDelay: "1s" },
//                                                             }}
//                                                         />
//                                                     </div>
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font capitalize"
//                                                     >
//                                                         {employeeName}
//                                                     </Typography>
//                                                 </td>

//                                                 <td className={classes} onClick={() => handleCopy(employeeEmail)}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font hover:text-green-700"
//                                                     >
//                                                         {employeeEmail}
//                                                     </Typography>
//                                                 </td>

//                                                 <td className={classes} onClick={() => handleCopy(employeeMobileNumber)}>
//                                                     <Typography
//                                                         variant="small"
//                                                         color="blue-gray"
//                                                         className="font-normal app-font hover:text-green-700"
//                                                     >
//                                                         {employeeMobileNumber}
//                                                     </Typography>
//                                                 </td>





//                                                 <td className={classes}>
//                                                   <EditEmployeeModal
//                                                    id={_id}
//                                                    employeeName={employeeName}
//                                                    employeeEmail={employeeEmail}
//                                                    employeeMobileNumber={employeeMobileNumber}
//                                                    department={department}
//                                                    role={role}
//                                                    employeeSalary={employeeSalary}
//                                                    employeePhoto={employeePhoto}
//                                                    employeeAdharCard={employeeAdharCard}
//                                                    employeePanCard={employeePanCard}
//                                                    employeeAgreement={employeeAgreement}
//                                                    fatherOrHusbandName={fatherOrHusbandName}
//                                                    sex={sex}
//                                                    maritalStatus={maritalStatus}
//                                                    bloodGroup={bloodGroup}
//                                                    presentAddress={presentAddress}
//                                                    permanentAddress={permanentAddress}
//                                                    dateOfBirth={dateOfBirth}
//                                                    dateOfJoining={dateOfJoining}
//                                                   />
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <DeleteEmployeeModal id={_id} />
//                                                 </td>

//                                                 <td className={classes}>
//                                                     <ViewEmployeeDetailModal
//                                                         id={_id}
//                                                         employeeName={employeeName}
//                                                         employeeEmail={employeeEmail}
//                                                         employeeMobileNumber={employeeMobileNumber}
//                                                         department={department}
//                                                         role={role}
//                                                         employeeSalary={employeeSalary}
//                                                         employeePhoto={employeePhoto}
//                                                         employeeAdharCard={employeeAdharCard}
//                                                         employeePanCard={employeePanCard}
//                                                         employeeAgreement={employeeAgreement}
//                                                         createdAt={createdAt}
//                                                     />
//                                                 </td>


//                                             </tr>
//                                         );
//                                     },
//                                 )}


//                             </tbody>
//                         </table>
//                     )

//                 }

//             </div>
//             <div className="flex items-center justify-between border-t border-green-300 p-4">
//                 <Typography variant="small" color="blue-gray" className="font-normal">
//                     Page {page} of {Math.ceil((employeesData?.totalEmployee ?? 0) / limit)}
//                 </Typography>
//                 <div className="flex gap-2">
//                     <Button
//                         variant=""
//                         size="sm"
//                         className="hover:bg-green-50 active:bg-green-50 focus:bg-green-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-green-200 "
//                         onClick={handlePrevious} disabled={page === 1}>
//                         Previous
//                     </Button>

//                     <Button
//                         variant=""
//                         size="sm"
//                         className=" hover:shadow-none shadow-none   bg-green-500 "
//                         onClick={handleNext}
//                         disabled={page === Math.ceil((employeesData?.totalEmployee ?? 0) / limit)}>
//                         Next
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }

/* eslint-disable no-unused-vars */
import { ArrowPathIcon, MagnifyingGlassIcon, TableCellsIcon, ListBulletIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Input,
    Typography,
    Button,
    Spinner,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useGetEmployeesQuery } from "../../../redux/slices/employeeApiSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DeleteEmployeeModal from "./modal/DeleteEmployeeModal";
import ViewEmployeeDetailModal from "./modal/ViewEmployeeDetailModal";
import EditEmployeeModal from "./modal/EditEmployeeModal";
import toast from "react-hot-toast";

const TABLE_HEAD = ["S.No", "Photo", "Name", "Email", "Mobile Number", "Edit", "Delete", "View"];

export default function ViewEmployee() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [department, setDepartment] = useState('');
    const [role, setRole] = useState('');
    const [viewType, setViewType] = useState(() => {
        // Initialize from localStorage or default to 'table'
        return localStorage.getItem("viewType") || "table";
    });

    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status



    const { data: employeesData, error, isLoading, refetch } = useGetEmployeesQuery({ search, page, limit, department, role });

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        const totalPages = Math.ceil((employeesData?.totalEmployee ?? 0) / limit);
        if (page < totalPages) setPage(page + 1);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success(`${text} copied!`);
    };

    const toggleView = () => {
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
        <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
            <div className="rounded-none  border-b border-green-300 px-2 py-1">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Employee
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all employees
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
                            color="green"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-green-200 bg-transparent border text-black"
                            onClick={toggleView}
                        >
                            {viewType === "table" ? (
                                <>
                                    <ListBulletIcon className="h-5 w-5" />
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
                        <h1 className="text-center text-red-500">{error?.data?.error}</h1>
                    </div>
                ) : !employeesData?.employees?.length ? (
                    <div className="p-4 text-center text-gray-500">No employees found</div>
                ) : viewType === "table" ? (
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-y border-l border-r border-green-200 bg-green-50 p-4">
                                        <Typography variant="small" color="blue-gray" className="font-bold leading-none text-green-700">
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {employeesData?.employees?.map((employee, index) => {
                                const isLast = index === employeesData?.employees?.length - 1;
                                const classes = isLast
                                    ? "px-5 border-l border-r border-b border-green-300"
                                    : "px-5 border-l border-r border-b border-green-300";

                                return (
                                    <tr key={employee._id} className="hover:bg-green-50/50 cursor-pointer">
                                        <td className={classes}>{index + 1 + (page - 1) * limit}.</td>
                                        <td className={classes}>
                                            <LazyLoadImage alt="img" src={employee.employeePhoto?.url} className="w-9 h-9 rounded-full" />
                                        </td>
                                        <td className={classes}>{employee.employeeName}</td>
                                        <td className={classes} onClick={() => handleCopy(employee.employeeEmail)}>
                                            {employee.employeeEmail}
                                        </td>
                                        <td className={classes} onClick={() => handleCopy(employee.employeeMobileNumber)}>
                                            {employee.employeeMobileNumber}
                                        </td>
                                        <td className={classes}>
                                            <EditEmployeeModal {...employee} />
                                        </td>
                                        <td className={classes}>
                                            <DeleteEmployeeModal id={employee._id} />
                                        </td>
                                        <td className={classes}>
                                            <ViewEmployeeDetailModal {...employee} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {employeesData?.employees?.map((employee) => (
                            <div key={employee._id} className="border rounded-lg  border-green-300">
                                <div className="p-2">
                                    <LazyLoadImage
                                        alt="img"
                                        src={employee.employeePhoto?.url}
                                        className="w-20 h-20 rounded-full mx-auto mb-4 border drop-shadow"
                                    />
                                    <Typography variant="h6" className="text-center text-black">
                                        {employee.employeeName}
                                    </Typography>

                                    <Typography className="text-sm text-gray-900 text-center">
                                        {employee.employeeEmail}
                                    </Typography>

                                    <div className="flex justify-between mt-4 bg-green-50 rounded-b-lg">
                                        <EditEmployeeModal {...employee} />
                                        <DeleteEmployeeModal id={employee._id} />
                                        <ViewEmployeeDetailModal {...employee} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between border-t border-green-300 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {page} of {Math.ceil((employeesData?.totalEmployee ?? 0) / limit)}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant=""
                        size="sm"
                        className="hover:bg-green-50 active:bg-green-50 focus:bg-green-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-green-200"
                        onClick={handlePrevious}
                        disabled={page === 1}
                    >
                        Previous
                    </Button>

                    <Button
                        variant=""
                        size="sm"
                        className="hover:shadow-none shadow-none bg-green-500"
                        onClick={handleNext}
                        disabled={page === Math.ceil((employeesData?.totalEmployee ?? 0) / limit)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
