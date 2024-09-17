import connection from "../../../config/configDB";

class DeleteService {
    static async deleteService(idPackage:number, idHotel:number, idTransport:string){
        const sql = `SELECT delete_service_associated_package(
        $1,
        $2,
        $3
        )`;
        const values = [
            idPackage,
            idHotel,
            idTransport
        ];
        
        try {
            const client = await connection.connect();
            try{
                const res = await client.query(sql, values);
                console.log(res);
                
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

export default DeleteService;