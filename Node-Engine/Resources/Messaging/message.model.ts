import { Schema, model } from "mongoose";

const messagingSchema: Schema = new Schema ({
    by: { type: String, required: true },
    community: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})


export const Messaging = model('Messaging', messagingSchema)