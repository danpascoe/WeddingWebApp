import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const itineraryItemSchema = new Schema({
    time: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {timestamps: false})