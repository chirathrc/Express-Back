import UserModel from "../models/UseModel.js";
import bcrypt from "bcryptjs"
import { generateJwt } from "../security/jwt.js";

export const login = async (req, resp) => {

    const { userInput, password } = req.body;

    try {

        // let user = await UserModel.findById({ username: userInput });

        // if (!user) {

        //     user = await UserModel.findById({ email: userInput });

        //     if (!user) {
        //         return resp.status(404).json({ message: "User Not found" });
        //     }
        // }

        const user = await UserModel.findOne({  //Like Or in sql
            $or: [
                { username: userInput },
                { email: userInput }
            ]
        });

        const passwordValid = await bcrypt.compare(password, user.password);  // return true or false

        if (!passwordValid) {
            return resp.status(400).json({ message: "Invalid Credentilas" });
        }

        const token = generateJwt(user);

        return resp.status(200).json(token);

    } catch (error) {
        console.log(error);
        return resp.status(404).json({ message: "Something Went Wrong. Please try Again Later !" });
    }

};