export interface IJwtService {
  signin(payload: object, privateKey: string, options: object): string;
  verify(token: string, privateKey: string): string | object;
}
