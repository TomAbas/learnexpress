import express, { Request, Response } from "express";
import { people } from "./data";
const app = express();

let peopleData = people;

app.use(express.static("src/methods-public"));
app.get("/api/people", (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: peopleData });
});

app.listen(6868, () => {
  console.log("voo");
});
