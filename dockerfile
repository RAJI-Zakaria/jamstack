# Use a specific version of Node.js for stability
FROM node:16-alpine

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only necessary files for dependency installation
COPY package*.json ./

# Install app dependencies using npm
RUN npm install --production

# Bundle app source (including source code, not build files)
COPY . .

# Build the app
RUN npm run build

# Expose the port that your app runs on
EXPOSE $PORT

# Specify the command to run your app
CMD ["npm", "start"]
