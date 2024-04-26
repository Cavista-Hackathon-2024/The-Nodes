import { Request, Response } from "express";
import { NotesModel } from "./notes.model";
import { NotesValidator } from "./notes.validator";

const notesValidator = new NotesValidator

export class NotesController {
    public async CreateANote (req: any, res: Response) {
        try {
            const { userId } = req.user
            const { title, content } = req.body
            const ValidatedBody = await notesValidator.ValidateNoteCreation(req.body)
            if (ValidatedBody.error) {
                return res.status(400).json({
                    status: 400,
                    message: ValidatedBody.error.details[0].message
                })
            }
            const isExistingNote = await NotesModel.findOne({ title: title, userId: userId })
            if (isExistingNote) {
                return res.status(400).json({
                    status: 400,
                    message: "Note with this title already exists!"
                })
            }
            const newNote = new NotesModel({
                title: title,
                content: content,
                userId: userId
            })
            await newNote.save()
            return res.status(201).json({
                status: 201,
                message: "Community Created Successfully!",
                data: newNote
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }

    public async GetAllNotes (req: any, res: Response) {
        try {
            const { userId } = req.user.userId
            const ValidatedBody = await notesValidator.ValidateNoteRetrieval({ userId: userId })
            if (ValidatedBody.error) {
                return res.status(400).json({
                    status: 400,
                    message: ValidatedBody.error.details[0].message
                })
            }
            const notes = await NotesModel.find({ userId: userId })
            if (!notes || notes.length === 0) {
                return res.status(404).json({
                    status: 404,
                    message: "No notes found!"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "",
                data: notes
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!"
            })
        }
    }
}