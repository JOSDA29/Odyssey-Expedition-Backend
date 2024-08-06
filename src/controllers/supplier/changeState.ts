import ChangeStateService from "../../services/supplier/changeState";
import { Request, Response } from "express";

const changeState = async (req: Request, res:Response)=>{
    const {email, state} = req.body;

    try {
        const result = await ChangeStateService.changeState(email, state);

        if (result) {
            return res.status(200).json({
                status: 'Update Successfully'
            })
        }

        return res.status(404).json({
            message: 'Supplier not found'
        })
        
    } catch (error: any) {
        res.status(500).json({
            error: "Internal server error", 
            details: error.message,
        })
    }

}

export default changeState;