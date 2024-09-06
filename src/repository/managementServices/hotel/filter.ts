import connection from "../../../config/configDB";
import filterDTO from "../../../DTO/managementServices/hotel/filterDTO";

class Filter {
    static async filter(hotel: filterDTO) {
        const sql = `SELECT * FROM filter_hotel(
            $1::INT, 
            $2::VARCHAR, 
            $3::VARCHAR, 
            $4::BOOLEAN
        )`;
        const values = [
            hotel._Id || null,
            hotel.name || null,
            hotel.destination || null,
            hotel.state || null
        ];
        try {
            const services = await connection.connect();
            try {
                const res = await services.query(sql, values);
                return res.rows;
            } finally {
                services.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default Filter;
