import { Request, Response } from 'express';
import DeleteAdviser from '../../../services/user/adviser/delete';

const deleteAdviser = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const result = await DeleteAdviser.deleteAdviser(email);

        if (result.message == 'Adviser deleted successfully.') {
            return res.status(204);
        }

        return res.status(404).json({ status: result.message });
    } catch (error: any) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
};

export default deleteAdviser;
