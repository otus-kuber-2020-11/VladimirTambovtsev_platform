# FROM node:12.16.0-alpine

# WORKDIR /usr/src/app
# COPY ./package.json ./
# COPY ./yarn.lock ./
# RUN yarn install

# COPY . .

# EXPOSE 8000

# CMD ["yarn", "start"]

FROM nginx:latest

RUN useradd -u 1001 -d /app appuser 

COPY homework.html /app/
COPY nginx.conf /etc/nginx/

ENV NGINX_PORT=8000