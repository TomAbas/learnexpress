import express, { Request, Response } from "express";

const app = express();

//setup static and middleware
app.use(express.static("src/public"));
// app.get("/", (req: Request, res: Response) => {
//   res.sendFile(path.resolve(__dirname, "navbar-app", "index.html"));
// add to static file
// ssr
// });

app.all("*", (req: Request, res: Response) => {
  res.status(404).send("<h1>dont have</h1>");
});
app.listen(6868, () => {
  console.log("vooo");
});
