'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set('latitude', position.coords.latitude);
        params.set('longitude', position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [router, searchParams, pathname]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-slate-700">
      {loading && (
        <>
          <Image
            src="/network.gif"
            className="my-4 border rounded-md"
            width={500}
            height={500}
            alt="Loading"
          />
          <p className="text-4xl text-center">Detecting Location...</p>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
