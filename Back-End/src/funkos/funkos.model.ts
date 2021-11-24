import { Schema } from 'mongoose';

export interface Funkos{
    user: string;
    img: string;
    name: string;
    colecao: string;
    tipo: string;
    preco: number;
    id: number;
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
    id: {
        type: Number,
        required: true
    }
})