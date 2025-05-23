import { Router } from 'express';
import { validateBody } from './../middlewares/validateBody.js';
import { loginUserSchema, registerUserSchema } from './../validation/auth.js';
import {
  getUserInfoController,
  loginUserController,
  logoutUserController,
  refreshUserController,
  registerUserController,
} from './../controllers/auth.js';
import { ctrlWrapper } from './../utils/ctrlWrapper.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.post('/refresh', ctrlWrapper(refreshUserController));

router.post('/logout', ctrlWrapper(logoutUserController));

router.get('/user-info', ctrlWrapper(getUserInfoController));

export default router;
