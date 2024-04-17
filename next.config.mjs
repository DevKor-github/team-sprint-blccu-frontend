/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const API_URL = process.env.API_URL;

    return [
      {
        source: '/@:username',
        destination: '/users/:username',
      },
      {
        source: '/@:username/followers',
        destination: '/users/:username/followers',
      },
      {
        source: '/@:username/following',
        destination: '/users/:username/following',
      },
      {
        source: '/@:username/select-category',
        destination: '/users/:username/select-category',
      },
      {
        source: '/@:username/:slug/:path*',
        destination: '/users/:username/posts/:slug/:path*',
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
};

export default nextConfig;
