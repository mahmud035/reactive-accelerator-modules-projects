import { getLocationData } from '@/lib/location-info';
import LocationSwitcher from './LocationSwitcher';

const LocationInfo = async ({ lat, lon }) => {
  const locationInfo = await getLocationData(lat, lon);

  return (
    <div className="flex flex-col justify-end col-span-12 lg:col-span-8 2xl:col-span-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {locationInfo?.continent}
          </h2>

          <LocationSwitcher />
        </div>

        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {locationInfo?.countryName} | {locationInfo?.city}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{new Date().toLocaleTimeString()}</span>{' '}
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
