import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/movies/:id", // 내부 경로
  //       destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.NETFLIX_API_KEY}`, // 외부 API 경로
  //     },
  //   ];
  // },
};

export default nextConfig;
