import { Model, Schema, model } from "mongoose";

const cardSchema: Schema = new Schema({
    user: { type: String, required: true },
    balance: { type: Number, default: 0 },
    type: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
})

export const Card = model('Card', cardSchema)