import { name } from "../../constants/common.constants";
i;
declare global {
  namespace Express {
    export interface Request {
      name: name;
    }
  }
}
