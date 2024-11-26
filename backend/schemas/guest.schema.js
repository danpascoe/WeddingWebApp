
import mongoose from 'mongoose';
import { userSchema } from './user.schema.js';

const Schema = mongoose.Schema;

const guestSchema = new Schema({
    weddingId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Wedding"
    },
    user: {
        type: userSchema,
        required: true
    },
    additionalGuests: {
        type: [userSchema]
    },
    status: {
        type: Number,
        required: true
    },
}, {timestamps: true})

export const Guest = mongoose.model("Guest", guestSchema);