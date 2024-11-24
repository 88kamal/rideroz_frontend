import { useEffect, useState } from 'react';
import { useAddRoleMutation } from '../../../redux/slices/roleApiSlice';
import { Button, Input, CardBody, Typography } from '@material-tailwind/react';
import toast from 'react-hot-toast';
import { useGetDepartmentsQuery } from '../../../redux/slices/departmentApiSlice';

const AddRoleForm = () => {
    const [roleName, setRoleName] = useState('');
    const [roleCode, setRoleCode] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState({ name: '', id: '' });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { data: departments } = useGetDepartmentsQuery();
    const [addRole, { isLoading, isSuccess, isError, error, data }] = useAddRoleMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addRole({
                roleName,
                roleCode,
                departmentName: selectedDepartment.id  // Send the department ID as departmentName
            }).unwrap();
            setRoleName('');
            setRoleCode('');
            setSelectedDepartment({ name: '', id: '' });
        } catch (err) {
            console.error('Failed to add role:', err);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'Failed to add role, please try again');
        }

        if (isSuccess) {
            toast.success(data?.message);
        }
    }, [isError, error, isSuccess, data]);

    // Close dropdown when clicked outside
    useEffect(() => {
        const closeDropdown = (e) => {
            if (!e.target.closest('.dropdown')) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-2xl bg-white border border-green-300 rounded-md">
                <CardBody>
                    {/* <pre>Add Role : {JSON.stringify({
                        roleCode,
                        roleName,
                        departmentName: selectedDepartment.id
                    }, null, 2)}</pre> */}

                    <Typography variant="h5" color="blue-gray" className="mb-4">
                        Add New Role
                    </Typography>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Role Name */}
                        <div>
                            <Input
                                type="text"
                                label="Role Name"
                                value={roleName}
                                onChange={(e) => setRoleName(e.target.value)}
                                color="green"
                                size="lg"
                                placeholder="Enter role name"
                                className="app-font"
                                style={{ fontSize: '16px' }} // Add this to prevent zooming
                            />
                        </div>

                        {/* Role Code */}
                        <div>
                            <Input
                                type="number"
                                label="Role Code"
                                value={roleCode}
                                onChange={(e) => setRoleCode(e.target.value)}
                                color="green"
                                size="lg"
                                placeholder="Enter role code"
                                className="app-font"
                                style={{ fontSize: '16px' }} // Add this to prevent zooming

                            />
                        </div>

                        {/* Custom Select Department */}
                        <div className="relative dropdown">
                            <div
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-3 py-2 border border-[#607d8b] rounded-lg cursor-pointer focus:outline-none app-font text-[#607d8b]"
                            >
                                {selectedDepartment.name || "Select department"}
                            </div>
                            {isDropdownOpen && (
                                <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                                    {departments.map((department) => (
                                        <li
                                            key={department._id}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer app-font"
                                            onClick={() => {
                                                setSelectedDepartment({ name: department.departmentName, id: department._id });
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {department?.departmentName}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white font-bold rounded-lg transition duration-200`}
                            size="lg"
                            disabled={isLoading || !roleName || !roleCode || !selectedDepartment.id}
                        >
                            {isLoading ? 'Adding...' : 'Add Role'}
                        </Button>
                    </form>
                </CardBody>
            </div>
        </div>
    );
};

export default AddRoleForm;
