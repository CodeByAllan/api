export class UnauthorizedError extends Error {
  public code: number;

  constructor() {
    super('Unauthorized');
    this.name = 'UnauthorizedError';
    this.code = 401;
  }
}
