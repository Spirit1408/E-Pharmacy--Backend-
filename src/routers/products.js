import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getProductsController,
  addNewProductController,
  updateProductController,
  deleteProductController,
} from '../controllers/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  addNewProductSchema,
  updateProductSchema,
} from '../validation/products.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(getProductsController));

router.post(
  '/',
  validateBody(addNewProductSchema),
  ctrlWrapper(addNewProductController),
);

router.put(
  '/:productId',
  isValidId,
  validateBody(updateProductSchema),
  ctrlWrapper(updateProductController),
);

router.delete('/:productId', isValidId, ctrlWrapper(deleteProductController));

export default router;
