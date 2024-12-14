import mongoose from 'mongoose';
import { userSchema } from './user.schema.js';
import { itineraryItemSchema } from './itineraryItem.schema.js';

const Schema = mongoose.Schema;

const weddingSchema = new Schema({
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
        required: false
    },
    itineraryItems: {
        type: [itineraryItemSchema],
        required: true
    },    
}, {timestamps: true})

export const Wedding = mongoose.model("Wedding", weddingSchema);