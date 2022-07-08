FROM node:16-alpine

USER node 
WORKDIR /home/node

COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json

RUN npm install

COPY --chown=node:node . .

EXPOSE 3030

CMD [ "npm", "start" ]

# make sure that you are on the right path in the terminal, for example  C:\User\Project\backend

# terminal run to build
# docker build -t backend .

# terminal command to run
# docker run -d -p 3030:3030 --name backend backend