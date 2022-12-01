import express, { NextFunction, Request, Response } from "express";
import { people, products } from "./data";
import morgan from "morgan";
import { logger } from "./middleware/logger";
import { authorize } from "./middleware/authorize";
const app = express();

//req => middleware => res
app.use(morgan("tiny"));
// app.use(express.static("src/public"));
// app.use([authorize, logger]);

// app.use("/about", authorize);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>home</h1>");
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
