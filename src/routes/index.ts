import { Router } from 'express';
import healthRouter from './health.routes';
import { publicUser, protectUser } from './user.routes';
import authRouter from './auth.routes';
import { captureErrors } from '../middlewares/capture-errors.middleware';

const router: Router = Router();
router.use('/health', healthRouter);
router.use('/user', publicUser, protectUser);
router.use('/auth', authRouter);
router.use(captureErrors());

export default router;
