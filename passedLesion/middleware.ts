import express, { NextFunction, Request, Response } from "express";
import { people, products } from "./data";
import { logger } from "./middleware/logger";
import { authorize } from "./middleware/authorize";
import morgan from "morgan";
const app = express();

//req => middleware => res
// app.use([authorize, logger]);
// app.use("/", authorize);
// app.use(express.static("src/public"));
app.use(morgan("tiny"));
app.get("/", (req: Request, res: Response) => {
  res.send("home");
});
app.get("/about", (req: Request, res: Response) => {
  console.log(req.name);
  res.send("about");
});

app.get("/login", (req: Request, res: Response) => {
  res.send("login");
});
app.listen(6868, () => {
  console.log("voo");
});
