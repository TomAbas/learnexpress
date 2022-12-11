import { customAPIError } from "../../error/customError";
import jsonwebtoken from "jsonwebtoken";

export default class JwtService {
  public isProvide = (username: string, password: string) => {
    if (!username || !password) {
      throw new customAPIError("please provide username and password", 401);
    }
    const id = new Date().getDate();
    const key: any = process.env.JWT_KEY;
    const token = jsonwebtoken.sign({ id, username }, key, {
      expiresIn: "60m",
    });
    console.log(token);
    return token;
  };
}
