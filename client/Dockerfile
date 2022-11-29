FROM node:16-alpine
WORKDIR /app

EXPOSE 3000

COPY . .
RUN yarn install --production
RUN yarn build

CMD ["yarn", "start"]