import { Request, Response } from "express";
import UpdateSupplierService from "../../services/supplier/update";
import UpdateSupplierDTO from "../../DTO/user/supplier/UpdateSupplierDTO";

const updateSupplier = async (req: Request, res: Response) => {
  const { supplierID, email, schedule, address, phoneNumber } = req.body;

  try {
    if (!supplierID) {
      return res.status(400).json({ error: "Missing required fields: supplierID" });
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
    if (error.code === "23505") {      
      return res.status(409).json({ error: "Supplier already exists", details: error.sqlMessage });
    }

    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

export default updateSupplier;
