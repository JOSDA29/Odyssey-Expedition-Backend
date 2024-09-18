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
        rejectUnauthorized: true,
        ca: fs.readFileSync('./path/to/BaltimoreCyberTrustRoot.crt.pem').toString(),
    },
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,  // Aumenta este valor si es necesario
});

export default connection;
