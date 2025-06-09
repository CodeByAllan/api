import { UnauthorizedError } from '../errors/unauthorized.error';
import { IJwtService } from '../types/jwt-service.interface';
import * as jwt from 'jsonwebtoken';

export class JwtService implements IJwtService {
  signin(payload: object, privateKey: string, options: object): string {
    return jwt.sign(payload, privateKey, options);
  }
  verify(token: string, privateKey: string): string | jwt.JwtPayload {
    try {
      const payload = jwt.verify(token, privateKey);
      return payload;
    } catch {
      throw new UnauthorizedError();
    }
  }
}
