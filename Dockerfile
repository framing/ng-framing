FROM risingstack/alpine:3.4-v6.9.4-4.2.1
RUN apk update && apk upgrade && \
    apk add openssh-client git

# Create app directory
RUN mkdir -p /usr/src/app/fio

WORKDIR /usr/src/app/fio

COPY . /usr/src/app

ENV NODE_ENV develop
RUN npm install history-server -g
RUN npm install npm-run-all -g
RUN npm install webpack -g
RUN npm install dgeni -g
RUN npm install
RUN npm run docs
RUN npm run release-build
RUN npm run list
RUN npm run list-node-modules
ENV NODE_ENV production

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
