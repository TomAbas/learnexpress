import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";
export const logger = (req: Request, res: Response, next: NextFunction) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method + " " + url + " " + date);
//   res.send("hello");
  next();
};
