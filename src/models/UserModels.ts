import mongoose from "mongoose";

export interface IUser {
	name: string,
	user_id: string,
}

const userSchema = new mongoose.Schema<IUser>({
	name: {
		type: String,
		required: true,
	},
	user_id: {
		type: String,
		required: true,
	}
});

export const UserModel = mongoose.model("User", userSchema);
