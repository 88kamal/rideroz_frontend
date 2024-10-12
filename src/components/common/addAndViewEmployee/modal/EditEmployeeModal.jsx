/* eslint-disable react/prop-types */

// // /* eslint-disable react/prop-types */
// // import  { useEffect, useRef, useState } from "react";
// // import {
// //   Dialog,
// //   DialogHeader,
// //   DialogBody,
// //   IconButton,
// //   Button,
// //   Typography,
// //   Input,
// //   CardBody,
// // } from "@material-tailwind/react";
// // import { Edit } from "lucide-react";
// // import toast from "react-hot-toast";
// // import { useGetDepartmentsQuery } from "../../../../redux/slices/departmentApiSlice";
// // import { useGetRolesQuery } from "../../../../redux/slices/roleApiSlice";
// // import { useEditEmployeeMutation } from "../../../../redux/slices/employeeApiSlice";

// // export default function EditEmployeeModal({id,  employeeName, employeeEmail, employeeMobileNumber, department, role, employeeSalary, employeePhoto, employeeAdharCard, employeePanCard, employeeAgreement}) {
// //   const [open, setOpen] = useState(false);


// //   const handleOpen = () => setOpen(!open);

// //   const [editEmployee, { isLoading, isSuccess, isError, error, data }] = useEditEmployeeMutation();

// //   const [formData, setFormData] = useState({
// //       employeeName: '',
// //       employeeEmail: '',
// //       employeeMobileNumber: '',
// //       department: '',
// //       role: '',
// //       employeeSalary: '',
// //       employeeAdharCard: null,
// //       employeePanCard: null,
// //       employeeAgreement: null,
// //       employeePhoto: null,
// //   });

// //   const [pdfPreviews, setPdfPreviews] = useState({
// //       employeeAdharCard: null,
// //       employeePanCard: null,
// //       employeeAgreement: null,
// //   });

// //   const [photoPreview, setPhotoPreview] = useState(null); // Added state for employeePhoto preview

// //   const { data: departments } = useGetDepartmentsQuery();
// //   const { data: roles } = useGetRolesQuery();

// //   const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] = useState(false);
// //   const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

// //   const fileInputRef = useRef(null);

// //   // Pre-populate form with existing employee data
//   // useEffect(() => {
//   //   setFormData({
//   //     employeeName: employeeName || '',
//   //     employeeEmail: employeeEmail || '',
//   //     employeeMobileNumber: employeeMobileNumber || '',
//   //     department: department || '',
//   //     role: role || '',
//   //     employeeSalary: employeeSalary || '',
//   //     employeeAdharCard: null,
//   //     employeePanCard: null,
//   //     employeeAgreement: null,
//   //     employeePhoto: null,
//   //   });

//   //   setPdfPreviews({
//   //     employeeAdharCard: employeeAdharCard || null,
//   //     employeePanCard: employeePanCard || null,
//   //     employeeAgreement: employeeAgreement || null,
//   //   });

//   //   setPhotoPreview(employeePhoto || null);
//   // }, [employeeName, employeeEmail, employeeMobileNumber, department, role, employeeSalary, employeePhoto, employeeAdharCard, employeePanCard, employeeAgreement]);

// //   const handleChange = (e) => {
// //       const { name, value } = e.target;
// //       setFormData({ ...formData, [name]: value });
// //   };

// //   const handleFileChange = (e) => {
// //       const { name, files } = e.target;
// //       const file = files[0];
// //       setFormData({ ...formData, [name]: file });

// //       // Preview the uploaded PDF or image
// //       if (file) {
// //           if (file.type === 'application/pdf') {
// //               setPdfPreviews({ ...pdfPreviews, [name]: URL.createObjectURL(file) });
// //           } else if (file.type.startsWith('image/')) {
// //               setPhotoPreview(URL.createObjectURL(file)); // Preview for employeePhoto
// //           }
// //       }
// //   };

// //   const handleSubmit = async (e) => {
// //       e.preventDefault();
// //       const formDataObj = new FormData();
// //       for (let key in formData) {
// //           formDataObj.append(key, formData[key]);
// //       }

// //       try {
// //           await editEmployee({ id, employeeData: formDataObj }).unwrap();
// //           toast.success('Employee updated successfully');

// //           // Reset previews and file inputs
// //           setPhotoPreview(null);
// //           setPdfPreviews({
// //               employeeAdharCard: null,
// //               employeePanCard: null,
// //               employeeAgreement: null,
// //           });

