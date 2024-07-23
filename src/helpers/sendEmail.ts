import { DefaultAzureCredential } from "@azure/identity";
import { EmailClient } from "@azure/communication-email";

const endpoint = "https://Recurso-Comunicacion-Servicio.communication.azure.com";
let credential = new DefaultAzureCredential();

const emailClient = new EmailClient(endpoint, credential);

export default emailClient;