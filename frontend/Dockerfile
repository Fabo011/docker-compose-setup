FROM node:16-alpine

WORKDIR /frontend

COPY package.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]

# make sure that you are on the right path in the terminal, for example  C:\User\Project\frontend

# terminal run to build
# docker build -t frontend .

# terminal command to run
# docker run -d -p 3000:3000 --name frontend frontend