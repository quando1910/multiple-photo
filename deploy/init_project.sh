#!/bin/bash

set -e -o pipefail
# set -e pipefail

set -e
  reset="\033[0m"
  red="\033[31m"
  green="\033[32m"
  yellow="\033[33m"
  cyan="\033[36m"
  white="\033[37m"
  BUILD_ENV=""
  ENV_NAME=""
  password=""
  version=""
  SUDO=""
  PUBLIC_HTML="/var/www/test/"
  SOURCE_DIR="Source"

shopt -s extglob

  printf "${cyan}...............................www.unidev.vn...............................................\n"
  printf "${reset}\n"

  printf "$cyan> Enter domain: $reset"
  read domain

  printf "$cyan> Go to NGINX SETUP FOLDER...\n$reset"
  cd /etc/nginx/sites-available

  printf "$cyan> Create nginx file...\n$reset"
  touch $domain
  printf "$cyan> Write content for nginx file...\n$reset"
cat >/etc/nginx/sites-available/$domain <<EOL
server {
  listen 80;
  listen [::]:80;

  root /var/www/${domain}/html;
  index index.html index.htm index.nginx-debian.html;
  server_name ${domain} www.${domain};

  location / {
    try_files $uri $uri/ /index.html;
  }
}
EOL

  printf "$cyan> Create production...\n"
  mkdir /var/www/$domain/html

  printf "$green> Initiate for $domain successful!!\n$reset"

  