import { CommunicationServiceManagementClient } from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";

const credential = new DefaultAzureCredential();
const subscriptionId = "3eccf0c3-c54c-4312-a855-a3405afef8d3";

const client = new CommunicationServiceManagementClient(credential, subscriptionId);

const parameters = {
    dataLocation: "Brazil",
    location: "Global",
    linkedDomains: [
        "/subscriptions/3eccf0c3-c54c-4312-a855-a3405afef8d3/resourceGroups/servicio-correo-electronico/providers/Microsoft.Communication/emailServices/Recurso-Comunicacion-Servicio"
    ]
};

const result = client.communicationServices.beginCreateOrUpdateAndWait(
    "servicio-correo-electronico",
    "Recurso-Comunicacion-Servicio",
    parameters
);