// //           if (fileInputRef.current) {
// //               fileInputRef.current.value = null; // Clear file inputs
// //           }
// //       } catch (err) {
// //           toast.error('Failed to update employee');
// //       }
// //   };

// //   useEffect(() => {
// //       if (isError) {
// //           toast.error(error?.data?.error || 'Failed to update employee');
// //       }

// //       if (isSuccess) {
// //           toast.success(data?.message || 'Employee updated successfully');
// //       }
// //   }, [isError, error, isSuccess, data]);

// //   const filteredRoles = roles?.filter(role => role.departmentName?._id === formData?.department);



// //   return (
// //     <>
// //       <IconButton
// //         onClick={handleOpen}
// //         variant="text"
// //         className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
// //       >
// //         <Edit className="h-4 w-4" />
// //       </IconButton>

// //       <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-md bg-white">
// //         <DialogHeader>Edit</DialogHeader>
// //         <DialogBody>
// //         <div className="flex justify-center items-center ">
// //             <div className="w-full border border-green-300 bg-white rounded-md">
// //                 <CardBody>
// //                     <form onSubmit={handleSubmit} className="space-y-4">
// //                         <div className="flex justify-center border p-2 border-green-400 rounded-md border-dashed mb-8 cursor-pointer">
// //                             <label htmlFor="file-upload" className="custom-file-upload ">
// //                                 {photoPreview ? (
// //                                     <img className="w-24 h-24 border-2 rounded-full cursor-pointer" src={photoPreview} alt="" />
// //                                 ) : (
// //                                     <img src="https://cdn-icons-png.flaticon.com/128/1771/1771013.png" className="h-24 w-24 cursor-pointer" />
// //                                 )}
// //                             </label>
// //                             <input
// //                                 id="file-upload"
// //                                 name='employeePhoto'
// //                                 type="file"
// //                                 onChange={handleFileChange}
// //                                 className='cursor-pointer'
// //                                 ref={fileInputRef}
// //                             />
// //                         </div>

// //                         <div className="flex flex-col sm:flex-row gap-4">
// //                             <div className="w-full sm:w-1/2">
// //                                 <Input
// //                                     type="text"
// //                                     name="employeeName"
// //                                     value={formData.employeeName}
// //                                     onChange={handleChange}
// //                                     label="Employee Name"
// //                                     size="lg"
// //                                     color='green'
// //                                 />
// //                             </div>

// //                             <div className="w-full sm:w-1/2">
// //                                 <Input
// //                                     type="email"
// //                                     name="employeeEmail"
// //                                     value={formData.employeeEmail}
// //                                     onChange={handleChange}
// //                                     label="Email"
// //                                     size="lg"
// //                                     color='green'
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="flex flex-col sm:flex-row gap-4">
// //                             <div className="w-full sm:w-1/2">
// //                                 <Input
// //                                     type="text"
// //                                     name="employeeMobileNumber"
// //                                     value={formData.employeeMobileNumber}
// //                                     onChange={handleChange}
// //                                     label="Mobile Number"
// //                                     size="lg"
// //                                     color='green'
// //                                 />
// //                             </div>

// //                             {/* Custom Department Dropdown */}
// //                             <div className="relative w-full sm:w-1/2">
// //                                 <div
// //                                     className="bg-white border border-[#c6d0d5] rounded-md p-2 cursor-pointer"
// //                                     onClick={() => setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen)}
// //                                 >
// //                                     {formData.department
// //                                         ? departments?.find(dept => dept._id === formData.department)?.departmentName
// //                                         : 'Select Department'}
// //                                 </div>

// //                                 {isDepartmentDropdownOpen && (
// //                                     <div className="absolute z-10 bg-white border border-[#c6d0d5] rounded-md w-full mt-1 max-h-48 overflow-y-auto">
// //                                         {departments?.map(department => (
// //                                             <div
// //                                                 key={department._id}
// //                                                 className="p-2 hover:bg-gray-200 cursor-pointer"
// //                                                 onClick={() => {
// //                                                     setFormData({ ...formData, department: department._id });
// //                                                     setIsDepartmentDropdownOpen(false);
// //                                                 }}
// //                                             >
// //                                                 {department.departmentName}
// //                                             </div>
// //                                         ))}
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>

