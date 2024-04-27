import { Request, Response } from "express";
import { NotesModel } from "./notes.model";
import { NotesValidator } from "./notes.validator";

const notesValidator = new NotesValidator

export class NotesController {
    public async CreateANote (req: any, res: Response) {
        try {
            const { userId } = req.user
            console.log(userId)
            const ValidatedBody = await notesValidator.ValidateNoteCreation(req.body)
            if (ValidatedBody.error) {
                return res.status(400).json({
                    status: 400,
                    message: ValidatedBody.error.details[0].message
                })
            }
            const { title, content } = req.body
            const isExistingNote = await NotesModel.findOne({ title: title, userId: userId })
            if (isExistingNote) {
                return res.status(400).json({
                    status: 400,
                    message: "Note with this title already exists!"
                })
            }
            const newNote = new NotesModel({
                title: title,
                note: content,
                user: userId
            })
            await newNote.save()
            return res.status(201).json({
                status: 201,
                message: "Note Created Successfully!",
                data: newNote
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error!",
                error
            })
        }
    }

    public async GetAllNotes (req: any, res: Response) {
        try {
            const { userId } = req.user
            const ValidatedBody = await notesValidator.ValidateNoteRetrieval({ user: userId })
            if (ValidatedBody.error) {
                return res.status(400).json({
                    status: 400,
                    message: ValidatedBody.error.details[0].message
                })
            }
            const notes = await NotesModel.find({ user: userId })
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
                message: "Internal Server Error!",
                error
            })
        }
    }
}