import { EmailClient } from "@azure/communication-email";

const connectionString = "endpoint=https://servicio-correo-electronico.brazil.communication.azure.com/;accesskey=CGknq92lwaoWnDBY0PG0kSPOFj23H7On9uHTf5pcPoDbdXR8jmg1JQQJ99AGACULyCps5mg0AAAAAZCS7VFk";
const client = new EmailClient(connectionString);

export const sendEmail = async (recipientEmail: string, subject: string, body: string) => {
  // Lógica para crear el mensaje de correo electrónico y enviarlo
  const message = {
    senderAddress: "luis.velez1111@soy.sena.edu.co", // Aqui esta la direccion del remitente o sea la direccion que lo envia :)
    content: {
      subject: subject,
      plainText: body,
    },
    recipients: {
      to: [
        { address: recipientEmail, displayName: "Recipient Name" },
      ],
    },
  };

  const poller = await client.beginSend(message);
  const result: any = await poller.getResult();
  console.log(`Correo electrónico enviado: ${result.messageId}`);
};
