import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // static HTML export 설정
  images: {
    unoptimized: true, // GitHub Pages 호스팅을 위한 이미지 최적화 비활성화
  },
};

export default nextConfig;