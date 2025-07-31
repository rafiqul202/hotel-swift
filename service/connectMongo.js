const mongoose = require("mongoose");

// A Guide to Building an API Server with Nextjs 14, Mongoose, and Cypress

const MONGO_URI = process.env.MONGO_URI;
const cached = {};
async function connectMongo() {
  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local"
    );
  }
  if (cached.connection) {
    return cached.connection;
    console.log("cached the connect successfully connect");
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts);
  }
  try {
    cached.connection = await cached.promise;
    console.log("connection successfully connect");
  } catch (e) {
    cached.promise = undefined;
    console.log("not connect mongodb database ");
    throw e;
  }
  return cached.connection;
}
module.exports = connectMongo;
