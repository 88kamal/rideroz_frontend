/* eslint-disable react/prop-types */
import { useState } from 'react';
import MyContext from './myContext';

function MyState(props) {
    const [lat, setLat] = useState(null);  // Replace with actual latitude
    const [lng, setLng] = useState(null);  // Replace with actual longitude
    const [vehicleCity, setVehicleCity] = useState('');  // Optional city
    const [vehicleType, setVehicleType] = useState('');  // Optional type


  return (
    <MyContext.Provider value={{
        lat, setLat,
        lng, setLng,
        vehicleType, setVehicleType,
        vehicleCity, setVehicleCity
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState