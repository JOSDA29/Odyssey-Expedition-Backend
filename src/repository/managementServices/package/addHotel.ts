import connection from "../../../config/configDB";

class AddService {
    static async addService(idPackage:number, idHotel:number){
        const sql = `SELECT Insert_Hotel_Package(
        $1,
        $2
        )`;
        const values = [
            idHotel,
            idPackage
        ];
        
        try {
            const client = await connection.connect();
            try{
                const res = await client.query(sql, values);
                return res;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
   }
}

export default AddService;