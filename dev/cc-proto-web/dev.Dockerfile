FROM node:18-alpine
WORKDIR /app
COPY *.json ./

COPY src src
COPY public public

RUN yarn install --frozen-lockfile