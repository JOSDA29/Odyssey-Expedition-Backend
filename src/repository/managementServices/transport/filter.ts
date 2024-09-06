import connection from "../../../config/configDB";
import FilterTransportDTO from "../../../DTO/managementServices/transport/FilterTransportDTO";

class FilterTransportRepository {
    static async filterTransport(filterTransportDTO: FilterTransportDTO) {
        const sql = `SELECT * FROM filter_transport(
            $1::VARCHAR,
            $2::VARCHAR,
            $3::VARCHAR,
            $4::VARCHAR,
            $5::DATE,
            $6::DATE,
            $7::BOOLEAN
        )`;
        const values = [
            filterTransportDTO.transportId, 
            filterTransportDTO.transportType, 
            filterTransportDTO.origin, 
            filterTransportDTO.destination,
            filterTransportDTO.arrivalDate ? filterTransportDTO.arrivalDate.toISOString().split('T')[0] : null,
            filterTransportDTO.departureDate ? filterTransportDTO.departureDate.toISOString().split('T')[0] : null,
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

export default FilterTransportRepository;
