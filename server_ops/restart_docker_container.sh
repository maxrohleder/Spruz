docker stop httpserver
docker rm httpserver
docker run -dp 80:80 --name httpserver maxrohleder/maxserver:latest