import Joi from "joi";

export const addNewProductSchema = Joi.object({
	name: Joi.string().required(),
	category: Joi.string()
		.valid(
			"Medicine",
			"Heart",
			"Leg",
			"Head",
			"Hand",
			"Dental care",
			"Skin care",
		)
		.required(),
	stock: Joi.string().required(),
	suppliers: Joi.string().required(),
	price: Joi.string().required(),
	photo: Joi.string(),
});

export const updateProductSchema = Joi.object({
	name: Joi.string(),
	category: Joi.string().valid(
		"Medicine",
		"Heart",
		"Leg",
		"Head",
		"Hand",
		"Dental care",
		"Skin care",
	),
	stock: Joi.string(),
	suppliers: Joi.string(),
	price: Joi.string(),
	photo: Joi.string(),
}).min(1);
