FROM node:21-alpine
WORKDIR /usr/src/app
COPY . .
RUN apk add --no-cache bash \
    && npm install --only=production
EXPOSE 3000
CMD [ "npm", "start" ]

