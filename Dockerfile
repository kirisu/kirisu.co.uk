FROM node:carbon-alpine

ENV NPM_CONFIG_LOGLEVEL error

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY ./package.json ./package-lock.json ./run.sh ./

RUN npm install

COPY ./components ./helpers ./layouts ./pages ./static ./.babelrc ./next.config.js ./

RUN chmod +x run.sh

ENTRYPOINT [ "/bin/sh", "run.sh" ]
