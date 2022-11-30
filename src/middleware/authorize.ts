import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.query;
  const url = req.url;
  console.log("authorize");
  console.log(url);
  console.log(name);

  if (name === "tom") {
    console.log("vo123");
    req.name = { name: "john", id: 3 };
    next();
  } else {
    console.log("no456");
    res.status(401).send("no login");
  }

};
