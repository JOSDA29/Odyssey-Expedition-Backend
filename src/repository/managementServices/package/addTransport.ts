import connection from "../../../config/configDB";

class AddTransport {
    static async addService(idTransport:string, idPackage:number, numberOfPeople:number){
        const sql = `SELECT Insert_Transport_Package(
        $1,
        $2,
        $3
        )`;
        const values = [
            idTransport,
            idPackage,
            numberOfPeople
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

export default AddTransport;