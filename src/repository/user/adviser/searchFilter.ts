import connection from "../../../config/configDB";
import searchFilterDTO from "../../../DTO/searchFilterAdviserDTO";

class SearchFilter {
    static async searchFilter(searchFilterDTO: searchFilterDTO) {
        const sql = 'select * from filter_advisers($1, $2, $3, $4, $5)';
        const values = [
            searchFilterDTO.id,
            searchFilterDTO.firstname,
            searchFilterDTO.last_Name,
            searchFilterDTO.phoneNumber,
            searchFilterDTO.email,
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
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default SearchFilter;
