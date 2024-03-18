export class CustomError extends Error {
  status: number
  error: string
  constructor(error: string, status: number) {
    super(error);
    this.name = 'ApiError';
    this.status = status;
    this.error = error
  }
}