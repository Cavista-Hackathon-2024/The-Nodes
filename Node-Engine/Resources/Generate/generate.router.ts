import { Router } from "express";
import { GenerateController } from "./generate.controller";
import { Authenticator } from "../../Config/authenticator";

export const generateRouter = Router()
const generateController = new GenerateController
const authenticator = new Authenticator

generateRouter.post('/generate', authenticator.isLoggedIn, generateController.GenerateQuestionsForUsersWithoutImages)
generateRouter.post('/generate/image', authenticator.isLoggedIn, generateController.GenerateAnswersToQuestionsFromUsersWithImages)
generateRouter.post('/disease/facts', authenticator.isLoggedIn, generateController.generateFactsAboutEachDisease)