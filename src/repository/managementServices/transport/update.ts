import connection from "../../../config/configDB";
import UpdateTransportDTO from "../../../DTO/managementServices/transport/UpdateTransportDTO";

class UpdateTransportRepository {
    static async updateTransport(updateTransportDTO: UpdateTransportDTO) {
        const sql = 'SELECT update_transport($1, $2, $3, $4, $5, $6, $7, $8, $9) AS row_count';
        const values = [
            updateTransportDTO.transportID,
            updateTransportDTO.origin,
            updateTransportDTO.destination,
            updateTransportDTO.arrivalDate,
            updateTransportDTO.departureDate,
            updateTransportDTO.numberOfPeople,
            updateTransportDTO.price,
            updateTransportDTO.trackNumber,
            updateTransportDTO.state
        ];

        try {
            const client = await connection.connect();
            try {
                const result = await client.query(sql, values);
                return result.rows[0].row_count;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query:', error.stack);
            throw error;
        }
    }
}

export default UpdateTransportRepository;
