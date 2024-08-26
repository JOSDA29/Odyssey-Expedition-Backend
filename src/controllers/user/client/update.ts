import { Request, Response } from 'express';
import updateService from '../../../services/user/client/client';
import User from '../../../DTO/updateDTO';

const update = async (req: Request, res: Response) => {
    try {
        const { tokenEmail, name, lastName, phoneNumber } = req.body;
        console.log(name, lastName, phoneNumber);
        
        const result = await updateService.updateC(
            new User(tokenEmail, name, lastName, phoneNumber),
        );

        if (result) {
            return res.status(200).json({
                status: 'Successful Update',
            });
        }
    } catch (error) {
        return res
            .status(500)
            .send({ errorInfo: 'Internal Server Error', error });
    }
};

export default update;
