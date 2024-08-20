import connection from "../../../config/configDB";
import filterDTO from "../../../DTO/managementServices/filterDTO";

class Filter{
    static async filter(hotel: filterDTO){
        const sql = 'SELECT * FROM filter_hotel($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)';
        const values = [hotel._Id, hotel.name, hotel.destination, hotel.startDate, hotel.endDate, hotel.numberOfPeople, hotel.room, hotel.description, hotel.location, hotel.services, hotel.state, hotel.priceMin, hotel.priceMax];
        try{
            const services = await connection.connect();
            try{
                const res = await services.query(sql, values);
                    return res.rows
            } finally {
                services.release();
            }
        } catch (error: any){
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default Filter;