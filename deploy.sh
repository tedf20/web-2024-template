#!/bin/bash

# Exit on any error
set -e

# Ensure we're using the right Node version
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 16

# Pull latest changes from git
git pull origin main

# Build the React app
npm install
npm run build

# Create directory if it doesn't exist
sudo mkdir -p /var/www/your-app

# Copy build files to apache directory
sudo rm -rf /var/www/your-app/*
sudo cp -r dist/* /var/www/your-app/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/your-app
sudo chmod -R 755 /var/www/your-app

# Restart Apache
sudo systemctl restart apache2