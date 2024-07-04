import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    max: 10, 
    idleTimeoutMillis: 30000, 
    connectionTimeoutMillis: 2000, 
});

export default connection;