// //                         <div className="flex flex-col sm:flex-row gap-4">
// //                             {/* Custom Role Dropdown */}
// //                             <div className={`relative w-full sm:w-1/2 ${!formData.department ? 'opacity-50 cursor-not-allowed' : ''}`}>
// //                                 <div
// //                                     className={`bg-white border border-[#c6d0d5] rounded-md p-2 cursor-pointer ${!formData.department ? 'pointer-events-none' : ''}`}
// //                                     onClick={() => {
// //                                         if (formData.department) {
// //                                             setIsRoleDropdownOpen(!isRoleDropdownOpen);
// //                                         }
// //                                     }}
// //                                 >
// //                                     {formData.role
// //                                         ? filteredRoles?.find(role => role._id === formData.role)?.roleName
// //                                         : 'Select Role'}
// //                                 </div>

// //                                 {isRoleDropdownOpen && (
// //                                     <div className="absolute z-10 bg-white border border-[#c6d0d5] rounded-md w-full mt-1 max-h-48 overflow-y-auto">
// //                                         {filteredRoles?.map(role => (
// //                                             <div
// //                                                 key={role._id}
// //                                                 className="p-2 hover:bg-gray-200 cursor-pointer"
// //                                                 onClick={() => {
// //                                                     setFormData({ ...formData, role: role._id });
// //                                                     setIsRoleDropdownOpen(false);
// //                                                 }}
// //                                             >
// //                                                 {role.roleName}
// //                                             </div>
// //                                         ))}
// //                                     </div>
// //                                 )}
// //                             </div>

// //                             <div className="w-full sm:w-1/2">
// //                                 <Input
// //                                     type="number"
// //                                     name="employeeSalary"
// //                                     value={formData.employeeSalary}
// //                                     onChange={handleChange}
// //                                     label="Salary"
// //                                     size="lg"
// //                                     color='green'
// //                                 />
// //                             </div>
// //                         </div>

// //                         {/* File Inputs */}
// //                         <div className="flex flex-col sm:flex-row gap-4">
// //                             <div className="w-full sm:w-1/3">
// //                                 <Typography variant="small" color="blue-gray">Adhar Card</Typography>
// //                                 <input
// //                                     type="file"
// //                                     ref={fileInputRef}
// //                                     name="employeeAdharCard"
// //                                     onChange={handleFileChange}
// //                                     accept="application/pdf"
// //                                     className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer mb-2"
// //                                 />
// //                                 {pdfPreviews.employeeAdharCard && (
// //                                     <div className="mt-2">
// //                                         <embed src={pdfPreviews.employeeAdharCard} width="100%" height="150px" type="application/pdf" />
// //                                     </div>
// //                                 )}
// //                             </div>

// //                             <div className="w-full sm:w-1/3">
// //                                 <Typography variant="small" color="blue-gray">Pan Card</Typography>
// //                                 <input
// //                                     type="file"
// //                                     ref={fileInputRef}
// //                                     name="employeePanCard"
// //                                     onChange={handleFileChange}
// //                                     accept="application/pdf"
// //                                     className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer mb-2"
// //                                 />
// //                                 {pdfPreviews.employeePanCard && (
// //                                     <div className="mt-2">
// //                                         <embed src={pdfPreviews.employeePanCard} width="100%" height="150px" type="application/pdf" />
// //                                     </div>
// //                                 )}
// //                             </div>

// //                             <div className="w-full sm:w-1/3">
// //                                 <Typography variant="small" color="blue-gray">Agreement</Typography>
// //                                 <input
// //                                     type="file"
// //                                     ref={fileInputRef}
// //                                     name="employeeAgreement"
// //                                     onChange={handleFileChange}
// //                                     accept="application/pdf"
// //                                     className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer mb-2"
// //                                 />
// //                                 {pdfPreviews.employeeAgreement && (
// //                                     <div className="mt-2">
// //                                         <embed src={pdfPreviews.employeeAgreement} width="100%" height="150px" type="application/pdf" />
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>

// //                         {/* Submit Button */}
// //                         <div className="flex justify-end mt-4">
// //                             <Button
// //                                 type="submit"
// //                                 color="green"
// //                                 size="lg"
// //                                 disabled={isLoading}
// //                             >
// //                                 {isLoading ? 'Updating...' : 'Update Employee'}
// //                             </Button>
// //                         </div>
// //                     </form>
// //                 </CardBody>
// //             </div>
// //         </div>

// //         </DialogBody>

// //       </Dialog>
// //     </>
// //   );
// // }


