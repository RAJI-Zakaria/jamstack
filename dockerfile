# Use a specific version of Node.js for stability
FROM node:16-alpine

# Set environment variable for production
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

# Build the Next.js app
RUN npm run build

# Specify the command to run your app
CMD ["npm", "run", "start"]
