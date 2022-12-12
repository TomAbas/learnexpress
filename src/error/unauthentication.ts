import { customAPIError } from "./customError";

export class unAuthen extends customAPIError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 401;
    this.message = message;
  }
}
