import User from "../DTO/userDTO";
import connection from "../config/configDB";

class updateRepository{
    static async updateClient(user: User){
        const fieldsToUpdate = [];
        const values = [];
        
        const userIdIndex = 1;
        values.push(user.id);
        
        let index = userIdIndex + 1; 

        if (user.names !== undefined) {
            fieldsToUpdate.push(`firstName = $${index}`);
            values.push(user.names);
            index++;
        }
        if (user.lastNames !== undefined) {
            fieldsToUpdate.push(`lastName = $${index}`);
            values.push(user.lastNames);
            index++;
        }
        if (user.email !== undefined) {
            fieldsToUpdate.push(`email = $${index}`);
            values.push(user.email);
            index++;
        }
        if (user.password !== undefined) {
            fieldsToUpdate.push(`password = $${index}`);
            values.push(user.password);
            index++;
        }
        if (user.phone !== undefined) {
            fieldsToUpdate.push(`phone = $${index}`);
            values.push(user.phone);
            index++;
        }
        if (user.image !== undefined) {
            fieldsToUpdate.push(`image = $${index}`);
            values.push(user.image);
            index++;
        }
        
        // Construcción de la cláusula SET y la consulta SQL
        const setClause = fieldsToUpdate.join(", ");
        const sql = `UPDATE Client SET ${setClause} WHERE clientID = $1`;

        try{
            const client = await connection.connect();
            try{
                const result = await client.query(sql, values); 
                return result.rows;
            } finally {
                client.release();
            }
        } catch (error: any){
            console.log('Error Executing query', error.stack);
            throw error;
        }
    }

    static async updateAdmin(user: User){
            const tables = ["Client", "Administrator", "Adviser"];
            let tableName = "";
            
            // Verificar a qué tabla pertenece el usuario
            for (const table of tables) {
                const checkSql = `SELECT 1 FROM ${table} WHERE ${table.toLowerCase()}ID = $1`;
                try {
                    const client = await connection.connect();
                    try {
                        const result: any = await client.query(checkSql, [user.id]);
                        if (result.rowCount > 0) {
                            tableName = table;
                            break;
                        }
                    } finally {
                        client.release();
                    }
                } catch (error: any) {
                    console.log('Error Executing query', error.stack);
                    throw error;
                }
            }
            
            if (tableName === "") {
                throw new Error("User not found in any table");
            }
    
            const fieldsToUpdate = [];
            const values = [];
            
            const userIdIndex = 1;
            values.push(user.id);
            
            let index = userIdIndex + 1; 
    
            if (user.names !== undefined) {
                fieldsToUpdate.push(`firstName = $${index}`);
                values.push(user.names);
                index++;
            }
            if (user.lastNames !== undefined) {
                fieldsToUpdate.push(`lastName = $${index}`);
                values.push(user.lastNames);
                index++;
            }
            if (user.email !== undefined) {
                fieldsToUpdate.push(`email = $${index}`);
                values.push(user.email);
                index++;
            }
            if (user.password !== undefined) {
                fieldsToUpdate.push(`password = $${index}`);
                values.push(user.password);
                index++;
            }
            if (user.phone !== undefined) {
                fieldsToUpdate.push(`phone = $${index}`);
                values.push(user.phone);
                index++;
            }
            if (user.image !== undefined) {
                fieldsToUpdate.push(`image = $${index}`);
                values.push(user.image);
                index++;
            }
            
            // Construcción de la cláusula SET y la consulta SQL
            const setClause = fieldsToUpdate.join(", ");
            const sql = `UPDATE ${tableName} SET ${setClause} WHERE ${tableName.toLowerCase()}ID = $1`;
    
            try {
                const client = await connection.connect();
                try {
                    const result = await client.query(sql, values);
                    return result.rows;
                } finally {
                    client.release();
                }
            } catch (error: any) {
                console.log('Error Executing query', error.stack);
                throw error;
            }
    }

    static async updateAdviser(user: User){
        const tables = ["Client", "Administrator", "Adviser"];
        let tableName = "";
        
        // Verificar a qué tabla pertenece el usuario
        for (const table of tables) {
            const checkSql = `SELECT 1 FROM ${table} WHERE ${table.toLowerCase()}ID = $1`;
            try {
                const client = await connection.connect();
                try {
                    const result: any = await client.query(checkSql, [user.id]);
                    if (result.rowCount > 0) {
                        tableName = table;
                        break;
                    }
                } finally {
                    client.release();
                }
            } catch (error: any) {
                console.log('Error Executing query', error.stack);
                throw error;
            }
        }
        
        if (tableName === "Administrator") {
            throw new Error("You dont Auhorized");
        }

        const fieldsToUpdate = [];
        const values = [];
        
        const userIdIndex = 1;
        values.push(user.id);
        
        let index = userIdIndex + 1; 

        if (user.names !== undefined) {
            fieldsToUpdate.push(`firstName = $${index}`);
            values.push(user.names);
            index++;
        }
        if (user.lastNames !== undefined) {
            fieldsToUpdate.push(`lastName = $${index}`);
            values.push(user.lastNames);
            index++;
        }
        if (user.email !== undefined) {
            fieldsToUpdate.push(`email = $${index}`);
            values.push(user.email);
            index++;
        }
        if (user.password !== undefined) {
            fieldsToUpdate.push(`password = $${index}`);
            values.push(user.password);
            index++;
        }
        if (user.phone !== undefined) {
            fieldsToUpdate.push(`phone = $${index}`);
            values.push(user.phone);
            index++;
        }
        if (user.image !== undefined) {
            fieldsToUpdate.push(`image = $${index}`);
            values.push(user.image);
            index++;
        }
        
        // Construcción de la cláusula SET y la consulta SQL
        const setClause = fieldsToUpdate.join(", ");
        const sql = `UPDATE ${tableName} SET ${setClause} WHERE ${tableName.toLowerCase()}ID = $1`;

        try {
            const client = await connection.connect();
            try {
                const result = await client.query(sql, values);
                return result.rows;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.log('Error Executing query', error.stack);
            throw error;
        }
       
    }

    
}

export default updateRepository;