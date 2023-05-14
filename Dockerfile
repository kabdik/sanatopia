FROM node:16.14.2-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile --production

COPY . .

RUN yarn add global @nestjs/cli
RUN yarn build

CMD ["yarn", "start:prod"]

