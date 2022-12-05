import mongoose from "mongoose";

const db = "";

const connectDB = (url: any) => {
  return mongoose.connect(url);
};
export default connectDB;
