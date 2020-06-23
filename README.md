chat with node.js, redis and docker
Tim Ermilov

sudo docker container rm $(sudo docker ps -aq) -f
sudo docker image rm $(docker image ls -aq) -f

docker-compose build
docker-compose up

http://localhost:8080/dashboard/#/http/services

http://localhost:3000/hello
http://localhost:3000/

http://172.18.0.4:3000/   # load balancer access directly
http://172.18.0.2:3000/   # since overall ko for now

http://172.18.0.3:3000/   # now .3 is working with docker-compose.yml v2?
