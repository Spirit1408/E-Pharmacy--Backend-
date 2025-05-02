import { Router } from 'express';
import authRouter from './auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getServerStatusController } from './../controllers/auth.js';

const router = Router();

router.use('/user', authRouter);

router.get('/', ctrlWrapper(getServerStatusController));

export default router;