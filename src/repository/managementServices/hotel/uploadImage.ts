import connection from '../../../config/configDB';
import UpdateImageDTO from '../../../DTO/managementServices/hotel/updateImageDTO';

class UploadImage{
    static async uploadImage(hotel: UpdateImageDTO){
        const sql = `SELECT update_image_hotel($1, $2, $3)`;
        const values = [
            hotel.hotelId,
            hotel.fkAdviserEmail,
            hotel.imageUrl,
        ];
        try {
            const services = await connection.connect();
            try{
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

export default UploadImage;