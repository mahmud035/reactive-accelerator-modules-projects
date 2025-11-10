import Image from 'next/image';
import '../globals.css';

const LocationLayout = ({ children, aqi, temperature, weather, wind }) => {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        className="bg-img"
        width={700}
        height={1200}
        alt="backgroundImage"
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 py-16 gap-y-8 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {temperature}
            {aqi}
            {wind}
            {weather}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocationLayout;
