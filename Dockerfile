FROM node:14-buster-slim

WORKDIR /opt

COPY ["package.json", "package-lock.json", "./"]
RUN npm cache clean --force && rm -rf node_modules

RUN npm install

COPY . .

RUN chmod +x ./wait-for-it.sh 
