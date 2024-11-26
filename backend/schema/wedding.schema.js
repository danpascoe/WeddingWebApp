import mongoose from 'mongoose';
import { userSchema } from './user.schema.js';

const Schema = mongoose.Schema;

export const weddingSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    personOne: {
        type: userSchema,
        required: true
    },
    personTwo: {
        type: userSchema,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {timestamps: true})