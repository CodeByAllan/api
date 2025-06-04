import { HealthStatus } from './health.types';

export interface IHealthService {
  checkHealth(): Promise<HealthStatus>;
}
