# base image
FROM nginx:alpine
LABEL MAINTAINER Krishna.Manchikalapudi@gmail.com

# variables
ENV NGINX_SRC src
ENV NGINX_DEST /usr/share/nginx/html/

# remove default configuration
#RUN rm /etc/nginx/conf.d/default.conf
#COPY conf/nginx/ngnix.conf /etc/nginx/ngnix.conf
COPY ${NGINX_SRC}/* ${NGINX_DEST}
COPY config/nginx/default.conf /etc/nginx/conf.default

COPY ~/WORKSPACE/example.js/SocialAuth/conf/nginx/default.conf /etc/nginx/conf.d/






# tell the port number the container should expose
# EXPOSE 9080