import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({ hotelInfo }) => {
 
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={hotelInfo?.thumbNailUrl}
        className="max-h-[162px] max-w-[240px]"
        alt="Main Image"
        width={250}
        height={250}
      />
      <HotelSummaryInfo fromListPage={true} info={hotelInfo} />
    </div>
  );
};

export default HotelCard;
