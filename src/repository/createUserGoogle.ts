import connection from "../config/configDB";
import googleUserDTO from '../DTO/CreateUserGoogleDTO';

class createUser {
  static async create(newUser: googleUserDTO) {
    const sql = 'INSERT INTO Client (email, firstName, lastName) VALUES ($1, $2, $3)';
    const values = [newUser.email, newUser.firstName, newUser.lastName];

    try {
      const client = await connection.connect();
      try {
        const res = await client.query(sql, values);
        return res.rows; 
      } finally {
        client.release();
      }
    } catch (error: any) {
      console.error('Error al crear usuario', error.stack);
      throw error;
    }
  }
}

export default createUser;
