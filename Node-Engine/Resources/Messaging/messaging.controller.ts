import { Request, Response } from "express";
import { MessagingValidator } from "./messaging.validator";
import { Messaging } from "./message.model";

const messagingValidator = new MessagingValidator

export class MessagingController {
    public async SendMessage (req: any, res: Response) {
        try {
            const data = req.body;
            const userId = req.user.userId;
            const communityId = req.params.communityId;
            const ValidatedBody = await messagingValidator.ValidateMessageCreation(data);
            if (ValidatedBody.error) {
                return res.status(400).json({
                    status: 400,
                    message: ValidatedBody.error.details[0].message
                })
            }
            const { message, title } = ValidatedBody.value;
            const newMessage = new Messaging({
                by: userId,
                community: communityId,
                message: message,
                title: title
            });
            await newMessage.save();
            return res.status(201).json({
                status: 201,
                message: "Message Sent Successfully!",
                data: newMessage
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }

    public async GetAllMessagesByCommunity (req: Request, res: Response) {
        try {
            const communityId = req.params.communityId;
            const messages = await Messaging.find({ community: communityId });
            if (!messages || messages.length === 0) {
                return res.status(404).json({
                    status: 404,
                    message: "No messages found!"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "",
                data: messages
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error
            })
        }
    }

    public async GetAllMessagesByUser (req: any, res: Response) {
        try {
            const userId = req.user.userId;
            const messages = await Messaging.find({ by: userId });
            if (!messages || messages.length === 0) {
                return res.status(404).json({
                    status: 404,
                    message: "No messages found!"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "",
                data: messages
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