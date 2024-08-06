import { Request, Response } from "express";
import Delete from "../../services/supplier/delete";

const deleteSupplier = async(req: Request, res: Response)=>{
    const email = req.params.email;
    try {
        const result = await Delete.deleteSupplier(email);

        if (result) {
            return res.status(200).json({
                menssage: 'Delete Successfully',
            })
        }

        return res.status(404).json({
            menssage: 'Supplier not found',
        })
    } catch (error: any) {
        console.log(error.stack);
        return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}

export default deleteSupplier;