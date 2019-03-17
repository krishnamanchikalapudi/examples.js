# base image
FROM nginx:alpine
MAINTAINER Krishna.Manchikalapudi@gmail.com

# remove default configuration
#RUN rm /etc/nginx/conf.d/default.conf

# variables
ENV NGINX_SRC src
ENV NGINX_DEST /usr/share/nginx/html/

COPY ${NGINX_SRC}/* ${NGINX_DEST}


# tell the port number the container should expose
# EXPOSE 9080

STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]