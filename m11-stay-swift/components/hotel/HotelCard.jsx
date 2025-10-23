import Image from 'next/image';
import HotelSummaryInfo from './HotelSummaryInfo';

const HotelCard = () => {
  return (
    <div className="flex gap-6 p-4 border rounded-md border-gray/20">
      <Image
        src="/images/image-1.png"
        className="max-w-[240px] max-h-[162px]"
        alt=""
        width={240}
        height={162}
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
