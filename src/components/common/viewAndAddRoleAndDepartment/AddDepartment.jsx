// import { useEffect, useState } from 'react';
// import { useAddDepartmentMutation } from '../../../redux/slices/departmentApiSlice';
// import toast from 'react-hot-toast';
// import { Button, Input, Card, CardBody, Typography } from '@material-tailwind/react';

// const AddDepartment = () => {
//     const [departmentName, setDepartmentName] = useState('');
//     const [addDepartment, { isLoading, isSuccess, isError, error, data }] = useAddDepartmentMutation();

//     const handleAddDepartment = async () => {
//         try {
//             await addDepartment({ departmentName }).unwrap();
//             setDepartmentName(''); // Reset input field
//         } catch (err) {
//             console.error('Failed to add department:', err);
//         }
//     };

//     useEffect(() => {
//         if (isError) {
//             toast.error(error?.data?.error);
//         }

//         if (isSuccess) {
//             toast.success(data?.message);
//         }
//         return undefined; // Optional, just to clarify no cleanup function is being used
//     }, [isError, error, isSuccess, data]);

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <Card className="w-full max-w-md shadow-lg">
//                 <CardBody>
//                     <Typography variant="h5" color="blue-gray" className="mb-4">
//                         Add Department
//                     </Typography>

//                     <div className="mb-4">
//                         <Input
//                             type="text"
//                             label="Department Name"
//                             value={departmentName}
//                             onChange={(e) => setDepartmentName(e.target.value)}
//                             size="lg"
//                         />
//                     </div>

//                     <Button
//                         onClick={handleAddDepartment}
//                         disabled={isLoading}
//                         fullWidth
//                         className="bg-blue-500 hover:bg-blue-600 text-white"
//                     >
//                         {isLoading ? 'Adding...' : 'Add Department'}
//                     </Button>

//                     {/* Error and success messages */}
//                     <pre className="mt-4 text-xs text-gray-600">
//                         {JSON.stringify({ data, error }, null, 2)}
//                     </pre>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// export default AddDepartment;


import { useEffect, useState } from 'react';
import { useAddDepartmentMutation } from '../../../redux/slices/departmentApiSlice';
import toast from 'react-hot-toast';
import { Button, Input, CardBody, Typography } from '@material-tailwind/react';

const AddDepartment = () => {
    const [departmentName, setDepartmentName] = useState('');
    const [addDepartment, { isLoading, isSuccess, isError, error, data }] = useAddDepartmentMutation();

    const handleAddDepartment = async () => {
        try {
            await addDepartment({ departmentName }).unwrap();
            setDepartmentName(''); // Reset input field
        } catch (err) {
            console.error('Failed to add department:', err);
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.error || 'An error occurred. Please try again.');
        }

        if (isSuccess) {
            toast.success(data?.message);
        }
    }, [isError, isSuccess, error, data]);

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-2xl border border-green-300 bg-white rounded-md">

                <CardBody>
                {/* <pre>Add Department : {JSON.stringify({isLoading, isSuccess, isError, error, data},null,2)}</pre> */}

                    <Typography variant="h5" color="blue-gray" className="mb-4">
                        Add Department
                    </Typography>

                    <div className="mb-4">
                        <Input
                            type="text"
                            label="Department Name"
                            value={departmentName}
                            onChange={(e) => setDepartmentName(e.target.value)}
                            size="lg"
                            color='green'
                        />
                    </div>

                    <Button
                    variant=''
                        onClick={handleAddDepartment}
                        disabled={isLoading || !departmentName.trim()}
                        fullWidth
                        className={`bg-green-500 hover:bg-green-600 text-white hover:shadow-none shadow-none ${isLoading && 'cursor-not-allowed'}`}
                    >
                        {isLoading ? 'Adding...' : 'Add Department'}
                    </Button>
                </CardBody>
            </div>
        </div>
    );
};

export default AddDepartment;
