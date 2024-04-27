import { Router } from "express";
import { MessagingController } from "./messaging.controller";
import { Authenticator } from "../../Config/authenticator";

export const messagingRouter = Router();
const messagingController = new MessagingController();
const authenticator = new Authenticator();

messagingRouter.post("/ping", (req, res) => {
    res.send("pong");
});

messagingRouter.post("/send/:communityId", authenticator.isLoggedIn, messagingController.SendMessage);

messagingRouter.get("/community/all/:communityId", authenticator.isLoggedIn, messagingController.GetAllMessagesByCommunity);

messagingRouter.get("/personal/all", authenticator.isLoggedIn, messagingController.GetAllMessagesByUser);