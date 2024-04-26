import jwt from 'jsonwebtoken';
import config from './config';

export class TokenService {
    public async generateAccessToken(payload: any) {
        try {
            const token = jwt.sign(payload, config.auth.accessTokenSecret, { expiresIn: config.auth.accessTokenExpiresIn });
            return token
        } catch (error) {
            return error
        }
    }

    public async verifyAccessToken(token: string) {
        try {
            const decoded = jwt.verify(token, config.auth.accessTokenSecret);
            return decoded
        } catch (error) {
            return error
        }
    }

    public async generateOTP() {
        try {
            const otp = Math.floor(100000 + Math.random() * 900000);
            return otp
        } catch (error) {
            return error
        }
    }
}