module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
      // Agrega tus reglas personalizadas aquí
      semi: 'error', // Punto y coma al final de las sentencias
      quotes: ['error', 'single'], // Comillas simples para cadenas de texto
      indent: ['error', 4], // Indentación de 4 espacios
    },
    ignorePatterns: ['node_modules/'], // Ignorar node_modules
    env: {
      node: true, // Especifica que el entorno es Node.js
    },
  };