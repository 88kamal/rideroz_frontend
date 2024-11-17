/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import authService from '../../services/authService';
import { useGetUserByIdQuery } from '../../redux/slices/userApiSlice';

const UploadAdharImage = ({ formData, setFormData }) => {
    const user = authService.getCurrentUser();
    const userId = user?.id;
    const { data: getUserById, error, isLoading } = useGetUserByIdQuery(userId);
    const canUploadAdharcard = getUserById?.user?.adharcardImg?.length === 0;

    const [previewUrls, setPreviewUrls] = useState([]);

    // Generate preview URLs whenever the adharcardImg in formData changes
    useEffect(() => {
        if (formData.adharcardImg && formData.adharcardImg.length > 0) {
            const objectUrls = formData.adharcardImg.map((file) => 
                URL.createObjectURL(file)
            );
            setPreviewUrls(objectUrls);

            // Clean up the URL objects when the component unmounts or the images change
            return () => {
                objectUrls.forEach((url) => URL.revokeObjectURL(url));
            };
        }
    }, [formData.adharcardImg]);

    // Handler for file input change
    const handleFileChange = (event) => {
        let files = Array.from(event.target.files);
        if (files.length > 2) {
            files = files.slice(0, 2); // Take only the first two files
            alert('You can only upload a maximum of 2 images.');
        }
        setFormData({
            ...formData,
            adharcardImg: files // Update formData with the selected files array
        });
    };

    return (
        <div>
            {/* <pre>{JSON.stringify(formData.adharcardImg, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(getUserById, null, 2)}</pre> */}

            {canUploadAdharcard && (
                <div>
                    <h3 className=' app-font mb-2 font-medium mt-2'>Upload Adhar Card Images (Front And Back)</h3>
                    <div className=" border border-green-300 p-1 rounded">
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        multiple
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
                    />
                    </div>
                    {previewUrls.length > 0 && (
                        <div>
                            <h4 className=' app-font mb-2 font-bold'>Image Previews:</h4>
                            <div className=' flex justify-between items-center flex-wrap'>
                                {previewUrls.map((url, index) => (
                                    <img 
                                        key={index}
                                        src={url} 
                                        alt={`Adhar Card Preview ${index + 1}`} 
                                        // style={{ width: '200px', height: 'auto', marginTop: '10px' }} 
                                        className=' w-full h-auto mb-2 lg:mb-0  lg:w-44 lg:h-32 rounded-md border border-gray-400 shadow-md'
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default UploadAdharImage;
