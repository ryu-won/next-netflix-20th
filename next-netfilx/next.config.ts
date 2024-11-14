import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/movies/:path*", // 내부 경로
        destination: `https://api.themoviedb.org/3/:path*?api_key=${process.env.NETFLIX_API_KEY}`, // 외부 API 경로
      },
    ];
  },
};

export default nextConfig;
