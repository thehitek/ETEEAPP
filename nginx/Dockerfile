FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

COPY beyondgodlike.ru.conf /etc/nginx/conf.d/beyondgodlike.ru.conf
#COPY localhost.conf /etc/nginx/conf.d/localhost.conf

COPY ./ssl/beyondgodlike.ru.crt /etc/ssl/beyondgodlike.ru.crt
COPY ./ssl/beyondgodlike.ru.key /etc/ssl/beyondgodlike.ru.key
COPY ./ssl/ca.crt /etc/ssl/ca.crt

WORKDIR /srv/ETEEAPP/