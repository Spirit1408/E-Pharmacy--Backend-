import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getCustomersController,
  getCustomerByIdController,
} from '../controllers/customers.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(getCustomersController));

router.get('/:customerId', isValidId, ctrlWrapper(getCustomerByIdController));

export default router;
