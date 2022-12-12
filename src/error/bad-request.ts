import { customAPIError } from "./customError";

export class BadRequest extends customAPIError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
    this.message = message;
  }
}
