/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
        ]
    },
    staticPageGenerationTimeout: 120, 
    reactStrictMode: true,
}

export default nextConfig
