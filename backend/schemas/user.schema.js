import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
}, {timestamps: false})