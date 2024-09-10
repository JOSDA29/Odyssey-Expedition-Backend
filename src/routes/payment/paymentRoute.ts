import { Router, Request, Response } from "express";
import { createOrder } from "../../controllers/payment/payment";

const router = Router();

router.post("/create-order", createOrder);

export default router;
