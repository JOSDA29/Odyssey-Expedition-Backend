import { Request, Response } from "express";
import ChangeStatee from "../../../services/client/changeState";

const changeStatee = async (req: Request, res: Response) => {
    try {
        const { tokenEmail, state } = req.body;
        const result = await ChangeStatee.changeState(state, tokenEmail);
        
        if(result){
            return res.status(202).json({ status: 'Status update successful' });
        }else{
            return res.status(401).json({ status: 'Incorrect update'});
        }
    } catch(error: unknown){
        if(error instanceof Error){
            return res.status(500).send(
                { errorInfo: 'Internal Server Error', error: error.message });
        }  else {
            //Aqui se maneja el caso de que el error no sea una instancia de error
            return res
                .status(500)
                .send({ errorInfo: 'Internal Server Error', error: 'An unknown error occurred' });
        }
    }
}

export default changeStatee;