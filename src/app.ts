import express from "express";
import bodyParser from 'body-parser';

import dotenv from 'dotenv';

dotenv.config();

const app = express().use(bodyParser.json())

const PORT = process.env.PORT || 10240;

app.listen(PORT, () => {
    console.log(`Server ejecutandose en el puerto: ${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
});