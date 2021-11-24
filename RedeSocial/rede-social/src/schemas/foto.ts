import * as mongoose from 'mongoose';

export const FotoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },

    autor: {
        type: String,
        required: true
    },

    titulo: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true
    },

    likes: {
        type: Number,
        required: true
    }
})

export interface Foto extends mongoose.Document{
    url: string,
    autor: string,
    titulo: string,
    descricao: string,
    likes: number
}
const FotoModel = mongoose.model("Usuario", FotoSchema);
export default FotoModel;