import connection from "../../../config/configDB";
import TransportDTO from "../../../DTO/managementServices/transport/TransportDTO";

class CreateTrasnport {
    static async createTransport(transport:TransportDTO){
        const sql = 'select create_transport($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
        const values = [
            transport.transportID,
            transport.transporttype, 
            transport.company, 
            transport.origin, 
            transport.destination, 
            transport.arrivalDate, 
            transport.departureDate, 
            transport.numberOfPeople, 
            transport.price, 
            transport.trackNumber, 
            transport.imageURL,
            transport.fkAdviserEmail
        ]

        try {
            const client = await connection.connect();
            try {
                const result = client.query(sql, values);
                return result;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query:', error.stack);
            throw error;
        }         
    }
}

export default CreateTrasnport;