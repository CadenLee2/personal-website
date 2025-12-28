# Based on Railway's React guide <https://docs.railway.com/guides/react>

FROM node:lts-alpine AS build

ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Copy files to the container and install
COPY package*.json ./
RUN npm ci

# Copy local code to the container
COPY . ./

# Generate RSS feed
RUN npm run --silent gen-rss > ./public/rss.xml
# Build
RUN npm run build

# Use the Caddy image
FROM caddy
COPY Caddyfile ./
RUN caddy fmt Caddyfile --overwrite

COPY --from=build /dist ./dist

CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]
