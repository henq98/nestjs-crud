FROM node:12.16.1-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn && yarn cache clean --force

COPY . .

RUN npm run build
