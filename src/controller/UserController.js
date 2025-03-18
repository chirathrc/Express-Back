import UserModel from "../models/UseModel.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, resp) => {

    const { username, password, firstName, lastname, email } = req.body;

    if (!username || !password || !firstName || !lastname || !email) {
        return resp.status(400).json({ message: "All fileds are required" });
    }

    const existuser = await UserModel.findOne({ username: username });

    if (existuser) {
        return resp.status(400).json({ message: "User already Exist" });
    }

    try {

        const user = new UserModel();
        user.username = username;
        user.password = await bcrypt.hash(password, 10);
        user.firstName = firstName;
        user.lastName = lastname;
        user.email = email;

        await user.save();

        return resp.status(201).json(user);

    } catch (error) {
        return resp.status(500).json({ message: error.message });
    }

};