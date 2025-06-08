import { Router } from 'express';
import healthRouter from './health.routes';
import userRouter from './user.routes';
import authRouter from './auth.routes';
import { captureErrors } from '../middlewares/capture-errors.middleware';

const router: Router = Router();
router.use('/health', healthRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use(captureErrors());

export default router;
