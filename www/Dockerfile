FROM node:10.16.0-jessie-slim

WORKDIR /www
ADD . /www

COPY package.json .
RUN npm install --quiet

COPY . . 

EXPOSE 8080:8080
