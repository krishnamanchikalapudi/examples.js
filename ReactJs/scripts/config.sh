#!/bin/bash

printf "\n\n\n%s\n\n\n" "----------- ----------- ----------- ----------- -----------  "

DATE=`date +%Y-%m-%d`
DATE_TIME=`date '+%Y-%m-%d %H:%M:%S'`

printf "\n%s\n" "----------- [Node] INFO:  "
node -v
npm -v

printf "\n\n%s\n" 