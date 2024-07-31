import { Request, Response } from "express";
import UpdateSupplierService from "../../services/supplier/update";
import UpdateSupplierDTO from "../../DTO/updateSupplierDTO";

const updateSupplier = async (req: Request, res: Response) => {
  const { supplierID, email, schedule, address, phoneNumber } = req.body;

  try {
    if (!supplierID) {
      return res.status(402).json({ error: "Missing required fields: supplierID" });
    }

    const updateSupplierDTO = new UpdateSupplierDTO(
      supplierID,
      email ?? null,
      schedule ?? null,
      address ?? null,
      phoneNumber ?? null,
    );

    const result = await UpdateSupplierService.updateSupplier(updateSupplierDTO);
    if (!result) {
      return res.status(404).json({ error: "Supplier not found" });
    }
    return res.status(200).json({
      status: 'Successful update',
    });

  } catch (error: any) {
    console.log(error.stack);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};

export default updateSupplier;
