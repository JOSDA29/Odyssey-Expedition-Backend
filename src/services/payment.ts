import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN || 'TEST-7838772050870195-090722-9816ca192ffc1bc2ce93b4be14b24923-1982723570';

const apiBaseUrl = 'https://api.mercadopago.com/';

// Crea una orden de pago
export const createOrder = async (preference: any): Promise<any> => {
  try {
    const response = await axios.post(
    `${apiBaseUrl}/checkout/preferences`,
      preference,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Error creating order');
  }
};

// Obtiene el estado del pago
export const getPayment = async (paymentId: string): Promise<any> => {
  try {
    const response = await axios.get(
      `${apiBaseUrl}/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error getting payment:', error);
    throw new Error('Error getting payment');
  }
};