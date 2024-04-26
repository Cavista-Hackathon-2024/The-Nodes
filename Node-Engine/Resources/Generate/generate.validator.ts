import * as Joi from 'joi';

export class GenerateValidator {
    public async ValidateGenerateWithImage(data: any) {
        const schema = Joi.object({
            prompt: Joi.string().required(),
            images: Joi.array().items(Joi.string()).required(),
        });
        return schema.validate(data);
    }

    public async ValidateGenerateWithPromptOnly(data: any) {
        const schema = Joi.object({
            prompt: Joi.string().required(),
        });
        return schema.validate(data);
    }
}