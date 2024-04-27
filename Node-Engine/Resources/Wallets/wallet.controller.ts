import { Request, Response } from "express";
import { WalletValidator } from "./wallet.validator";
import { WalletService } from "./wallet.services";
import { WalletModel } from "./wallet.model";

const walletService = new WalletService
const walletValidator = new WalletValidator
export class WalletController {
    public async CreateWallet (req: Request, res: Response) {
        try {
            
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }

    public async FetchAllWalletsForUser (req: any, res: Response) {
        try {
            const userId = req.user.userId
            const userWallets = await WalletModel.find({ user: userId })
            if (!userWallets) {
                return res.status(404).json({
                    message: "No Wallets Found",
                    status: 404
                })
            }
            return res.status(200).json({
                message: "Wallets Retrieved Successfully",
                status: 200,
                data: userWallets
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }
    
    public async CheckWalletBalance (req: any, res: Response) {
        try {
            const userId = req.user.userId
            const userWalletBalance = await walletService.FetchWalletBalanceByUserId(userId)
            return res.status(200).json({
                message: "Wallet Balance Retrieved Successfully",
                status: 200,
                data: userWalletBalance
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }
}