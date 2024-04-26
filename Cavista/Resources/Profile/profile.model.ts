import { Schema, model } from "mongoose";

export const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    otp: { type: String, required: true },
    wallets: { type: [String], default: [] },
    otpExpiresIn: { type: Date, required: true },
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });


export const UserProfileModel = model("User", userSchema);