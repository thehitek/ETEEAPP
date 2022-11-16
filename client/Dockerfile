FROM node:16-alpine
WORKDIR /app

EXPOSE 3000

COPY . .
RUN yarn install --production

CMD ["yarn", "start"]