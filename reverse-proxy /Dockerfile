FROM nginx:alpine
COPY nginx.conf.template /etc/nginx/templates/nginx.conf.template
COPY nginx-ssl.conf.template /etc/nginx/templates/nginx-ssl.conf.template
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
EXPOSE 80
CMD ["/entrypoint.sh"]
