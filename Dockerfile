# node:13.8.0-alpine3.10 can't install dependencies from github
# need to investigate with yarn 
FROM node:13.8.0-stretch as builder 

WORKDIR /usr/app

COPY ./package.json ./
COPY ./yarn.lock ./
# --unsafe-perm to avoid postinstall: cannot run in wd with npm install
# or use yarn
RUN yarn
COPY ./ ./

ARG REACT_APP_IDENTITY_URL=http://budgets-app:5011
ARG REACT_APP_BASE_URL=http://budgets-app:5010/graphql

ENV REACT_APP_IDENTITY_URL=${REACT_APP_IDENTITY_URL}
ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}

RUN yarn build

FROM nginx:1.17.8

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/app/build /usr/share/nginx/html