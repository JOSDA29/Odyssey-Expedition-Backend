import connection from '../../../config/configDB';
import UpdateDTO from '../../../DTO/managementServices/package/updateDTO';

class Update {
    static async UpdateRepo(packageDTO: UpdateDTO) {
        const sql = 'SELECT update_package($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
        const values = [
            packageDTO.id,
            packageDTO.origin,
            packageDTO.destination,
            packageDTO.departureDate,
            packageDTO.returnDate,
            packageDTO.numberOfPeople,
            packageDTO.itinerary,
            packageDTO.customerPreferences,
            packageDTO.state,
            packageDTO.fkAdviserEmail
        ];
        try {
            const services = await connection.connect();
            try {
                const res = await services.query(sql, values);                
                return res.rows[0].update_package;
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
