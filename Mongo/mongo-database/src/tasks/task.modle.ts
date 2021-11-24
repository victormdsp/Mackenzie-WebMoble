import * as mongoose from 'mongoose';
import { Interface } from 'readline';

export const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    checked: {type: Boolean, required: true}
});

export interface Task extends mongoose.Document{
    title: string,
    author: string,
    checked: boolean
}