import { IsString, IsNotEmpty, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString({ message: 'Firstname must be a string' })
  @MinLength(2, { message: 'Firstname must be at least 2 characters long' })
  firstname!: string;
  @IsNotEmpty()
  @IsString({ message: 'Lastname must be a string' })
  @MinLength(2, { message: 'Lastname must be at least 2 characters long' })
  lastname!: string;
  @IsNotEmpty()
  @IsString({ message: 'Username must be a string' })
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  username!: string;
  @IsNotEmpty()
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, {
    message:
      'Password must be at least 6 characters long for security reasons.',
  })
  password!: string;
}
