const isProd = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
});

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
        source: '/@:userHandle/:articleId/:path*',
        destination: '/users/:userHandle/articles/:articleId/:path*',
      },
      {
        source: '/backend-api/:path*',
        destination: `${API_URL}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      /* s3 bucket */
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
      },
      /* cloudfront - development, production */
      {
        protocol: 'https',
        hostname: 'd60yoiev654ed.cloudfront.net',
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

module.exports = withPWA(nextConfig); // ?
