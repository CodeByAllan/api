import { UserTypes } from '../types/user-types.enum';

export class UpdateUserDto {
  firstname?: string;
  lastname?: string;
  username?: string;
  password?: string;
  usertype?: UserTypes;
  isActive?: boolean;
}
