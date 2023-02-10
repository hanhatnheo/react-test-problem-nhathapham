FROM node:16-bullseye

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY /src ./src
COPY /public ./public
COPY /public ./public
COPY .storybook ./.storybook


CMD ["npm", "start"]