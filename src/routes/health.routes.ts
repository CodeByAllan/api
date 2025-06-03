import { Router } from 'express';
import { HealthService } from '../services/health.service';
import { HealthController } from '../controllers/health.controller';

const healthRouter: Router = Router();
const healthService: HealthService = new HealthService();
const healthController: HealthController = new HealthController(healthService);

healthRouter.get('/health', healthController.checkHealth);
export default healthRouter;
