import { AuthUserDto } from '../dtos/auth-user.dto';

export interface IAuthService {
  login(credentials: AuthUserDto): Promise<{ token: string }>;
}
