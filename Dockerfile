FROM node:10-alpine

WORKDIR /usr/app
COPY packege.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
