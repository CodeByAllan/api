import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from '../errors/unauthorized.error';
import { UserTypes } from '../types/user-types.enum';

export function AuthorizeAdminOrOwner() {
  return (req: Request, _res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) {
      throw new UnauthorizedError();
    }
    const isAdmin = user.usertype === UserTypes.ADMIN;
    const isSelf = user.id == req.params.id;
    if (!isAdmin && !isSelf) {
      throw new UnauthorizedError();
    }
    next();
  };
}
