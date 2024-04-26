import { Schema, model } from "mongoose"

const communitySchema = new Schema({
    name: { type: String, required: true },
    communityId: { type: Number, required: true },
    members:  { type: [String], default: [] },
    diseases:   { type: [String], default: [] },
    createdAt:  { type: String, default: Date.now },
    updatedAt: { type: String, default: Date.now },
})


export const CommunityModel = model('Community', communitySchema)