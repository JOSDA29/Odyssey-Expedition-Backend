import connection from "../../../config/configDB";

class Delete {
    static async delete(id: number){
        const sql = 'Delete from Package WHERE PackageID = $1 ';
        const values = [id];

        try {
            const services = await connection.connect();
            try{
                const result = await services.query(sql, values);
                return result.rowCount;
            } finally {
                services.release();
            }
        } catch (error: any) {
            console.error("Error executing query:", error.stack);
            throw error;
        }
    }
}

export default Delete;