export default class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly error?: any;

  public readonly _externalError?: any;

  constructor(
    message: string,
    statusCode: number,
    error: any,
    externalError?: any,
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
    this._externalError = externalError;
  }

  public throwError() {
    return {
      error: this.error,
      message: this.message,
      externalError: this._externalError,
    };
  }
}
