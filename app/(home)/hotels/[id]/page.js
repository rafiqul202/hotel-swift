import Summary from "@/components/hotel/details/Summary";
import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import { getHotelById } from "@/database/queries";

const HotelDetailsPage = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  const singleHotel = await getHotelById(id, checkin, checkout);

  return (
    <>
      <Summary hotelInfo={singleHotel} checkin={checkin} checkout={checkout} />
      <Gallery gallery={singleHotel?.gallery} />
      <Overview overview={singleHotel?.overview} />
    </>
  );
};

export default HotelDetailsPage;
