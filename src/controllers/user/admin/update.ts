import { Request, Response } from 'express';
import AdminUpdate from '../../../services/user/admin/adminUpdate';
import User from '../../../DTO/updateDTO';

const update = async (req: Request, res: Response) => {
    try {
        const { tokenEmail, id, name, lastName, phoneNumber, state } = req.body;

        const result = await AdminUpdate.updateA(
            new User(tokenEmail, id, name, lastName, phoneNumber, state),
        );

        if (result.success) {
            return res.status(201).json({ message: result.message });
        }
        return res.status(400).json({message: result.message });
    } catch (error) {
        return res
            .status(500)
            .send({ errorInfo: 'Internal Server Error', error });
    }
};

export default update;
