export class RedisPingError extends Error {
  constructor() {
    super('Redis did not respond with PONG');
    this.name = 'RedisPingError';
  }
}