// /* eslint-disable react/prop-types */

// import { useEffect, useRef, useState } from "react";
// import {
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   IconButton,
//   Button,
//   Input,
//   CardBody,
// } from "@material-tailwind/react";
// import { Edit } from "lucide-react";
// import toast from "react-hot-toast";
// import { useGetDepartmentsQuery } from "../../../../redux/slices/departmentApiSlice";
// import { useGetRolesQuery } from "../../../../redux/slices/roleApiSlice";
// import { useEditEmployeeMutation } from "../../../../redux/slices/employeeApiSlice";

// export default function EditEmployeeModal({id,  employeeName, employeeEmail, employeeMobileNumber, department, role, employeeSalary, employeePhoto, employeeAdharCard, employeePanCard, employeeAgreement}) {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(!open);

//   const [editEmployee, { isLoading, isSuccess, isError, error, data }] =
//     useEditEmployeeMutation();

//   const [formData, setFormData] = useState({
//     employeeName: "",
//     employeeEmail: "",
//     employeeMobileNumber: "",
//     department: "",
//     role: "",
//     employeeSalary: "",
//     employeeAdharCard: null,
//     employeePanCard: null,
//     employeeAgreement: null,
//     employeePhoto: null,
//   });

//   const [pdfPreviews, setPdfPreviews] = useState({
//     employeeAdharCard: null,
//     employeePanCard: null,
//     employeeAgreement: null,
//   });

//   const [photoPreview, setPhotoPreview] = useState(null);

//   const { data: departments } = useGetDepartmentsQuery();
//   const { data: roles } = useGetRolesQuery();

//   const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] = useState(false);
//   const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

//   const fileInputRef = useRef(null);

//   // Pre-populate form with existing employee data
//   useEffect(() => {
//     setFormData({
//       employeeName: employeeName || '',
//       employeeEmail: employeeEmail || '',
//       employeeMobileNumber: employeeMobileNumber || '',
//       department: department || '',
//       role: role || '',
//       employeeSalary: employeeSalary || '',
//       employeeAdharCard: null,
//       employeePanCard: null,
//       employeeAgreement: null,
//       employeePhoto: null,
//     });

// setPdfPreviews({
//   employeeAdharCard: employeeAdharCard?.url || null,
//   employeePanCard: employeePanCard?.url || null,
//   employeeAgreement: employeeAgreement?.url || null,
// });

//     setPhotoPreview(employeePhoto?.url || null);
//   }, [employeeName, employeeEmail, employeeMobileNumber, department, role, employeeSalary, employeePhoto, employeeAdharCard, employeePanCard, employeeAgreement]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     const file = files[0];
//     setFormData({ ...formData, [name]: file });

//     if (file) {
//       if (file.type === "application/pdf") {
//         setPdfPreviews({ ...pdfPreviews, [name]: URL.createObjectURL(file) });
//       } else if (file.type.startsWith("image/")) {
//         setPhotoPreview(URL.createObjectURL(file));
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataObj = new FormData();
//     for (let key in formData) {
//       formDataObj.append(key, formData[key]);
//     }

//     try {
//       await editEmployee({ id, employeeData: formDataObj }).unwrap();
//       toast.success("Employee updated successfully");

//       setPhotoPreview(null);
//       setPdfPreviews({
//         employeeAdharCard: null,
//         employeePanCard: null,
//         employeeAgreement: null,
//       });

//       if (fileInputRef.current) {
//         fileInputRef.current.value = null;
//       }
//     } catch (err) {
//       toast.error("Failed to update employee");
//     }
//   };

//   useEffect(() => {
//     if (isError) {
//       toast.error(error?.data?.error || "Failed to update employee");
//     }

//     if (isSuccess) {
//       toast.success(data?.message || "Employee updated successfully");
//     }
//   }, [isError, error, isSuccess, data]);

//   const filteredRoles = roles?.filter(
//     (role) => role.departmentName?._id === formData?.department
//   );

//   return (
//     <>
//       <IconButton
//         onClick={handleOpen}
//         variant="text"
//         className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
//       >
//         <Edit className="h-4 w-4" />
//       </IconButton>

//       <Dialog open={open} size="xxl" className="shadow-none rounded-md bg-white">
//         <DialogHeader>Edit Employee</DialogHeader>
//         <DialogBody>
//           <div className="flex justify-center items-center">
//             <div className="w-full border border-green-300 bg-white rounded-md">
//               <CardBody>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="flex justify-center border p-2 border-green-400 rounded-md border-dashed mb-8 cursor-pointer">
//                     <label htmlFor="file-upload" className="custom-file-upload">
//                       {photoPreview ? (
//                         <img
//                           className="w-24 h-24 border-2 rounded-full cursor-pointer"
//                           src={photoPreview}
//                           alt=""
//                         />
//                       ) : (
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/128/1771/1771013.png"
//                           className="h-24 w-24 cursor-pointer"
//                         />
//                       )}
//                     </label>
//                     <input
//                       id="file-upload"
//                       name="employeePhoto"
//                       type="file"
//                       onChange={handleFileChange}
//                       className="cursor-pointer"
//                       ref={fileInputRef}
//                     />
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <div className="w-full sm:w-1/2">
//                       <Input
//                         type="text"
//                         name="employeeName"
//                         value={formData.employeeName}
//                         onChange={handleChange}
//                         label="Employee Name"
//                         size="lg"
//                         color="green"
//                       />
//                     </div>

//                     <div className="w-full sm:w-1/2">
//                       <Input
//                         type="email"
//                         name="employeeEmail"
//                         value={formData.employeeEmail}
//                         onChange={handleChange}
//                         label="Email"
//                         size="lg"
//                         color="green"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <div className="w-full sm:w-1/2">
//                       <Input
//                         type="text"
//                         name="employeeMobileNumber"
//                         value={formData.employeeMobileNumber}
//                         onChange={handleChange}
//                         label="Mobile Number"
//                         size="lg"
//                         color="green"
//                       />
//                     </div>

//                     {/* Custom Department Dropdown */}
//                     <div className="relative w-full sm:w-1/2">
//                       <div
//                         className="bg-white border border-[#c6d0d5] rounded-md p-2 cursor-pointer"
//                         onClick={() =>
//                           setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen)
//                         }
//                       >
//                         {formData.department
//                           ? departments?.find(
//                               (dept) => dept._id === formData.department
//                             )?.departmentName
//                           : "Select Department"}
//                       </div>

//                       {isDepartmentDropdownOpen && (
//                         <div className="absolute z-10 bg-white border border-[#c6d0d5] rounded-md w-full mt-1 max-h-48 overflow-y-auto">
//                           {departments?.map((department) => (
//                             <div
//                               key={department._id}
//                               className="p-2 hover:bg-gray-200 cursor-pointer"
//                               onClick={() => {
//                                 setFormData({
//                                   ...formData,
//                                   department: department._id,
//                                 });
//                                 setIsDepartmentDropdownOpen(false);
//                               }}
//                             >
//                               {department.departmentName}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-4">
//                     {/* Custom Role Dropdown */}
//                     <div
//                       className={`relative w-full sm:w-1/2 ${
//                         !formData.department
//                           ? "opacity-50 cursor-not-allowed"
//                           : ""
//                       }`}
//                     >
//                       <div
//                         className={`bg-white border border-[#c6d0d5] rounded-md p-2 cursor-pointer ${
//                           !formData.department ? "pointer-events-none" : ""
//                         }`}
//                         onClick={() => {
//                           if (formData.department) {
//                             setIsRoleDropdownOpen(!isRoleDropdownOpen);
//                           }
//                         }}
//                       >
//                         {formData.role
//                           ? filteredRoles?.find(
//                               (role) => role._id === formData.role
//                             )?.roleName
//                           : "Select Role"}
//                       </div>

//                       {isRoleDropdownOpen && (
//                         <div className="absolute z-10 bg-white border border-[#c6d0d5] rounded-md w-full mt-1 max-h-48 overflow-y-auto">
//                           {filteredRoles?.map((role) => (
//                             <div
//                               key={role._id}
//                               className="p-2 hover:bg-gray-200 cursor-pointer"
//                               onClick={() => {
//                                 setFormData({
//                                   ...formData,
//                                   role: role._id,
//                                 });
//                                 setIsRoleDropdownOpen(false);
//                               }}
//                             >
//                               {role.roleName}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <div className="w-full sm:w-1/2">
//                       <Input
//                         type="text"
//                         name="employeeSalary"
//                         value={formData.employeeSalary}
//                         onChange={handleChange}
//                         label="Salary"
//                         size="lg"
//                         color="green"
//                       />
//                     </div>
//                   </div>

