#Using official Node.js image
FROM node:16

#Setting working directory
WORKDIR /usr/src/app

#copy the package.json and package.json
COPY package*.json ./

#installing dependances
RUN npm install

#copy the rest of the application code
COPY . .

#Expose the application port
EXPOSE 3000

#start the backend server
CMD ["npm", "start"]