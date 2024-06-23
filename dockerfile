FROM node:21.7.1-alpine

WORKDIR /solenixWebApp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]