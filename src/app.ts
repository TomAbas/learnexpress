import express from "express";
const app = express();
const port = 3000;
import tasks from "./routes/tasks";
import connectDB from "./db/connect";
import * as dotenv from "dotenv";
import { notFound } from "./middleware/not-found";
import errorHandler from "./middleware/error-handler";
dotenv.config();
//middleware

app.use(express.static("src/01-task-manager/starter/public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);
//
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log("run !!!");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
