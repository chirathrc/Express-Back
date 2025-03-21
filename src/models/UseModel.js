import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique : true,
    },
    password: {
        type: String,
        required : true,
    },
    firstName: {
        type: String,
        required:true,
    },
    lastName: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;