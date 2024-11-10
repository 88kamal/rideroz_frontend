/* eslint-disable react/prop-types */
import { useState } from 'react';
import MyContext from './myContext';

function MyState(props) {
  const [lat, setLat] = useState(null);  // Replace with actual latitude
  const [lng, setLng] = useState(null);  // Replace with actual longitude
  const [vehicleCity, setVehicleCity] = useState('');  // Optional city
  const [vehicleType, setVehicleType] = useState('');  // Optional type
  const [selectedCity, setSelectedCity] = useState('');
  const [currentLocationName, setCurrentLocationName] = useState('');
  const [autoOpenLogin, setAutoOpenLogin] = useState(false);
  const [notificationToken, setNotificationToken] = useState('');

  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: 'success',
    duration: 5000,
  });

  // Function to trigger an alert
  const showAlert = (message, type = 'success', duration = 5000) => {
    setAlert({ show: true, message, type, duration });

    // Automatically hide the alert after the specified duration
    setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, duration);
  };
  return (
    <MyContext.Provider value={{
      lat, setLat,
      lng, setLng,
      vehicleType, setVehicleType,
      vehicleCity, setVehicleCity,
      selectedCity, setSelectedCity,
      currentLocationName, setCurrentLocationName,
      alert, showAlert,
      autoOpenLogin, setAutoOpenLogin,
      notificationToken, setNotificationToken
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState