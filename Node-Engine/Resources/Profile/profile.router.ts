import { Router, Request, Response } from "express";
import { ProfileController } from "./profile.controller";
import { Authenticator } from "../../Config/authenticator";

export const profileRouter = Router()
const profileController = new ProfileController
const authenticator = new Authenticator()

profileRouter.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Profile Service Is Live!",
        status: 200
    })
})

profileRouter.patch('/edit', authenticator.isLoggedIn, profileController.EditProfile)
profileRouter.get('/patients/nearby', authenticator.isLoggedIn, profileController.GetNearbyPatients)