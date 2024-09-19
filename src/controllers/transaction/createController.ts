import { Request, Response } from "express";
import TransactionDTO from '../../DTO/transaction/createDTO';
import TransactionService from '../../services/transaction/createService';

const create = async (req: Request, res: Response) => {
    try {
        const {
            clientEmail,
            adviserEmail,
            billingDate,
            service,
            paymentMethod,
            serviceType,
            description,
            state   
        } = req.body;
        

        const transactionData = new TransactionDTO(
            clientEmail,
            adviserEmail,
            billingDate,
            service,
            paymentMethod,
            serviceType,
            description,
            state 
        );
        
        const result = await TransactionService.createService(transactionData);

        return res.status(result.state).json({ message: result.message});
    } catch(error: unknown) {
        if(error instanceof Error) {
            console.error('Internal Server Error', error.message);
            return res.status(500).json({
                error: 'Internal server error',
                errorInfo: error.message
            });
        }
    }
}

export default create;