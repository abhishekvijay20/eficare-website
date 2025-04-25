# client/Dockerfile
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build || (echo "BUILD FAILED" && ls -la && cat ./path-to-any-log-if-any && exit 1)

# Serve with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
