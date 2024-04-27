import { Schema, Model, model } from "mongoose";

const diseaseSchema = new Schema({
    name: { type: String, required: true },
    symptoms: { type: [String], required: true },
    precautions: { type: [String], required: true },
    treatments: { type: [String], required: true },
    userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const DiseaseModel: Model<any> = model("Disease", diseaseSchema);