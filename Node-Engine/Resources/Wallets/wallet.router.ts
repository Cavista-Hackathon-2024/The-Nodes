import { Router, Request, Response } from "express";
import { WalletController } from "./wallet.controller";

export const walletRouter = Router()
const walletController = new WalletController

walletRouter.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Profile Service Is Live!",
        status: 200
    })
})

walletRouter.patch('/create', walletController.CreateWallet)