import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthUserDto {
  @IsNotEmpty({ message: 'Username is required.' })
  @IsString({ message: 'Username must be a string.' })
  @MinLength(3, { message: 'Username must be at least 3 characters long.' })
  username!: string;

  @IsNotEmpty({ message: 'Password is required.' })
  @IsString({ message: 'Password must be a string.' })
  @MinLength(6, { message: 'Password must be at least 6 characters long.' })
  password!: string;
}
