import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
    images: {
      unoptimized: true, // 도커 환경에서 이미지 경로 오류 및 최적화 이슈 방지
    },
};

export default nextConfig;
