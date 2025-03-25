/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
          enabled: true,
        },
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn11.bigcommerce.com",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
        ],
      },
};

export default nextConfig;
