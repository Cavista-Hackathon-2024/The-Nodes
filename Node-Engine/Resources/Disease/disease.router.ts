import { Router } from 'express';

import { DiseaseController } from './disease.controller';
import { Authenticator } from '../../Config/authenticator';

export const diseaseRouter = Router();
const authenticator = new Authenticator();
const diseaseController = new DiseaseController();

diseaseRouter.post('/create', authenticator.isLoggedIn, diseaseController.CreateADisease);