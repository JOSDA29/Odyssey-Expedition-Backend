import connection from '../../config/configDB';

const IdVerification = async (id: string) => {
    const sqlClient = "SELECT * FROM client WHERE clientid = $1";
    const sqlAdministrator = "SELECT * FROM administrator WHERE administratorid = $1";
    const sqlAdviser = "SELECT * FROM adviser WHERE adviserid = $1";

    const values = [id];

    try {
        const client = await connection.connect();
        try {
            const [responseClient, responseAdministrator, responseAdviser] = await Promise.all([
                client.query(sqlClient, values),
                client.query(sqlAdministrator, values),
                client.query(sqlAdviser, values)
            ]);

            const isClientExists = responseClient.rowCount !== null && responseClient.rowCount > 0;
            const isAdministratorExists = responseAdministrator.rowCount !== null && responseAdministrator.rowCount > 0;
            const isAdviserExists = responseAdviser.rowCount !== null && responseAdviser.rowCount > 0;

            if (isClientExists || isAdministratorExists || isAdviserExists) {
                return false;
            }

            return true;
        } finally {
            client.release();
        }
    } catch (error: any) {
        console.error('Error executing query', error.stack);
        throw error;
    }
}

export default IdVerification;