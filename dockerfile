# Use a specific version of Node.js for stability
FROM node:14-alpine

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only necessary files for dependency installation
COPY package*.json ./

# Install app dependencies using yarn for deterministic builds
RUN yarn install --frozen-lockfile --production

# Bundle app source (including source code, not build files)
COPY . .
 
# Build the app (this can be customized based on your application setup)
RUN yarn build

# Expose the port that your app runs on
EXPOSE $PORT

# Specify the command to run your app
CMD ["yarn", "start"]
