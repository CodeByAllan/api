import { PostgresDataSource } from '../database/database';
import redisClient from '../database/redis';
import { HealthCheckError } from '../errors/health-check.error';
import { RedisPingError } from '../errors/redis-ping.error';
import { IHealthService } from '../types/health-service.interface';
import { HealthStatus } from '../types/health.types';

export class HealthService implements IHealthService {
  async checkHealth(): Promise<HealthStatus> {
    try {
      await PostgresDataSource.query('SELECT 1');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      throw new HealthCheckError(`Postgres is inaccessible: ${message}`);
    }

    try {
      const redisPing = await redisClient.ping();
      if (redisPing !== 'PONG') {
        throw new RedisPingError();
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      throw new HealthCheckError(`Redis is inaccessible: ${message}`);
    }

    return { status: 'OK', database: 'UP', redis: 'UP' };
  }
}
