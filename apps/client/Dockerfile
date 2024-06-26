# Use a Node.js base image
FROM node:18-alpine as build

# Set working directory
WORKDIR /usr/src/app/client

# Install global dependencies
RUN npm install -g typescript vite


# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Serve the application using serve package
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
