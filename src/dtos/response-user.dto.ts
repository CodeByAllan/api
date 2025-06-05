import { Expose } from 'class-transformer';
import { UserTypes } from '../types/user-types.enum';

export class ResponseUserDto {
  @Expose()
  firstname!: string;
  @Expose()
  lastname!: string;
  @Expose()
  username!: string;
  @Expose()
  usertype!: UserTypes;
  @Expose()
  isActive!: boolean;
  @Expose()
  createdAt!: Date;
  @Expose()
  updatedAt!: Date;
}
