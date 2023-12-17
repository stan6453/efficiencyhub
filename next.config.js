/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'asset.cloudinary.com',
            },{
                protocol: 'https',
                hostname: 'placehold.co',
            },
        ],
    }
}

module.exports = nextConfig
