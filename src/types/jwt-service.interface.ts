export interface IJwtService {
  signin(payload: object, privateKey: string, options: object): string;
  verify<T>(token: string, privateKey: string): T;
}
