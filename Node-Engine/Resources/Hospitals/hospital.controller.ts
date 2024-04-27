import { Request, Response } from "express";
import { hospitals } from "./hospital.data";

export class HospitalController {
    public async CreateAHospital (req: Request, res: Response) {}
    public async GetAllHospitals (req: Request, res: Response) {
        try {
            const theHospitals = hospitals.map(hospital => {
                return hospital
            }
            )
            return res.status(200).json({
                status: 200,
                message: "Hospitals Retrieved Successfully!",
                data: theHospitals
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error
            });  
        }
    }
    public async GetAHospital (req: Request, res: Response) {
        try {
            const { hospitalId } = req.params 
            const hospital = hospitals.find(hospital => hospital.hospitalId === hospitalId);
            if (!hospital) {
                return res.status(404).json({
                    status: 404,
                    message: "Hospital not found!"
                });
            }
            return res.status(200).json({
                status: 200,
                message: "Hospital Retrieved Successfully!",
                data: hospital
            });

        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error
            });
        }
    }
}