# Etapa 1: Compilación
FROM node:20 AS build

# Crear el directorio de trabajo
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Compilar el código TypeScript
RUN npm run build

# Etapa 2: Ejecución
FROM node:20-alpine

# Crear el directorio de trabajo
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar solo las dependencias de producción
RUN npm install --production

# Copiar el código compilado desde la etapa de construcción
COPY --from=build /app/dist ./dist

# Exponer el puerto de la aplicación
EXPOSE 8080

# Comando de inicio de la aplicación
CMD ["npm", "start"]
