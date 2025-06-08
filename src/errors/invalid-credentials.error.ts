export class InvalidCredentialsError extends Error {
  public code: number;

  constructor() {
    super('Credentials are not valid!');
    this.name = 'InvalidCredentialsError';
    this.code = 401;
  }
}
