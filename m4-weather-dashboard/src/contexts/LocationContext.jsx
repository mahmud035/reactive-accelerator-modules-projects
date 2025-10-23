import { createContext, useState } from 'react';

export const LocationContext = createContext('');

const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    location: '',
    latitude: 0,
    longitude: 0,
  });

  const locationInfo = {
    selectedLocation,
    setSelectedLocation,
  };

  return (
    <LocationContext.Provider value={locationInfo}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