//                   {/* File Upload for Aadhar, Pan, Agreement */}
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <div className="w-full sm:w-1/3">
//                       <label>Aadhar Card:</label>
//                       <input
//                         type="file"
//                         name="employeeAdharCard"
//                         onChange={handleFileChange}
//                         accept="application/pdf"
//                         className="border border-gray-300 p-2"
//                         ref={fileInputRef}
//                       />
//                       {pdfPreviews.employeeAdharCard && (
//                         <embed
//                           src={pdfPreviews.employeeAdharCard}
//                           type="application/pdf"
//                           className="w-full h-48 mt-2"
//                         />
//                       )}
//                     </div>

//                     <div className="w-full sm:w-1/3">
//                       <label>Pan Card:</label>
//                       <input
//                         type="file"
//                         name="employeePanCard"
//                         onChange={handleFileChange}
//                         accept="application/pdf"
//                         className="border border-gray-300 p-2"
//                         ref={fileInputRef}
//                       />
//                       {pdfPreviews.employeePanCard && (
//                         <embed
//                           src={pdfPreviews.employeePanCard}
//                           type="application/pdf"
//                           className="w-full h-48 mt-2"
//                         />
//                       )}
//                     </div>

//                     <div className="w-full sm:w-1/3">
//                       <label>Agreement:</label>
//                       <input
//                         type="file"
//                         name="employeeAgreement"
//                         onChange={handleFileChange}
//                         accept="application/pdf"
//                         className="border border-gray-300 p-2"
//                         ref={fileInputRef}
//                       />
//                       {pdfPreviews.employeeAgreement && (
//                         <embed
//                           src={pdfPreviews.employeeAgreement}
//                           type="application/pdf"
//                           className="w-full h-48 mt-2"
//                         />
//                       )}
//                     </div>
//                   </div>

//                   <div className="mt-6 flex justify-center">
//                     <Button
//                       type="submit"
//                       color="green"
//                       size="lg"
//                       disabled={isLoading}
//                       fullWidth
//                     >
//                       {isLoading ? "Updating..." : "Update Employee"}
//                     </Button>
//                   </div>
//                 </form>
//               </CardBody>
//             </div>
//           </div>
//         </DialogBody>
//       </Dialog>
//     </>
//   );
// }

import { useEffect, useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Edit, X } from "lucide-react";
import toast from "react-hot-toast";
import { useEditEmployeeMutation } from "../../../../redux/slices/employeeApiSlice";
import { useGetDepartmentsQuery } from "../../../../redux/slices/departmentApiSlice";
import { useGetRolesQuery } from "../../../../redux/slices/roleApiSlice";

