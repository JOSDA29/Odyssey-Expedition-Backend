import { chatMessageInterface } from '../../interfaces/chatMessage';

const GenerationConfig = {
    stopSequences: ['. '],
    maxOutputTokens: 90,
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

        **Como comprar un paquete de viaje: Dirigete al inicio, Navega entre los diferentes destinos que tenemos disponibles, Selecciona el que mas te guste, Ajustalo según tus necesidades (Cantidad de personas, etc), Presiona el botón de comprar, Selecciona el método de pago Listo.
        
        *lista de lugares turisticos de Colombia: Cartagena de Indias, Parque Nacional Natural Tayrona, Bogotá (La Candelaria, Monserrate), Medellín (Comuna 13, Plaza Botero), Eje Cafetero (Salento, Valle de Cocora), Santa Marta, San Andrés y Providencia, Villa de Leyva.
        
        *lista de comidas tipicas de Colombia: lechona, Pandebono, Ajiaco, Bandeja Paisa, Empanada, Sancocho
        
        *lista de culturas en Colombia: Muisca, Tairona, Quimbaya, Zenú, Guane, Wayúu, Embera, Cofán, Inga, Pastos, Tucano, Uitoto, Pijao, Nasa, Arawak.
        
        *musica tipica de Colombia: La cumbia, el bullerengue, el mapalé, el merengue, el paseo, el porro, la puya, la zafra, el son y el vallenato.

        *deseo comunicarme con un asesor: 'comunicate al número 3122128443'
        `,
    },
    {
        role: 'model',
        parts: 'Difruta viajando con nosotros!',
    },
];
const StartChatResponses = new Map<string, chatMessageInterface>([
    [
        'comunicarme con un asesor',
        { role: 'model', parts: 'Comunícate al número 3122128443' },
    ],
    ['nombre de la empresa', { role: 'model', parts: 'Odyssey Expedition' }],
    [
        'mision',
        {
            role: 'model',
            parts: 'Brindar experiencias de viaje únicas y memorables, ofreciendo servicios personalizados y de alta calidad que superen las expectativas de nuestros clientes, promoviendo el turismo sostenible y el desarrollo cultural en Colombia.',
        },
    ],
    [
        'vision',
        {
            role: 'model',
            parts: 'Ser la agencia de viajes líder en Colombia, reconocida por nuestra innovación, excelencia en el servicio y compromiso con el desarrollo sostenible del turismo.',
        },
    ],
    [
        'como comprar un paquete de viaje',
        {
            role: 'model',
            parts: 'Dirigete al inicio, Navega entre los diferentes destinos que tenemos disponibles, Selecciona el que mas te guste, Ajustalo según tus necesidades (Cantidad de personas, etc), Presiona el botón de comprar, Selecciona el método de pago, Listo.',
        },
    ],
    [
        'lugares turisticos',
        {
            role: 'model',
            parts: 'Cartagena de Indias, Parque Nacional Natural Tayrona, Bogotá (La Candelaria, Monserrate), Medellín (Comuna 13, Plaza Botero), Eje Cafetero (Salento, Valle de Cocora), Santa Marta, San Andrés y Providencia, Villa de Leyva.',
        },
    ],
    [
        'comidas tipicas',
        {
            role: 'model',
            parts: 'lechona, Pandebono, Ajiaco, Bandeja Paisa, Empanada, Sancocho',
        },
    ],
    [
        'culturas en colombia',
        {
            role: 'model',
            parts: 'Muisca, Tairona, Quimbaya, Zenú, Guane, Wayúu, Embera, Cofán, Inga, Pastos, Tucano, Uitoto, Pijao, Nasa, Arawak.',
        },
    ],
    [
        'musica tipica',
        { role: 'model', parts: 'La cumbia, el bullerengue, el mapalé, el merengue, el paseo, el porro, la puya, la zafra, el son y el vallenato.' },
    ],
    [
        'servicios disponibles',
        {role: 'model', parts: 'Para saber sobre los servicios disponibles navega en nuestra página web o comunicate con un asesor al numero 3122128443'}
    ],
    [
        'servicios',
        {role: 'model', parts: 'Para saber sobre los servicios disponibles navega en nuestra página web o comunicate con un asesor al numero 3122128443'}
    ],
    [
        'servicios disponibles',
        {role: 'model', parts: 'Para saber sobre los servicios disponibles navega en nuestra página web o comunicate con un asesor al numero 3122128443'}
    ],
    [
        'hoteles disponibles',
        {role: 'model', parts: 'Para saber sobre los servicios disponibles navega en nuestra página web o comunicate con un asesor al numero 3122128443'}
    ],
    [
        'paquetes disponibles',
        {role: 'model', parts: 'Para saber sobre los servicios disponibles navega en nuestra página web o comunicate con un asesor al numero 3122128443'}
    ],
    [
        'cruceros disponibles',
        {role: 'model', parts: 'Para saber sobre los servicios disponibles navega en nuestra página web o comunicate con un asesor al numero 3122128443'}
    ],
    [
        'cruceros',
        {role: 'model', parts: 'Para saber sobre los servicios disponibles navega en nuestra página web o comunicate con un asesor al numero 3122128443'}
    ],
]);

export default { GenerationConfig, StartChat, StartChatResponses };
