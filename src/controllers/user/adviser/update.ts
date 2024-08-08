import { Request, Response } from 'express';
import AdviserUpdate from '../../../services/user/adviser/adviserUpdate';

import User from '../../../DTO/updateDTO';

const update = async (req: Request, res: Response) => {
    try {
        const { email, name, lastName, phoneNumber, image} =
            req.body;

        const result = await AdviserUpdate.updateAd(
            new User(email, name, lastName, phoneNumber, image),
        );

        if (result.message == 'Data not found') {
            return res.status(404).json({
                status: result.message,
            });
        }

        return res.status(201).json({
            status: result.message,
        });
        
    } catch (error) {
        return res
            .status(500)
            .send({ errorInfo: 'Internal Server Error', error });
    }
};

export default update;
