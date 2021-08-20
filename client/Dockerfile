### Stage 1: build ###

FROM node:14.15-alpine as build

# Set working directory.
RUN mkdir /app
WORKDIR /app

# Copy app dependencies.
COPY package.json package-lock.json /app/

# Install app dependencies.
RUN npm install 

# Copy app files.
COPY . /app

# Build app
RUN npm run build 

FROM nginx:1.20.1
# Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
# RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /app/dist/video-instructor-ui /usr/share/nginx/html
# Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
EXPOSE 4200:80