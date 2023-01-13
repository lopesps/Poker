import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CardSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },    
    nype: {
        type: String,
        required: 'Enter a nype'
    },
    number: {
        type: Number,
        required: 'Enter a number'
    }
})

export const Card = mongoose.model('Card', CardSchema);
