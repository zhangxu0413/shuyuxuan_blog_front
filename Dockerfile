FROM nginx:stable-alpine

COPY ./dist /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/

#ARG IS_RELEASE
#RUN if [ "$IS_RELEASE" = "true" ] ; then npm run upload:cdn ; fi

EXPOSE 3000
