import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getDashboardController } from "../controllers/dashboard.js";

const router = Router();

router.get("/", ctrlWrapper(getDashboardController));

export default router;