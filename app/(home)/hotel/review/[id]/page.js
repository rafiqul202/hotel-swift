import { getReviewsForAHotel } from "@/database/queries";

const SingleReviewPage = async ({ params }) => {
  const reviewId = await params?.id;
  const hotelReview = await getReviewsForAHotel(reviewId);
  
  return (
    <div>
      {hotelReview?.map((review) => (
        <h3 key={review?.id}>{review?.review}</h3>
      ))}
    </div>
  );
};

export default SingleReviewPage;
