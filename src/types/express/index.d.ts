import { name, error, user } from "../../constants/common.constants";
i;
declare global {
  namespace Express {
    export interface Request {
      name: name;
      user: user;
    }
  }
}
