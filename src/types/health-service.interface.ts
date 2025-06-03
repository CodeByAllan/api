import { HealthStatus } from './health.types';

export interface IHealthService {
  checkHealth(): HealthStatus;
}
