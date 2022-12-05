import express, { Request, Response } from "express";
import { stringify } from "querystring";
import peopleRoute from "./routes/people";
import login from "./routes/auth";
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
app.use(express.static("src/methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/people", peopleRoute);

app.use("/login", login);

start();
