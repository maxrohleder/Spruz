docker stop httpserver
docker rm httpserver
docker rmi maxrohleder/maxserver:latest
docker run -dp 80:80 --name httpserver maxrohleder/maxserver:latest