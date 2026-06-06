# 1. 글로벌 영역 변수 선언
ARG NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR=""
ARG NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR=""

# 1단계: 의존성 설치 및 빌드
FROM node:20-alpine AS builder
WORKDIR /app

# 글로벌 변수를 빌드 단계로 유입
ARG NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR
ARG NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR

ENV NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR=$NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR
ENV NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR=$NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR

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
COPY --from=builder /app/node_modules ./node_modules

# 실제 컨테이너 구동 시 사용될 환경 변수 가드
ENV NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR=""
ENV NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR=""

EXPOSE 3000
CMD ["npm", "run", "start"]