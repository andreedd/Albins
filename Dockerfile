FROM node:14-alpine



WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g gatsby-cli && npm install

COPY . .

EXPOSE 8000
