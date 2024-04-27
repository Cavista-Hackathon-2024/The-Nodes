import Joi from 'joi';


export class CommunityValidator {
    public async ValidateCommunityCreation(data: any) {
        const schema = Joi.object({
            name: Joi.string().required(),
        });
        return schema.validate(data);
    }

    public async ValidateCommunityEdit(data: any) {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });
        return schema.validate(data);
    }
}