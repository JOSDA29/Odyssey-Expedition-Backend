import { Request, Response } from "express";
import DeletePackageService from '../../../services/managementServices/package/delete';

const Delete = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const idPackage: number = parseInt(id, 10);
        const result = await DeletePackageService.deleteService(idPackage);

    } catch (error: any) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
}

export default Delete;