
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const giftSchema = new Schema({
    weddingId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Wedding"
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    claimedByUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "User"
    },
    claimedDate: {        
        type: Date,
        required: false        
    }    
}, {timestamps: true})

export const Gift = mongoose.model("Gift", giftSchema);