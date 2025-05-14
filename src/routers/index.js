import { Router } from 'express';
import authRouter from './auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getServerStatusController } from './../controllers/auth.js';
import dashboardRouter from './dashboard.js';
import ordersRouter from './orders.js';
import productsRouter from './products.js';
import suppliersRouter from './suppliers.js';
import customersRouter from './customers.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use('/user', authRouter);

router.use('/dashboard', authenticate, dashboardRouter);

router.use('/orders', authenticate, ordersRouter);

router.use('/products', authenticate, productsRouter);

router.use('/suppliers', authenticate, suppliersRouter);

router.use('/customers', authenticate, customersRouter);

router.get('/', ctrlWrapper(getServerStatusController));

export default router;
