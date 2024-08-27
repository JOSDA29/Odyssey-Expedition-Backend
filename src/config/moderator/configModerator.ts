import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    perspectiveApiKey: process.env.APIPERSPECTIVE || '',
};