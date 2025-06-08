export class HealthCheckError extends Error {
  public readonly code: number;

  constructor(message: string) {
    super(message);
    this.name = 'HealthCheckError';
    this.code = 503;
  }
}
