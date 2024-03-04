FROM node:18.19.0
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200 4200
CMD npm run start