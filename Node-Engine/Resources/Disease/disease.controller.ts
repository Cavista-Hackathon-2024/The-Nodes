import { DiseaseModel } from "./disease.model";

export class DiseaseController {
    public async CreateDisease (req: any, res: any) {
        try {
            const disease = await new DiseaseModel(req.body).save();
            res.status(201).json(disease);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}