import { Request, Response } from 'express';
import { IHealthService } from '../types/health-service.interface';

export class HealthController {
  constructor(private healthService: IHealthService) {}

  checkHealth = (req: Request, res: Response) => {
    const healthStatus = this.healthService.checkHealth();
    res.json(healthStatus);
  };
}
