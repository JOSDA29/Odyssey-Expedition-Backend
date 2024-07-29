import { Request, Response } from 'express';
import getService from '../../../services/user/admin/getByEmail';

const getByEmail = async (req: Request, res: Response) => {
    try {
        const { tokenEmail } = req.body;

        const result = await getService.getByEmail(tokenEmail);

        if (result) {
            return res.status(202).json(result[0]);
        }

        return res.status(404).json({
            status: 'No found',
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
