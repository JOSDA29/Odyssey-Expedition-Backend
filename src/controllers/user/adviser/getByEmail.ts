import { Request, Response } from 'express';
import getService from '../../../services/user/adviser/getByEmail';

let getByEmail = async (req: Request, res: Response) => {
    try {
        const { tokenRole, tokenEmail } = req.body;
        const email = req.params.email;
        let result: any = [];

        if (tokenRole == 'Adviser') {
            result = await getService.getByEmail(tokenEmail);
        } else {
            result = await getService.getByEmail(email);
        }

        if (result !== null && result.length > 0) {
            return res.status(202).json(result[0]);
        }

        return res.status(404).json({
            status: 'Data not found',
        });
    } catch (error: any) {
        if (error && error.code === 'ER_DUP_ENTRY') {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else if (error) {
            return res.status(500).json({ errorInfo: error.message });
        }
    }
};

export default getByEmail;
