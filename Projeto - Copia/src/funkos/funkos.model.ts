import { Schema, Document } from 'mongoose';

export interface Funkos extends Document {
    user: String;
    img: String;
    name: String;
    colecao: String;
    tipo: String;
    preco: Number;
}

export const FunkosSchema = new Schema({
    user:{
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    colecao: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
})