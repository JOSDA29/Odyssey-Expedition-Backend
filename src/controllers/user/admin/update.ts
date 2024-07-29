import { Request, Response } from 'express';
import AdminUpdate from '../../../services/user/admin/adminUpdate';
import User from '../../../DTO/updateDTO';

const update = async (req: Request, res: Response) => {
    try {
        const { id, names, lastnames, phone, image } = req.body;

        const result = await AdminUpdate.updateA(
            new User(id, names, lastnames, phone, image),
        );

        if (result) {
            return res.status(200).json({
                status: 'Successful Update',
            });
        }

        return res.status(401).json({
            status: 'Invalid email or password',
        });
    } catch (error) {
        return res
            .status(500)
            .send({ errorInfo: 'Internal Server Error', error });
    }
};

export default update;
