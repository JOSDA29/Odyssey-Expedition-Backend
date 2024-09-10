import connection from "../../../config/configDB";

class updateImage {
    static async upload (id: number, file: string){
        const sql = 'UPDATE Package SET imageURL = $2 WHERE PackageID = $1';
        const values = [id, file];
        try {
            const services = await connection.connect();
            try{
                const res = await services.query(sql, values);
                return res.rowCount;
            } finally {
                services.release();
            }
        } catch (error: any) {
            console.error('Executing error query', error.stack);
            throw error;
        }

    }
}

export default updateImage;