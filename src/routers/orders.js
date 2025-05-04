import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getOrdersController } from "../controllers/orders.js";

const router = Router();

router.get("/", ctrlWrapper(getOrdersController));

export default router;