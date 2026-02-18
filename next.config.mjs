/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    // Handle figma:asset imports by converting them to public URLs
    config.module.rules.push({
      test: /figma:asset/,
      type: 'asset/resource',
      generator: {
        filename: 'static/images/[hash][ext]'
      }
    });
    return config;
  },
};

export default nextConfig;
