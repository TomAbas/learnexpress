import { NextFunction, Request, Response } from "express";
import { customAPIError } from "../error/customError";
import JwtService from "../controllers/jwts/jwt.service";
import { decoded } from "../interfaces/commom-interfaces";
export default class Authentication {
  private jwtService = new JwtService();
  public authenticationMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let key = req.headers.authorization;
    if (!key || !String(key).startsWith("Bearer ")) {
      throw new customAPIError("where is the token");
    }

    try {
      let decoded: any = await this.jwtService.verifyToken(key.split(" ")[1]);
      const { id, username } = decoded;
      req.user = { id, username };
      next();
    } catch (error) {
      throw new customAPIError(`${error}`);
    }
  };
}
