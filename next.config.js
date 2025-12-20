/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify is deprecated in Next.js 13+ (it's always enabled)
  
  // Compression
  compress: true,
  
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
    minimumCacheTTL: 60, // Cache images for 60 seconds
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

  // Note: Next.js uses SWC which automatically respects browserslist configuration
  // Modern features like Array.prototype.at, Object.fromEntries, etc. 
  // are supported in browsers from 2021+ and won't be transpiled with our browserslist config

  // Compiler options - target modern browsers to avoid unnecessary polyfills
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['react-icons', 'gsap'],
    optimizeCss: true, // Enable CSS optimization
  },
  
  // Production optimizations
  productionBrowserSourceMaps: false, // Disable source maps in production for smaller bundles

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/cache/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects and rewrites if needed
  async rewrites() {
    return [
      // Add any rewrites here if needed
    ];
  },
};

export default nextConfig;

