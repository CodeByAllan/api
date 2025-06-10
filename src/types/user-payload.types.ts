import { UserTypes } from './user-types.enum';

export type UserPayload = {
  id: string;
  usertype: UserTypes;
};
