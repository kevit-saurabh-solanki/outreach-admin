FROM node:22

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5080

CMD ["ng", "serve"]