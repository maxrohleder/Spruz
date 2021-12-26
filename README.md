[![Deployment Strato Dockerhub CI](https://github.com/maxrohleder/Spruz/actions/workflows/build-and-publish.yml/badge.svg)](https://github.com/maxrohleder/Spruz/actions/workflows/build-and-publish.yml)

# Traditionskneipe Spruz
This repo will contain a containerized web-application including a basic database-server-frontend setup.


## API definitions

Codes: {
    0: success
    1: internal error
    2: already booked (some one else was faster)
}

Login / Auth:

// used to create a new user and obtain a fresh jwt
> HTTP-POST: /register
> <br>JSON-PAYLOAD: {
> <br> > > > user: string,
> <br> > > > pwhash: string,
> }
> <br>ANSWER: {
> <br> > > > token: jwt-token,
> } @200;

// used to login a user and obtain a fresh jwt token
> HTTP-POST: /login
> <br>JSON-PAYLOAD: {
> <br> > > > user: string,
> <br> > > > pwhash: sha-512,
> }
> <br>ANSWER: {
> <br> > > > token: jwt-token,
> } @200;

Protected Routes:

// used to obtain all reservation data for a given day
// used to display reservations for that evening
// returns all reservations for the day after the specified time (encoded in one unix-time)
> HTTP-GET: /reservations
> <br>JSON-PAYLOAD: {
> <br> > > > date: int, // unix-time convention
> <br> > > > token: jwt-token,
> }
> <br>ANSWER: {
> <br> > > > reservations: list of reservations sorted by start-time: {user: string, start-time: int},
> } @200;

Unprotected Routes:

// used to show available slots to customer
// returns all reservations for the day after the specified time (encoded in one unix-time)
> HTTP-GET: /reservations
> <br>JSON-PAYLOAD: {
> <br> > > > date: int, // unix-time convention
> }
> <br>ANSWER: {
> <br> > > > reservations: list of reservations sorted by start-time: {user: string, start-time: int},
> } @200;

// used to reserve a specified time and username
> HTTP-POST: /reserve
> <br>JSON-PAYLOAD: {
> <br> > > > username: string,
> <br> > > > starttime: int, // unix-time convention
> }
> <br>ANSWER: {
> <br> > > > code: int
> } @200;



## Docker commands

### develop, test and build

`docker run -dp <host-port>:<container-port> --name <instance-name> <container-name>`

`docker build -t <image-name>:<tag> <folder>`

### publish

`docker tag local-image:tagname new-repo:tagname`

`docker push new-repo:tagname`
