import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const params = req.params;
  
  const idParam = Object.keys(params).find(key => key.includes('Id'));
  
  if (!idParam || !isValidObjectId(params[idParam])) {
    throw createHttpError(400, 'Invalid ID format');
  }

  next();
};
