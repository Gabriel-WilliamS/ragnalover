/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'db.irowiki.org',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
