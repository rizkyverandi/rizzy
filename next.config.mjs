/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'libs', 'utils', 'context', 'styles', 'types'], // Specify directories to lint
    ignoreDuringBuilds: false, // Ensure builds fail if ESLint errors are found
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ri517.wordpress.com',
        port: '',
        pathname: '/**',
      },
      
    ],
  },
};

export default nextConfig;
