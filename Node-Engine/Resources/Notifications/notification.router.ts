import { Router, Request, Response } from "express";
import { NotificationController } from "./notification.controller";
import { Authenticator } from "../../Config/authenticator";

export const notificationRouter = Router()
const notificationController = new NotificationController
const authenticator = new Authenticator



notificationRouter.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "notification Service Is Live!",
        status: 200
    })
})

notificationRouter.post('/get/:notificationId', authenticator.isLoggedIn, notificationController.GetNotification)
notificationRouter.post('/get', authenticator.isLoggedIn, notificationController.GetAllNotifications)
notificationRouter.post('/read/:notificationId', authenticator.isLoggedIn, notificationController.MarkNotificationAsRead)
notificationRouter.post('/read', authenticator.isLoggedIn, notificationController.MarkAllAsRead)
