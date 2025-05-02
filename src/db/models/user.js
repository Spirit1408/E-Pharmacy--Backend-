import { Schema, model } from "mongoose";

const userSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ versionKey: false, timestamps: false },
);

userSchema.methods.toJSON = function () {
	const { password, ...userWithoutPassword } = this.toObject();
	return userWithoutPassword;
};

export const UsersCollection = model("users", userSchema);
