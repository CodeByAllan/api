import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UserTypes } from '../types/user-types.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Firstname must be a string' })
  @MinLength(2, { message: 'Firstname must be at least 2 characters long' })
  firstname?: string;
  @IsOptional()
  @IsString({ message: 'Lastname must be a string' })
  @MinLength(2, { message: 'Lastname must be at least 2 characters long' })
  lastname?: string;
  @IsOptional()
  @IsString({ message: 'Username must be a string' })
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  username?: string;
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, {
    message:
      'Password must be at least 6 characters long for security reasons.',
  })
  @IsOptional()
  password?: string;
  @IsOptional()
  @IsEnum(UserTypes, { message: 'User type must be admin or user' })
  usertype?: UserTypes;
  @IsOptional()
  @IsBoolean({ message: 'isActive must be a boolean' })
  isActive?: boolean;
}
