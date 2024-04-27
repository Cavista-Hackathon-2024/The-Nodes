import { Request, Response } from 'express';

import { DiseaseModel } from './disease.model';

export class DiseaseController {
    public async CreateADisease(req: any, res: Response) {
        try {
            const { userId } = req.user;
            const { name, symptoms, precautions, treatments } = req.body;
            const isExistingDisease = await DiseaseModel.findOne({ name: name, userId: userId });
            if (isExistingDisease) {
                return res.status(400).json({
                    status: 400,
                    message: 'Disease with this name already exists!',
                });
            }
            const newDisease = new DiseaseModel({
                name: name,
                symptoms: symptoms,
                precautions: precautions,
                treatments: treatments,
            });
            await newDisease.save();
            return res.status(201).json({
                status: 201,
                message: 'Disease Created Successfully!',
                data: newDisease,
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Internal Server Error!',
            });
        }
    }

    public async GetAllDiseases(req: any, res: Response) {
        try {
            const { userId } = req.user;
            const diseases = await DiseaseModel.find({ userId: userId });
            if (!diseases || diseases.length === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'No diseases found!',
                });
            }
            return res.status(200).json({
                status: 200,
                message: 'Diseases Retrieved Successfully!',
                data: diseases,
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Internal Server Error!',
            });
        }
    }

    public async GetADisease(req: any, res: Response) {
        try {
            const { userId } = req.user;
            const { diseaseId } = req.params;
            const disease = await DiseaseModel.findOne({ _id: diseaseId, userId: userId });
            if (!disease) {
                return res.status(404).json({
                    status: 404,
                    message: 'Disease not found!',
                });
            }
            return res.status(200).json({
                status: 200,
                message: 'Disease Retrieved Successfully!',
                data: disease,
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Internal Server Error!',
            });
        }
    }

    public async UpdateADisease(req: any, res: Response) {
        try {
            const { userId } = req.user;
            const { diseaseId } = req.params;
            const { name, symptoms, precautions, treatments } = req.body;
            const disease = await DiseaseModel.findOne({ _id: diseaseId });
            if (!disease) {
                return res.status(404).json({
                    status: 404,
                    message: 'Disease not found!',
                });
            }
            disease.name = name;
            disease.symptoms = symptoms;
            disease.precautions = precautions;
            disease.treatments = treatments;
            await disease.save();
            return res.status(200).json({
                status: 200,
                message: 'Disease Updated Successfully!',
                data: disease,
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Internal Server Error!',
            });
        }
    }

    public async AddADiseaseForUser(req: any, res: Response) {
        try {
            const { userId } = req.user;
            const { diseaseId } = req.params;
            const disease = await DiseaseModel.findOne({ _id: diseaseId });
            if (!disease) {
                return res.status(404).json({
                    status: 404,
                    message: 'Disease not found!',
                });
            }
            disease.userId = userId;
            await disease.save();
            return res.status(200).json({
                status: 200,
                message: 'Disease Added Successfully!',
                data: disease,
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Internal Server Error!',
            });
        }
    }
}