FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production | MIGHT NOT WORK CONSIDERING ENV VARIABLES

# Bundle app source
COPY . .

# App runs on port 3000
EXPOSE 3000

# To sync boot with Mongo
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.4.0/wait /wait
RUN chmod +x /wait

# Command to start the app
# CMD /wait && npm start

# Starting without waiting
CMD npm start