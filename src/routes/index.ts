import { Router } from 'express';
import healthRouter from './health.routes';
import userRouter from './user.routes';
import authRouter from './auth.routes';

const router: Router = Router();
router.use('/health', healthRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);

export default router;
