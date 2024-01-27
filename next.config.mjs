/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "3000",
        protocol: "http",
      },
      {
        hostname: "dance-culture.onrender.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
