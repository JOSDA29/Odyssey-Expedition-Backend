import { Request, Response } from 'express';
import getImage from '../../../services/user/client/getImage';

const get = async (req: Request, res: Response) => {
    const { tokenEmail } = req.body;
    try {
        const result = await getImage.getimage(tokenEmail);
        if (result) {
            return res.status(200).json({
                imageUrl: result,
            });
        }
        return res.status(404).json({
            status: 'Not found :(',
        });
    } catch (error: any) {
        if (error && error.code === '23505') {            
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else if (error) {
            return res.status(500).json({ errorInfo: error.message });
        }
    }
};

export default get;
