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
          {
            protocol:'https',
            hostname:'renolux-bucket.s3.ap-south-1.amazonaws.com',
            port:'',
            pathname:'/**',
            search:''
          }
        ],
      },
};

export default nextConfig;
