import { Router } from 'express';
import { AuthController } from './auth.controller';
import { Authenticator } from '../../Config/authenticator';
import { upload } from '../Generate/upload';
import { analyzeImagesWithGeminiProVision } from '../Generate/model';
import { Request, Response } from 'express';

export const authRouter = Router();
const authController = new AuthController();
const authenticator = new Authenticator();

authRouter.post('/ping', (req, res) => {
    res.send('pong');
});

authRouter.post('/register', authController.Register);
authRouter.post('/login', authController.Login);
authRouter.post('/verify/email', authController.VerifyEmail);
authRouter.post('/forgot/password', authController.ForgotPassword);
authRouter.post('/reset/password', authController.ResetPassword);
authRouter.post('/change/password', authController.ChangePassword);
authRouter.post('/verify/forgot', authController.VerifyForgotPassword);

async function omo (req: Request, res: Response) {
    try {
        // Process uploaded files
        const uploadedFiles = (req as any).files; // Explicitly cast req to 'any' to access 'files'
        const imagePaths = uploadedFiles.map((file: any) => file.path); // Cast 'file' to 'any' as well

        // Call the function to analyze images
        const analysisResult = await analyzeImagesWithGeminiProVision(imagePaths, 'What is the difference between these images?');

        res.json({ result: analysisResult });
    } catch (error) {
        console.error('Error uploading images:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

authRouter.post('/upload', upload.array('images'), omo);


// const upload = multer({ dest: 'uploads/' });

// // Route handler function
// async function omo(req: Request, res: Response): Promise<void> {
//     try {
//         // Process uploaded files
//         if (!req.files || !Array.isArray(req.files)) {
//             throw new Error('No files uploaded');
//         }

//         const uploadedFiles: Express.Multer.File[] = req.files;
//         const imagePaths: string[] = uploadedFiles.map(file => file.path);

//         // Call the function to analyze images
//         const analysisResult = await analyzeImagesWithGeminiProVision(imagePaths, 'What is the difference between these images?');

//         res.json({ result: analysisResult });
//     } catch (error) {
//         console.error('Error uploading images:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// // Register route
// authRouter.post('/upload', upload.array('images'), omo);