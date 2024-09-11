import { chatMessageInterface } from '../../interfaces/chat/chatMessage';

const GenerationConfig = {
    maxOutputTokens: 190,
    temperature: 0.7,
    topP: 0.2,
    topK: 20,
};
const StartChat: chatMessageInterface[] = [
    {
        role: 'user',
        parts: `nombre de la empresa: Odyssey Expedition,
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
        { role: 'model', parts: '¡Con mucho gusto! Puedes comunicarte con un asesor llamando al número 3122128443.' },
    ],
    ['nombre de la empresa', { role: 'model', parts: 'La empresa se llama Odyssey Expedition, y estamos aquí para ofrecerte experiencias inolvidables.' }],
    [
        'mision',
        {
            role: 'model',
            parts: 'Nuestra misión es brindarte experiencias de viaje únicas y memorables, siempre superando tus expectativas y promoviendo el turismo sostenible en Colombia.',
        },
    ],
    [
        'vision',
        {
            role: 'model',
            parts: 'Nuestra visión es convertirnos en la agencia de viajes líder en Colombia, destacándonos por nuestra innovación, excelencia en el servicio y compromiso con el turismo sostenible.',
        },
    ],
    [
        'como comprar un paquete de viaje',
        {
            role: 'model',
            parts: '¡Es muy fácil! Solo debes dirigirte a la página de inicio, elegir entre nuestros destinos, ajusta tu paquete según lo que necesites (como la cantidad de personas) y seguir los pasos para completar tu compra. Si tienes alguna duda, estamos aquí para ayudarte.',
        },
    ],
    [
        'lugares turisticos',
        {
            role: 'model',
            parts: 'Te recomiendo visitar Cartagena de Indias, el Parque Nacional Natural Tayrona, Bogotá (La Candelaria, Monserrate), Medellín (Comuna 13, Plaza Botero), el Eje Cafetero (Salento, Valle de Cocora), Santa Marta, San Andrés y Providencia, y Villa de Leyva. ¡Son destinos increíbles!',
        },
    ],
    [
        'comidas tipicas',
        {
            role: 'model',
            parts: 'En Colombia puedes disfrutar de delicias como la lechona, el pandebono, el ajiaco, la bandeja paisa, las empanadas, el sancocho, las arepas, los buñuelos, el tamal y el patacón. Cada plato es una muestra de la rica tradición culinaria del país, y su sabor te hará querer probar más. ¡Cada uno es más delicioso que el otro!',
        },
    ],
    [
        'culturas en colombia',
        {
            role: 'model',
            parts: 'Colombia es hogar de muchas culturas ricas, como los Muisca, Tairona, Quimbaya, Zenú, Guane, Wayúu, Embera, Cofán, Inga, Pastos, Tucano, Uitoto, Pijao, Nasa y Arawak. ¡Cada una con tradiciones fascinantes!',
        },
    ],
    [
        'musica tipica',
        { role: 'model', parts: 'La música típica de Colombia es diversa y vibrante. Disfruta de la cumbia, el bullerengue, el mapalé, el merengue, el paseo, el porro, la puya, la zafra, el son y el vallenato.' },
    ],
    [
        'servicios disponibles',
        {role: 'model', parts: 'Para más información sobre nuestros servicios, visita nuestra página web o comunícate con un asesor al 3122128443. ¡Estamos para ayudarte!'},
    ],
    [
        'hoteles disponibles',
        {role: 'model', parts: 'Puedes encontrar información sobre nuestros hoteles en la página web o comunícate con un asesor al 3122128443. ¡Te ayudaremos a encontrar la mejor opción!'},
    ],
    [
        'paquetes disponibles',
        {role: 'model', parts: 'Puedes encontrar información sobre nuestros paquetes en nuestra página web o comunícate con un asesor al 3122128443. ¡Te ayudaremos a encontrar la mejor opción!'},
    ],
    [
        'cruceros disponibles',
        {role: 'model', parts: 'Para conocer los cruceros que tenemos disponibles, puedes visitar nuestra web o contactarnos al 3122128443. ¡Estaremos encantados de ayudarte!'},
    ],
    [
        'vuelos disponibles',
        {role: 'model', parts: 'Puedes encotnrar infromación sobre nuestros vuelos en nuestras página web o contactarnos al 3122128443. ¡Estaremos encantados de ayudarte!'},
    ],
    [
        'lugares que puedo visitar',
        {role: 'model', parts: 'En Colombia puedes visitar lugares increíbles como'}
    ],
    [
        'que paquetes hay disponibles',
        {role: 'model', parts: 'Puedes encontrar información sobre nuestros paquetes en nuestra página web o comunícate con un asesor al 3122128443. ¡Te ayudaremos a encontrar la mejor opción!'},
    ],
    [
        'que servicios hay disponibles',
        {role: 'model', parts: 'Para más información sobre nuestros servicios, visita nuestra página web o comunícate con un asesor al 3122128443. ¡Estamos para ayudarte!'},
    ],
    [
        'que cruceros hay disponibles',
        {role: 'model', parts: 'Para conocer los cruceros que tenemos disponibles, puedes visitar nuestra web o contactarnos al 3122128443. ¡Estaremos encantados de ayudarte!'},
    ],
    [
        'que vuelos hay disponibles',
        {role: 'model', parts: 'Puedes encotnrar infromación sobre nuestros vuelos en nuestras página web o contactarnos al 3122128443. ¡Estaremos ec¿ncantados de ayudarte!'},
    ],

]);

export default { GenerationConfig, StartChat, StartChatResponses };