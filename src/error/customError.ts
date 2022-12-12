export class customAPIError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export const createCustomError = (msg: string) => {
  return new customAPIError(msg);
};
