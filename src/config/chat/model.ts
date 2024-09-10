import { GoogleGenerativeAI } from '@google/generative-ai';
const APIKEYGEMINI = process.env.APIKEYGEMINI;
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(APIKEYGEMINI as string);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export default model;