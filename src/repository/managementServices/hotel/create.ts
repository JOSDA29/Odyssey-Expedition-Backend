import connection from "../../../config/configDB";
import HotelDTO from "../../../DTO/managementServices/hotel/hotelDTO";

class create {
    static async Create(hotel: HotelDTO) {
        const sql = `SELECT insert_hotel(
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
            $12
        )`;
        const values = [ 
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
            hotel.fkAdvisorEmail
        ];

        try {
            const client = await connection.connect();
            try {
                const res = await client.query(sql, values);
                return res.rows[0]?.insert_hotel || null;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default create;
