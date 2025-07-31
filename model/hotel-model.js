import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema({
  name: {
    require: true,
    type: String,
  },
  address1: {
    require: true,
    type: String,
  },
  airportCode: {
    require: true,
    type: String,
  },
  city: {
    require: true,
    type: String,
  },
  countryCode: {
    require: false,
    type: String,
  },
  highRate: {
    require: false,
    type: Number,
  },
  lowRate: {
    required: false,
    type: Number,
  },
  location: {
    require: false,
    type: Object,
  },
  locationDescription: {
    require: false,
    type: String,
  },
  postalCode: {
    require: false,
    type: Number,
  },
  propertyCategory: {
    required: false,
    type: Number,
  },
  thumbNailUrl: {
    required: false,
    type: String,
  },
  stateProvinceCode: {
    required: false,
    type: String,
  },
  thumbNailUrl: {
    required: false,
    type: String,
  },
  gallery: {
    required: false,
    type: Array,
  },
  overview: {
    required: false,
    type: String,
  },
  amenities: {
    required: false,
    type: Array,
  },
});

export const hotelModel =
  mongoose.models.hotels || mongoose.model("hotels", hotelSchema);
