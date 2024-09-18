import { Request, Response } from 'express';
import getService from '../../../services/user/client/getByEmail';

const getByEmail = async (req: Request, res: Response) => {
    try {
    
        const  email : string = req.params.email;
        
        const result = await getService.getByEmail(email);


        if (result.length > 0) {
            return res.status(200).json(result[0]);
        } 

        return res.status(404).json({ status: 'Data not found' });

    } catch (error: any) {
        if (error && error.code === '23505') {            
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else if (error) {
            return res.status(500).json({ errorInfo: error.message });
        }
    }
};

export default getByEmail;
