FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
#COPY src ./
COPY . . 

EXPOSE 8085

CMD ["npm","run","dev"]