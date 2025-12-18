/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify is deprecated in Next.js 13+ (it's always enabled)
  
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nirosha.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
    unoptimized: false, // Enable Next.js image optimization
  },

  // Output configuration
  output: 'standalone', // For better deployment

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Turbopack configuration (Next.js 16+ uses Turbopack by default)
  turbopack: {
    // Turbopack handles most things automatically
  },
  
  // Webpack configuration (fallback if not using Turbopack)
  webpack: (config, { isServer }) => {
    // Handle GSAP ScrollSmoother (premium plugin)
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['react-icons', 'gsap'],
  },

  // Redirects and rewrites if needed
  async rewrites() {
    return [
      // Add any rewrites here if needed
    ];
  },
};

export default nextConfig;
