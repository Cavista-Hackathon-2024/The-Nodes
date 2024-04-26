import { Router } from "express";
import { TransactionController } from "./transaction.controller";
import { Authenticator } from "../../Config/authenticator";

export const transactionRouter = Router()
const transactionController = new TransactionController
const authenticator = new Authenticator

transactionRouter.get('/', (req, res) => {
    return res.status(200).json({
        message: "Transaction Service Is Live!",
        status: 200
    })
})

transactionRouter.post('/get/:id', authenticator.isLoggedIn, transactionController.GetTransaction)
transactionRouter.post('/get', authenticator.isLoggedIn, transactionController.GetAllTransactions)
