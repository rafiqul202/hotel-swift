import { hotelModel } from "@/model/hotel-model";
import { ratingModel } from "@/model/rating-model";
import { reviewModel } from "@/model/review-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";

export async function getAllHotels() {
  const hotels = await hotelModel.find().select(["thumbNailUrl","name","highRate","lowRate","city","propertyCategory"]).lean();
  return replaceMongoIdInArray(hotels);
}

export async function getRatingsForAHotel(hotelId) {
  const rating = await ratingModel.find({ hotelId: hotelId }).lean();
  return replaceMongoIdInArray(rating)
  
}

export async function getReviewsForAHotel(hotelId) {
  const review = await reviewModel.find({ hotelId: hotelId }).lean();
  return replaceMongoIdInArray(review);
}

export async function getHotelById(id) {
  const hotelId = await hotelModel.findById(id).lean();
 return replaceMongoIdInObject(hotelId)
}