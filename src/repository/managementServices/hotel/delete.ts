import connection from "../../../config/configDB";

class Delete {
    static async delete(id: number, email: string ){
        const sql = 'DELETE FROM Hotel WHERE HotelID = $1 AND FKAdviserEmail = $2';
        const values = [id, email];
        try {
            const services = await connection.connect();
            try{
                const res = await connection.query(sql, values);
                if(res.rowCount! > 0){
                    return {
                        message: 'Hotel Deleted Successfully'
                    };
                }
                return {
                    message: 'Hotel not found'
                };
            } finally {
                services.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default Delete;