process.env.NEXT_DISABLE_FONT_DOWNLOADS = process.env.NEXT_DISABLE_FONT_DOWNLOADS ?? "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ],
  },
};

export default nextConfig;
