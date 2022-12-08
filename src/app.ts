import express, { Application } from "express";
require("express-async-errors");
import dotenv from "dotenv";
import { notFound } from "./middleware/not-found";
import { errorHandler } from "./middleware/error-handler";
import connectDB from "./db/connect";
import productsRoute from "./routes/products";
import Controller from "./interfaces/controller.interface";
import mongoose from "mongoose";
const env = dotenv.config();

// let oldApp = ()=>{
//   const app = express();
//   const port = process.env.PORT || 6969;

//   app.use(express.json());
//   app.use("/api/v1/products", productsRoute);
//   //middleware
//   app.use(notFound);
//   app.use(errorHandler);

//   //route

//   const start = async () => {
//     try {
//       await connectDB(process.env.MONGO_URL);
//       app.listen(port, () => {
//         console.log("start");
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   start();
// }

class App {
  public express: Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;

    this.connectDataBase();
    this.useMiddleware();
    this.useController(controllers);
    this.notFoundHandling();
    this.ErrorHandling();
  }

  private useMiddleware(): void {
    this.express.use(express.json());
  }
  private ErrorHandling(): void {
    this.express.use(errorHandler);
  }
  private notFoundHandling(): void {
    this.express.use(notFound);
  }
  private useController(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.express.use("/api/v1", controller.router);
    });
  }
  private async connectDataBase() {
    const url: any = process.env.MONGO_URL;
    await mongoose.connect(url).then();
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Here we are at port $${this.port}`);
    });
  }
}

export default App;
