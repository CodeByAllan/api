import { IHealthService } from '../types/health-service.interface';
import { HealthStatus } from '../types/health.types';

export class HealthService implements IHealthService {
  checkHealth(): HealthStatus {
    return { status: 'OK' };
  }
}
