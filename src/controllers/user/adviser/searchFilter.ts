import SearchFilterDTO from "../../../DTO/searchFilterDTO";
import SearchFilterService from "../../../services/user/adviser/searchFilter";
import { Request, Response } from "express";

const searchFilter = async (req: Request, res: Response) => {
    const { id, name, lastName, phoneNumber, email } = req.query;

    try {
        const result = await SearchFilterService.searchFilter(
            new SearchFilterDTO(
                name as string ?? null, 
                lastName as string ?? null, 
                email as string ?? null, 
                phoneNumber as string ?? null, 
                id as string ?? null
            )
        );

        return res.status(200).json(result);

    } catch (error:any) {
        return res.status(500).send({ errorInfo: 'Internal Server Error', error: error.message });
    }
};

export default searchFilter;
