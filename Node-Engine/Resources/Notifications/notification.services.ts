import { INotification } from "./notification.interface";
import { Notification } from "./notification.model";

export class NotificationService {
    public async CreateANotification (data: INotification) {
        try {
            const notification = new Notification({
                title: data.title,
                message: data.message,
                user: data.user
            });
            await notification.save();
            return notification;
        } catch (error) {
            return error;
        }
    }
}