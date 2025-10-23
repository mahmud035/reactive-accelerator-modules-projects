import { useContext } from 'react';
import cloudIcon from '../../assets/icons/cloud.svg';
import humidityIcon from '../../assets/icons/humidity.svg';
import tempMaxIcon from '../../assets/icons/temp-max.svg';
import tempMinIcon from '../../assets/icons/temp-min.svg';
import windIcon from '../../assets/icons/wind.svg';
import { WeatherContext } from '../../contexts/WeatherContext';

const WeatherCondition = () => {
  const { weatherData } = useContext(WeatherContext);
  const {
    climate,
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
  } = weatherData;

  return (
    <div>
      <p className="mb-8 text-sm font-bold uppercase lg:text-lg">
        The climate is <u>{climate}</u>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemperature)}°</p>
            <img src={tempMaxIcon} alt="temp-max" />
          </div>
        </li>
        <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemperature)}°</p>
            <img src={tempMinIcon} alt="temp-min" />
          </div>
        </li>
        <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
          <span>Humidity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={humidityIcon} alt="humidity" />
          </div>
        </li>
        <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={cloudIcon} alt="cloudy" />
          </div>
        </li>
        <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(wind)} km/h</p>
            <img src={windIcon} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WeatherCondition;
