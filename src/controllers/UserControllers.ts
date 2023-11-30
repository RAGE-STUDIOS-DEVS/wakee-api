import { Request, Response } from "express";
import { UserModel } from "../models/UserModels";

// add a controller to get all message content collections but only populate id and name
export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await UserModel.find();
		res.status(200).json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};