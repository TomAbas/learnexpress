import express from "express";
require("express-async-errors");
import dotenv from "dotenv";
import { notFound } from "./middleware/not-found";
import { errorHandler } from "./middleware/error-handler";
import connectDB from "./db/connect";
import productsRoute from "./routes/products";
const env = dotenv.config();
const app = express();
const port = process.env.PORT || 6969;

app.use(express.json());
app.use("/api/v1/products", productsRoute);
//middleware
app.use(notFound);
app.use(errorHandler);

//route

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
