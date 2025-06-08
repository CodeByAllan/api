import { PostgresDataSource } from '../database/database';
import { HealthCheckError } from '../errors/health-check.error';
import { IHealthService } from '../types/health-service.interface';
import { HealthStatus } from '../types/health.types';

export class HealthService implements IHealthService {
  async checkHealth(): Promise<HealthStatus> {
    try {
      await PostgresDataSource.query('SELECT 1');
      return { status: 'OK', database: 'UP' };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      throw new HealthCheckError(`The database is inaccessible: ${message}`);
    }
  }
}
