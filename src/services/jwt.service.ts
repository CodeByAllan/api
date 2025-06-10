import { UnauthorizedError } from '../errors/unauthorized.error';
import { IJwtService } from '../types/jwt-service.interface';
import * as jwt from 'jsonwebtoken';

export class JwtService implements IJwtService {
  signin(payload: object, privateKey: string, options: object): string {
    return jwt.sign(payload, privateKey, options);
  }
  verify<T>(token: string, privateKey: string): T {
    try {
      const payload = jwt.verify(token, privateKey);
      if (typeof payload === 'string') {
        throw new UnauthorizedError();
      }
      return payload as T;
    } catch {
      throw new UnauthorizedError();
    }
  }
}
