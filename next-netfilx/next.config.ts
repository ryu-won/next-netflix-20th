import type { NextConfig } from "next";

const API_KEY = process.env.NETFLIX_API_KEY;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/movies/:endpoint*", // 내부 경로
        destination: `https://api.themoviedb.org/3/:endpoint*?api_key=${API_KEY}`, // 외부 API 경로
      },
    ];
  },
};

export default nextConfig;
