import { Schema, model } from "mongoose";

const DiseaseSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    symptoms: { type: String, required: true },
    causes: { type: String, required: true },
    treatment: { type: String, required: true },
    prevention: { type: String, required: true },
});

export const DiseaseModel = model("Disease", DiseaseSchema);