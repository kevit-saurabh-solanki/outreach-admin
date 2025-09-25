FROM node:22

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5080

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "5080"]