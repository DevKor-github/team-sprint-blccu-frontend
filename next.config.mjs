/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/@:username',
        destination: '/users/:username',
      },
      {
        source: '/@:username/:slug/:path*',
        destination: '/users/:username/posts/:slug/:path*',
      },
    ];
  },
};

export default nextConfig;
