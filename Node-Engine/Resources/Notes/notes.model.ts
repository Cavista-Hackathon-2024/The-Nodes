import { Schema, Model, model } from "mongoose";

const notesSchema: Schema = new Schema({
    title: { type: String, required: true },
    note: { type: String, required: true },
    user: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const NotesModel = model('Notes', notesSchema);