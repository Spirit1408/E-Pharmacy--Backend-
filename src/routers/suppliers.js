import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getSuppliersController, addNewSupplierController, updateSupplierController } from "../controllers/suppliers.js";
import { validateBody } from '../middlewares/validateBody.js';
import { addNewSupplierSchema, updateSupplierSchema } from '../validation/suppliers.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get("/", ctrlWrapper(getSuppliersController));

router.post("/", validateBody(addNewSupplierSchema), ctrlWrapper(addNewSupplierController));

router.put("/:supplierId", isValidId, validateBody(updateSupplierSchema), ctrlWrapper(updateSupplierController));

export default router;