/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        VERCEL_URL: process.env.VERCEL_URL,
    },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
