import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getProductsController, addNewProductController, updateProductController, deleteProductController } from "../controllers/products.js";
import { validateBody } from '../middlewares/validateBody.js';
import { addNewProductSchema, updateProductSchema } from '../validation/products.js';

const router = Router();

router.get("/", ctrlWrapper(getProductsController));

router.post("/", validateBody(addNewProductSchema), ctrlWrapper(addNewProductController));

router.put("/:productId", validateBody(updateProductSchema), ctrlWrapper(updateProductController));

router.delete("/:productId", ctrlWrapper(deleteProductController));

export default router;