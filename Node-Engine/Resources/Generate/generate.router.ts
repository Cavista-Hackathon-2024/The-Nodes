import { Router } from "express";
import { GenerateController } from "./generate.controller";

export const generateRouter = Router()
const generateController = new GenerateController

generateRouter.post('/generate', generateController.GenerateQuestionsForUsersWithoutImages)
generateRouter.post('/generate/image', generateController.GenerateAnswersToQuestionsFromUsersWithImages)
generateRouter.post('/disease/facts', generateController.generateFactsAboutEachDisease)