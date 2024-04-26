import Joi from 'joi'
import { Schema } from 'mongoose'

export class ProfileValidator {
    public async validateProfileEdit(body: any) {
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
