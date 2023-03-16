FROM node:18-alpine

WORKDIR /web

COPY package.json package.json

RUN npm install

COPY . .

CMD [ "npm","run","dev" ]