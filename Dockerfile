FROM node:lts-alpine as builder
WORKDIR /app
COPY package*.json ./
ADD nginx.conf.sigil ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production
WORKDIR /usr/app
COPY --from=builder /app/nginx.conf.sigil /usr/app
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
