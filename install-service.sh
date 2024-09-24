#!/bin/bash

# Ask user to input their domain
read -p "Enter your domain: " user_domain

# Check if the user entered something
if [ -z "$user_domain" ]; then
  echo "No domain entered. Exiting."
  exit 1
fi

# Write the domain into the .env file
ENV_FILE=.env
echo "Writing domain to $ENV_FILE"
echo "DOMAIN=$user_domain" > $ENV_FILE

# Continue with the original script to install the service

# Define the service file name
SERVICE_FILE=dynamic_ss.service

# Define the target directory for systemd services
SYSTEMD_DIR=/etc/systemd/system

# Copy the service file to the systemd directory
echo "Copying $SERVICE_FILE to $SYSTEMD_DIR"
sudo cp $SERVICE_FILE $SYSTEMD_DIR

# Set the proper permissions
echo "Setting permissions for $SYSTEMD_DIR/$SERVICE_FILE"
sudo chmod 644 $SYSTEMD_DIR/$SERVICE_FILE

# Reload systemd to recognize the new service
echo "Reloading systemd daemon"
sudo systemctl daemon-reload

# Enable the service to start on boot
echo "Enabling $SERVICE_FILE to start on boot"
sudo systemctl enable $SERVICE_FILE

# Start the service now
echo "Starting the service"
sudo systemctl start $SERVICE_FILE

# Check the service status
echo "Checking the service status"
sudo systemctl status $SERVICE_FILE
