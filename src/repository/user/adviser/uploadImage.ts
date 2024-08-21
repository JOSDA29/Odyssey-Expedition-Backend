import connection from "../../../config/configDB";

class uploadImage {
    static async uploadRepo (email: string, file: string){
        const sql = 'UPDATE Adviser SET imageURL = $2 WHERE email = $1';
        const values = [email, file];
        try {
            const services = await connection.connect();
            try {
                const res = await services.query(sql, values);
                return res.rowCount;
            } finally {
                services.release();
            }

        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default uploadImage;