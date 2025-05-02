import createHttpError from 'http-errors';
import { UsersCollection } from './../db/models/user.js';
import { SessionsCollection } from './../db/models/session.js';
import bcrypt from 'bcrypt';
import { randomBytes } from 'node:crypto';
import { FIFTEEN_MINUTES, THIRTY_DAYS } from './../constants/index.js';

export const registerUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });

  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  return await UsersCollection.create({
    ...payload,
    password: encryptedPassword,
  });
};

export const loginUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });

  if (!user) {
    throw createHttpError(401, 'User not found');
  }

  const isValidPassword = await bcrypt.compare(payload.password, user.password);

  if (!isValidPassword) {
    throw createHttpError(401, 'Password is invalid');
  }

  await SessionsCollection.deleteOne({ userId: user._id });

  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');

  return await SessionsCollection.create({
    userId: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + THIRTY_DAYS),
  });
};

export const refreshUserSession = async ({ sessionId, refreshToken }) => {
  const session = await SessionsCollection.findOne({
    _id: sessionId,
    refreshToken,
  });

  if (!session) {
    throw createHttpError(401, 'Session not found');
  }

  const isExpired = new Date() > new Date(session.refreshTokenValidUntil);

  if (isExpired) {
    throw createHttpError(401, 'Session is expired');
  }

  const newAccessToken = randomBytes(30).toString('base64');
  const newRefreshToken = randomBytes(30).toString('base64');

  const updatedSession = await SessionsCollection.findOneAndUpdate(
    { _id: sessionId, refreshToken },
    {
      $set: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
        refreshTokenValidUntil: new Date(Date.now() + THIRTY_DAYS),
      },
    },
    { new: true },
  );

  if (!updatedSession) {
    throw createHttpError(401, 'Failed to update session');
  }

  return updatedSession;
};

export const logoutUser = async (sessionId) =>
  await SessionsCollection.deleteOne({ _id: sessionId });
