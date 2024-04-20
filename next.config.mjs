/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const API_URL = process.env.API_URL;

    return [
      {
        source: '/@:userHandle',
        destination: '/users/:userHandle',
      },
      {
        source: '/@:userHandle/followers',
        destination: '/users/:userHandle/followers',
      },
      {
        source: '/@:userHandle/following',
        destination: '/users/:userHandle/following',
      },
      {
        source: '/@:userHandle/select-category',
        destination: '/users/:userHandle/select-category',
      },
      {
        source: '/@:userHandle/:slug/:path*',
        destination: '/users/:userHandle/posts/:slug/:path*',
      },
      {
        source: '/proxy-api/:path*',
        destination: `${API_URL}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      /* for development only */
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      /* for development only - images with fixed width & height */
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
