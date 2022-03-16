ARG nodeVersion
ARG devPort
ARG author

FROM node:${nodeVersion}

LABEL author=${author}

WORKDIR /app

COPY . .

ENV TZ=Asia/Seoul

RUN yarn install

EXPOSE ${devPort}

CMD ["yarn", "start"]