import { Request, Response } from 'express';
import getService from '../../../services/client/getAll';

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await getService.getAll();

        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ status: 'No clients found' });
        }
    } catch (error: any) {
        return res
            .status(500)
            .json({ status: 'Error', message: error.message });
    }
};

export default getAll;
