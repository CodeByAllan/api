import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../entities/user.entity';
import { IUserService } from '../types/user-service.interface';
import { IHashService } from '../types/hash-service.interface';
import { NotFoundError } from '../errors/not-found.error';
import { ConflictError } from '../errors/conflict.error';

export class UserService implements IUserService {
  constructor(
    private readonly userRepository: Repository<User>,
    private readonly hashService: IHashService,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { username: createUserDto.username },
    });
    if (existingUser) {
      throw new ConflictError(`User with username ${createUserDto.username}`);
    }
    createUserDto.password = await this.hashService.hashPassword(
      createUserDto.password,
    );
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
      throw new NotFoundError(`User with id ${id}`);
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
        throw new ConflictError(`User with username ${updateUserDto.username}`);
      }
    }
    updateUserDto.password = updateUserDto.password
      ? await this.hashService.hashPassword(updateUserDto.password)
      : user.password;
    this.userRepository.merge(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.getById(id);
    return this.userRepository.softDelete(id);
  }
}
