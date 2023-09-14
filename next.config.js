/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER_URL: process.env.SERVER_URL,
    },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
