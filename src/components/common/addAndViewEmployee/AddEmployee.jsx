import { useEffect, useRef, useState } from 'react';
import { CardBody, Input, Button, Typography } from '@material-tailwind/react';
import { useAddEmployeeMutation } from '../../../redux/slices/employeeApiSlice';
import toast from 'react-hot-toast';
import { useGetDepartmentsQuery } from '../../../redux/slices/departmentApiSlice';
import { useGetRolesQuery } from '../../../redux/slices/roleApiSlice';

const AddEmployeeForm = () => {
    const [formData, setFormData] = useState({
        employeeName: '',
        employeeEmail: '',
        employeeMobileNumber: '',
        department: '',
        role: '',
        employeeSalary: '',
        employeeAdharCard: null,
        employeePanCard: null,
        employeeAgreement: null,
        employeePhoto: null, // Added employeePhoto field
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

    const fileInputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        for (let key in formData) {
            formDataObj.append(key, formData[key]);
        }

        try {
            await addEmployee(formDataObj).unwrap();

            setFormData({
                employeeName: '',
                employeeEmail: '',
                employeeMobileNumber: '',
                department: '',
                role: '',
                employeeSalary: '',
                employeeAdharCard: null,
                employeePanCard: null,
                employeeAgreement: null,
                employeePhoto: null, // Added employeePhoto field
            })

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
                                />
                            </div>

                            {/* Custom Department Dropdown */}
                            <div className="relative w-full sm:w-1/2">
                                <div
                                    className="bg-white border border-[#c6d0d5] rounded-md p-2 cursor-pointer"
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
                                                className="p-2 hover:bg-gray-200 cursor-pointer"
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
                                    className={`bg-white border border-[#c6d0d5] rounded-md p-2 cursor-pointer ${!formData.department ? 'pointer-events-none' : ''}`}
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
                                    <div className="absolute z-10 bg-white border border-[#c6d0d5] rounded-md w-full mt-1 max-h-48 overflow-y-auto">
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
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Typography variant="small" color="blue-gray">
                                Upload Employee Documents (PDF only)
                            </Typography>

                            {/* <Input
                                type="file"
                                name="employeeAdharCard"
                                onChange={handleFileChange}
                                label="Adhar Card"
                                accept="application/pdf"
                                ref={fileInputRef}
                            /> */}
                            <div className=" border border-green-300 ">
                                <p className='text-sm font-bold bg-green-100 p-1 mb-3 text-green-700'>Employee AdharCard</p>
                                <div className="px-2">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        name="employeeAdharCard"
                                        onChange={handleFileChange}
                                        accept="application/pdf"
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer mb-2"
                                    />
                                </div>
                            </div>

                            {pdfPreviews.employeeAdharCard && (
                                <div className="mt-2">
                                    <Typography variant="small" color="blue-gray">Preview:</Typography>
                                    <embed src={pdfPreviews.employeeAdharCard} width="100%" height="500px" type="application/pdf" />
                                </div>
                            )}

                            {/* <Input
                                type="file"
                                name="employeePanCard"
                                onChange={handleFileChange}
                                label="Pan Card"
                                accept="application/pdf"
                                ref={fileInputRef}
                            /> */}

                            <div className=" border border-green-300 ">
                                <p className=' text-sm font-bold bg-green-100 p-1 mb-3 text-green-700'>Employee Pan Card</p>
                                <div className="px-2">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        name="employeePanCard"
                                        onChange={handleFileChange}
                                        accept="application/pdf"
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer mb-2"
                                    />
                                </div>
                            </div>

                            {pdfPreviews.employeePanCard && (
                                <div className="mt-2">
                                    <Typography variant="small" color="blue-gray">Preview:</Typography>
                                    <embed src={pdfPreviews.employeePanCard} width="100%" height="500px" type="application/pdf" />
                                </div>
                            )}

                            {/* <Input
                                type="file"
                                name="employeeAgreement"
                                onChange={handleFileChange}
                                label="Agreement"
                                accept="application/pdf"
                                ref={fileInputRef}
                            /> */}

                            <div className=" border border-green-300 ">
                                <p className=' text-sm font-bold bg-green-100 p-1 mb-3 text-green-700'>Employee Agreement</p>
                                <div className="px-2">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        name="employeeAgreement"
                                        onChange={handleFileChange}
                                        accept="application/pdf"
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer mb-2"
                                    />
                                </div>
                            </div>


                            {pdfPreviews.employeeAgreement && (
                                <div className="mt-2">
                                    <Typography variant="small" color="blue-gray">Preview:</Typography>
                                    <embed src={pdfPreviews.employeeAgreement} width="100%" height="500px" type="application/pdf" />
                                </div>
                            )}

                            {/* <Typography variant="small" color="blue-gray">
                                Upload Employee Photo (Image only)
                            </Typography>

                            <Input
                                type="file"
                                name="employeePhoto"
                                onChange={handleFileChange}
                                label="Employee Photo"
                                accept="image/*"
                            />
                            {photoPreview && (
                                <div className="mt-2">
                                    <Typography variant="small" color="blue-gray">Photo Preview:</Typography>
                                    <img src={photoPreview} alt="Employee" className="w-full h-auto" />
                                </div>
                            )} */}
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
