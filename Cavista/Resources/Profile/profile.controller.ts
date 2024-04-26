import { Request, Response } from "express";
import { ProfileValidator } from "./profile.validator";

const profileValidator = new ProfileValidator

export class ProfileController {
    public async EditProfile (req: Request, res: Response) {
        try {
            
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }
}