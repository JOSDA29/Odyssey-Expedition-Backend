import { Request, Response } from "express"
import updateDTO from '../../DTO/transaction/UpdateDTO';
import TransactionService from '../../services/transaction/updateService';

const update = async(req: Request, res: Response) => {
    try {
        const {
            transactionid,
            price,
            state,
            service
        } = req.body;

        const data = new updateDTO(
            transactionid,
            price,
            state,
            service
        );

        const result = await TransactionService.updateService(data);

        return res.status(result.state).json({message: result.message});
    } catch (error: unknown){
        if(error instanceof Error) {
            console.error('Internal Server Error', error.message);
            return res.status(500).json({
                error: 'Internal server error',
                errorInfo: error.message
            });
        }
    }
}

export default update;