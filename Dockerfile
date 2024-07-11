FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["npm start", "./dist/app.js"]
EXPOSE 8080