# 1단계: 빌드 환경
FROM node:20-alpine AS builder
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2단계: 실행 환경
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# 런타임에 .env를 적용하는 스크립트를 빌드 시점에 자동 생성
RUN echo '#!/bin/sh' > /app/entrypoint.sh && \
    echo 'set -a' >> /app/entrypoint.sh && \
    echo '[ -f /app/.env.production ] && . /app/.env.production' >> /app/entrypoint.sh && \
    echo 'echo "DEBUG: API_ADDR is $NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR"' >> /app/entrypoint.sh && \
    echo 'set +a' >> /app/entrypoint.sh && \
    echo 'exec npm run start' >> /app/entrypoint.sh && \
    chmod +x /app/entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/app/entrypoint.sh"]