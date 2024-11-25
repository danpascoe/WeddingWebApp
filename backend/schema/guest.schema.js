
import mongoose from 'mongoose';
import { userSchema } from './user.schema.js';

const Schema = mongoose.Schema;

export const guestSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    weddingId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "wedding"
    },
    groupId: {
        type: String,
        ref: "group"
    },
    user: {
        type: userSchema
    },
    status: {
        type: Number,
        required: true
    },
}, {timestamps: true})