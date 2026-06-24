# Based on Railway's SolidJS guide <https://docs.railway.com/guides/solid#use-a-dockerfile>

FROM node:lts-alpine AS build

ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Install pnpm
RUN npm install -g pnpm

# Copy files to the container and install
COPY package*.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm ci --frozen-lockfile

# Copy local code to the container
COPY . ./

# Generate RSS feed
RUN pnpm --silent gen-rss > ./public/rss.xml
# Build
RUN pnpm build

# Use the Caddy image
FROM caddy
COPY Caddyfile ./
RUN caddy fmt Caddyfile --overwrite

COPY --from=build /dist ./dist

CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]
