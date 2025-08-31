#!/bin/sh
envsubst '
  $BACKEND_HOST
  $BACKEND_PORT
  $FRONTEND_HOST
  $FRONTEND_PORT
' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf

nginx -g 'daemon off;'
