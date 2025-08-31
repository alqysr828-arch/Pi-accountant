FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* ./
RUN yarn install --frozen-lockfile || npm install
COPY tsconfig.json ./
COPY src ./src
RUN yarn build || npm run build
EXPOSE 8000
CMD ["sh", "-c", "yarn start || npm run start"]
