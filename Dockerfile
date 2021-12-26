# build angular app into dist/spruz folder
FROM node:16.13-alpine as build
WORKDIR /frontend
COPY frontend ./
RUN npm ci
RUN npm run build

# start nginx
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /frontend/dist/spruz /usr/share/nginx/html
