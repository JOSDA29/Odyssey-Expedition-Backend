import { Request, Response } from "express";
import RegisterSupplierService from "../../services/supplier/register";
import SupplierDTO from "../../DTO/user/SupplierDTO";

const registerSupplier = async (req: Request, res: Response) => {
  const { supplierID, companyName, email, schedule, address, phoneNumber, state, image, tokenEmail } = req.body;

  try {
    if (!supplierID || !companyName || !email || !phoneNumber || !tokenEmail) {
      return res.status(402).json({ error: "Missing required fields" });
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
      image ?? null
    );

    await RegisterSupplierService.registerSupplier(supplierDTO);

    return res.status(201).json({
      status: "Register successful",
    });
    
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      console.log(error.code);
      
      return res.status(409).json({ error: "Supplier already exists", details: error.sqlMessage });
    }

    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

export default registerSupplier;
