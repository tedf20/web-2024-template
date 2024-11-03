#!/bin/bash

# Build the React app
npm install
npm run build

# Copy build files to apache directory
sudo rm -rf /var/www/your-app/*
sudo cp -r build/* /var/www/your-app/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/your-app
sudo chmod -R 755 /var/www/your-app

# Restart Apache
sudo systemctl restart apache2