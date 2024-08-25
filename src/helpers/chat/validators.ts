import { VALID_THEMES, INVALID_THEMES } from './themes';

// Función para verificar si el texto contiene alguno de los temas especificados
// Función para verificar si el texto contiene alguno de los temas especificados
const containsTheme = (text: string, themes: string[]): boolean => {
    return themes.some((theme) => new RegExp(`\\b${theme}\\b`, 'i').test(text));
};

// Función para validar si la respuesta generada es válida según los temas permitidos y no permitidos
const isValidResponse = (response: string): boolean => {
    return (
        containsTheme(response, VALID_THEMES) &&
        !containsTheme(response, INVALID_THEMES)
    );
};

// Función para convertir el texto de respuesta en una lista
// Función para extraer nombres de la respuesta
const parseResponseToList = (response: string): string[] => {
    // Suponiendo que los nombres están precedidos por un asterisco y un espacio
    const items = response.split('\n')
        .map(line => line.trim())
        .filter(line => line.startsWith('* '))  // Filtra solo las líneas que empiezan con "* "
        .map(line => line.substring(2).split(':')[0].trim());  // Elimina "* " y parte después de ':'

    return items;
};

const DEFAULT_MESSAGE = 'Lo siento, no puedo responder tu pregunta, por favor comunicate con un asesor :';

export {isValidResponse, parseResponseToList, DEFAULT_MESSAGE};