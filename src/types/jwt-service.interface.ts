export interface IJwtService {
  signin(payload: object, privateKey: string, options: object): string;
}
