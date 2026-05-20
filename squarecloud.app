DISPLAY_NAME=productsm3-cms
DESCRIPTION=Strapi CMS do productsm3
MAIN=package.json
MEMORY=1536
VERSION=recommended
START=npm run build && NODE_OPTIONS=--max-old-space-size=1100 npm run start
SUBDOMAIN=productsm3-cms
AUTORESTART=true
