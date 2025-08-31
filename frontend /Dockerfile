FROM node:20-alpine as build
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* ./
RUN yarn install --frozen-lockfile || npm install
COPY . .
RUN yarn build || npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
