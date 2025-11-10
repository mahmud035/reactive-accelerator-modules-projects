import { useContext, useEffect, useState } from 'react';
import Header from '../components/header/Header';
import WeatherBoard from '../components/weather/WeatherBoard';
import { WeatherContext } from '../contexts/WeatherContext';

import ClearSkyImage from '../assets/backgrounds/clear-sky.jpg';
import FewCloudsImage from '../assets/backgrounds/few-clouds.jpg';
import MistImage from '../assets/backgrounds/mist.jpeg';
import RainyDayImage from '../assets/backgrounds/rainy-day.jpg';
import ScatteredCloudsImage from '../assets/backgrounds/scattered-clouds.jpg';
import SnowImage from '../assets/backgrounds/sunny.jpg';
import ThunderStormImage from '../assets/backgrounds/thunderstorm.jpg';
import WinterImage from '../assets/backgrounds/winter.jpg';

const HomePage = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  const { climate } = weatherData;
  const [climateImage, setClimateImage] = useState('');

  const getBackgroundImage = (climate) => {
    switch (climate) {
      case 'Rain':
        return RainyDayImage;
      case 'Clouds':
        return ScatteredCloudsImage;
      case 'Clear':
        return ClearSkyImage;
      case 'Snow':
        return SnowImage;
      case 'Thunder':
        return ThunderStormImage;
      case 'Fog':
        return WinterImage;
      case 'Haze':
        return FewCloudsImage;
      case 'Mist':
        return MistImage;
      default:
        return ClearSkyImage;
    }
  };

  useEffect(() => {
    const bgImage = getBackgroundImage(climate);
    setClimateImage(bgImage);
  }, [climate]);

  return (
    <>
      {loading.state ? (
        <div className="flex p-8 mx-auto bg-gray-200 rounded-md w-96 mt-14">
          <p className="text-3xl text-center text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="grid w-screen h-screen bg-no-repeat bg-cover place-items-center"
        >
          <Header />
          <main>
            <WeatherBoard />
          </main>
        </div>
      )}
    </>
  );
};

export default HomePage;
