import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send("ok");
  }
  res.status(401).send("<h1>con </h1>");
});

export default router;
