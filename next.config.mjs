/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lastfm.freetls.fastly.net" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
};

export default nextConfig;
