import { Repository } from 'typeorm';
import { IAuthService } from '../types/auth-service.interface';
import { User } from '../entities/user.entity';
import { AuthUserDto } from '../dtos/auth-user.dto';
import { IHashService } from '../types/hash-service.interface';
import { IJwtService } from '../types/jwt-service.interface';
import { env } from '../config/env';

export class AuthService implements IAuthService {
  constructor(
    private readonly userRepository: Repository<User>,
    private readonly hashService: IHashService,
    private readonly jwtService: IJwtService,
  ) {}
  async login(credentials: AuthUserDto): Promise<{ token: string }> {
    const user = await this.userRepository.findOne({
      where: { username: credentials.username },
    });
    if (
      !user ||
      !(await this.hashService.comparePassword(
        credentials.password,
        user.password,
      ))
    ) {
      throw new Error('Credentials are not valid!');
    }

    return {
      token: this.jwtService.signin(
        { id: user.id, usertype: user.usertype },
        env.JWT_SECRET,
        { expiresIn: '2h' },
      ),
    };
  }
}
