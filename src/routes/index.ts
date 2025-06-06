import { Router } from 'express';
import healthRouter from './health.routes';
import userRouter from './user.routes';

const router: Router = Router();
router.use('/health', healthRouter);
router.use('/user', userRouter);

export default router;
