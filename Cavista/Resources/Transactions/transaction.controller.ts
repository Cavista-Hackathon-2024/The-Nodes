import { Request, Response } from "express";

export class TransactionController {
    public async GetAllTransactions(req: Request, res: Response) {
        try {

        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }
    public async GetTransaction(req: Request, res: Response) {
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