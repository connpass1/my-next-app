// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
 
    // async rewrites() {
    //   return [
    //     {
    //       source: "/api/log/in",
    //       destination: "http://127.0.0.1:8787",
    //     },
    //   ];
    // },
  };
  module.exports = nextConfig;