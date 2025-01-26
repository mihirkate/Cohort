FROM ubuntu:latest

# Update and install curl
RUN apt-get update && apt-get install -y curl

# Add NodeSource repository and install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Upgrade installed packages
RUN apt-get upgrade -y

# Copy application files
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js

# Install dependencies
RUN npm install

# Set the entry point
ENTRYPOINT ["node", "index.js"]
