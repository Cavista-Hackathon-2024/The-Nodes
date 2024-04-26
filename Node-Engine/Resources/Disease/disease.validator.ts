import joi from 'joi';

export class DiseaseValidator {
    public async ValidateDiseaseCreation (body: any) {
            const schema = joi.object({
                name: joi.string().required(),
                description: joi.string().required(),
                symptoms: joi.string().required(),
                causes: joi.string().required(),
                treatment: joi.string().required(),
                prevention: joi.string().required(),
                image: joi.string().required(),
                category: joi.string().required()
            });
            return await schema.validateAsync(body);
    }
}