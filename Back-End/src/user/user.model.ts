import { Schema, Document } from 'mongoose';

export interface User extends Document {
    login: String;
    senha: String;
}

export const UserSchema = new Schema({
    login:
    {
        type: String,
        required: true
    },

    senha:
    {
        type: String,
        required: true
    }
})
