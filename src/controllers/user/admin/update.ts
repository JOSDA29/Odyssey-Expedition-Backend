import { Request, Response } from 'express';
import AdminUpdate from '../../../services/user/admin/adminUpdate';
import User from '../../../DTO/updateDTO';

const update = async (req: Request, res: Response) => {
    try {
        const { tokenEmail, name, lastName, phoneNumber, image } = req.body;

        const result = await AdminUpdate.updateA(
            new User(tokenEmail, name, lastName, phoneNumber, image),
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
