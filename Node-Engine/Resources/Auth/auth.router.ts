import { Router } from 'express';
import { AuthController } from './auth.controller';
import { Authenticator } from '../../Config/authenticator';
import { upload } from '../Generate/upload';
import { analyzeImagesWithGeminiProVision } from '../Generate/model';
import { Request, Response } from 'express';

export const authRouter = Router();
const authController = new AuthController();
const authenticator = new Authenticator();

authRouter.get('/ping', (req, res) => {
    res.send('pong');
});

authRouter.post('/register', authController.Register);
authRouter.post('/login', authController.Login);
authRouter.post('/verify/email', authController.VerifyEmail);
authRouter.post('/forgot/password', authController.ForgotPassword);
authRouter.post('/reset/password', authController.ResetPassword);
authRouter.post('/change/password', authController.ChangePassword);
authRouter.post('/verify/forgot', authController.VerifyForgotPassword);