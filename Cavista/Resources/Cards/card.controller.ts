import { Request, Response } from "express";
import { Card } from "./card.model";
import { ICard } from "./card.interface";

export class CardController {
    public async CreateCard (req: Request, res: Response) {
        try {
            const {type} = req.body as ICard
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }
    public async GetAllCards (req: Request, res: Response) {
        try {
            
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }
    public async GetACard (req: Request, res: Response) {
        try {
            
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }
    public async FreezeACard (req: Request, res: Response) {
        try {
            
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }
    public async CheckCardBalance (req: Request, res: Response) {
        try {
            const { cardId } = req.body;
            const card = await Card.findById(cardId)
            if (!card) {
                return res.status(404).json({
                    message: "Cannot Find Card!",
                    status: 404,
                })
            }
            const balance = card.balance
            return res.status(500).json({
                message: "Card Balance Fetched Successfully",
                status: 500,
                balance
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