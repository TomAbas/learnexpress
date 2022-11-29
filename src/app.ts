import express, { Request, Response } from "express";
import { people, products } from "./data";

const app = express();

//req => middleware => res
app.get("/", (req: Request, res: Response) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method + " " + url + " " + date);
  res.send("home");
});
app.get("/about", (req: Request, res: Response) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method + " " + url + " " + date);
  res.send("about");
});
app.listen(6868, () => {
  console.log("voo");
});
