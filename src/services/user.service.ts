import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../entities/user.entity';
import { IUserService } from '../types/user-service.interface';

export class UserService implements IUserService {
  constructor(private readonly userRepository: Repository<User>) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { username: createUserDto.username },
    });
    if (existingUser) {
      throw new Error(
        `User with username ${createUserDto.username} already exists`,
      );
    }
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      withDeleted: false,
    });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.getById(id);

    if (updateUserDto.username && updateUserDto.username !== user.username) {
      const existingUser = await this.userRepository.findOne({
        where: { username: updateUserDto.username },
      });

      if (existingUser) {
        throw new Error(
          `User with username ${updateUserDto.username} already exists`,
        );
      }
    }
    this.userRepository.merge(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.getById(id);
    return this.userRepository.softDelete(id);
  }
}
