/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'renoluxapi.tsasoft.com',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
