import Joi from 'joi';

export class NotesValidator {
    ValidateGetNotes: any;
    public async ValidateNoteCreation(data: any) {
        const schema = Joi.object({
            title: Joi.string().required(),
            content: Joi.string().required(),
        });
        return schema.validate(data);
    }

    public async ValidateNoteEdit(data: any) {
        const schema = Joi.object({
            title: Joi.string().required(),
            content: Joi.string().required()
        });
        return schema.validate(data);
    }

    public async ValidateNoteDeletion(data: any) {
        const schema = Joi.object({
            id: Joi.string().required()
        });
        return schema.validate(data);
    }

    public async ValidateNoteRetrieval(data: any) {
        const schema = Joi.object({
            user: Joi.string().required()
        });
        return schema.validate(data);
    }
}