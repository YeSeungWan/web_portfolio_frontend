# 1단계: 의존성 설치 및 빌드
FROM node:18-alpine AS builder
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package-lock.json package.json ./
RUN npm ci

# 전체 소스 복사 및 Next.js 프로덕션 빌드
COPY . .
RUN npm run build

# 2단계: 실제 구동 환경 (용량 최적화)
FROM node:18-alpine AS runner
WORKDIR /app

# 프로덕션 실행에 필요한 파일만 복사
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOST 3000
CMD ["npm", "run", "start"]