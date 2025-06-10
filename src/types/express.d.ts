import { UserPayload } from './user-payload.types';

declare global {
  namespace Express {
    interface Request {
      user: UserPayload;
    }
  }
}
export {};
