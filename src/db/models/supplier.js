import { Schema, model } from "mongoose";

const supplierSchema = new Schema(
	{
		name: {
			type: String,
		},
		address: {
			type: String,
		},
		suppliers: {
			type: String,
		},
		date: {
			type: String,
		},
		amount: {
			type: String,
		},
		status: {
			type: String,
			enum: ["Active", "Deactive"],
		},
	},
	{ versionKey: false, timestamps: false },
);

const Supplier = model("suppliers", supplierSchema);

export default Supplier;
