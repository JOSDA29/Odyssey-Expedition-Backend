import axios from 'axios';
import { Request, Response } from 'express';

export const createOrder = async (req: Request, res: Response) => {
  const { precioTotal, tipoReserva } = req.body;

  // Verifica qué valor está llegando
  console.log('Valor de precioTotal recibido:', precioTotal);

  if (!precioTotal || isNaN(precioTotal) || precioTotal <= 0) {
    return res.status(400).json({
      error: 'El precio total debe ser un número válido mayor a 0',
    });
  }

  try {
    const response = await axios.post(
      'https://api.mercadopago.com/checkout/preferences',
      {
        items: [
          {
            title: tipoReserva === 'crucero' ? 'Reserva de Crucero' : 'Reserva de Paquete',
            unit_price: parseFloat(precioTotal), // Asegurarse de que sea un número
            currency_id: 'COP',
            quantity: 10,
          },
        ],
        back_urls: {
          success: 'http://localhost:10240/success',
          failure: 'http://localhost:10240/failure',
          pending: 'http://localhost:10240/pending',
        },
      },
      {
        headers: {
          'Authorization': 'Bearer TEST-1439096588171680-090923-57104a9b778aadb1ba399d37eb2dbd8d-1982993353',
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Order created successfully:', response.data);
    return res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Log detallado del error
      console.error('Error details:', {
        status: error.response?.status, // Código de estado de la respuesta
        statusText: error.response?.statusText, // Texto del estado
        data: error.response?.data, // Datos del error
        headers: error.response?.headers, // Headers de la respuesta
        request: error.request, // Detalles de la solicitud enviada
      });

      return res.status(500).json({
        error: error.response?.data || error.message,
        status: error.response?.status, // Incluye el código de estado en la respuesta
      });
    } else {
      console.error('Unexpected error:', error);
      return res.status(500).json({ error: 'Unexpected error' });
    }
  }
};