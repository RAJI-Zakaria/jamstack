# Use the latest LTS version of Node.js
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install
# Install Next.js and related packages globally
RUN npm install next@latest react@latest react-dom@latest
RUN npm install yup
RUN npm run dev

# Bundle app source
COPY . .

# Expose the port that Next.js runs on (default is 3000)
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "dev"]
