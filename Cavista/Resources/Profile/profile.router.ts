import { Router, Request, Response } from "express";
import { ProfileController } from "./profile.controller";

export const profileRouter = Router()
const profileController = new ProfileController

profileRouter.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Profile Service Is Live!",
        status: 200
    })
})

profileRouter.patch('/edit', profileController.EditProfile)