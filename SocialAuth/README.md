
### Building the Docker image & patter 'docker build -t <YOUR_USERNAME>/<APP_NAME> .'
`````
docker build -t socialauth:latest .
`````

### Run a command in a new container & pattern  'docker container run -p 8888:5000 APP_NAME:latest
`````
docker container run -d -p 9080:80 socialauth:latest
`````

http://localhost:9080/


### List container command & pattern  'docker container ls -a'
`````
docker container ls -a
`````

### Delete or Remove images
`````
docker image rm socialauth
`````

### Stop containers & pattern  'docker container stop CONTAINER_ID'
`````
container_id=`docker container ls -a | grep socialauth | awk '{print $1}'`
docker container stop $container_id && docker system prune -f
`````

### kill process
`````
kill $(lsof -t -i :9080) &
`````


## ERRORs
#### unauthorized: incorrect username or password
`````
docker login
`````


## OpenSSL - self-signed cert
#### Creating the SSL Certificate
`````
sudo openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout config/cert/localhost.key -out config/cert/localhost.crt
`````

