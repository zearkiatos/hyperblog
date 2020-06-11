FROM nginx:alpine

RUN apk add --update nodejs npm

COPY [".", "/usr/share/nginx/html"]

WORKDIR /usr/share/nginx/html

RUN npm install

EXPOSE 8090