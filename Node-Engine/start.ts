import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors'
import { connectToDB } from './database';
import config from './Config/config';
import { authRouter } from './Resources/Auth/auth.router';
import { Cors } from './Config/cors';
import { transactionRouter } from './Resources/Transactions/transaction.router';
import { generateRouter } from './Resources/Generate/generate.router';
import { notesRouter } from './Resources/Notes/notes.router';
import { communityRouter } from './Resources/Community/community.router';
import { notificationRouter } from './Resources/Notifications/notification.router';
import { diseaseRouter } from './Resources/Disease/disease.router';
import { hospitalRouter } from './Resources/Hospitals/hospital.router';
import { messagingRouter } from './Resources/Messaging/messaging.router';
import { profileRouter } from './Resources/Profile/profile.router';
import { run } from './Resources/Notifications/notification.services';

export const CavistaNode: Express = express();
const rettyCors = new Cors;

CavistaNode.use(express.json());
CavistaNode.use(express.urlencoded({ extended: true }));
CavistaNode.use(cors(rettyCors.corsOptions))

CavistaNode.use('/api/v1/auth', authRouter)
CavistaNode.use('/api/v1/app/transactions', transactionRouter)
CavistaNode.use('/api/v1/app/notes', notesRouter)
CavistaNode.use('/api/v1/app/communities', communityRouter)
CavistaNode.use('/api/v1/app/hospitals', hospitalRouter)
CavistaNode.use('/api/v1/app/messaging', messagingRouter)
CavistaNode.use('/api/v1/app/notifications', notificationRouter)
CavistaNode.use('/api/v1/app/details', profileRouter)
CavistaNode.use('/api/v1/app/diseases', diseaseRouter)
CavistaNode.use('/api/v1/ai', generateRouter)

CavistaNode.use((req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({ message: 'This Request does not sit with Retty API' });
})

CavistaNode.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
connectToDB();
run()
CavistaNode.listen(config.app.port, () => {
    console.log(`Server started on port ${config.app.port}`);
})


