/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      // ["localhost", "kip.sv","des.kip.sv"]
      {
        protocol: 'http',
        hostname: '*',
      },
    ],
  },
};

module.exports = nextConfig;
