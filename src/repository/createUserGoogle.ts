import connection from "../config/configDB";
import googleUserDTO from '../DTO/CreateUserGoogleDTO';

class createUser {
  static async create(newUser: googleUserDTO) {
    const sql = 'INSERT INTO Client (email, firstName, lastName) VALUES ($1, $2, $3) RETURNING *';
    const values = [newUser.email, newUser.firstName, newUser.lastName];

    try {
      const client = await connection.connect();
      try {
        const res = await client.query(sql, values);
        return res.rows[0]; 
      } finally {
        client.release(); 
      }
    } catch (error: any) {
      console.error('Error al crear usuario:', error.stack);
      throw new Error('Error al crear el usuario en la base de datos');
    }
  }
}

export default createUser;
