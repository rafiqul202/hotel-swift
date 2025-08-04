import Summary from "@/components/hotel/details/Summary"
import Gallery from "@/components/hotel/details/Gallery"
import Overview from "@/components/hotel/details/Overview"
import { getHotelById } from "@/database/queries"

const HotelDetailsPage = async ({ params:{id} }) => {

  const singleHotel = await getHotelById(id);
  console.log(singleHotel)
  return (
    <>
  
      <Summary hotelInfo={ singleHotel} />
        <Gallery gallery={singleHotel?.gallery} />
      <Overview overview={ singleHotel?.overview} />
    </>
  )
}

export default HotelDetailsPage