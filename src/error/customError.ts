export class customAPIError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const createCustomError = (msg: string, statusCode: number) => {
  return new customAPIError(msg, statusCode);
};
