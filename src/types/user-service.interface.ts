import { DeleteResult } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../entities/user.entity';

export interface IUserService {
  create(createUserDto: CreateUserDto): Promise<User>;
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User>;
  update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
  delete(id: number): Promise<DeleteResult>;
}
