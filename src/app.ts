import express from "express";
import bodyParser from 'body-parser';

//ROUTES
import auth from './routes/authRoute';
import register from './routes/users/registerRoute';

import dotenv from 'dotenv';

dotenv.config();

const app = express().use(bodyParser.json());

app.use('/auth', auth);

app.use('/register', register);

const PORT = process.env.PORT || 10240;

app.listen(PORT, () => {
    console.log(`Server ejecutandose en el puerto: ${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
});