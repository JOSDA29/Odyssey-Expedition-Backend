import axios from 'axios';
import { Request, Response } from "express";
import TransactionDTO from '../../DTO/transaction/createDTO';
import TransactionService from '../../services/transaction/createService';
import db from '../../config/configDB'; 

const create = async (req: Request, res: Response) => {
    try {
        const {
            tokenEmail,
            adviserEmail,
            billingDate,
            service,
            paymentMethod,
            serviceType,
            description,
            state
        } = req.body;

        const transactionData = new TransactionDTO(
            tokenEmail,
            adviserEmail,
            billingDate,
            service,
            paymentMethod,
            serviceType,
            description,
            state
        );

        const result = await TransactionService.createService(transactionData);

        if (result.success) {
            // Obtener el precio del servicio aquí, por ejemplo:
            const priceResult = await db.query(
                'SELECT get_service_price($1, $2) AS service_price', 
                [serviceType, service]
            );

            const totalPrice = parseFloat(priceResult.rows[0].service_price);


            // Crear la preferencia de pago en Mercado Pago
            const paymentData = {
                items: [{
                    title: `Reserva de ${serviceType}`,
                    unit_price: totalPrice,
                    currency_id: 'COP',
                    quantity: 1,
                }],
                back_urls: {
                    success: 'http://localhost:5500/index.html',
                    failure: 'http://localhost:10240/failure',
                    pending: 'http://localhost:10240/pending',
                },
            };

            const paymentResponse = await axios.post(
                'https://api.mercadopago.com/checkout/preferences',
                paymentData,
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            return res.status(200).json({
                message: 'Transaction created successfully',
                paymentURL: paymentResponse.data.init_point,
            });
        } else {
            return res.status(500).json({ message: 'Failed to create transaction' });
        }
    } catch (error: unknown) {
        console.error('Error:', error);
        if (axios.isAxiosError(error)) {
            return res.status(400).json({
                error: 'Mercado Pago error',
                details: error.response?.data || error.message,
            });
        } else if (error instanceof Error) {
            return res.status(500).json({
                error: 'Internal server error',
                errorInfo: error.message
            });
        }
    }
    
};

export default create;
