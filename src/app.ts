import express, { Request, Response } from "express";
import { stringify } from "querystring";
import peopleRoute from "./routes/people";
import login from "./routes/auth";
const app = express();

app.use(express.static("src/methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/people", peopleRoute);

app.use("/login", login);

app.listen(6868, () => {
  console.log("voo");
});
