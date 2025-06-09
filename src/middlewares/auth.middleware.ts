import { NextFunction, Request, Response } from 'express';
import { IJwtService } from '../types/jwt-service.interface';
import { env } from '../config/env';
import { UnauthorizedError } from '../errors/unauthorized.error';

export function auth(jwtService: IJwtService) {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedError();
    }
    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedError();
    }
    const payload = jwtService.verify(token, env.JWT_SECRET);
    (req as any).user = payload;
    next();
  };
}
