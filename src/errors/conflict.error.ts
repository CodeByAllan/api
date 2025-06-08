export class ConflictError extends Error {
  private code: number;

  constructor(resource: string = 'Resource') {
    super(`${resource} already exists.`);
    this.name = 'ConflictError';
    this.code = 409;
  }
}
