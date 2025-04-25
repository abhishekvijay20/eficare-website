# client/Dockerfile
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
ENV NODE_OPTIONS=--max_old_space_size=1024
RUN npm run build || (echo "❌ BUILD FAILED" && ls -la && echo "--- src ---" && ls -la src && echo "--- public ---" && ls -la public && echo "--- build (if any) ---" && ls -la build || true && exit 1)

# Serve with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
