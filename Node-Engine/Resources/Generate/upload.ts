import axios from 'axios';
import multer from 'multer';
import fs from 'fs';
import express, { Request, Response } from 'express'; // Import the Request and Response types from the express module
import { CavistaNode } from '../../start';
import { analyzeImagesWithGeminiProVision } from './model';

const imagerouter = express.Router();

// Multer setup for handling file uploads
export const upload = multer({ dest: 'uploads/' });