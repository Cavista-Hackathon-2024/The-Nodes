import { Router } from "express";
import { NotesController } from "./notes.controller";
import { Authenticator } from "../../Config/authenticator";


const notesController = new NotesController();
const authenticator = new Authenticator


export const notesRouter = Router();

notesRouter.post('/add', authenticator.isLoggedIn, notesController.CreateANote);
notesRouter.get('/all', authenticator.isLoggedIn, notesController.GetAllNotes);