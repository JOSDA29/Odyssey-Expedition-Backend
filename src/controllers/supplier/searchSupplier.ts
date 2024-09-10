import { Request, Response } from "express";
import SearchSupplier from "../../services/supplier/searchSupplier";
import SearchSupplierDTO from "../../DTO/user/supplier/SearchSupplierDTO";

const searchSupplier = async(req: Request, res: Response) => {
    const {supplierID, companyName, email, phoneNumber, state} = req.query;

    try {
        const stateParse = state === 'true' ? true : state === 'false' ? false : null

        const result = await SearchSupplier.searchSupplier(
            new SearchSupplierDTO( 
                supplierID as string ?? null,
                companyName as string ?? null, 
                email as string ?? null,
                phoneNumber as string ?? null,
                stateParse
            )
        );

        return res.status(200).json(result);

    } catch (error:any) {
        return res.status(500).send({ errorInfo: 'Internal Server Error', error: error.message });
    }
}

export default searchSupplier;