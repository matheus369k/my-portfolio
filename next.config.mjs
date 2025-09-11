/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'drive.google.com',
            },
        ]
    },
    staticPageGenerationTimeout: 120,
    reactStrictMode: true,
}

export default nextConfig
