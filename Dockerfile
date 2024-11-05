FROM node:20.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV CI=false
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
