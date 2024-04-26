import { Schema, model } from "mongoose"

export const walletSchema = new Schema({
    user: { type: String, required: true },
    balance: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}) 

export const WalletModel = model("Wallet", walletSchema)