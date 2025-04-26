# Use Node image for running server
FROM node:18-slim

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install server dependencies
RUN npm install

# Copy the rest of the server code
COPY . .

# Expose server port (change if your server uses different port)
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
