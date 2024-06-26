# Use a Node.js base image
FROM node:18-alpine as build

# Set working directory
WORKDIR /usr/src/app/server

RUN npm install -g typescript 

# Install global packages
RUN npm install -g @nestjs/cli

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
# RUN npm run build

# Start command
CMD ["npm", "run", "start"]
