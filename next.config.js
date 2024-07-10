const withPWA = require('next-pwa')({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/app",
    sw: "service-worker.js",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
}

module.exports = withPWA(nextConfig)
