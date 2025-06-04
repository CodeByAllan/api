import { Request, Response } from 'express';
import { IHealthService } from '../types/health-service.interface';

export class HealthController {
  constructor(private healthService: IHealthService) {}

  checkHealth = async (req: Request, res: Response) => {
    const healthStatus = await this.healthService.checkHealth();
    const httpStatus = healthStatus.status === 'OK' ? 200 : 503;
    res.status(httpStatus).json(healthStatus);
  };
}
