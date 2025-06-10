import redisClient from '../database/redis';
import { ICacheService } from '../types/cache-service.interface';

export class CacheService implements ICacheService {
  async get(key: string): Promise<string | null> {
    return await redisClient.get(key);
  }
  async set(
    key: string,
    value: string,
    options?: { EX?: number },
  ): Promise<void> {
    await redisClient.set(key, value, options);
  }
}
