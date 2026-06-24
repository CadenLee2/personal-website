# Based on Railway's SolidJS guide <https://docs.railway.com/guides/solid#use-a-dockerfile>

FROM node:lts-alpine AS build

ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Install pnpm
RUN npm install -g pnpm

# Copy local code to the container
COPY . ./

# Generate RSS feed
ENV CI=true
RUN pnpm clean
# Installation is bundled into pnpm exec and build
RUN pnpm exec tsx ./src/scripts/generateRSS.ts > ./public/rss.xml

# Copy local code to the container again to prevent pnpm build from timing out
COPY . ./

# Build
RUN pnpm build

# Use the Caddy image
FROM caddy
COPY Caddyfile ./
RUN caddy fmt Caddyfile --overwrite

COPY --from=build /dist ./dist

CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]
