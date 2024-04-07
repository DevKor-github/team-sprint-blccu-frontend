/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/@:username',
        destination: '/users/:username',
      },
    ];
  },
};

export default nextConfig;
