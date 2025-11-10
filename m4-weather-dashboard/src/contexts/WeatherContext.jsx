import { createContext } from 'react';
import useWeather from '../hooks/useWeather';

export const WeatherContext = createContext('');

const WeatherProvider = ({ children }) => {
  const { weatherData, loading, error } = useWeather();

  const weatherInfo = {
    weatherData,
    loading,
    error,
  };

  return (
    <WeatherContext.Provider value={weatherInfo}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
