FROM risingstack/alpine:3.4-v6.9.4-4.2.1
RUN apk update && apk upgrade && \
    apk add openssh-client git

# Create app directory
RUN mkdir -p /usr/src/app/fio

WORKDIR /usr/src/app/fio

COPY . /usr/src/app

RUN npm install history-server -g
RUN npm install npm-run-all -g
RUN npm run list

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
