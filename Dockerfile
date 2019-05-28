FROM node:9.11.1-alpine

WORKDIR /app
ADD . /app

COPY package.json .
RUN npm install --quiet

COPY .env .
COPY . . 

RUN npm run build

EXPOSE 3000:3000
