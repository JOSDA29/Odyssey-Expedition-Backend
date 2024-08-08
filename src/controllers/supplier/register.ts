import { Request, Response } from "express";
import RegisterSupplierService from "../../services/supplier/register";
import SupplierDTO from "../../DTO/user/supplier/SupplierDTO";

const registerSupplier = async (req: Request, res: Response) => {
  const { supplierID, companyName, email, schedule, address, phoneNumber, state, tokenEmail } = req.body;

  try {
    if (!supplierID || !companyName || !email || !phoneNumber || !tokenEmail) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const supplierDTO = new SupplierDTO(
      supplierID,
      companyName,
      email,
      phoneNumber,
      tokenEmail,
      schedule ?? null,
      address ?? null,
      state ?? null,
    );

    await RegisterSupplierService.registerSupplier(supplierDTO);

    return res.status(201).json({
      status: "Register successful",
    });
    
  } catch (error: any) {
    if (error.code === "23505") {      
      return res.status(409).json({ error: "Supplier already exists", details: error.sqlMessage });
    }

    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

export default registerSupplier;