export default function EditEmployeeModal({
  id,
  employeeName: initialEmployeeName,
  employeeEmail: initialEmployeeEmail,
  employeeMobileNumber: initialEmployeeMobileNumber,
  department: initialDepartment,
  role: initialRole,
  employeeSalary: initialEmployeeSalary,
  employeePhoto: initialEmployeePhoto,
  employeeAdharCard: initialEmployeeAdharCard,
  employeePanCard: initialEmployeePanCard,
  employeeAgreement: initialEmployeeAgreement,
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeEmail: "",
    employeeMobileNumber: "",
    department: "",
    role: "",
    employeeSalary: "",
    employeeAdharCard: null,
    employeePanCard: null,
    employeeAgreement: null,
    employeePhoto: null,
  });

  const [pdfPreviews, setPdfPreviews] = useState({
    employeeAdharCard: null,
    employeePanCard: null,
    employeeAgreement: null,
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef(null);

  const { data: departments } = useGetDepartmentsQuery();
  const { data: roles } = useGetRolesQuery();

  const [selectedDepartment, setSelectedDepartment] = useState({
    name: initialDepartment?.departmentName || "",
    id: initialDepartment?._id || "",
  });
  const [selectedRole, setSelectedRole] = useState({
    name: initialRole?.roleName || "",
    id: initialRole?._id || "",
  });

  const [editEmployee, { isLoading, isError, error, data, isSuccess }] =
    useEditEmployeeMutation();

  const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [isFormModified, setIsFormModified] = useState(false); // State to track form modifications

  const handleOpen = () => {
    setOpen(!open);
    if (!open) {
      setFormData({
        employeeName: initialEmployeeName || "",
        employeeEmail: initialEmployeeEmail || "",
        employeeMobileNumber: initialEmployeeMobileNumber || "",
        department: initialDepartment?._id || "",
        role: initialRole?._id || "",
        employeeSalary: initialEmployeeSalary || "",
        employeeAdharCard: null,
        employeePanCard: null,
        employeeAgreement: null,
        employeePhoto: null,
      });

      setSelectedDepartment({
        name: initialDepartment?.departmentName || "",
        id: initialDepartment?._id || "",
      });

      setSelectedRole({
        name: initialRole?.roleName || "",
        id: initialRole?._id || "",
      });

      setPdfPreviews({
        employeeAdharCard: initialEmployeeAdharCard?.url || null,
        employeePanCard: initialEmployeePanCard?.url || null,
        employeeAgreement: initialEmployeeAgreement?.url || null,
      });

      setPhotoPreview(initialEmployeePhoto?.url || null);
      setIsFormModified(false); // Reset the modification state when dialog is opened
    }
  };

  const handleInputChange = (e) => {
    const updatedFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedFormData);
    checkFormModification(updatedFormData);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (file) {
      const updatedFormData = { ...formData, [name]: file };
      setFormData(updatedFormData);
      checkFormModification(updatedFormData);

      if (file.type === "application/pdf") {
        setPdfPreviews({ ...pdfPreviews, [name]: URL.createObjectURL(file) });
      } else if (file.type.startsWith("image/")) {
        setPhotoPreview(URL.createObjectURL(file));
      }
    }
  };

  // Function to check if the form has been modified
  const checkFormModification = (updatedFormData) => {
    const isModified =
      updatedFormData.employeeName !== initialEmployeeName ||
      updatedFormData.employeeEmail !== initialEmployeeEmail ||
      updatedFormData.employeeMobileNumber !== initialEmployeeMobileNumber ||
      updatedFormData.department !== (initialDepartment?._id || "") ||
      updatedFormData.role !== (initialRole?._id || "") ||
      updatedFormData.employeeSalary !== initialEmployeeSalary ||
      updatedFormData.employeePhoto !== null ||
      updatedFormData.employeeAdharCard !== null ||
      updatedFormData.employeePanCard !== null ||
      updatedFormData.employeeAgreement !== null;

    setIsFormModified(isModified);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (let key in formData) {
      if (formData[key]) {
        formDataObj.append(key, formData[key]);
      }
    }

    try {
      await editEmployee({ id, employeeData: formDataObj }).unwrap();
    } catch (error) {
      toast.error(error?.data?.error || "Error updating employee");
    }
  };

  useEffect(() => {
    if (isError) {
      handleOpen();
      toast.error(error?.data?.error || "Failed to update employee");
    }

    if (isSuccess) {
      handleOpen();
      toast.success(data?.message)
    }
  }, [isError, error, isSuccess, data]);

  const filteredRoles = roles?.filter(
    (role) => role.departmentName?._id === selectedDepartment.id
  );

  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <Edit className="h-4 w-4" />
      </IconButton>

      <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-md bg-white">
        {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}

        {/* <pre>{JSON.stringify(selectedDepartment.name,null,2)}</pre> */}
        {/* <pre>{JSON.stringify(selectedRole?.name,null,2)}</pre> */}
        <div className="px-4 py-4">
          <h1 className="text-xl text-black font-bold">Edit Employee</h1>
          <div
            className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-50 cursor-pointer rounded-tr-md"
            onClick={handleOpen}
          >
            <X size={20} className="text-green-300 hover:text-green-400" />
          </div>
        </div>

        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-4">


            <div className="flex justify-center mb-6">
              <label htmlFor="file-uploads" className="custom-file-upload cursor-pointer">
                {photoPreview ? (
                  <img
                    className="w-24 h-24 border-2 rounded-full object-cover"
                    src={photoPreview}
                    alt="Profile"
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1771/1771013.png"
                    className="h-24 w-24 border-2 rounded-full"
                    alt="Default Profile"
                  />
                )}
              </label>
              <input
                id="file-uploads"
                type="file"
                name="employeePhoto"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>



            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <Input
                  type="text"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleInputChange}
                  label="Employee Name"
                  size="lg"
                  color="green"
                />
              </div>

              <div className="w-full sm:w-1/2">
                <Input
                  type="email"
                  name="employeeEmail"
                  value={formData.employeeEmail}
                  onChange={handleInputChange}
                  label="Email"
                  size="lg"
                  color="green"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <Input
                  type="text"
                  name="employeeMobileNumber"
                  value={formData.employeeMobileNumber}
                  onChange={handleInputChange}
                  label="Mobile Number"
                  size="lg"
                  color="green"
                />
              </div>

              <div className="relative w-full sm:w-1/2">
                <div
                  onClick={() => setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen)}
                  className="w-full px-3 py-2 border border-[#607d8b] rounded-lg cursor-pointer"
                >
                  {selectedDepartment.name || "Select Department"}
                </div>
                {isDepartmentDropdownOpen && (
                  <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                    {departments?.map((department) => (
                      <li
                        key={department._id}
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                        onClick={() => {
                          setSelectedDepartment({ name: department.departmentName, id: department._id });
                          const updatedFormData = { ...formData, department: department._id };
                          setFormData(updatedFormData);
                          checkFormModification(updatedFormData);
                          setIsDepartmentDropdownOpen(false);
                        }}

                      >
                        {department.departmentName}
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </div>




            <div className="flex flex-col sm:flex-row gap-4">
              <div
                className={`relative w-full sm:w-1/2 ${!formData.department
                  ? "opacity-50 cursor-not-allowed"
                  : ""
                  }`}
              >
                <div
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  className={`w-full px-3 py-2 border border-[#607d8b] rounded-lg cursor-pointer ${!selectedDepartment.id ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {selectedRole.name || "Select Role"}
                </div>
                {isRoleDropdownOpen && (
                  <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                    {filteredRoles?.map((role) => (
                      <li
                        key={role._id}
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                        onClick={() => {
                          setSelectedRole({ name: role.roleName, id: role._id });
                          const updatedFormData = { ...formData, role: role._id };
                          setFormData(updatedFormData);
                          checkFormModification(updatedFormData);
                          setIsRoleDropdownOpen(false);
                        }}
                      >
                        {role.roleName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="w-full sm:w-1/2">
                <Input
                  type="text"
                  name="employeeSalary"
                  value={formData.employeeSalary}
                  onChange={handleInputChange}
                  label="Salary"
                  size="lg"
                  color="green"
                />
              </div>
            </div>

            {/* <pre>{JSON.stringify(pdfPreviews, null, 2)}</pre> */}

            {/* File Upload for Aadhar, Pan, Agreement */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/3">
                <label>Aadhar Card:</label>
                <input
                  type="file"
                  name="employeeAdharCard"
                  onChange={handleFileChange}
                  accept="application/pdf"
                  className="border border-gray-300 p-2"
                  ref={fileInputRef}
                />
                {pdfPreviews.employeeAdharCard && (
                  // <embed
                  //   src={pdfPreviews.employeeAdharCard}
                  //   type="application/pdf"
                  //   className="w-full h-48 mt-2"
                  // />
                  <iframe
  src={pdfPreviews.employeeAdharCard}
  type="application/pdf"
  className="w-full h-48 mt-2"
  title="Employee Adhar Card"
/>

                )}
              </div>

              <div className="w-full sm:w-1/3">
                <label>Pan Card:</label>
                <input
                  type="file"
                  name="employeePanCard"
                  onChange={handleFileChange}
                  accept="application/pdf"
                  className="border border-gray-300 p-2"
                  ref={fileInputRef}
                />
                {pdfPreviews.employeePanCard && (
                  // <embed
                  //   src={pdfPreviews.employeePanCard}
                  //   type="application/pdf"
                  //   className="w-full h-48 mt-2"
                  // />
                  <iframe
  src={pdfPreviews.employeePanCard}
  type="application/pdf"
  className="w-full h-48 mt-2"
  title="Employee Adhar Card"
/>

                )}
              </div>

              <div className="w-full sm:w-1/3">
                <label>Agreement:</label>
                <input
                  type="file"
                  name="employeeAgreement"
                  onChange={handleFileChange}
                  accept="application/pdf"
                  className="border border-gray-300 p-2"
                  ref={fileInputRef}
                />
                {pdfPreviews.employeeAgreement && (
                  // <embed
                  //   src={pdfPreviews.employeeAgreement}
                  //   type="application/pdf"
                  //   className="w-full h-48 mt-2"
                  // />
                  <iframe
  src={pdfPreviews.employeeAgreement}
  type="application/pdf"
  className="w-full h-48 mt-2"
  title="Employee Adhar Card"
/>

                )}
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <Button variant="" className=" w-full hover:shadow-none shadow-none" type="submit" color="green" disabled={!isFormModified || isLoading}>
                {isLoading ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
