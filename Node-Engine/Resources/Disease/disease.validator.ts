import Joi from 'joi';

export class DiseaseValidator {
    public async ValidateDiseaseCreation(data: any) {
        const schema = Joi.object({
            name: Joi.string().required(),
            symptoms: Joi.string().required(),
            precautions: Joi.string().required()
        });
        return schema.validate(data);
    }

    public async ValidateDiseaseEdit(data: any) {
        const schema = Joi.object({
            name: Joi.string().required(),
            symptoms: Joi.string().required(),
            precautions: Joi.string().required()
        });
        return schema.validate(data);
    }
}