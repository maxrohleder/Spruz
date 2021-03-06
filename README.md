[![Deployment Strato Dockerhub CI](https://github.com/maxrohleder/Spruz/actions/workflows/build-and-publish.yml/badge.svg)](https://github.com/maxrohleder/Spruz/actions/workflows/build-and-publish.yml)

# DockerPlayground
This repo will contain a containerized web-application including a basic database-server-frontend setup.

Keywords: Containers, CI-CD, JWT-authentication

## Purpose of the website
This website will serve both as my public homepage and will also have a private part requiring a login.

After authentication, the user can interact with a todo-list that is written to a db on the server. 
The contents of this list is hidden for non-authenticated users. Json-Web-Tokens are used as means of
authentication.

## Server-side application
A nodejs application running an express server will be made accessible through a nginx-http server.
A primitive mysql database will store user login information and the items on the todo list.
The frontend html code will be hosted statically by nginx.

## Useful commands

### develop, test and build

`docker run -dp <host-port>:<container-port> --name <instance-name> <container-name>`

`docker build -t <image-name>:<tag> <folder>`

### publish

`docker tag local-image:tagname new-repo:tagname`

`docker push new-repo:tagname`
