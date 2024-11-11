# Base image for Node.js
FROM node:20.18.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Install 'serve' globally
RUN npm install -g serve

# Copy all files
COPY . .

# Set the environment variable
ENV CI=false

# Build the Vite application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application using serve directly
CMD ["serve", "-s", "dist", "-l", "3000"]
