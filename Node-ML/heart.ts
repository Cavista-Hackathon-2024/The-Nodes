import { Request, Response } from 'express'; // Assuming you are using Express for handling HTTP requests
import { HeartAttackPredictor } from './heartAttackPredictor'; // Assuming you have a HeartAttackPredictor class defined

// Define types for request body and prediction result
interface HeartAttackPredictionRequestBody {
    patientData: any; // Input data for predicting heart attack risk
}

interface PredictionResult {
    riskLevel: 'low' | 'medium' | 'high'; // Predicted risk level of heart attack
}

// Define the endpoint handler
export const predictHeartAttack = async (req: Request<any, any, HeartAttackPredictionRequestBody>, res: Response<PredictionResult>) => {
    try {
        // Extract patient data from the request body
        const { patientData } = req.body;

        // Create an instance of the HeartAttackPredictor class
        const predictor = new HeartAttackPredictor();

        // Make a prediction using the provided patient data
        const prediction = await predictor.predict(patientData);

        // Determine the risk level based on the prediction
        let riskLevel: 'low' | 'medium' | 'high' = 'low';
        if (prediction >= 0.7) {
            riskLevel = 'high';
            // Inform family members about the high risk of a heart attack
            await predictor.informFamilyMembers(patientData);
        } else if (prediction >= 0.4) {
            riskLevel = 'medium';
        }

        // Send prediction result in response
        res.status(200).json({ riskLevel });
    } catch (error) {
        console.error('Error predicting heart attack:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
