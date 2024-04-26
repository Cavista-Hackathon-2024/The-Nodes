import { Router, Request, Response } from "express";
import { WalletController } from "./wallet.controller";
import { Authenticator } from "../../Config/authenticator";

export const walletRouter = Router()
const walletController = new WalletController
const authenticator = new Authenticator

walletRouter.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Profile Service Is Live!",
        status: 200
    })
})

walletRouter.patch('/create', authenticator.isLoggedIn, walletController.CreateWallet)