import Joi from 'joi';

export const addNewSupplierSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  suppliers: Joi.string().required(),
  date: Joi.string().required(),
  amount: Joi.number().min(0).required(),
  status: Joi.string().valid('Active', 'Deactive').required(),
});

export const updateSupplierSchema = Joi.object({
  name: Joi.string(),
  address: Joi.string(),
  suppliers: Joi.string(),
  date: Joi.string(),
  amount: Joi.number().min(0),
  status: Joi.string().valid('Active', 'Deactive'),
}).min(1);