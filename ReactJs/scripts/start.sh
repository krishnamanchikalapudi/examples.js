#!/bin/bash

. ./config.sh


printf "\n%s\n\n" "----------- [START] Service : ${DATE_TIME} "
npm run start & 

sleep 10
SERVICE_PORT=`lsof -nP -iTCP:3000 | awk '{print $2}'`
printf "\n\n%s\n\n" " -- Service Port: ${SERVICE_PORT} "

