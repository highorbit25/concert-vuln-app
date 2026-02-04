# Stage 1 - build
FROM node:20-alpine AS build

# Security: Upgrade libcrypto3 and libssl3 to fix CVE-2025-15467 (CRITICAL)
# CVE-2025-15467: Stack-based buffer overflow in OpenSSL CMS AuthEnvelopedData parsing
# Affected versions: 3.5.0-3.5.4, Fixed in: 3.5.5+
RUN apk upgrade --no-cache libcrypto3 libssl3

WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the app
COPY next.config.mjs ./next.config.mjs
COPY app ./app

# Build the Next.js app
RUN npm run build

# Stage 2 - runtime image
FROM node:20-alpine AS runtime

# Security: Upgrade libcrypto3 and libssl3 to fix CVE-2025-15467 (CRITICAL)
# CVE-2025-15467: Stack-based buffer overflow in OpenSSL CMS AuthEnvelopedData parsing
# Affected versions: 3.5.0-3.5.4, Fixed in: 3.5.5+
RUN apk upgrade --no-cache libcrypto3 libssl3

WORKDIR /app

ENV NODE_ENV=production

# Copy only what is needed to run
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY package.json ./package.json
COPY next.config.mjs ./next.config.mjs

EXPOSE 3000

# Start the vulnerable Next.js app
CMD ["npm", "run", "start"]
