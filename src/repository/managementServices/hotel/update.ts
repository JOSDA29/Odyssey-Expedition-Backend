import connection from "../../../config/configDB";
import UpdateHotel from "../../../DTO/managementServices/hotel/updateDTO";

class Update {
    static async updateHotel(hotel: UpdateHotel){
        const sql = `SELECT update_hotel(
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            $9,
            $10,
            $11,
            $12,
            $13
            )`;
        const values = [
            hotel.id,
            hotel.name,
            hotel.destination,
            hotel.startDate,
            hotel.endDate,
            hotel.numberOfPeople,
            hotel.room,
            hotel.description,
            hotel.location,
            hotel.hotelServices,
            hotel.state,
            hotel.price,
            hotel.fkAdviserEmail,
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

export default Update;