import { EmailClient } from "@azure/communication-email";

const connectionString = "endpoint=https://envio-correos.brazil.communication.azure.com/;accesskey=F5KJVhvNnBIiE2KizZKwOWmH4WeuMeU1PXWpwPDPRUDPaTUjLndfJQQJ99AGACULyCps5mg0AAAAAZCSH9Y9"
const emailClient = new EmailClient(connectionString);

async function sendEmail() {
    const emailMessage = {
        sender: "luiseduardovelez88@gmail.com"
    }
}