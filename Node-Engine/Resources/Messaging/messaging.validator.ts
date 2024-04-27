import Joi from 'joi';

export class MessagingValidator {
    public async ValidateMessageCreation(data: any) {
        const schema = Joi.object({
            title: Joi.string().required(),
            message: Joi.string().required(),
        });
        return schema.validate(data);
    }

    public async ValidateMessageEdit(data: any) {
        const schema = Joi.object({
            title: Joi.string().required(),
            message: Joi.string().required()
        });
        return schema.validate(data);
    }
}