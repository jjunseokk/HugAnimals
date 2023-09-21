/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.idus.com",
            },
            {
                protocol: "http",
                hostname: "www.animal.go.kr"
            }
        ],
    },
}

module.exports = nextConfig
