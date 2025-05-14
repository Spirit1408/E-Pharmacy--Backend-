import Joi from 'joi';

export const addNewProductSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string()
    .valid('Medicine', 'Heart', 'Leg', 'Head', 'Hand')
    .required(),
  stock: Joi.number().integer().min(0).required(),
  suppliers: Joi.string().required(),
  price: Joi.number().min(0).required(),
  photo: Joi.string(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string(),
  category: Joi.string().valid('Medicine', 'Heart', 'Leg', 'Head', 'Hand'),
  stock: Joi.number().integer().min(0),
  suppliers: Joi.string(),
  price: Joi.number().min(0),
  photo: Joi.string(),
}).min(1);
