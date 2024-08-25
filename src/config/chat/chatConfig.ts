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
        
        Visión: Ser la agencia de viajes líder en Colombia, reconocida por nuestra innovación, excelencia en el servicio y compromiso con el desarrollo sostenible del turismo.

        Como comprar un paquete de viaje: Dirigete al inicio - Navega entre los diferentes destinos que tenemos disponibles - Selecciona el que mas te guste - Ajustalo según tus necesidades (Cantidad de personas, etc) - Presiona el botón de comprar - Selecciona el método de pago Listo.
        
        *lista de lugares turisticos de Colombia: Cartagena de Indias - Parque Nacional Natural Tayrona - Bogotá (La Candelaria, Monserrate) - Medellín (Comuna 13, Plaza Botero) - Eje Cafetero (Salento, Valle de Cocora) - Santa Marta - San Andrés y Providencia - Villa de Leyva.
        
        *lista de comidas tipicas de Colombia: lechona - Pandebono - Ajiaco - Bandeja Paisa - Empanada - Sancocho
        
        *lista de culturas en Colombia: Muisca - Tairona - Quimbaya - Zenú - Guane - Wayúu - Embera - Cofán - Inga - Pastos - Tucano - Uitoto - Pijao - Nasa - Arawak.
        
        *musica tipica de Colombia: La cumbia, el bullerengue, el mapalé, el merengue, el paseo, el porro, la puya, la zafra, el son y el vallenato.

        `,
    },
    {
        role: 'model',
        parts: 'Difruta viajando con nosotros!',
    },
];

export default { GenerationConfig, StartChat };
