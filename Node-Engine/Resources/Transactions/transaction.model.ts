import { Schema, model } from "mongoose";

const transactionSchema: Schema = new Schema({})

export const Transactions = model("Transactions", transactionSchema)