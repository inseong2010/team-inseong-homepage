# syntax=docker/dockerfile:1
   
FROM node:16-buster
WORKDIR /app
COPY package*.json ./
RUN npm i

USER node

EXPOSE 3000
CMD ["npm", "start"]