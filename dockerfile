# Use a specific version of Node.js for stability
FROM node:16-alpine

#production
ENV PORT=3000

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only necessary files for dependency installation
COPY package*.json ./

# Install app dependencies using npm
RUN npm install

# Copy the entire application
COPY . .

# Expose the port that your app runs on
EXPOSE $PORT

# Specify the command to run your app
CMD ["npm", "run", "dev"]
