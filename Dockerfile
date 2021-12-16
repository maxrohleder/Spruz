FROM node:16 as node
COPY /frontend/spruz .
RUN pwd
RUN npm i
RUN npm run build

FROM nginx
COPY --from=node /dist/spruz/* /usr/share/nginx/html
