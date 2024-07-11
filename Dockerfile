FROM buildpack-deps:bookworm
ENV NODE_VERSION 20.15.1
WORKDIR /app.js
COPY . .
RUN npm install --production
CMD ["npm run start", "./dist/app.js"]
EXPOSE 8080