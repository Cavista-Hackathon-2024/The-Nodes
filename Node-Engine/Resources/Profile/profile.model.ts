import { Schema, model } from "mongoose";

const userProfileSchema = new Schema({
    user: { type: String, required: true },
    email: { type: String, required: true },
    diseases: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


export const UserProfile = model("User", userProfileSchema);