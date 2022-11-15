FROM node:16.17-alpine
WORKDIR /app

EXPOSE 3000

COPY . .
RUN npm run build

CMD ["npm", "start"]