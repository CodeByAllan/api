import { Router } from 'express';
import healthRouter from './health.routes';
import userRouter from './user.routes';

const router: Router = Router();

router.use(healthRouter, userRouter);

export default router;
