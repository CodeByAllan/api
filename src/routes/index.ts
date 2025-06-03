import { Router } from 'express';
import healthRouter from './health.routes';

const router: Router = Router();

router.use(healthRouter);

export default router;
