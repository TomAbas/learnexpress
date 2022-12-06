import express from "express";
import dotenv from "dotenv";
import { notFound } from "./middleware/not-found";
import { errorHandler } from "./middleware/error-handler";
import connectDB from "./db/connect";
const env = dotenv.config();
const app = express();
const port = process.env.PORT || 6969;
//middleware
app.use(express.json());
app.use(notFound);
app.use(errorHandler);
//route
app.use('/api/v1/products',)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log("start");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
