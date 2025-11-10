import Link from 'next/link';
import Card from './Card';

const NoLocationInfo = ({ location }) => {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold">
          No location info available for &quot;{location}&quot;
        </p>
        <Link
          href="http://localhost:3000/"
          className="px-3 py-1.5 bg-teal-500 rounded w-fit"
        >
          Find your location
        </Link>
      </div>
    </Card>
  );
};

export default NoLocationInfo;
