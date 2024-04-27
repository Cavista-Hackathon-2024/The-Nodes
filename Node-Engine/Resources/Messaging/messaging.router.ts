import { Router } from "express";

import { MessagingController } from "./messaging.controller";

export const messagingRouter = Router();

const messagingController = new MessagingController();

messagingRouter.post("/ping", (req, res) => {
    res.send("pong");
});

messagingRouter.post("/send", messagingController.SendMessage);