import { Request, Response } from "express";
import GetServicesByPackage from "../../../services/managementServices/package/GetServicesByPackage";

const getServices = async (req: Request, res: Response) => {
    try {
        const { id } = req.query;

        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ success: false, message: 'Invalid package ID' });
        }

        const packageId = parseInt(id as string);

        const result = await GetServicesByPackage.filter(packageId);

        if (result.success && Array.isArray(result.data)) {
            return res.status(result.status).json(result.data); 
        }

        return res.status(result.status).json({ success: result.success, message: 'No services found for this package' });
         
    } catch (error: any) {
        console.error('Error in getServices:', error.message);
        return res.status(500).json({ success: false, message: 'Internal Server Error', errorInfo: error.message });
    }
}

export default getServices;
