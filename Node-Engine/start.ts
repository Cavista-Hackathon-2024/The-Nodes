import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors'
import { connectToDB } from './database';
import config from './Config/config';
import { authRouter } from './Resources/Auth/auth.router';
import { Cors } from './Config/cors';
import { transactionRouter } from './Resources/Transactions/transaction.router';
import { generateRouter } from './Resources/Generate/generate.router';

export const CavistaNode: Express = express();
const rettyCors = new Cors;

CavistaNode.use(express.json());
CavistaNode.use(express.urlencoded({ extended: true }));
CavistaNode.use(cors(rettyCors.corsOptions))

CavistaNode.use('/api/v1/auth', authRouter)
CavistaNode.use('/api/v1/app/transactions', transactionRouter)
CavistaNode.use('/api/v1/ai', generateRouter)

CavistaNode.use((req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({ message: 'This Request does not sit with Retty API' });
})

CavistaNode.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
connectToDB();
CavistaNode.listen(config.app.port, () => {
    console.log(`Server started on port ${config.app.port}`);
})


