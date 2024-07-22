import connection from '../../config/configDB';

const EmailVerification = async (email: string) => {
    const sqlClient = "SELECT * FROM client WHERE email = $1";
    const sqlAdministrator = "SELECT * FROM administrator WHERE email = $1";
    const sqlAdviser = "SELECT * FROM adviser WHERE email = $1";

    const values = [email];

    try {
        const client = await connection.connect();
        try {
            const [responseClient, responseAdministrator, responseAdviser] = await Promise.all([
                client.query(sqlClient, values),
                client.query(sqlAdministrator, values),
                client.query(sqlAdviser, values)
            ]);

            const isClientExists = responseClient.rowCount! > 0;
            const isAdministratorExists = responseAdministrator.rowCount! > 0;
            const isAdviserExists = responseAdviser.rowCount! > 0;

            if (isClientExists || isAdministratorExists || isAdviserExists) {
                return true;
            }

            return false;
        } finally {
            client.release();
        }
    } catch (error: any) {
        console.error('Error executing query', error.stack);
        throw error;
    }
}

export default EmailVerification;
