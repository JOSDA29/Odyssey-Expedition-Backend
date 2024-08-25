import connection from '../../../config/configDB';
import UpdateImageDTO from '../../../DTO/managementServices/transport/UpdateImageDTO';

class UpdateImage {
    static async updateImage(transport: UpdateImageDTO) {
        const sql = `SELECT update_image_transport($1, $2, $3)`;
        const values = [
            transport.transportID,
            transport.fkAdviserEmail,
            transport.imageUrl,
        ];
        try {
            const client = await connection.connect();
            try {
                const res = await client.query(sql, values);
                console.log(res);
                
                return res.rows[0].update_image_transport;
            } finally {
                client.release();
            }  
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default UpdateImage;
