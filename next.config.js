/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: false,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        hostname: 'placehold.co',
      },
      {
        hostname: '*',
      },
    ],
  },
}

module.exports = nextConfig
