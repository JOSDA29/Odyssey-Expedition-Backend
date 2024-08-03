import { Request, Response } from 'express';
import getService from '../../../services/user/client/getByEmail';

const getByEmail = async (req: Request, res: Response) => {
    try {
        const { tokenRole, tokenEmail } = req.body;
        const email:string = req.params.email;

        let result: any = [];

        switch (tokenRole) {
            case 'Client':
                result = await getService.getByEmail(tokenEmail);
                break;
            case 'Adviser':
                if (!email) {
                    return res.status(400).send({ message: 'Email is required' });
                }
                result = await getService.getByEmail(email);
                break;
            default:
                return res.status(401).send({ message: 'Invalid tokenRole' });
        }

        if (result.length > 0) {
            return res.status(200).json(result[0]);
        } else {
            return res.status(404).json({ status: 'Data not found' });
        }
    } catch (error: any) {
        if (error && error.code === 'ER_DUP_ENTRY') {            
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else if (error) {
            return res.status(500).json({ errorInfo: error.message });
        }
    }
};

export default getByEmail;
