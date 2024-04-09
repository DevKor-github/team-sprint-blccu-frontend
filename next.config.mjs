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
        source: '/@:username/:slug/:path*',
        destination: '/users/:username/posts/:slug/:path*',
      },
      {
        source: '/api/:path*',
        destination: `${API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
