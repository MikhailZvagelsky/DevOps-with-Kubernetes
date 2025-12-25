# stage 1 - build
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src/
RUN npm install
RUN npm run build

# stage 2 - create image
FROM node:20-alpine
WORKDIR /usr/src/app

RUN mkdir -p dist node_modules
COPY --from=builder /usr/src/app/dist ./dist/

ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
