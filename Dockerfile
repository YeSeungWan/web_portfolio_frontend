# 1단계: 의존성 설치 및 빌드
FROM node:20-alpine AS builder
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package-lock.json package.json ./
RUN npm ci

# 전체 소스 복사 및 Next.js 프로덕션 빌드
COPY . .
RUN npm run build


# 2단계: 실제 구동 환경 (용량 최적화)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# 프로덕션 실행에 필요한 파일만 복사
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/next.config.ts ./ 
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# .env 파일을 컨테이너 내부의 /app/.env로 복사할 준비
COPY --from=builder /app/package.json ./package.json

# 실행용 스크립트 생성
RUN echo '#!/bin/sh' > start.sh && \
    echo 'set -a' >> start.sh && \
    echo '[ -f .env.production ] && . .env.production' >> start.sh && \
    echo 'set +a' >> start.sh && \
    echo 'npm run start' >> start.sh && \
    chmod +x start.sh

CMD ["./start.sh"]
EXPOSE 3000
CMD ["npm", "run", "start"]