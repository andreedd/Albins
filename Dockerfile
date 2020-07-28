FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN yarn global add gatsby-cli

RUN yarn install

COPY . .

EXPOSE 8000
