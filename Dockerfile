ARG NODE_VERSION=22-alpine

# ============================================
# Dependencies
# ============================================

FROM node:${NODE_VERSION} AS dependencies

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN corepack enable && corepack prepare pnpm@10.17.1 --activate

RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm config set store-dir /pnpm/store && \
    pnpm install --frozen-lockfile --config.confirmModulesPurge=false

RUN pnpm rebuild sharp

# ============================================
# Build
# ============================================

FROM node:${NODE_VERSION} AS builder

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY --from=dependencies /app ./
COPY . .

ENV NODE_ENV=production

RUN corepack enable && corepack prepare pnpm@10.17.1 --activate && pnpm build
RUN ls -la .next && find .next -maxdepth 2 -type d

# ============================================
# Production Runner
# ============================================

FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder --chown=node:node /app/public ./public

RUN mkdir .next && chown node:node .next

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

EXPOSE 3000

CMD ["node", "server.js"]