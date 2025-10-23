'use client';

import { getLocationLatLongList } from '@/lib/location-info';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocationList = async () => {
      const locationList = await getLocationLatLongList();
      setLocations(locationList);
    };

    getLocationList();
  }, []);

  return (
    <div className="relative">
      <button onClick={() => setShowLocationList(!showLocationList)}>
        <Image
          className="size-9"
          src="link.svg"
          width={36}
          height={36}
          alt="link icon"
        />
      </button>

      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] h-96 overflow-y-auto rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations.map((info) => (
              <li
                key={info.location}
                className="pl-2 rounded hover:bg-slate-200"
              >
                <Link
                  href={`/${info.location}?latitude=${info.latitude}&longitude=${info.longitude}`}
                  className="block w-full"
                >
                  {info.location}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
