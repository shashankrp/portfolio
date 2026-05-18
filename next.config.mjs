/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {
  /* config options here */
=======

const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // Enable compression
    compress: true,
>>>>>>> 0fc4f2748cf4d18fdb8beee580ce2d932d263cdf
};

export default nextConfig;
