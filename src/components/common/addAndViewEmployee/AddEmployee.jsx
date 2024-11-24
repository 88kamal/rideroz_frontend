import { useEffect, useRef, useState } from 'react';
import { CardBody, Input, Button, Typography, Select, Option } from '@material-tailwind/react';
import { useAddEmployeeMutation } from '../../../redux/slices/employeeApiSlice';
import toast from 'react-hot-toast';
import { useGetDepartmentsQuery } from '../../../redux/slices/departmentApiSlice';
import { useGetRolesQuery } from '../../../redux/slices/roleApiSlice';

const AddEmployeeForm = () => {
    const [formData, setFormData] = useState({
        employeeName: '',
        fatherOrHusbandName: '',  // New field
        sex: '',                  // New field
        maritalStatus: '',         // New field
        bloodGroup: '',            // New field
        presentAddress: '',        // New field
        permanentAddress: '',      // New field
        dateOfBirth: '',           // New field
        dateOfJoining: '',         // New field
        employeeEmail: '',
        employeeMobileNumber: '',
        department: '',
        role: '',
        employeeSalary: '',
        employeeAdharCard: null,
        employeePanCard: null,
        employeeAgreement: null,
        employeePhoto: null,       // Employee photo
    });


    const [pdfPreviews, setPdfPreviews] = useState({
        employeeAdharCard: null,
        employeePanCard: null,
        employeeAgreement: null,
    });

    const [photoPreview, setPhotoPreview] = useState(null); // Added state for employeePhoto preview

    const { data: departments } = useGetDepartmentsQuery();
    const { data: roles } = useGetRolesQuery();
    const [addEmployee, { isLoading, isSuccess, isError, error, data }] = useAddEmployeeMutation();

    const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] = useState(false);
    const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
        setFormData({ ...formData, [name]: file });

        // Preview the uploaded PDF or image
        if (file) {
            if (file.type === 'application/pdf') {
                setPdfPreviews({ ...pdfPreviews, [name]: URL.createObjectURL(file) });
            } else if (file.type.startsWith('image/')) {
                setPhotoPreview(URL.createObjectURL(file)); // Preview for employeePhoto
            }
        }
    };

    const fileInputRefAdharCard = useRef(null);
    const fileInputRefPanCard = useRef(null);
    const fileInputRef = useRef(null);
    const fileInputRefAgreement = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        for (let key in formData) {
            formDataObj.append(key, formData[key]);
        }

        try {
            await addEmployee(formDataObj).unwrap();

            // Reset form
            setFormData({
                employeeName: '',
                fatherOrHusbandName: '',
                sex: '',
                maritalStatus: '',
                bloodGroup: '',
                presentAddress: '',
                permanentAddress: '',
                dateOfBirth: '',
                dateOfJoining: '',
                employeeEmail: '',
                employeeMobileNumber: '',
                department: '',
                role: '',
                employeeSalary: '',
                employeeAdharCard: null,
                employeePanCard: null,
                employeeAgreement: null,
                employeePhoto: null,
            });

            setPdfPreviews({
                employeeAdharCard: null,
                employeePanCard: null,
                employeeAgreement: null,
            })
            setPhotoPreview("")
            // Reset the file input manually
            if (fileInputRef.current) {
                fileInputRef.current.value = null; // This clears the file input field
            }
            if (fileInputRefAdharCard.current) {
                fileInputRefAdharCard.current.value = null; // This clears the file input field
            }
            if (fileInputRefPanCard.current) {
                fileInputRefPanCard.current.value = null; // This clears the file input field
            }

            if (fileInputRefAgreement.current) {
                fileInputRefAgreement.current.value = null; // This clears the file input field
            }
        } catch (err) {
            console.error('Failed to add employee', err);
        }
    };


    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to add employee, please try again');
        }

        if (isSuccess) {
            toast.success(data?.message);
        }
    }, [isError, error, isSuccess, data]);

    const filteredRoles = roles?.filter(role => role.departmentName?._id === formData?.department);

    return (
        <div className="flex justify-center items-center ">
            <div className="w-full border border-green-300 bg-white rounded-md">
                <CardBody>

                    <div className="flex justify-center border p-2 border-green-400 rounded-md border-dashed mb-8 cursor-pointer">
                        <label htmlFor="file-upload" className="custom-file-upload ">
                            {photoPreview ? (
                                <img className="w-24 h-24 border-2 rounded-full cursor-pointer" src={photoPreview} alt="" />
                            ) : (
                                <img src="https://cdn-icons-png.flaticon.com/128/1771/1771013.png" className="h-24 w-24 cursor-pointer" />
                            )}
                        </label>
                        <input
                            id="file-upload"
                            name='employeePhoto'
                            type="file"
                            onChange={handleFileChange}
                            className='cursor-pointer'
                            ref={fileInputRef}
                        />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-1/2">
                                <Input
                                    type="text"
                                    name="employeeName"
                                    value={formData.employeeName}
                                    onChange={handleChange}
                                    label="Employee Name"
                                    size="lg"
                                    color='green'
                                    className=' app-font'
                                    style={{ fontSize: '16px' }} // Add this to prevent zooming
                                />
                            </div>

                            <div className="w-full sm:w-1/2">
                                <Input
                                    type="email"
                                    name="employeeEmail"
                                    value={formData.employeeEmail}
                                    onChange={handleChange}
                                    label="Email"
                                    size="lg"
                                    color='green'
                                    className=' app-font'
                                    style={{ fontSize: '16px' }} // Add this to prevent zooming

                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-1/2">
                                <Input
                                    type="text"
                                    name="employeeMobileNumber"
                                    value={formData.employeeMobileNumber}
                                    onChange={handleChange}
                                    label="Mobile Number"
                                    size="lg"
                                    color='green'
                                    className=' app-font'
                                    style={{ fontSize: '16px' }} // Add this to prevent zooming

                                />
                            </div>

                            {/* Custom Department Dropdown */}
                            <div className="relative w-full sm:w-1/2">
                                <div
                                    className="bg-white border border-[#c6d0d5] rounded-md p-2 cursor-pointer app-font"
                                    onClick={() => setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen)}
                                >
                                    {formData.department
                                        ? departments.find(dept => dept._id === formData.department)?.departmentName
                                        : 'Select Department'}
                                </div>

                                {isDepartmentDropdownOpen && (
                                    <div className="absolute z-10 bg-white border border-[#c6d0d5] rounded-md w-full mt-1 max-h-48 overflow-y-auto">
                                        {departments?.map(department => (
                                            <div
                                                key={department._id}
                                                className="p-2 hover:bg-gray-200 cursor-pointer app-font capitalize"
                                                onClick={() => {
                                                    setFormData({ ...formData, department: department._id });
                                                    setIsDepartmentDropdownOpen(false);
                                                }}
                                            >
                                                {department.departmentName}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Custom Role Dropdown */}
                            <div className={`relative w-full sm:w-1/2 ${!formData.department ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                <div
                                    className={`bg-white border border-[#c6d0d5] rounded-md p-2 cursor-pointer app-font ${!formData.department ? 'pointer-events-none' : ''}`}
                                    onClick={() => {
                                        if (formData.department) {
                                            setIsRoleDropdownOpen(!isRoleDropdownOpen);
                                        }
                                    }}
                                >
                                    {formData.role
                                        ? filteredRoles.find(role => role._id === formData.role)?.roleName
                                        : 'Select Role'}
                                </div>

                                {isRoleDropdownOpen && formData.department && (
                                    <div className="absolute app-font capitalize z-10 bg-white border border-[#c6d0d5] rounded-md w-full mt-1 max-h-48 overflow-y-auto">
                                        {filteredRoles?.map(role => (
                                            <div
                                                key={role._id}
                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                onClick={() => {
                                                    setFormData({ ...formData, role: role._id });
                                                    setIsRoleDropdownOpen(false);
                                                }}
                                            >
                                                {role.roleName}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="w-full sm:w-1/2">
                                <Input
                                    type="number"
                                    name="employeeSalary"
                                    value={formData.employeeSalary}
                                    onChange={handleChange}
                                    label="Salary"
                                    size="lg"
                                    color='green'
                                    className=' app-font'
                                    style={{ fontSize: '16px' }} // Add this to prevent zooming

                                />
                            </div>
                        </div>

                        {/* Employee Name and Father/Husband Name */}
                        <div className="flex flex-col sm:flex-row gap-4">

                            <div className="w-full sm:w-1/2">
                                <Input
                                    type="text"
                                    name="fatherOrHusbandName"
                                    value={formData.fatherOrHusbandName}
                                    onChange={handleChange}
                                    label="Father or Husband Name"
                                    size="lg"
                                    color='green'
                                    style={{ fontSize: '16px' }} // Add this to prevent zooming

                                />
                            </div>

                            <div className="w-full sm:w-1/2">
                                <Select
                                    label="Sex"
                                    name="sex"
                                    value={formData.sex}
                                    onChange={(e) => handleChange({ target: { name: 'sex', value: e } })}
                                >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </Select>
                            </div>
                        </div>

                        {/* Sex and Marital Status */}
                        <div className="flex flex-col sm:flex-row gap-4">

                            <div className="w-full sm:w-1/2">
                                <Select
                                    label="Marital Status"
                                    name="maritalStatus"
                                    value={formData.maritalStatus}
                                    onChange={(e) => handleChange({ target: { name: 'maritalStatus', value: e } })}
                                >
                                    <Option value="single">Single</Option>
                                    <Option value="married">Married</Option>
                                    <Option value="divorced">Divorced</Option>
                                    <Option value="widowed">Widowed</Option>
                                </Select>
                            </div>

                            <div className="w-full sm:w-1/2">
                                <Input
                                    type="text"
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                    label="Blood Group"
                                    size="lg"
                                    color='green'
                                    style={{ fontSize: '16px' }} // Add this to prevent zooming

                                />
                            </div>
                        </div>

                        {/* Blood Group, Present Address, and Permanent Address */}
                        <div className="flex flex-col sm:flex-row gap-4">

                            <div className="w-full sm:w-1/2">
                                <Input
                                    type="text"
                                    name="presentAddress"
                                    value={formData.presentAddress}
                                    onChange={handleChange}
                                    label="Present Address"
                                    size="lg"
                                    color='green'
                                    style={{ fontSize: '16px' }} // Add this to prevent zooming

                                />
                            </div>
                            <div className="w-full sm:w-1/2">
                                <Input
                                    type="text"
                                    name="permanentAddress"
                                    value={formData.permanentAddress}
                                    onChange={handleChange}
                                    label="Permanent Address"
                                    size="lg"
                                    color='green'
                                    style={{ fontSize: '16px' }} // Add this to prevent zooming

                                />
                            </div>
                        </div>

                        {/* Date of Birth and Date of Joining */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-1/2">
                                <Input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    label="Date of Birth"
                                    size="lg"
                                    color='green'
                                    style={{ fontSize: '16px' }} // Add this to prevent zooming

                                />
                            </div>
                            <div className="w-full sm:w-1/2">
                                <Input
                                    type="date"
                                    name="dateOfJoining"
                                    value={formData.dateOfJoining}
                                    onChange={handleChange}
                                    label="Date of Joining"
                                    size="lg"
                                    color='green'
                                    style={{ fontSize: '16px' }} // Add this to prevent zooming

                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Typography variant="small" color="blue-gray" className=' app-font'>
                                Upload Employee Documents (PDF only)
                            </Typography>

                            <div className=" border border-green-300 ">
                                <p className='text-sm font-bold bg-green-100 p-1 mb-3 text-green-700'>Employee AdharCard</p>
                                <div className="px-2">
                                    <input
                                        type="file"
                                        ref={fileInputRefAdharCard}
                                        name="employeeAdharCard"
                                        onChange={handleFileChange}
                                        accept="application/pdf"
                                        className="block w-full text-sm text-green-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer mb-2"
                                    />
                                </div>
                            </div>

                            {pdfPreviews.employeeAdharCard && (
                                <div className="mt-2">
                                    <Typography variant="small" color="blue-gray" className=' app-font  mb-2 text-md text-green-700'>Preview:</Typography>
                                    <embed src={pdfPreviews.employeeAdharCard} width="100%" height="500px" type="application/pdf" />
                                </div>
                            )}


                            <div className=" border border-green-300 ">
                                <p className=' text-sm font-bold bg-green-100 p-1 mb-3 text-green-700'>Employee Pan Card</p>
                                <div className="px-2">
                                    <input
                                        type="file"
                                        ref={fileInputRefPanCard}
                                        name="employeePanCard"
                                        onChange={handleFileChange}
                                        accept="application/pdf"
                                        className="block w-full text-sm text-green-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer mb-2"
                                    />
                                </div>
                            </div>

                            {pdfPreviews.employeePanCard && (
                                <div className="mt-2">
                                    <Typography variant="small" color="blue-gray" className=' app-font  mb-2 text-md text-green-700'>Preview:</Typography>
                                    <embed src={pdfPreviews.employeePanCard} width="100%" height="500px" type="application/pdf" />
                                </div>
                            )}


                            <div className=" border border-green-300 ">
                                <p className=' text-sm font-bold bg-green-100 p-1 mb-3 text-green-700'>Employee Agreement</p>
                                <div className="px-2">
                                    <input
                                        type="file"
                                        ref={fileInputRefAgreement}
                                        name="employeeAgreement"
                                        onChange={handleFileChange}
                                        accept="application/pdf"
                                        className="block w-full text-sm text-green-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer mb-2"
                                    />
                                </div>
                            </div>


                            {pdfPreviews.employeeAgreement && (
                                <div className="mt-2">
                                    <Typography variant="small" color="blue-gray" className=' app-font mb-2 text-md text-green-700'>Preview:</Typography>
                                    <embed src={pdfPreviews.employeeAgreement} width="100%" height="500px" type="application/pdf" />
                                </div>
                            )}

                        </div>

                        <Button
                            type="submit"
                            variant=''
                            color="green"
                            className=' hover:shadow-none shadow-none'
                            fullWidth disabled={isLoading}>
                            {isLoading ? 'Adding...' : 'Add Employee'}
                        </Button>
                    </form>
                </CardBody>
            </div>
        </div>
    );
};

export default AddEmployeeForm;
