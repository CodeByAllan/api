export class NotFoundError extends Error {
  private code: number;

  constructor(resource: string = 'Resource') {
    super(`${resource} not found.`);
    this.name = 'NotFoundError';
    this.code = 404;
  }
}
