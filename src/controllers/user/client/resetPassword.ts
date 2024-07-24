import { Request, Response } from "express";
import ResetPassword from "../../../services/client/resetPassword";

const reset = async (req: Request, res: Response) => {
    try{
       const { email } = req.body;

       const result = await ResetPasswor(email);

       if (result) {
        return res.status(200).json({
            status: 'Successful Reset',
        });
        } else {
            return res.status(401).json({
                status: 'Unsuccesful Reset'
            })
        }
    } catch (error) {
        return res
            .status(500)
            .send({ errorInfo: 'Internal Server Error', error });
    }
}

export default reset;