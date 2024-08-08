import { chatMessageInterface } from '../../interfaces/chatMessage';

const GenerationConfig = {
    stopSequences: ['.', '!', '?', ''],
    maxOutputTokens: 70,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
    
};
const StartChat: chatMessageInterface[] = [
    {
        role: 'user',
        parts: `nombre de la empresa: Odyssey Expedition,
        Misión: Brindar experiencias de viaje únicas y memorables, ofreciendo servicios personalizados y de alta calidad que superen las expectativas de nuestros clientes, promoviendo el turismo sostenible y el desarrollo cultural en Colombia.
        Visión: Ser la agencia de viajes líder en Colombia, reconocida por nuestra innovación, excelencia en el servicio y compromiso con el desarrollo sostenible del turismo.`,
    },
    {
        role: 'model',
        parts: 'Difruta viajando con nosotros!',
    },
    {
        role: 'user',
        parts: `lista de lugares turisticos de Colombia
        `
    },
    {
        role: 'user',
        parts:'lista de comidas tipicas de Colombia'
    },
    {
        role: 'user',
        parts: `lista de culturas en Colombia:
        `
    },
    {
        role: 'user',
        parts: 'musica tipica de Colombia'
    }
   
];

export default { GenerationConfig, StartChat };
