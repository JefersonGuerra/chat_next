/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
        SOCKET_BASE_URL: process.env.SOCKET_BASE_URL,
    }
};

export default nextConfig;
