import { bookingModel } from "@/model/booking-model";
import { hotelModel } from "@/model/hotel-model";
import { ratingModel } from "@/model/rating-model";
import { reviewModel } from "@/model/review-model";
import { userModel } from "@/model/user-model";
import {
  isDateInBetween,
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

export async function getAllHotels(destination, checkin, checkout) {
  const regex = new RegExp(destination, "i");

  const hotelsByDestination = await hotelModel
    .find({ city: { $regex: regex } })
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();
  let allHotels = hotelsByDestination;
  if (checkin && checkout) {
    allHotels = await Promise.all(
      allHotels?.map(async (hotel) => {
        const found = await findBooking(hotel?._id, checkin, checkout);
        if (found) {
          hotel["isBooked"] = true;
        } else {
          hotel["isBooked"] = false;
        }
        return hotel;
      })
    );
  }
  return replaceMongoIdInArray(allHotels);
}

async function findBooking(hotelId, checkin, checkout) {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();
  const found = matches?.find((match) => {
    return (
      isDateInBetween(checkin, match.checkin, match.checkout) ||
      isDateInBetween(checkout, match.checkin, match.checkout)
    );
  });
  return found;
}

export async function getRatingsForAHotel(hotelId) {
  const rating = await ratingModel.find({ hotelId: hotelId }).lean();
  return replaceMongoIdInArray(rating);
}

export async function getReviewsForAHotel(hotelId) {
  const review = await reviewModel.find({ hotelId: hotelId }).lean();
  return replaceMongoIdInArray(review);
}

export async function getHotelById(id, checkin, checkout) {
  const hotel = await hotelModel.findById(id).lean();
  if (checkin && checkout) {
    const found = await findBooking(hotel?._id, checkin, checkout);
    if (found) {
      hotel["isBooked"] = true;
    } else {
      hotel["isBooked"] = false;
    }
  }
  return replaceMongoIdInObject(hotel);
}
export async function getUserByEmail(email) {
  const users = await userModel.find({ email: email }).lean();
  return replaceMongoIdInObject(users[0]);
}
