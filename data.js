import React, { useState } from 'react';
import { useAddCityMutation } from './redux/slices/cityApiSlice';
import toast from 'react-hot-toast';

function AddCityForm() {
  const [cityName, setCityName] = useState('');
  const [cityState, setCityState] = useState('');
  const [cityImage, setCityImage] = useState(null); // State to hold the image file

  const [addCity, { isLoading, isError }] = useAddCityMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCityData = {
      cityName,
      cityState,
      cityImage, // Add the image file to the data
    };

    try {
      const response = await addCity(newCityData).unwrap();
      toast.success(`City added successfully: ${response.message}`);
      setCityName('');
      setCityState('');
      setCityImage(null); // Reset the image input
    } catch (error) {
      toast.error(`Failed to add city: ${error.message}`);
    }
  };

  const handleImageChange = (e) => {
    setCityImage(e.target.files[0]); // Set the selected image file
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="City Name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City State"
            value={cityState}
            onChange={(e) => setCityState(e.target.value)}
            required
          />
        </div>
        <div>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding City...' : 'Add City'}
        </button>
      </form>

      {isError && <p>Failed to add city</p>}
    </div>
  );
}

export default AddCityForm;
