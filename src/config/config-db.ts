import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5440,
    max: 10,
    idleTimeoutMillis: 2000,
});

pool.connect((err, client, release) => {
    if(err){
        console.log("Error al conectar a la base de datos", err);
        return;
    }
    console.log("Conexion exitosa a la base de datos");
    release();
});

export default pool;