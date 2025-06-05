import * as bcrypt from 'bcrypt';
import { IHashService } from '../types/hash-service.interface';
export class HashService implements IHashService {
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 14);
  }
  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
