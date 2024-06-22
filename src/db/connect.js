import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler";
import { DB_NAME } from "../constant.js";

const connectDb = asyncHandler(async () => {
  const connectionInstance = await mongoose.connect(
    `${process.env.MONGO_URL}/${DB_NAME}`
  );
  console.log(
    "MongoDB connected on host: ",
    connectionInstance.connection.host
  );
});
export default connectDb;
