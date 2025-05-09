import { THIRTY_DAYS } from '../constants/index.js';
import { UsersCollection } from '../db/models/user.js';
import {
  getUserInfo,
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
} from './../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'User registered successfully!',
    data: user,
  });
};

export const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);

  const user = await UsersCollection.findById(session.userId);

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    expires: new Date(Date.now() + THIRTY_DAYS),
  });
  
  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    expires: new Date(Date.now() + THIRTY_DAYS),
  });

  res.status(200).json({
    status: 200,
    message: 'User logged in!',
    data: { user, accessToken: session.accessToken },
  });
};

export const refreshUserController = async (req, res) => {
  const session = await refreshUserSession({
    sessionId: req.cookies.sessionId,
    refreshToken: req.cookies.refreshToken,
  });

  const user = await UsersCollection.findById(session.userId);

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    secure: true, 
    sameSite: 'none', 
    expires: new Date(Date.now() + THIRTY_DAYS),
  });
  
  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    secure: true, 
    sameSite: 'none', 
    expires: new Date(Date.now() + THIRTY_DAYS),
  });

  res.status(200).json({
    status: 200,
    message: 'User logged in!',
    data: { user, accessToken: session.accessToken },
  });
};

export const logoutUserController = async (req, res) => {
  if (req.cookies.sessionId) {
    await logoutUser(req.cookies.sessionId);
  }

  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');

  res.sendStatus(204);
};

export const getServerStatusController = (req, res) => {
  res.status(200).json({
    message: 'Server is running',
  });
};

export const getUserInfoController = async (req, res) => {
  const user = await getUserInfo(req.cookies.sessionId);

  res.status(200).json({ status: 200, message: 'User info', data: user });
};
