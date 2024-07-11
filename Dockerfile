FROM node:20
ENV NODE_VERSION=20.15.1
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]