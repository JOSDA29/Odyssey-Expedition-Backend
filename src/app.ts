import express from "express";
import bodyParser from 'body-parser';

//ROUTES
import auth from './routes/authRoute';

import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express().use(bodyParser.json());

app.use(cookieParser());

app.use('/auth', auth);

const PORT = process.env.PORT || 10240;

app.listen(PORT, () => {
    console.log(`Server ejecutandose en el puerto: ${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
});