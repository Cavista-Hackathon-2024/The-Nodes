import { Router } from "express";

import { HospitalController } from "./hospital.controller";

export const hospitalRouter = Router();

const hospitalController = new HospitalController();

hospitalRouter.get("/all", hospitalController.GetAllHospitals);
hospitalRouter.get("/one/:hospitalId", hospitalController.GetAHospital);