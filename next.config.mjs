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
};

export default nextConfig;
