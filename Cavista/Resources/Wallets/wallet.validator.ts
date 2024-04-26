import Joi from 'joi'
import { Schema } from 'mongoose'

export class WalletValidator {
    public async validateWalletCreation(body: any) {
        try {
            const schema = Joi.object({
                email: Joi.string().email().required(),
                firstname: Joi.string().required(),
            });
            await schema.validateAsync(body);
        } catch (error) {
            return error
        }
    }
}
