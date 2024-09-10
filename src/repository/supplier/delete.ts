import connection from "../../config/configDB"

class Delete {
    static async deleteSupplier(email: string){
        const sql = 'delete from supplier where email = $1'
        const values = [email];

        try {
            const client = await connection.connect();
            try {
                const result = client.query(sql, values);
                return result
            } finally {
                client.release
            }
        } catch (error: any) {
            console.error("Error executing query:", error.stack);
            throw error;
        }
    }
}

export default Delete;