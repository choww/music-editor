FROM node:10.16.0-jessie-slim

WORKDIR /api
ADD . /api

COPY package.json .
RUN npm install --quiet

COPY .env .
COPY . . 

RUN npm run build

EXPOSE 3000:3000
