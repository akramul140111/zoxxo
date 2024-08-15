# Use an officail Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy pacakage.json and package-lock.json
COPY package.json .

# Install dependencies
RUN npm install 

#Copy the rest of the application code to the working directory

COPY . .

# Build Vite Project
RUN npm run build

# Expose the port vite is running on (default: 8080)
EXPOSE 8000

# Commsand to run the application
CMD ["npm", "run", "preview"]
