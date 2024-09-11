import { Pool } from 'pg';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const connection = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    max: 10,
    ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync(process.env.DB_SSL_CA || './DigiCertGlobalRootG2.crt.pem').toString(), 
    },
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export default connection;
