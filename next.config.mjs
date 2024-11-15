/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn.easyfrontend.com', 'img.youtube.com'],
    },
    output: 'standalone',
};

export default nextConfig;
