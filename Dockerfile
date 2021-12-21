# build angular app into dist/spruz folder
FROM node:16.13-alpine as build
WORKDIR /frontend/spruz
COPY frontend/spruz ./
RUN npm ci
RUN npm run build

# start nginx
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /frontend/spruz/dist/spruz /usr/share/nginx/html
