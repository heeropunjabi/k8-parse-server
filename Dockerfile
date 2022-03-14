FROM node:16.3.0-alpine3.13

# Create app directory
WORKDIR /app

COPY . /app
RUN yarn install --frozen-lockfile

EXPOSE 1337

CMD [ "yarn", "server" ]