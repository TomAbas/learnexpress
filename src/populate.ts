import dotenv from "dotenv";
import connectDB from "./db/connect";
import products from "./model/products";
const env = dotenv.config();
// import productsData from "./products.json";
const productsData = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await products.deleteMany();
    await products.create(productsData);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
