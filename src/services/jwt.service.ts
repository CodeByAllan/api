import { IJwtService } from '../types/jwt-service.interface';
import * as jwt from 'jsonwebtoken';

export class JwtService implements IJwtService {
  signin(payload: object, privateKey: string, options: object): string {
    return jwt.sign(payload, privateKey, options);
  }
}
