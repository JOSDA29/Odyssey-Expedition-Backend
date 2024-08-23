import connection from "../../../config/configDB";
import FilterTransportDTO from "../../../DTO/managementServices/transport/FilterTransportDTO";

class FilterTransport {
    static async filterTransport(filterTransportDTO: FilterTransportDTO){
        const sql = 'select * from filter_transports($1,$2,$3,$4,$5,$6,$7)';
        const values = [
            filterTransportDTO.transportId, 
            filterTransportDTO.transportType, 
            filterTransportDTO.origin, 
            filterTransportDTO.destination,
            filterTransportDTO.arrivalDate, 
            filterTransportDTO.departureDate, 
            filterTransportDTO.state
        ];

        try {
            const client = await connection.connect();
            try {
                const result = await client.query(sql, values);
                return result.rows;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query:', error.stack);
            throw error;
        }         
    }
}

export default FilterTransport;