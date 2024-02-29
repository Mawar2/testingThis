FROM node:18-alpine
WORKDIR /app
COPY *.json ./
COPY yarn.lock ./
COPY src src

RUN yarn install --frozen-lockfile