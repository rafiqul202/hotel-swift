import { hotelModel } from "@/model/hotel-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

export async function getAllHotels() {
  const hotels = await hotelModel.find().lean();
  return replaceMongoIdInArray(hotels);
}
