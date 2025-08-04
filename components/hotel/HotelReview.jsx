import { getReviewsForAHotel } from "@/database/queries";
import Link from "next/link";
import React from "react";

const HotelReview = async ({ id }) => {
  const review = await getReviewsForAHotel(id);
  
  return (
    <>
      {review?.length === 0 ? (
        <Link href={"#"}>Be the first one of review</Link>
      ) : (
        <Link href={`/hotel/review/${id}`}>{review?.length} Review</Link>
      )}
    </>
  );
};

export default HotelReview;
