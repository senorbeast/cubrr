
FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install yarn

RUN yarn install

COPY . .

ENV PORT=3000

EXPOSE 5000

CMD [ "yarn", "start" ]
