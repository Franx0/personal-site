FROM node:16

# Set docker user var
ENV DOCKER_USER root

# set the app directory var
ENV APP_HOME /app
ARG PROJECT_PATH=.

# Set entrypoint file
ADD $PROJECT_PATH/docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

# Copy app on path
ADD $PROJECT_PATH $APP_HOME

WORKDIR $APP_HOME

USER $DOCKER_USER

##################### INSTALLATION ENDS #####################
EXPOSE 3000

EXPOSE 80
EXPOSE 443

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
