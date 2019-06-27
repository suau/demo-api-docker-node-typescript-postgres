FROM node:10.16.0-alpine
RUN mkdir -p /usr/src/nodeapp
WORKDIR /usr/src/nodeapp
EXPOSE 8080
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
CMD npm start
