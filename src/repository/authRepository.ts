import connection from "../config/configDB";

class AuthRepository {

    static async authUser(email: string) {
        const sql = 'SELECT contrasenia FROM Cliente WHERE correo = $1';
        const values = [email];

        try {
            const client = await connection.connect();
            try {
                const res = await client.query(sql, values);
                return res.rows;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
    

    static async authAdmin(email: string) {
        const sql = 'SELECT contrasenia FROM Administrador WHERE correo = $1';
        const values = [email];

        try {
            const client = await connection.connect();
            try {
                const res = await client.query(sql, values);
                return res.rows;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }

    static async authAdviser(email: string) {
        const sql = 'SELECT contrasenia FROM Asesor WHERE correo = $1';
        const values = [email];

        try {
            const client = await connection.connect();
            try {
                const res = await client.query(sql, values);
                return res.rows;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default AuthRepository;
