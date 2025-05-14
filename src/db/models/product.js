import { Schema, model } from "mongoose";

const productSchema = new Schema(
	{
		photo: {
			type: String,
		},
		name: {
			type: String,
		},
		suppliers: {
			type: String,
		},
		stock: {
			type: String,
		},
		price: {
			type: String,
		},
		category: {
			type: String,
			enum: [
				"Medicine",
				"Heart",
				"Leg",
				"Head",
				"Hand",
				"Dental care",
				"Skin care",
			],
		},
	},
	{ versionKey: false, timestamps: false },
);

const Product = model("products", productSchema);

export default Product;
